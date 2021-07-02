import styled from 'styled-components';

export const Container = styled.div`
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
export const Link = styled.a`
    display: flex;
    align-items: center;
    width: 40%;

    &:hover {
        cursor: pointer;
    }
`
export const Delete = styled(Number)`
width: 52%;
justify-content: flex-end;
font-size: 24px;
padding-right: 10px;
color: #878787;
`