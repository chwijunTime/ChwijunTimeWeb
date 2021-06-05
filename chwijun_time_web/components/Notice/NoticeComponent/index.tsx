import React, { useState } from 'react';
import * as S from './style';
import { ArrowIcon } from 'public/index';

interface Props {
    info: any;
}

const NoticeList:React.FC<Props> = ({info}) => {

    return(
        <S.NoticeList>
            <S.Number>1</S.Number>
            <S.Title>feawef</S.Title>
            <S.Date>feasdf</S.Date>
        </S.NoticeList>
    )
}

export default NoticeList;