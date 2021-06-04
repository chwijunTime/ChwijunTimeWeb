import React, { useState } from 'react';
import * as S from './style';

interface Props {
    handleModal: (status: boolean) => void,
    handleLocation: (status: string) => void,
    currentLocation: string
}

const LocationModal:React.FC<Props> = ({ handleModal, handleLocation, currentLocation }) => {
    const cityList = ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '제주'];
    const provinceList = ['경기도', '강원도', '충청북도', '충청남도', '전라북도', '전라남도', '경상북도', '경상남도'];
    const [selected, setSelected] = useState(currentLocation);

    return(
        <S.ModalContainer>
            <S.LocationModal>
                <S.Title>지역선택</S.Title>
                <S.CityTitle>광역시</S.CityTitle>
                <S.CityPlace>
                    {cityList.map((obj, idx) => {
                        return <S.CityComponent onClick={() => setSelected(obj)} key={idx} selected={obj === selected}>{obj}</S.CityComponent>
                    })}
                </S.CityPlace>
                <S.ProvinceTitle>도</S.ProvinceTitle>
                <S.ProvincePlace>
                    {provinceList.map((obj, idx) => {
                        return <S.ProvinceComponent onClick={() => setSelected(obj)} key={idx} selected={obj === selected}>{obj}</S.ProvinceComponent>
                    })}
                </S.ProvincePlace>
                <S.BtnPlace>
                    <S.ConfirmBtn onClick={() => {handleModal(false), handleLocation(selected)}} >확인</S.ConfirmBtn>
                    <S.CancleBtn onClick={() => handleModal(false)}>취소</S.CancleBtn>
                </S.BtnPlace>
                
            </S.LocationModal>
        </S.ModalContainer>
    )
}

export default LocationModal;