import styled from 'styled-components';

export const Container = styled.div`
    display: flex;  
    width: 100%;
    height: 50px;

    border-bottom: 1px solid #BDBDBD;

    &:hover {
        cursor: pointer;
    }
`
export const Number = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8%;
    height: auto;
`
export const Name = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
    height: auto;

    color: #454BC8;
`
export const Field = styled(Number)`
    width: 15%;
`
export const TagPlace = styled(Number)`
    width: 25%;
    color: black;
`
export const Tag = styled.div`
    &::after {
        content: ", ";
        white-space: pre;
    }
    &:last-child::after {
        content: " ";
        white-space: pre;
    }
`
export const Location = styled(Number)`
    width: 15%;
    color: black;
`
export const Delete = styled(Number)`
    width: 7%;
    justify-content: flex-end;
    font-size: 24px;
    padding-right: 10px;
    color: #878787;
`