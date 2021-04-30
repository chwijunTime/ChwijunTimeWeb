import styled from 'styled-components';

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