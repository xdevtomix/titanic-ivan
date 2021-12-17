import { useState, useEffect } from "react";
import styled from "styled-components";
import { Table } from 'antd';

export default function Home() {
    const [tableColumns, setTableColumns] = useState([]);
    const [tableDataSource, setTableDataSource] = useState([]);

    let rowId = 0;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://raw.githubusercontent.com/xdevtomix/titanic-ivan/main/server/titanic.json');
            const jsonData = await response.json();

            console.log(jsonData);

            setTableColumns(jsonData.result.attributes.map((column) => (
                {
                    title: column.name,
                    dataIndex: column.name,
                    key: column.name,
                    ellipsis: true,
                    onHeaderCell: (column) => {
                        return {
                            onClick: () => fetchHeaderData(column)
                        };
                    }
                }
            )));

            setTableDataSource(jsonData.result.rows.map((row) => (
                {
                    ...row,
                    key: ++rowId,
                }
            )));
        };

        fetchData();

        return () => { };
    }, []);

    const fetchHeaderData = async (column) => {
        const key = column.key;
        const fileMap = {
            'Age': 'age',
            'Passenger Class': 'passenger_class',
            'Sex': 'sex',
            'No of Siblings or Spouses on Board': 'no_of_siblings',
            'No of Parents or Children on Board': 'no_of_parents',
            'Passenger Fare': 'passenger_fare',
            'Survived': 'survived',
        };

        const response = await fetch(`https://raw.githubusercontent.com/xdevtomix/titanic-ivan/main/server/label_${fileMap[key]}.json`);
        const jsonData = await response.json();

        console.log(jsonData);
    };

    return (
        <Container data-component="home">
            <Table
                columns={tableColumns}
                dataSource={tableDataSource}
            />
        </Container>
    );
}

const Container = styled.div`

`;