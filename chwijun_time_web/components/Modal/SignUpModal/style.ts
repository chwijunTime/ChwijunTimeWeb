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
    height: 580px;

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
export const OverlapPlace = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 20px;
    margin-top: 5px;
`
export const OverlapBtn = styled.button`
    width: 80px;
    height: 23px;

    border: none;
    border-radius: 5px;
    border-color: #8A8787;
    outline: none;

    color: white;
    font-size: 12px;
    background-color: #1C70D3;

    &:hover {
        cursor: pointer;
    }
`
export const OverlapText = styled.div`
    width: auto;
    height: 20px;

    color: ${props => props.exist ? '#ff3636' : ''};
`
export const SInputText = styled.input`
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
export const TagPlace = styled.div`
    width: 100%;
    height: 40px;
`
export const Tag = styled.button`
    
`