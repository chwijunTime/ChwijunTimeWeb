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
export const HeaderPlace = styled.div`
    display: flex;
    justify-content: space-between;
    
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
`
export const HeaderTitle = styled.div`
    display: flex;
    flex-direction: column;
    
    font-size: 20px;
    font-weight: bold;
`
export const Sub_HeaderTitle = styled.div`
    font-size: 15px;
    font-weight: normal;
    margin-top: 5px;
`
export const SelectPlace = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
`
export const SelectBox = styled.select`
    width: 120px;
    height: 40px;

    outline: none;
    border: 1px solid #a1a1a1;
    border-radius: 5px;
    padding: 0px 5px;
`


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    height: 600px; 

    margin-top: 20px;
    border: none;
    border-top: 2px solid #5B70B8;
    background-color: white;
`