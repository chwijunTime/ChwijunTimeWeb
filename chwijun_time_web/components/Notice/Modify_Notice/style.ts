import styled from 'styled-components';

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
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
`
export const Sub_Title = styled.div`
    font-size: 15px;
    font-weight: normal;
    margin-top: 5px;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;

    border: none;
    border-top: 2px solid #5B70B8;
    margin-top: 20px;
`
export const ItemList = styled.div`
    display: flex;
    width: 100%;
    min-height: 54px;
    border: none;
    border-bottom: 1px solid #ddd;
`
export const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    min-height: 54px;

    font-weight: bold;
    background-color: #f5f7f6;
`
export const Notice_Item = styled(Item)`
    min-height: 428px;
`
export const InputItem = styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;
`
export const S_Input = styled.input`
    width: 600px;
    height: 35px;

    font-size: 14px;
    padding-left: 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    outline: none;  
    &:focus {
        border: 1px solid #4e60cc;
    }
`
export const M_Input = styled.textarea`
    width: 600px;
    height: 400px;
    border: 1px solid #bbb;
    padding-left: 10px;
    &:focus {
        border: 1px solid #4e60cc;
    }
`
export const Enroll_Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 33px;

    font-size: 15px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #5B70B8;
    margin-left: 20px;
`
export const BtnPlace = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 95%;
    height: 40px;
    margin-top: 10px;
`
export const Cancel_Btn = styled(Enroll_Btn)`
    background-color: #a1a1a1;
`