import React from 'react';
import * as S from './style';
import { deleteStorage } from 'service/delete';
import Router from 'next/router';
import { MdDelete } from "react-icons/md";

interface Props {
    info: any,
    idx: number,
}

const StorageList:React.FC<Props> = ({info, idx}) => {
     
    const Click_Delete = async () => {
        try {
            const { data } = await deleteStorage(info.tipsStorageIdx);
            data.success ? (alert('삭제되었습니다.'), window.location.replace('/storage')) : alert(data.msg);
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <S.StorageList>
            <S.Number>{idx}</S.Number>
            <S.Name onClick={() => Router.push(`/storage/${info.tipsStorageIdx}`)}>{info.workCompanyName}</S.Name>
            <S.Address>{info.workCompanyAddress}</S.Address>
            <S.Delete>
                <MdDelete onClick={() => confirm("삭제하시겠습니까?") ? Click_Delete() : null} />
            </S.Delete>
        </S.StorageList>
    )
}

export default StorageList;