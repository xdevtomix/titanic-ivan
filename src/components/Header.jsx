import styled from "styled-components";

import NetworkPanel from './NetworkPanel';

export default function Header() {
    return (
        <Container data-component="header">
            <h2>Titanic Data Analyzis</h2>
            <NetworkPanel />
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    box-shadow: 0 0 0.125rem 0.125rem var(--light-day);

    >h2 {
        font-size: 1.5rem;
        letter-spacing: 0.125rem;
        margin: 0;
    }
`;