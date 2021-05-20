import styled from 'styled-components';

export const Container = styled.div`
    display: flex;  
    width: 95%;
    height: 40px;

    margin-top: 10px;
    border-bottom: 1px solid #BDBDBD;

    &:hover {
        cursor: pointer;
    }
`
export const Number = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5%;
    height: auto;

    color: #8E8E8E;
`
export const Name = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
    height: auto;

    margin-left: 20px;
    color: #454BC8;
`
export const Field = styled(Name)`
    width: 25%;
    color: #8E8E8E;
`
export const Deadline = styled(Name)`
    width: 30%;
    color: #8E8E8E;
`