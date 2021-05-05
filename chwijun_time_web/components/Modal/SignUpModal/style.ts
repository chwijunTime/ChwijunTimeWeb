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

    z-index: 20;
`
export const SignUp = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 500px;
    height: 400px;

    border-radius: 30px;

    background-color: #ffffff;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: auto;
`
export const Text = styled.div`
    font-size: 20px;
    margin-top: 20px;

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
export const SignUpBtn = styled.button`
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
    margin-top: 20px;
    color: white;
    font-size: 17px;
`
export const ClassNumber = styled.input`
    width: 30%;
    height: 40px;

    font-size: 15px;
    margin-top: 15px;

    border: 1px solid;
    border-radius: 5px;
    outline: none;

    border-color: #ded9d9;
    background-color: #EFEFEF;
`
export const Space = styled.div`
    margin-bottom: 20px;
`