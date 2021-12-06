import React, { useState } from 'react';
import { Chart } from "react-google-charts";
import Main from "../template/Main";
import { Container, Row, Col } from 'reactstrap';

export default props =>
        <Main title="Larry Page">
            <div>
                <p className="mb-0">Dashboard para gerenciamento de produtividade</p>
            </div>
            <hr />
        <Row classname ="row">
            
            <div className="col-sm-6">
                <Chart
                    width={'500px'}
                    height={'400px'}
                    chartType="PieChart"
                    loader={<div>Carregando gráfico</div>}
                    data={[
                        ['Gráfico', 'Horas'],
                        ['Horas Trabalhadas', 60.0],
                        ['Horas paradas', 40.0],
                    ]}
                    options={{
                    backgroundColor: '#FFF',
                    legend: 'none',
                    pieSliceText: 'label',
                    //title: 'Horas',
                    pieStartAngle: 100,
                    slices: {
                        0: { color: '#006400'},
                        1: { color: '#B22222'}
                    },
                }}
            rootProps={{ 'data-testid': '4' }}/>
        </div>

        <div class="vl col-sm-1'"></div>

        <div className= 'eu col-sm-5'> 
            <div className= 'tu'><h1>Funcionários</h1></div>

            <p>     
                Jefferson
                <br />
                Carlos
            </p>
        </div>

        </Row>
        </Main>