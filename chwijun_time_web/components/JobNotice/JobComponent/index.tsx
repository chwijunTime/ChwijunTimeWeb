import React from 'react';
import * as S from './style';

interface Props {
    name: string,
    field: string,
    day: string
}

const JobComponent:React.FC<Props> = ({name, field, day}) => {
    return(
        <S.Container>
            <S.Number>1</S.Number>
            <S.Name>{name}</S.Name>
            <S.Field>{field}</S.Field>
            <S.Deadline>{day}</S.Deadline>
        </S.Container>
    )
}

export default JobComponent;