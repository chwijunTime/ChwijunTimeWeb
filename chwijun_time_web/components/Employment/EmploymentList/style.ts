import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;

    border-bottom: 1px solid #BDBDBD;

    &:hover {
        cursor: pointer;
    }
`
export const Generation = styled.div`
    display: flex;
    justify-content: center;
    width: 8%;
    height: auto;
`
export const Name = styled(Generation)`
    justify-content: flex-start;
    color: #5B70B8;
    width: 30%;
`
export const Student = styled(Generation)`
    width: 15%;
`
export const Area = styled(Generation)`
    width: 15%;
`
export const TagPlace = styled(Generation)`
    width: 25%;
    color: black;
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
export const Delete = styled(Generation)`
    width: 7%;
    justify-content: flex-end;
    font-size: 24px;
    padding-right: 10px;
    color: #878787;
`