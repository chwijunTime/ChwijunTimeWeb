import styled from 'styled-components';

export const TagList = styled.div`
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
export const Title = styled(Number)`
    justify-content: flex-start;
    width: 20%;
    color: #5B70B8;
`
export const Delete = styled(Number)`
    width: 72%;
    justify-content: flex-end;
    font-size: 24px;
    padding-right: 10px;
    color: #878787;
`
export const TitleText = styled.div`
    &:hover {
        cursor: pointer;
    }
`