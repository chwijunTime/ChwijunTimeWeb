import styled from 'styled-components';

export const StorageList = styled.div`
    display: flex;
    width: 100%;
    height: 50px;

    border-bottom: 1px solid #BDBDBD;
`
export const Number = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8%;
    height: auto;
`
export const Name = styled(Number)`
    justify-content: flex-start;
    width: 30%;
    color: #5B70B8;

    &:hover {
        cursor: pointer;
    }
`
export const Address = styled(Number)`
    width: 40%;
`
export const Delete = styled(Number)`
    width: 22%;
    justify-content: flex-end;
    font-size: 24px;
    padding-right: 10px;
    color: #878787;
`