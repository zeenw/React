import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row, Table } from 'react-bootstrap';
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import config from "../../config/Config";

function Detail() {
    const { id } = useParams();
    const PATH = config().path;
    const LOCAl = config().local
    const [appointment, setAppointment] = useState([]);
    const [date, setDate] = useState("")
    
    useEffect(() => {
        Axios.get(PATH + "/appointment/Details?id="+id).then((response) => {
            setAppointment(response.data.obj);
        });
    }, []);

    const btn_edit = () => {
        Axios.post(PATH + "/appointment/Edit", {
          id: appointment.id,
          Department_id: appointment.department_id,
          Doctor_id: appointment.doctor_id,
          Patient_id: appointment.patient_id,
          date_on: date,
          Status: 0
        }).then((rs) => {
          const obj = rs.data
          const str = JSON.stringify(obj)
          const o = JSON.parse(str)
          
        });
        alert("Information updated.")
        window.location.replace(LOCAl + "/appointment")
    };

    return (       
        <div className ="container">
        <div className ="row">
            <div className ="col-sm-6">
            <br /><br /><br /><br /><br /><br /><br /><br />
                <p className="display-6">Appoinment</p>
                <Link to="/">Home</Link> | 
                <Link to="/appointment">Apointments</Link> | 
                <Link to="#">Details</Link>
                <br /><br />
                <Table striped bordered hover>
                <tbody>
                <tr>
                <td>ID:</td>
                <td>{appointment.patient_id}</td>
                </tr>

                <tr>
                <td>Department:</td>
                <td>{appointment.department_id}</td>
                </tr>

                <tr>
                <td>Doctor:</td>
                <td>{appointment.doctor_id}</td>
                </tr>

                <tr>
                    <td>Date:</td>
                    <td>
                        <Form.Control type="date" defaultValue={appointment.date_on}
                        onChange={(e)=>{
                            setDate(e.target.value)
                        }}/>
                    </td>
                </tr>
                </tbody>
              </Table>

              <div className ="col-sm-3">
                <Button variant="primary" type="button" onClick={btn_edit}>
                  Submit
                </Button>
              </div>
              <br /><br />
              </div>
          </div>
      </div>

      
    );
}
export default Detail;