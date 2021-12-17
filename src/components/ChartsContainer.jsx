import { useEffect } from "react";
import styled from "styled-components";
import * as Highcharts from 'highcharts';

export default function ChartsContainer() {
    useEffect(() => {
        const chart = Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Fruit Consumption'
            },
            
            series: [{
                name: 'Jane',
                data: [1, 0, 4]
            }, {
                name: 'John',
                data: [5, 7, 3]
            }]
        });
        return () => { };
    }, []);
    return (
        <Container data-component="charts-container">
            <div id="container" style={{ width: '100%', height: '400px' }}></div>
        </Container>
    );
}

const Container = styled.div`

`;
