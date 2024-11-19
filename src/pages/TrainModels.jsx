import React from 'react';
import { LockOutlined } from '@ant-design/icons';
import { Typography, Row, Col } from 'antd';
import NavBar from '../components/NavBar';

const { Title } = Typography;

const TrainModels = () => {
    return (
        <>
            <NavBar />
            <Row justify="center" align="middle" style={{ height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
                <Col style={{ textAlign: 'center' }}>
                    <LockOutlined style={{ fontSize: '64px', color: '#ff4d4f' }} />
                    <Title level={2}>This feature is not available yet</Title>
                </Col>
            </Row>
        </>
    );
};

export default TrainModels;