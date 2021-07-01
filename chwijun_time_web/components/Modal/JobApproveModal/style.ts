import styled from 'styled-components';

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
   
    z-index: 20;
    background-color: rgba(0,0,0,.4);
`
export const ApplyModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: auto;

    border-radius: 15px;

    background-color: #ffffff;
`
export const Title = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    height: 50px;

    font-size: 20px;
`
export const LinkPlace = styled.a`
    width: 90%;

    font-weight: bold;
    margin: 10px 0px;
`
export const BtnPlace = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;

    margin: 20px 0px;
`
export const ConfirmBtn = styled.button`
    width: 80px;
    height: 35px;

    font-size: 15px;
    border: none;
    border-radius: 5px;
    background-color: #5B70B8;
    color: white;
`
export const CancleBtn = styled(ConfirmBtn)`
    background-color: #a1a1a1;
`
