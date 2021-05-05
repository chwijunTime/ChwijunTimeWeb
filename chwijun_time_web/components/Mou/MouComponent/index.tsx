import React from 'react';
import * as S from './style';
import { ArrowIcon } from 'public/index';

interface Props {
    name: string,
    tag: string,
    address: string,
    salary: string
}

const MouList:React.FC<Props> = ({name, tag, address, salary}) => {
    return(
        <S.MouList>
            <S.MouName>{name}</S.MouName>
            <S.Tag>{tag}</S.Tag>
            <S.Address>{address}</S.Address>
            <S.Salary>{salary}</S.Salary>
            <S.IconBtn><ArrowIcon /></S.IconBtn>
        </S.MouList>
    )
}

export default MouList;