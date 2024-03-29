import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Table, Button } from "reactstrap";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { IoEye } from "react-icons/io5";

export default function EditTeachers() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getTeacher = () => {
    fetch("https://65fda9d1b2a18489b3853c1e.mockapi.io/teacher")
      .then((data) => data.json())
      .then((response) => setData(response));
  };
  useEffect(() => {
    getTeacher();
  }, []);

  const handleDelete = (id) => {
    fetch("https://65fda9d1b2a18489b3853c1e.mockapi.io/teacher/" + id, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((response) => getTeacher());
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>Show All Teachers <br /><hr />
    <Container>
      <Button color='primary' style={{ margin: '10px' }} onClick={()=>navigate('/teacherAction')}>Create Teacher</Button>
    <Table striped>
      <thead>
        <tr>
          <th>Id no</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, index)=>(
          <tr>
            <td>{index+1}</td>
            <td>{value.name}</td>
            <td>{value.email}</td>
            <td>{value.address}</td>
            <td style={{display:'flex',flexDirection: 'row', alignItems: 'center', gap:"5px"}}>
              <Button color='info' onClick={()=>navigate('/teacherAction/'+value.id+'/true')}><IoEye /></Button>
              <Button color='warning' onClick={()=>navigate('/teacherAction/'+value.id)}><MdEdit /></Button>
              <Button color='danger' onClick={()=>handleDelete(value.id)}><MdDeleteForever /></Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </Container>
    </div>
  )
}