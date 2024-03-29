import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Form, FormGroup, Label, Col, Input, Button } from 'reactstrap'

let formData = {
  'name':'',
  'email':'',
  'address':''
}

export default function ActionStudents() {
  const {id, isView} = useParams()

  const [formValues, setFormValues] = useState(formData);
  const navigate = useNavigate()

  const handleChange = (e)=>{
    setFormValues({...formValues, [e.target.name]: e.target.value});
    console.log({...formValues, [e.target.name]: e.target.value});
  };

  useEffect(()=>{
    if(id){
      fetch("https://65fda9d1b2a18489b3853c1e.mockapi.io/teacher/"+id)
    .then((data) => data.json())
    .then((response) => setFormValues(response));
    }
  },[id])

  const handleSubmit = () => {
    if(id){
      fetch("https://65fda9d1b2a18489b3853c1e.mockapi.io/teacher/"+id, {
      method:'PUT',
      body:JSON.stringify(formValues),
      headers : {
      'Content-Type' : 'application/json'
      }
    })
    .then((data)=>data.json())
    .then((response) => {
      setFormValues(formData);
      navigate(-1);
    });
    }else{
    fetch("https://65fda9d1b2a18489b3853c1e.mockapi.io/teacher", {
      method:'POST',
      body:JSON.stringify(formValues),
      headers : {
      'Content-Type' : 'application/json'
      }
    })
    .then((data)=>data.json())
    .then((response) => {
      setFormValues(formData);
      navigate(-1);
    });
  }
  };


  return (
    <Container>
      <h1>{id&&isView ? 'View' : id  ? 'Edit' : 'Create'} Teacher Details</h1>
      <Form>
      <FormGroup row>
        <Label for="name" sm={2} >
      Name
      </Label>
      <Col sm={10}>
      <Input disabled={isView === 'true' ? true : false }
        onChange={handleChange} value={formValues.name}
        id="name"
        name="name"
        placeholder="Enter Name"
        type="text"
      />
      </Col>
    </FormGroup>
    <FormGroup row>
        <Label for="email" sm={2} >
      Email
      </Label>
      <Col sm={10}>
      <Input disabled={isView === 'true' ? true : false }
        onChange={handleChange} value={formValues.email}
        id="email"
        name="email"
        placeholder="Enter email"
        type="email"
      />
      </Col>
    </FormGroup>
    <FormGroup row>
        <Label for="address" sm={2} >
      Address
      </Label>
      <Col sm={10}>
      <Input disabled={isView === 'true' ? true : false }
        onChange={handleChange} value={formValues.address}
        id="address"
        name="address"
        placeholder="Enter Address"
        type="text"
      />
      </Col>
    </FormGroup>
    </Form>
    {isView === 'true' ? 
    <Button onClick={handleSubmit} color='success' className='w-100'>Go Back</Button>
    :
    <Button onClick={handleSubmit} color='success' className='w-100'>Submit</Button>
    }
  </Container>
  );
}
