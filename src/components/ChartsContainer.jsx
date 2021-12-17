import { useEffect } from "react";
import styled from "styled-components";
import { useAtom } from 'jotai';

import { selectedColumn as sC } from "../stores/selectedColumn";

export default function ChartsContainer() {
    const [selectedColumn, /* setSelectedColumn */] = useAtom(sC);

    useEffect(() => {
        if (selectedColumn === null) {

        } else if (selectedColumn) {
            console.log(selectedColumn);
            const chart = window.Highcharts.chart('container', {
                chart: {
                    type: selectedColumn.attributeType === 'Categorical' ? 'column' : 'histogram',
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
        }

        return () => { };
    }, [selectedColumn]);

    return (
        <Container data-component="charts-container">
            <div id="container" style={{ width: '100%', height: '400px' }}></div>
        </Container>
    );
}

const Container = styled.div`

`;
