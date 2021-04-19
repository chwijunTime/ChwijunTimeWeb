import styled from 'styled-components'

export const MainPlace = styled.div`
    display: flex;

    width: 100vw;
    height: 100vh;
`;

export const Logo = styled.img`
    width: 90px;
    height: 90px;
`
export const BackgroundImg = styled.img`
    position: absolute;
    
    width: 100%;
    height: 100%;

    z-index: -1;
`
export const LoginRegister = styled.div`
    display: flex;

    width: 200px;
    height: 13px;
    margin-top: 8px;

    color: #f7f7f7;
    font-size: 16px;
`
export const Login = styled.div`
    width: 50%;
    height: 100%;

    border: none;
    border-right: 2px solid #cfcfcf;
    text-align: center;
`
export const Register = styled.div`
    width: 50%;
    height: 100%;
    text-align: center;
`
export const Head = styled.div`
    display: flex;
    justify-content: space-between;
    
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