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
    width: 10%;
    font-size: 24px;
    padding-right: 10px;
    color: #878787;
`
export const Modify = styled(Number)`
    width: 42%;
    justify-content: flex-end;
`
export const ModifyBtn = styled.button`
    width: 80px;
    height: 35px;

    border: 1px solid #5B70B8;
    border-radius: 3px;
    color: #5B70B8;

    background-color: white;
`