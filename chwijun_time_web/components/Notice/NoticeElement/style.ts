import styled from 'styled-components';
import image from 'next/image';

export const NoticeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin-top: 20px;
`
export const UrlText = styled.div`
    font-size: 15px;
    color: #666;
`
export const HeaderTitle = styled.div`
    display: flex;
    flex-direction: column;
    
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
`
export const Sub_HeaderTitle = styled.div`
    font-size: 15px;
    font-weight: normal;
    margin-top: 5px;
`


export const ContentPlace = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    min-height: 600px; 

    margin-top: 20px;
    border: none;
    border-top: 2px solid #5B70B8;
    background-color: white;
`
export const Content = styled.div`
    width: 100%;
    min-height: 400px;

    word-wrap: break-word;
    padding: 30px 20px;
`
export const TitlePlace = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;

    background-color: #f6f6f6;
    border-bottom: 1px solid #BDBDBD;   
    font-weight: bold;
`
export const Title = styled.div`
    width: 50%;

    padding: 0px 20px;
    font-size: 17px;
    font-weight: bold;
`
export const CreateDate = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50%;

    padding: 0px 20px;
    font-weight: normal;
    color: #9c9c9c;
`
export const BtnPlace = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 50px;
    
    border-top: 1px solid #bdbdbd;
    margin-bottom: 40px;
`
export const ListBtn = styled.button`
    width: 80px;
    height: 35px;

    border: 1px solid #5B70B8;
    border-radius: 3px;
    color: #5B70B8;

    background-color: white;
`