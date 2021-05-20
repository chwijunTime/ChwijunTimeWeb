import React from 'react';
import * as S from './style';
import { ArrowIcon } from 'public/index';

interface Props {
    name: string,
    tag: string[],
    address: string,
    salary: string
}

const MouList:React.FC<Props> = ({name, tag, address, salary}) => {
    const MAX_LENGTH = 2;

    return(
        <S.MouList>
            <S.MouName>{name}</S.MouName>
            <S.TagPlace>
                { tag.map((obj, idx) => {
                    return idx < MAX_LENGTH && <S.Tag key={idx}>{obj}</S.Tag> 
                 })                   
                }
                { tag.length > MAX_LENGTH && 
                    <>외 {tag.length - MAX_LENGTH}개</>
                }
            </S.TagPlace>           
            <S.Address>{address}</S.Address>
            <S.Salary>{salary}</S.Salary>
            <S.IconBtn><ArrowIcon /></S.IconBtn>
        </S.MouList>
    )
}

export default MouList;