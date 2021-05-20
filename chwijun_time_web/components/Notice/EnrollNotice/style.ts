import styled from 'styled-components';

export const EnrollNoticeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`
export const TitlePlace = styled.div`
    display :flex;
    align-items: center;

    width: 100%;
    height: 40px;
`
export const TitleText = styled.div`
    font-size: 18px;
    margin-left: 35px;
`
export const InputTitle = styled.input`
    width: 450px;
    height: 40px;

    font-size: 16px;
    border: 1px solid;
    outline: none;
    border-radius: 5px;
    border-color: #ded9d9;
    background-color: #EFEFEF;
    margin-left: 15px;
    padding-left: 10px;
`
export const ContentPlace = styled.div`
    display: flex;
    width: 100%;
    height: 380px;

    margin-top: 30px;
`
export const InputContent = styled.textarea`
    width: 60%;
    height: 340px;
`
export const BtnPlace = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    width: 50%;
    height: 100px;
    margin-left: 15px;
`
export const EnrollBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 33px;

    border: 1px solid;
    border-radius: 5px;
    border-color: #8A8787;
    outline: none;

    background-color: #1C70D3;
    color: white;
    font-size: 16px;

`
export const CancleBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 33px;

    border: none;
    border-radius: 5px;
    outline: none;

    background-color: #d6d6d6;
    font-size: 16px;

`