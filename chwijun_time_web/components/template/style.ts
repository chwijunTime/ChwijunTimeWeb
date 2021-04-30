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

    width: 22%;
    height: 100%;

    background-color: #5B70B8;
`
export const Content = styled.div`
    width: 78%;
    height: 100%;
`
export const SideHead = styled.div`
    display: flex;

    width: 100%;
    height: 10%;
`
export const HeadText = styled.div`
    margin-left: 40px;
    margin-top: 20px;
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

    &:hover {
        cursor: pointer;
    }
`