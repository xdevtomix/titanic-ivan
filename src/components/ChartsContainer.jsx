import { useEffect } from "react";
import styled from "styled-components";
import { useAtom } from 'jotai';

import { selectedColumn as sC } from "../stores/selectedColumn";

export default function ChartsContainer() {
    const [selectedColumn, /* setSelectedColumn */] = useAtom(sC);

    useEffect(() => {
        if (selectedColumn) {
            let categories = [];
            let data = [];

            selectedColumn.topTenValuesAndCount.map(({ value, count }) => {
                categories = [...categories, value];
                data = [...data, count];
            });

            const options = {
                chart: {
                    type: 'column',
                },
                title: {
                    text: selectedColumn.attributeName
                },
                xAxis: {
                    categories,
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Number of people'
                    }
                },
                series: [{
                    name: 'data',
                    data
                }],
            };

            if (selectedColumn.attributeType === 'Numerical') {
                options.plotOptions = {
                    column: {
                        pointPadding: 0,
                        borderWidth: 0,
                        groupPadding: 0,
                        shadow: false
                    }
                };
            }

            const chart = window.Highcharts.chart('container', options);
        }
    }, [selectedColumn]);

    return (
        <Container data-component="charts-container" selectedColumn={selectedColumn}>
            <h2>Chart data</h2>
            {!selectedColumn && <span>Click on a table column header to see the data chart</span>}
            <div id="container"></div>
        </Container>
    );
}

const Container = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;

    >div {
        width: 100%;
        height: ${({ selectedColumn }) => selectedColumn ? '400px' : '0'};
        transition: height 1000ms;
    }
`;
