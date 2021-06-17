import React, { useState } from 'react';
import * as S from './style';
import Router from 'next/router';
import { submitEnrollNotice } from 'service/post';

const EnrollNotice:React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const Enroll = async () => {
        try {
            const { data } = await submitEnrollNotice(title, content);
            data.success ? (alert("등록되었습니다."), Router.push('/notice') ): alert(data.msg)              
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <S.NoticeContainer>
            <S.Header>
                <S.UrlText>공지사항 &gt; 공지사항 등록</S.UrlText>
                <S.Title>공지사항 등록
                    <S.Sub_Title>학생들에게 도움이 될만한 공지를 등록합니다.</S.Sub_Title>
                </S.Title>
            </S.Header>
            <S.InputContainer>
                <S.ItemList>
                    <S.Item>제목</S.Item>
                    <S.InputItem>
                        <S.S_Input placeholder="업체명을 입력해주세요." onChange={(e) => setTitle(e.target.value)} />
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.Notice_Item>내용</S.Notice_Item>
                    <S.InputItem>
                        <S.M_Input placeholder="내용을 입력해주세요." onChange={(e) => setContent(e.target.value)} />
                    </S.InputItem>
                </S.ItemList>
            </S.InputContainer>
            <S.BtnPlace>               
                <S.Cancel_Btn onClick={() => confirm('취소하시겠습니까?') ? Router.push('/notice') : null}>취소</S.Cancel_Btn>
                <S.Enroll_Btn onClick={() => confirm('등록하시겠습니까?') ? Enroll() : null}>등록</S.Enroll_Btn>
            </S.BtnPlace>
        </S.NoticeContainer>
    )
}

export default EnrollNotice;