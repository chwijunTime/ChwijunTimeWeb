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
export const LogoPlace = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 90px;
    height: 90px;
`
export const Content = styled.div`
    width: 80%;
    height: 100%;
`
export const SideHead = styled.div`
    display: flex;
    justify-content: flex-end;

    width: 100%;
    height: 10%;
`
export const HeadText = styled.div`
    margin-right: 20px;
    margin-top: 20px;
    width: auto;
    height: 20px;
    color: white;
    &:hover {
        cursor: pointer;
    }
`
export const SideListPlace = styled.div`
    display: flex;
    flex-direction: column;

    width: 90%;
    height: auto;
    margin-top: 40px;
`
export const SideList = styled.div`
    width: auto;
    height: 20px;

    color: white;
    margin-top: 15px;
    transition: 0.2s ease-in-out;

    margin-left: ${props => props.current ? '10px' : ''};
    font-size: ${props => props.current ? '18px' : ''};

    &:hover {
        cursor: pointer;
        transform: translateX(10px);
    }

`