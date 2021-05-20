import styled from 'styled-components';

export const JobNoticeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const Header = styled.div`
    width: 100%;
    height: 60px;

    font-weight: bold;
    font-size: 19px;

    padding-left: 10px;
    padding-top: 10px;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;

    background-color: #F4F4F4;
`

export const Content = styled.div`
    display: flex;
    width: 95%;
    height: 90%;

    overflow: hidden;
    border: 1px solid #ADADAD;
    border-radius: 8px;
    margin-top: 20px;
`
export const Title = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 45px;

    color: #696969;
    padding-left: 20px;
    border-bottom: 1px solid #ADADAD;
    background-color: #E8E8E8;
`