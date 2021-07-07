import styled from 'styled-components';

export const Container = styled.div`
    display: flex;  
    width: 100%;
    height: 50px;

    border-bottom: 1px solid #BDBDBD;
`
export const Number = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8%;
    height: auto;
`
export const Kind = styled(Number)`
    width: 10%;
`
export const Status = styled(Number)<{stats : any}>`
    width: 10%;
    color: ${props => props.stats === 'Correction_Rejection' ? '#ff6363' :
    props.stats === 'Correction_Successful' ? '#a1a1a1' : '#5B70B8'};
`
export const ClassNumber = styled(Number)`
    width: 10%;
`
export const Link = styled.a`
    display: flex;
    align-items: center;
    width: 40%;

    &:hover {
        cursor: pointer;
    }
`
export const BtnPlace = styled(Number)`
    width: 22%;
    justify-content: flex-end;
`
export const Btn = styled.button<{status : boolean}>`
    width: 70px;
    height: 33px;

    border: none;
    border-radius: 8px;
    color: white;
    margin: 0px 10px;
    background-color: ${props => props.status ? '#5B70B8' : '#a1a1a1'};
`