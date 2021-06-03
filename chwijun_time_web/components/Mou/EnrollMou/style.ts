import styled from 'styled-components';

export const MouContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background: ${props => props.open ? "rgba(0,0,0,.5)" : ""};
    filter: ${props => props.open ? 'brightness(50%)' : ''};
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
export const ETC_Item = styled(Item)`
    min-height: 108px;
`
export const InputItem = styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;
`

export const S_Input = styled.input`
    width: 330px;
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
export const Address_Input = styled(S_Input)`
    width: 400px;
`
export const Salary_Input = styled(S_Input)`
    width: 100px;
`
export const M_Input = styled.textarea`
    width: 500px;
    height: 80px;
    border: 1px solid #bbb;
    padding-left: 10px;
    &:focus {
        border: 1px solid #4e60cc;
    }
`
export const Add_Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 25px;

    font-size: 15px;
    border: none;
    border-radius: 20px;
    background-color: #8c8c8c;
    color: white;
`
export const Tag = styled.div`
    width: auto;
    height: 27px;
    padding: 2px 10px 0px 10px;
    text-align: center;
    vertical-align: middle;
    color: white;
    font-size: 13px;
    border: none;
    border-radius: 20px;
    background-color: #a1a1a1;
    margin-right: 10px;
`
export const Enroll_Btn = styled(Add_Btn)`
    width: 70px;
    height: 33px;
    border-radius: 5px;
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
export const Location_Btn = styled.button`
    display: flex;
    width: 80px;
    height: 30px;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 5px;
    background-color: #5B70B8;
    color: white;
`
export const Tag_Btn = styled(Location_Btn)`
`
export const SubText = styled.div`
    padding-left: 15px;
    font-size: 14px;
    color: #666;
`
