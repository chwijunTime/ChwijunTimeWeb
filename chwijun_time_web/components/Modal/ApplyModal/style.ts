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
    height: 400px;

    border-radius: 15px;

    background-color: #ffffff;
`