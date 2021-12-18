import styled from "styled-components";
import { GithubFilled } from '@ant-design/icons';

import NetworkPanel from './NetworkPanel';

export default function Header() {
    return (
        <Container data-component="header" data-testid="header">
            <h2>Titanic Data Analyzis</h2>
            <div>
                <NetworkPanel />
                <GithubLink href="https://github.com/xdevtomix/titanic-ivan" target="_blank" rel="noopener" title="https://github.com/xdevtomix/titanic-ivan">
                    <GithubFilled />
                </GithubLink>
            </div>

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

    >div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`;

const GithubLink = styled.a`
    font-size: 1.5rem;
    color: var(--light-night);
`;