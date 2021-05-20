import styled from 'styled-components';
import image from 'next/image';

export const JobNoticeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;

    font-weight: bold;
    font-size: 19px;

    padding-left: 10px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    background-color: #F4F4F4;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    height: 80%;
    border-radius: 5px;
    background-color: white;
`
export const Title = styled.div`
    display: flex;
    width: 90%;
    height: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
`
export const Number = styled.div`
    display: flex;
    justify-content: center;
    width: 5%;
    height: auto;
`
export const Name = styled.div`
    width: 30%;
    height: auto;
    margin-left: 20px;
`
export const Field = styled(Name)`
    width: 25%;
`
export const Deadline = styled(Name)`
    width: 30%;
`

export const SearchPlace = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
`
export const SearchBar = styled.input`
    width: 440px;
    height: 40px;

    border: 1px solid #bdbdbd;
    border-radius: 5px;
    margin-left: 25px;
    margin-top: 10px;
    padding-left: 10px;

    &:focus {
        outline: none!important;
        border-color: #565bf0;
    }

    background-image: url("./Search.png");
    background-size: 26px;
    background-repeat: no-repeat;
    background-position: 99%;
`