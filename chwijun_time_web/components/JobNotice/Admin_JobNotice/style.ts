import styled from 'styled-components';
import image from 'next/image';

export const MouContainer = styled.div`
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
export const ListPlace = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 80%;
`
export const PageNationPlace = styled.div`
    display: flex;
    justify-content: center;
    width: 95%;
    height: 40px;
`
export const Title = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;

    background-color: #f6f6f6;
    border-bottom: 1px solid #BDBDBD;   
    font-weight: bold;
`
export const Number = styled.div`
    display: flex;
    justify-content: center;
    width: 8%;
    height: auto;
`
export const Name = styled(Number)`
    width: 35%;
`
export const Field = styled(Number)`
    width: 15%;
`
export const Tag = styled(Number)`
    width: 25%;
`
export const Location = styled(Number)`
    width: 15%;
`

export const SearchPlace = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
`
export const SearchBar = styled.input`
    width: 300px;
    height: 35px;

    border: 1px solid #bdbdbd;
    border-radius: 5px;
    margin: 0px 25px;
    padding-left: 10px;

    &:focus {
        outline: none!important;
        border-color: #565bf0;
    }
`
export const SearchBtn = styled.button`
    width: 80px;
    height: 35px;

    font-size: 14px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #666;
`
export const OptionPlace = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 30px;

  margin-top: 20px;
`
export const EnrollBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;

    font-size: 16px;
    color: black;
    outline: none;
    border: 1px solid #000000;
    border-radius: 10px;
    background-color: white;
`
export const NotExistList = styled.div`
    font-size: 20px;
    padding-top: 30px;
`