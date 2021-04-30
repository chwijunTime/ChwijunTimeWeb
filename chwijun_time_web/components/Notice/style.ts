import styled from "styled-components";

export const NoticePlace = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90px;

    font-size: 35px;
    font-weight: bold;
`
export const Additinal = styled.div`
    display: flex;
    width:100%;
    height: 40px;
`
export const OptionPlace = styled.div`
    display: flex;
    width: 50%;
    height: 40px;
`
export const Option = styled.div`
    display: flex;
    width: 40px;
    height: 35px;
    margin-left: 20px;
    font-size: 19px;

    &:hover {
        cursor: pointer;
    }
`
export const AddNotice = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50%;
    height: 40px;
`
export const NoticeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    background-color: #EFEFEF;
`
export const NoticeList = styled.div`
    display: flex;
    width: 80%;
    height: 40px;

    margin-top: 10px;

    &:hover {
        cursor: pointer;
    }
`
export const Number = styled.div`
    display: flex;
    align-items: center;
    width: 5%;
    height: auto;

    font-size: 15px;
    font-weight: bold;
`
export const Title = styled.div`
    display: flex;
    align-items: center;
    width: 75%;
    height: auto;

    font-size: 15px;
`
export const Date = styled.div`
    display: flex;
    align-items: center;
    width: 12%;
    height: auto;

    font-size: 13px;
    color: #888585;
`
export const IconBtn = styled.div`
    width: 8%;
    height: auto;

    margin-left: 30px;
`
export const EnrollNotice = styled.div`
    font-size: 19px;
    margin-right: 20px;

    &:hover {
        cursor: pointer;
    }
`