import styled from 'styled-components';

export const Template = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`
export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 20%;
    height: 100%;

    background-color: #5B70B8;
`
export const Content = styled.div`
    width: 80%;
    height: 100%;
`


export const LogoPlace = styled.div`
    display: flex;
    width: 95%;
    height: 60px;

    font-size: 22px;
    color: white;

    margin-top: 10px;
`
export const UserPlace = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    height: auto;

    color: white;
`
export const User_Email = styled.div`
    width: 95%;
    margin-top: 5px;
`
export const BtnPlace = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;

    margin-top: 10px;
`
export const Profile_Btn = styled.button`
    width: 100px;
    height: 30px;

    border: 1px solid white;
    border-radius: 20px;
    background-color: inherit;
    color: white;
`
export const Logout_Btn = styled(Profile_Btn)`
`
export const Divide_Line = styled.div`
    width: 95%;
    border-top: 1px dashed #b3c4ff;
    margin-top: 20px;
`

export const MenuListPlace = styled.div`
    width: 95%;
    height: auto;

    margin-top: 20px;
    font-size: 17px;
`
export const MenuList = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;

    border: none;
    border-radius: 5px;
    padding: 0px 10px;

    color: ${ props => props.current ? '#f0f2f7' : '#b4c2ed' };
    background-color: ${ props => props.current ? '#405394' : '' };

    &:hover {
        cursor: pointer;
        background-color: #405394;
    }   
`