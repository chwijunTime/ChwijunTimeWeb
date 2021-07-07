import styled from 'styled-components';

export const Container = styled.div`
    display: flex;  
    width: 100%;
    height: 50px;

    border-bottom: 1px solid #BDBDBD;

    &:hover {
        cursor: pointer;
    }
`
export const Number = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8%;
    height: auto;
`
export const Status = styled.div<{stats : boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    height: auto;

    color: ${props => props.stats ? '#454BC8' : '#a1a1a1'};
`
export const Date = styled(Number)`
    width: 20%;
`
export const Apply = styled(Number)`
    width: 37%;
    justify-content: flex-end;
    padding-right: 10px;
    font-size: 24px;
    color: #878787;
`
export const Apply_Btn = styled.button<{stats : boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 30px;

    border: none;
    border-radius: 5px;

    color: white;
    background-color: ${props => props.stats ? '#5B70B8' : '#a1a1a1'};

    &:hover {
        cursor: ${props => props.stats ? 'pointer' : 'default'};
    }
`
export const Delete_Btn = styled(Apply_Btn)`
    background-color: #ff8080;
    &:hover {
        cursor: pointer;
    }
`