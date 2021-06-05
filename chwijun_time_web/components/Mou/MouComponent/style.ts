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

    margin-left: 20px;
    color: #454BC8;
`
export const TagPlace = styled(Name)`
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
export const Address = styled(Name)`
    width: 30%;
    color: black;
`