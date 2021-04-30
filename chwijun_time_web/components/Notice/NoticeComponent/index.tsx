import React, { useState } from 'react';
import * as S from './style';
import { ArrowIcon } from 'public/index';

interface Props {
    idx: Number;
    title: String;
    date: String;
    key: Number;
}

const NoticeList:React.FC<Props> = ({idx, title, date, key}) => {

    return(
        <S.NoticeList key={key}>
            <S.Number>{idx}</S.Number>
            <S.Title>{title}</S.Title>
            <S.Date>{date}</S.Date>
            <S.IconBtn><ArrowIcon /></S.IconBtn>
        </S.NoticeList>
    )
}

export default NoticeList;