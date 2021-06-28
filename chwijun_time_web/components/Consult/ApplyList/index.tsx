import React, { useState } from 'react';
import * as S from './style';
import moment from 'moment';

interface Props {
    info: any,
    idx: number
}

const ApplyList:React.FC<Props> = ({info, idx}) => {
    const date = useState<string>(moment(new Date(info.applicationDate)).format('yyyy-MM-DD HH:mm'));

    return(
        <S.Container>
            <S.Number>{idx}</S.Number>
            <S.ClassNumber>{info.consultingUserClassNumber}</S.ClassNumber>
            <S.Name>{info.consultingUserName}</S.Name>
            <S.Date>{date}</S.Date>
        </S.Container>
    )
}

export default ApplyList;