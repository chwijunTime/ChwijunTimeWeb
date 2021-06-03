import React from 'react';
import * as S from './style';
import { ArrowIcon } from 'public/index';

interface Props {
    info: any
}

const MouList:React.FC<Props> = ({info}) => {
    const MAX_LENGTH = 2;

    return(
        <S.Container>
            <S.Number>1</S.Number>
            <S.Name>{info.name}</S.Name>
            <S.TagPlace>
                { info.tag.map((obj, idx) => {
                    return idx < MAX_LENGTH && <S.Tag key={idx}>{obj}</S.Tag> 
                 })                   
                }
                { info.tag.length > MAX_LENGTH && 
                    <>외 {info.tag.length - MAX_LENGTH}개</>
                }
            </S.TagPlace>           
            <S.Address>{info.location}</S.Address>
        </S.Container>
    )
}

export default MouList;