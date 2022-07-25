import React, { useState } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import './Sidebar.css';
let list = ['General', 'User', 'Test', 'Fiabilité']


function Sidebar(props) {

    return (
        <div style={{ position: "absolute", top: '0', left: '0', width: '15vw', height: '100vh', background: '#1e1f25', color: 'white'}}>
            <Row style={{padding: '10%', textAlign: 'center', marginBottom: '25%'}}>
                <Col>
                    Gestion
                </Col>
            </Row>
            {list.map(e => {
                return (
                    <Row className="bar">
                        <Col>
                            {e}
                        </Col>
                    </Row>
                )
            })}
        </div>
    );
}

export default Sidebar;
