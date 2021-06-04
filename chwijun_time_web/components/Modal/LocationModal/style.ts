import styled from 'styled-components';

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
   
    z-index: 20;
    background-color: rgba(0,0,0,.4);
`
export const LocationModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: 550px;

    border-radius: 15px;

    background-color: #ffffff;
`
export const Title = styled.div`
    display :flex;
    width: 450px;
    height: 40px;

    font-size: 20px;
    font-weight: bold;
    margin: 10px 0px;
    
`
export const CityPlace = styled.table`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    height: auto;
`
export const ProvincePlace = styled(CityPlace)`

`
export const CityTitle = styled.div`
    width: 90%;
    margin-bottom: 5px;
`
export const CityComponent = styled.td`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
    height: 45px;
    min-height: 30px;

    border: 1px solid #666;
`