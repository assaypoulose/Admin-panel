import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Table, Button } from "reactstrap";

export default function StudentsList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getStudent = () => {
    fetch("https://65fda9d1b2a18489b3853c1e.mockapi.io/student")
      .then((data) => data.json())
      .then((response) => setData(response));
  };
  useEffect(() => {
    getStudent();
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <b>
        <u>Student List</u>
      </b>{" "}
      <br />
      <hr />
      <Container>
        <Button
          style={{ marginBottom: "30px" }}
          color="primary"
          onClick={() => navigate("/")}
        >
          Go Back
        </Button>
        <Table striped>
          <thead>
            <tr>
              <th>Id no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.address}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
