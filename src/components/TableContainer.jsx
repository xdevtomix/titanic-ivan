import { useState, useEffect } from "react";
import styled from "styled-components";
import { Table, message } from 'antd';
import { useAtom } from 'jotai';
import { isNetworkOkAtom } from "../stores/isNetworkOk";
import { selectedColumn as sC } from "../stores/selectedColumn";

const { Column } = Table;

export default function TableContainer() {
    const [isNetworkOk, /* setIsNetworkOk */] = useAtom(isNetworkOkAtom);
    const [selectedColumn, setSelectedColumn] = useAtom(sC);
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

        try {
            const url = isNetworkOk ? `https://raw.githubusercontent.com/xdevtomix/titanic-ivan/main/server/label_${fileMap[key]}.json` : 'xy';
            const response = await fetch(url);
            const jsonData = await response.json();

            setSelectedColumn(jsonData);
            
        } catch (error) {
            message.error('Network error! Please try again.');
        }
    };

    return (
        <Container data-component="home">
            <Table dataSource={tableDataSource}>
                {tableColumns.map(({title, dataIndex, key}) => (
                    <Column
                        title={title}
                        dataIndex={dataIndex}
                        key={key}
                        ellipsis={true}
                        onHeaderCell={(column) => {
                            return {
                                onClick:() => fetchHeaderData(column)
                            }
                        }}
                    />
                ))}
            </Table>
        </Container>
    );
}

const Container = styled.div`

`;