import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';

function UserManagement(props) {

    useEffect(e => {
        axios('http://localhost:3003/auth', { method: 'POST'})
            .then(e => {
                console.log('Authentication succeed.');
            }).then(r => {
                setIsAuth(true);
            });
    })

    return (
        <Container style={{}}>
            <Row>
                <Col>
                    {'Hi ' + 'ration'}
                </Col>
            </Row>
        </Container>
    );
}

export default UserManagement;
