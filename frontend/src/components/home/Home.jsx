import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import Main from "../template/Main";
import { Container, Row, Col } from 'reactstrap';
import Axios from "axios";
import { Button } from 'reactstrap';

export default function ListEvents() {
    const [listEvents, setListEvents] = useState([]);
    const [listUser, setUser] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/getView").then((response) => {
            setListEvents(response.data);
            console.log(response.data);
        });
    }, []);

    const getUser = (user) => {
        Axios.get(`http://localhost:3001/getUser/${user}`).then((response) => {
            setUser(response.data)
        });
    };

    return (
        <Main title="Larry Page">
            <div>
                <div>
                    <h1 className="mb-0">Dashboard para gerenciamento de produtividade</h1>
                </div>
                <hr />
                <Row classname="row">
                    <div className="col-sm-6">
                        {listUser.map((val) => (
                            <Chart
                                width={'100%'}
                                height={'100%'}
                                chartType="BarChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Usuario', 'Ativo', 'Inativo'],
                                    [val.user, parseInt(val.tempoAtivo / 60), parseInt(val.tempoInativo / 60)],
                                ]}
                                options={{
                                    title: 'Tempo de Atividade do Usuário',
                                    chartArea: { width: '60%' },
                                    isStacked: true,
                                    hAxis: {
                                        title: 'Tempo total em Minutos = ' + parseInt(val.tempoAtivo / 60 + val.tempoInativo / 60),
                                        minValue: 0,
                                    },
                                    vAxis: {
                                        title: 'Usuario',
                                    },
                                }}
                                rootProps={{ 'data-testid': '3' }}
                            />
                        ))}
                    </div>
                    <div class="vl col-sm-1'"></div>

                    <div className='eu col-sm-5'>
                        <div className='tu'><h1>Funcionários</h1></div>
                        <Container>
                            <Row>
                                <Col><th>USUÁRIO</th></Col>

                            </Row>
                            {listEvents.map((val) => (
                                <Row>
                                    <Col><button
                                        onClick={() => { getUser(val.user); }}
                                        className='bn15'><td>{val.user}</td></button></Col>
                                </Row>
                            ))}
                        </Container>
                    </div>
                </Row>
            </div>

        </Main>

    );
}
