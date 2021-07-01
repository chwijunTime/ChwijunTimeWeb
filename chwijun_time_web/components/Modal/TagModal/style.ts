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
export const TagModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: auto;
    min-height: 307px;
    border-radius: 30px;
    background-color: #ffffff;
`
export const ConfirmBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 30px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #5B70B8;
`
export const CancelBtn = styled(ConfirmBtn)`
    background-color: #BBBBBB;
`
export const SearchPlace = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 40px;
    margin-top: 10px;
`
export const SearchBar = styled.input`
    width: 440px;
    height: 40px;
    border: 1px solid #bdbdbd;
    border-radius: 5px;
    font-size: 15px;
    padding-left: 5px;
    &:focus {
        outline: none!important;
        border-color: #565bf0;
    }
`
export const DropdownListPlace = styled.div`
    display: flex;
    flex-direction: column;
    width:440px;
    height: 120px;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid #bdbdbd;
`
export const DropdownList = styled.div`
    display: flex;
    align-items: center;
    width: 440px;
    height: 40px;
    padding-left: 10px;
    border-bottom: 1px solid #bdbdbd;
    &:hover {
        cursor: pointer;
        background-color: #5B70B8;
        color: white;
    }
`
export const Text = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    height: 30px;
    font-size: 13px;
    font-weight: bold;
`
export const TagSelected = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    height: auto;
    min-height: 35px;
    border-top: 1px solid #bdbdbd;
`
export const Tag = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    height: 23px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 5px 5px;
    color: white;
    font-size: 13px;
    border: none;
    border-radius: 20px;
    background-color: #5B70B8;
`
export const CancelImg = styled.div`
    display: flex;
    align-items: center;
    padding-left: 5px;
    padding-top: 2px;
    &:hover {
        cursor: pointer;
    }
`
export const BtnPlace = styled.div`
    display: flex;
    width: 50%;
    height: 40px;
    justify-content: space-around;
`