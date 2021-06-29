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
export const ClassNumber = styled(Number)`
    width: 10%;
`
export const Name = styled(Number)`
    justify-content: flex-start;
    width: 25%;
    color: #5B70B8;
`
export const Field = styled(Number)`
    width: 15%;
`
export const Status = styled(Number)`
    width: 10%;
`
export const BtnPlace = styled(Number)`
    width: 32%;
    justify-content: flex-end;
`
export const Btn = styled.button`
    width: 70px;
    height: 33px;

    border: none;
    border-radius: 8px;
    color: white;
    margin: 0px 10px;
    background-color: ${props => props.status ? '#5B70B8' : '#a1a1a1'};
`