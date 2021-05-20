import styled from 'styled-components';

export const MouList = styled.div`
    display: flex;
    width: 90%;
    height: 40px;

    margin-top: 10px;

    &:hover {
        cursor: pointer;
    }
`
export const MouName = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
    height: auto;

    font-size: 15px;
    font-weight: bold;
`
export const TagPlace = styled.div`
    display: flex;
    align-items: center;
    width: 22%;
    height: auto;

    font-size: 15px;
`
export const Tag = styled.div`
    &::after {
        content: ", ";
        white-space: pre;
    }
    &:last-child::after {
        content: " ";
        white-space: pre;
    }
`
export const Address = styled.div`
    display: flex;
    align-items: center;
    width: 33%;
    height: auto;

    font-size: 15px;
`
export const Salary = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
    height: auto;

    font-size: 15px;
`
export const IconBtn = styled.div`
    width: 3%;
    height: auto;

    margin-left: 30px;
`