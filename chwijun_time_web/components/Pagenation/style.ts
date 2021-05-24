import styled from 'styled-components';

export const PageNumberContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 25px;

  padding: 0px;
`

export const PageNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  padding: 5px;
  list-style: none;
  border: 1px solid #bdbdbd;

  background-color: ${props => props.current ? '#5B70B8' : '#ffffff' };
  color: ${props => props.current ? '#ffffff' : '#000000'};
  
  &:hover {
    cursor: pointer;
  }
`
export const PrevBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 30px;

  border: 1px solid #bdbdbd;
  outline: none;
  background-color: white;
  margin-right: 10px;
`
export const NextBtn = styled(PrevBtn)`
  margin-left: 10px;
  margin-right: 0px;
`