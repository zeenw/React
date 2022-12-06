import { Button, Col, Form, Row, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";
import {React, useState, useEffect, Component } from "react";
import Axios from "axios";
import config from "../../config/Config";

function Create() {
  const PATH = config().path
  const LOCAl = config().local
  const [department, setDepartment] = useState("")
  const [doctor, setDoctor] = useState("")
  const [date_on, setDate] = useState("")
  const [errMsg, setErrMsg] = useState("", [])

  const btn_create = () => {

    if(isVerified()){
      Axios.post(PATH + "/appointment/Create", {
        Department_id: department,
        Doctor_id: doctor,
        Patient_id: 1,
        Date_on: date_on,
        Status: 0,
        doctor_time_id: 0
      }).then((rs) => {
        const obj = rs.data
        const str = JSON.stringify(obj)
        const o = JSON.parse(str)
        
      });
      alert("Appointment created.")
      window.location.replace(LOCAl + "/appointment")
    }
  };
  
  function isVerified() {
      var rs = true
      setErrMsg([])
      if(department==""){
        setErrMsg(errMsg => [...errMsg, "Please choose a department."])
        rs = false
      }
        
      if(doctor==""){
        setErrMsg(errMsg => [...errMsg, "Please choose a doctor."])
        rs = false
      }
        
      if(date_on==""){
        setErrMsg(errMsg => [...errMsg, "Please choose a date."])
        rs = false
      }
        
      return rs
  }
      
  return (
    <div className ="container">
      <div className ="row">
          <div className ="col-sm-12">
          <br /><br /><br /><br /><br /><br /><br /><br />
            <p className="display-6">Appoinment</p>
              <Link to="/">Home</Link> / &nbsp;
              <Link to="/appointment">Apointments</Link> / &nbsp;
              <Link to="#">Create New</Link><br /><br />
            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control placeholder="wu@gmail.com" disabled />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Department:</Form.Label>
              <Form.Select onChange={(e)=>{
                                      setDepartment(e.target.value)
                                    }}>
                <option value="">Select...</option>
                <option value="2">2 Medical Department</option>
                <option value="3">3 Nursing Department</option>
                <option value="4">4 Paramedical Departments</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Doctor:</Form.Label>
              <Form.Select 
                onChange={(e)=>{
                  setDoctor(e.target.value)
                }}>
                <option value="">Select...</option>
                <option value="2">2 Doctor Alex</option>
                <option value="3">3 Doctor Bob</option>
                <option value="4">4 Doctor Celina</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date:</Form.Label>
              <Form.Control type="date"
                onChange={(e)=>{
                  setDate(e.target.value)
                }}/>
            </Form.Group>

            { (errMsg) ? errMsg.map( i => (    
              <Alert> <li>{ i }</li> </Alert> 
            )) : null }
            </div>
            <div className ="col-sm-2">
              <Form.Group className="mb-3">
                <Button variant="primary" type="button" onClick={btn_create}>
                  Create
                </Button>
              </Form.Group>
              <br /><br />
            </div>
        </div>
    </div>

    
  );
}
export default Create;





