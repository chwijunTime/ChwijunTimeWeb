import React, { useState } from 'react';
import * as S from './style';
import { deleteNotice } from 'service/delete';
import Router from 'next/router';
import { MdDelete } from "react-icons/md";

interface Props {
    info: any,
    idx: number,
}

const NoticeList:React.FC<Props> = ({info, idx}) => {
     
    const Click_Delete = async () => {
        try {
            const { data } = await deleteNotice(info.noticeIdx);
            data.success ? (alert('삭제되었습니다.'), window.location.replace('/notice')) : null;
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <S.NoticeList>
            <S.Number>{idx}</S.Number>
            <S.Title>
                <S.TitleText onClick={() => Router.push(`/notice/${info.noticeIdx}`)}>{info.title}</S.TitleText>
            </S.Title>
            <S.Date>{info.createDated.split('T')[0]}</S.Date>
            { localStorage.getItem('roles') === 'ROLE_Admin' && (
                <S.Delete>
                    <MdDelete onClick={() => confirm("삭제하시겠습니까?") ? Click_Delete() : null}>삭제</MdDelete>
                </S.Delete>
            )}
        </S.NoticeList>
    )
}

export default NoticeList;