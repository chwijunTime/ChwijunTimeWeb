import styled from 'styled-components';

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: 10;
`
export const SignIn = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
   
    width: 500px;
    height: 320px;

    border-radius: 30px;

    background-color: #ffffff;
    visibility: visible;
`
export const Content = styled.div`
    width: 85%;
    height: auto;
`
export const Text = styled.div`
    font-size: 20px;
    margin-top: 40px;

    color: #8D8D8D;
`
export const InputText = styled.input`
    width: 100%;
    height: 40px;

    font-size: 15px;
    margin-top: 15px;

    border: 1px solid;
    border-radius: 5px;
    outline: none;

    border-color: #ded9d9;
    background-color: #EFEFEF;
`
export const SaveIdPlace = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 15px;
        
    margin-top: 10px;
`
export const IsCheckIdSave = styled.input`
    width: 17px;
    height: 17px;
`
export const LoginButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 40px;

    border: 1px solid;
    border-radius: 5px;
    border-color: #8A8787;
    outline: none;

    background-color: #1C70D3;
    margin-top: 15px;
    color: white;
    font-size: 17px;

    &:hover {
        cursor: pointer;
    }
`
export const TextPlace = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 15px;

    font-size: 14px;
    margin-top: 7px;
`
export const Psword = styled.div`
    &:hover {
        cursor: pointer;
    }
`
export const Register = styled.div`
    margin-left: 15px;
    color: #555bd9;

    &:hover {
        cursor: pointer;
    }
`

