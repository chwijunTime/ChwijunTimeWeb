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
export const CityPlace = styled.div`
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
export const ProvinceTitle = styled(CityTitle)`
    margin-top: 20px;
`
export const CityComponent = styled.div<{selected : boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
    height: 45px;
    min-height: 30px;

    border: 1px solid #666;

    &:hover {
        cursor: pointer;
        background-color: #5B70B8;
        color: white;
    }
    background-color: ${props => props.selected ? '#5B70B8' : ''};
    color: ${props => props.selected ? 'white' : ''};
`
export const ProvinceComponent = styled(CityComponent)`
`
export const BtnPlace = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;

    margin-top: 80px;
`
export const ConfirmBtn = styled.button`
    width: 80px;
    height: 35px;

    font-size: 15px;
    border: none;
    border-radius: 5px;
    background-color: #5B70B8;
    color: white;
`
export const CancleBtn = styled(ConfirmBtn)`
    background-color: #a1a1a1;
`