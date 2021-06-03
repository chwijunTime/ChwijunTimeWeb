import styled from 'styled-components';

export const JobNoticeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: ${props => props.open ? "rgba(0,0,0,.5)" : ""};
    filter: ${props => props.open ? 'brightness(50%)' : ''};
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
    height: 630px;
    border-radius: 5px;
    background-color: white;

    margin-top: 30px;
`
export const Components = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    height: auto;
    margin-top: 20px;
`
export const Sec_Components = styled(Components)`
    justify-content: start;
`
export const Title = styled.div`
    width: 30%;
    height: auto;
    font-weight: 600;
`
export const S_Input = styled.input`
    width: 70%;
    height: 32px;

    font-size: 15px;
    padding-left: 5px;
    border: 1px solid #878787;
    border-radius: 5px;
    outline: none;
    &:focus {
        border: 1px solid #4e60cc;
    }
`
export const L_Input = styled.textarea`
    width: 70%;
    height: 120px;

    &:focus {
        border: 1px solid #4e60cc;
    }
`
export const M_Input = styled(L_Input)`
    height: 80px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    height: 23px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 5px 5px;
    color: white;
    font-size: 13px;
    border: none;
    border-radius: 20px;
    background-color: #5B70B8;
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
    width: 60%;
    height: 40px;
    margin-top: 30px;
`
export const Cancel_Btn = styled(Enroll_Btn)`
    background-color: #a1a1a1;
`