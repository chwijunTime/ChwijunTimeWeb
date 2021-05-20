import styled from 'styled-components';

export const EnrollMouContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
export const NamePlace = styled.div`
    display :flex;
    align-items: center;

    width: 100%;
    height: 40px;

    margin-bottom: 20px;
`
export const Text= styled.div`
    width: 100px;
    height: auto;
    
    padding-left: 15px;
    font-size: 18px;
`
export const InputName = styled.input`
    width: 500px;
    height: 40px;

    font-size: 16px;
    border: 1px solid;
    outline: none;
    border-radius: 3px;
    border-color: #ded9d9;

    margin-left: 15px;
    padding-left: 10px;
`
export const FeildInput = styled(InputName)`
    width: 300px;
`
export const IntroPlace = styled(NamePlace)`
    align-items: stretch;
    height: 130px;
`
export const InputIntro = styled.textarea`
    width: 500px;
    height: 110px;
`
export const SalaryInput = styled(InputName)`
    width: 400px; 
`
export const TagBtn = styled.button`
    width: 100px;
    height: 35px;

    background-color: #5B70B8;
    color: white;
    border-radius: 20px;
    border: 1px solid #d2d2d2;
    font-size: 14px;
    margin-left: 15px;
`
export const BtnPlace = styled.div`
    display: flex;
    
    width: 65%;
    height: 200px;
    margin-top: 20px;
    margin-left: 115px;
`
export const EnrollBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 33px;

    border: 1px solid;
    border-radius: 5px;
    border-color: #8A8787;
    outline: none;

    background-color: #5B70B8 ;
    color: white;
    font-size: 16px;
    margin-right: 20px;
`
export const CancleBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 33px;

    border: none;
    border-radius: 5px;
    outline: none;

    background-color: #d6d6d6;
    font-size: 16px;
    margin-left: 20px;
`