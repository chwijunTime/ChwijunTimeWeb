import styled from 'styled-components';

export const SideBar = styled.div<{current : boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: ${props => props.current ? '18vw' : '5vw'};
    min-width: 70px;
    min-height: 100vh;

    background-color: #5B70B8;

    transition: 0.3s ease;
`
export const Content = styled.div`
    width: 100%;
    height: 100%;
    word-wrap: break-word;
    white-space: pre-wrap; 
`
export const LogoPlace = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    height: 40px;

    font-size: 22px;
    color: white;

    margin-bottom: 20px;
`

export const UserPlace = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    height: auto;

    color: white;
    margin-bottom: 20px;
`
export const User_Email = styled.div`
    width: 95%;
    margin-top: 5px;
`
export const BtnPlace = styled.div`
    display: flex;
    justify-content: space-around;


    margin-top: 10px;
`
export const Profile_Btn = styled.button`
    width: 100px;
    height: 30px;

    border: 1px solid white;
    border-radius: 20px;
    background-color: inherit;
    color: white;
    transition: 0.3s;

    &:hover {
        
        background-color: white;
        color: black;
    }
`
export const Logout_Btn = styled(Profile_Btn)`
`
export const Divide_Line = styled.div`
    width: 95%;
    border-top: 1px dashed #b3c4ff;
`

export const MenuListPlace = styled.div`
    width: 95%;
    height: auto;

    margin-top: 20px;
    font-size: 17px;
`
export const MenuList = styled.div<{current : boolean}>`
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
export const Menu = styled.div`
    margin-left: 10px;
`


export const S_LogoPlace = styled(LogoPlace)`
    justify-content: center;
    height: 60px;
    margin: 0;
`
export const S_MenuListPlace = styled(MenuListPlace)`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const S_MenuList = styled(MenuList)`
    display: flex;
    justify-content: center;
    width: 80%;
`