import styled from 'styled-components'

export const MainPlace = styled.div`
    display: flex;

    width: 100vw;
    height: 100vh;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    
    width: 90px;
    height: 90px;
`
export const LeftHead = styled.div`
    display: flex;

    width: 50%;
    height: 80px;
`
export const RightHead = styled.div`
    display: flex;
    justify-content: flex-end;

    width: 50%;
    height: 80px;
`
export const BackgroundImg = styled.img`
    position: absolute;
    
    width: 100%;
    height: 100%;

    z-index: -1;
`
export const SignContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    width: 200px;
    height: 70px;
    margin-top: 12px;
    margin-right: 40px;

    color: #f7f7f7;
    font-size: 16px;
`
export const LRText = styled.div`
    width: 60px;
    height: 20px;

    &:hover {
        cursor: pointer;
    }
`

export const Head = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
`
export const IntroPlace = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 350px;
    left: 100px;

    width: 460px;
    height: 270px;
`
export const Intro = styled.div`
    font-size: 34px;
    color: white;
`
export const Explain = styled.div`
    padding-top: 40px;
    font-size: 19px;
    color: white;
`
export const StartBtn = styled.button`
    width: 190px;
    height: 55px;

    margin-top: 40px;

    border: 1px solid;
    border-color: #989898;
    border-radius: 30px;
    outline: none;

    font-size: 18px;
    background-color: #5BC7F5;
    color: white;
    &:hover {
        cursor: pointer;
    }
`