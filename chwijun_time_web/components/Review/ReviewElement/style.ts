import styled from 'styled-components';

export const ReviewContainer = styled.div`
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
`
export const Sub_HeaderTitle = styled.div`
    font-size: 15px;
    font-weight: normal;
    margin-top: 5px;
`
export const ContentPlace = styled.div`
    display: flex;
    flex-direction: column;
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

    padding: 0px 20px;
    white-space: pre-wrap;
    line-height: 25px;
    margin-bottom: 20px;
`
export const TitlePlace = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;

    font-size: 17px;
    font-weight: bold;
    padding: 0px 20px;
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
export const Property = styled.div`
    margin: 30px 0px 10px 0px;
    font-weight: bold;

    &::after {
        content: ']'
    }
    &::before {
        content: '['
    }
`
export const Explain = styled.div`
    width: 100%;
`
export const ModifyBtn = styled(ListBtn)`
`
export const HeaderPlace = styled.div`
    display: flex;
    justify-content: space-between;
    
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
`
export const ModifyPlace = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
`