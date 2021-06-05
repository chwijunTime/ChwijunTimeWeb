import styled from 'styled-components';

export const NoticeList = styled.div`
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
export const Title = styled(Number)`
    width: 50%;
`
export const Date = styled(Number)`
    width: 30%;
`