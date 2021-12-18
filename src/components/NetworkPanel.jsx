import styled from "styled-components";
import { Switch } from 'antd';
import { useAtom } from 'jotai';

import { isNetworkOkAtom } from "../stores/isNetworkOk";

export default function NetworkPanel() {
    const [isNetworkOk, setIsNetworkOk] = useAtom(isNetworkOkAtom);

    return (
        <Container data-component="network-panel">
            <span data-testid="network-title">Simulate network error:</span>
            <Switch
                checked={!isNetworkOk}
                onClick={() => setIsNetworkOk(!isNetworkOk)}
                data-testid="network-switch"
            />
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    gap: 1rem;
`;