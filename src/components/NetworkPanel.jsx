import styled from "styled-components";
import { Switch } from 'antd';
import { useAtom } from 'jotai';

import { isNetworkOkAtom } from "../stores/isNetworkOk";

export default function NetworkPanel() {
    const [isNetworkOk, setIsNetworkOk] = useAtom(isNetworkOkAtom);

    return (
        <Container data-component="network-panel">
            Simulate network error: <Switch checked={!isNetworkOk} onClick={() => setIsNetworkOk(!isNetworkOk)} />
            {isNetworkOk && 'network ok ' + isNetworkOk.toString()}
            {!isNetworkOk && 'network not ok ' + isNetworkOk.toString()}
        </Container>
    );
}
const Container = styled.div``;