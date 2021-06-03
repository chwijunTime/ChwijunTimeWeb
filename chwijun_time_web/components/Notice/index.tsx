import React, { useEffect, useState } from 'react';
import Link from "next/link";
import * as S from './style';
import NoticeList from './NoticeComponent';
import { getAllNotice } from 'service/get';
import Router from 'next/router';

const NoticeComponent: React.FC = () => {
    const [selected, setSelected] = useState('first');
    const [noticeList, setNoticeList] = useState([]);

    async function getAllNoticeList() {
        try {
            const { data } = await getAllNotice();
            // 공지사항 불러오기 실패할 경우 변수를 통해 가운데에 텍스트로 실패라고 띄우기
            setNoticeList(data.list);
        } catch(error) {
            console.log(error);
        }            
    }

    useEffect(() => {
        getAllNoticeList();
    }, [])

    return(
        <S.NoticePlace> 
            <S.Header>공지사항</S.Header>
            <S.Additinal>
            <S.OptionPlace>
                <S.Option isSelect={selected}>전체</S.Option>
                <S.Option >관심</S.Option>
            </S.OptionPlace>
            <S.AddNotice>
                <S.EnrollNotice onClick={() => Router.push('/notice/enrollNotice')}>등록</S.EnrollNotice>
            </S.AddNotice>
            </S.Additinal>
            
            <S.NoticeContainer>
                { noticeList && noticeList.map((obj: any, idx) => {
                    return <NoticeList idx={obj.noticeIdx} title={obj.title} date={obj.createDated} key={idx} /> 
                })}
            </S.NoticeContainer>

        </S.NoticePlace>
    )
}

export default NoticeComponent;