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
    const [selected, setSelected] = useState('');

    return(
        <S.ModalContainer>
            <S.LocationModal>
                <S.Title>지역선택</S.Title>
                <S.CityTitle>광역시</S.CityTitle>
                <S.CityPlace>
                    {cityList.map((obj, idx) => {
                        return <S.CityComponent key={idx}>{obj}</S.CityComponent>
                    })}
                </S.CityPlace>
            </S.LocationModal>
        </S.ModalContainer>
    )
}

export default LocationModal;