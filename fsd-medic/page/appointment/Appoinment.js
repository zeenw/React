import { Button, Col, Form, Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Axios from "axios";
import config from "../../config/Config";

function Appoinment() {

    const PATH = config().path;
    const [list, setList] = useState([]);
    
    useEffect(() => {
        Axios.get(PATH + "/appointment").then((response) => {
            setList(response.data);
        });
    }, []);

    const btn_del = (id) => {
        if (window.confirm("Do you want to delete it?")) {
            Axios.get(PATH + "/appointment/delete?id=" + id).then((rs) => {   });
            window.location.reload();
        }
    };

    return (

        <div className ="container">
            <div className ="row">
                <div className ="col-sm-12">
                <br /><br /><br /><br /><br /><br /><br /><br />
                <p className="display-6">Appoinment</p>
                <Link to="/appointment/create/">Make a pointment</Link><br /><br />
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Department ID</th>
                            <th>Doctor ID</th>
                            <th>Patient ID</th>
                            <th>Date</th>
                            <th> </th>
                        </tr>
                        </thead>
                        <tbody>
                        {list.map((item, key) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.department_id}</td>
                                <td>{item.doctor_id}</td>
                                <td>{item.patient_id}</td>
                                <td>{item.date_on}</td>
                                <td>
                                    <Link to={`/appointment/detail/${item.id}`}> Edit </Link>   
                                    <Link type="button" onClick={()=>btn_del(item.id)}> Delete </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    <br /><br />
                </div>
            </div>
        </div>

    );
}
export default Appoinment;