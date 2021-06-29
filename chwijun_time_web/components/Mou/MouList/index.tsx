import React from 'react';
import * as S from './style';
import Router from 'next/router';
import { MdDelete } from "react-icons/md";
import { deleteMou } from 'service/delete';

interface Props {
    info: any,
    idx: number
}

const MouList:React.FC<Props> = ({info, idx}) => {
    const MAX_LENGTH = 2;

    const Click_Delete = async () => {
        try {
            const { data } = await deleteMou(info.contractingCompanyIdx);
            data.success ? (alert('삭제되었습니다.'), window.location.replace('/mou')) : null;
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <S.Container>
            <S.Number>{idx}</S.Number>
            <S.Name onClick={() => Router.push(`mou/${info.contractingCompanyIdx}`)}>{info.contractingCompanyName}</S.Name>
            <S.TagPlace>
                { info.contractingCompanyTags && info.contractingCompanyTags.map((obj, idx) => {
                    return idx < MAX_LENGTH && <S.Tag key={idx}>{obj}</S.Tag> 
                 })
                }
                { info.contractingCompanyTags && info.contractingCompanyTags.length > MAX_LENGTH && 
                    <>외 {info.contractingCompanyTags.length - MAX_LENGTH}개</>
                }
            </S.TagPlace>           
            <S.Address>{info.contractingCompanyAddress}</S.Address>
            <S.Delete>
                    <MdDelete onClick={() => confirm("삭제하시겠습니까?") ? Click_Delete() : null}>삭제</MdDelete>
            </S.Delete>
        </S.Container>
    )
}

export default MouList;