import styled from 'styled-components';

export const ListPlace = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 80%;
`
export const PageNationPlace = styled.div`
    display: flex;
    justify-content: center;
    width: 95%;
    height: 40px;
`
export const OptionPlace = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 30px;
  
  margin-top: 20px;
`
export const NotExistList = styled.div`
    font-size: 20px;
    padding-top: 30px;
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;

    background-color: #f6f6f6;
    border-bottom: 1px solid #BDBDBD;   
    font-weight: bold;
`
export const Number = styled.div`
    display: flex;
    justify-content: center;
    width: 8%;
    height: auto;
`
export const Name = styled(Number)`
    width: 25%;
`
export const Field = styled(Number)`
    width: 15%;
`
export const Tag = styled(Number)`
    width: 25%;
`
export const Location = styled(Number)`
    width: 15%;
`