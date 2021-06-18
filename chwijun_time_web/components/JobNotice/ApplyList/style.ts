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
    width: 20%;
`
export const Name = styled(Number)`
    width: 20%;
`
export const Date = styled(Number)`
    width: 40%;
`
