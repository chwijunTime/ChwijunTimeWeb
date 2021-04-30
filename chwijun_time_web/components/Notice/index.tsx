import React, { useEffect, useState } from 'react';
import Link from "next/link";
import * as S from './style';
import NoticeList from './NoticeComponent';

const NoticeComponent: React.FC = () => {
    const [selected, setSelected] = useState('first');
    const list = [{idx: 1, title: "하이", date: "2021-04-08"}, {idx: 2, title: "하이루", date: "2021-04-21"}]

    return(
        <S.NoticePlace> 
            <S.Header>공지사항</S.Header>
            <S.Additinal>
            <S.OptionPlace>
                <S.Option isSelect={selected}>전체</S.Option>
                <S.Option >관심</S.Option>
            </S.OptionPlace>
            <S.AddNotice>
                <S.EnrollNotice>
                    <Link href="/notice/[enrollNotice]" as="/notice/enrollNotice">등록</Link>
                </S.EnrollNotice>
            </S.AddNotice>
            </S.Additinal>
            
            <S.NoticeContainer>
                { list.map((obj, idx) => {
                    return <NoticeList idx={obj.idx} title={obj.title} date={obj.date} key={idx} /> 
                })}
            </S.NoticeContainer>

        </S.NoticePlace>
    )
}

export default NoticeComponent;