import React, { useEffect, useState } from 'react';
import * as S from './style';
import Router from 'next/router';
import { submitEnrollNotice } from 'service/post';
import Header from 'components/Header';

const EnrollNotice:React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const TempSave = () => {
        if(title === "" && content === "") {
            Router.push('/notice');
            return;
        }
        if(confirm("작성하신 내용을 임시 저장하시겠습니까?") == true) {
           sessionStorage.setItem('title', title);
           sessionStorage.setItem('content', content);
        } else {
            sessionStorage.setItem('title', '');
            sessionStorage.setItem('content', '');
        }
        Router.push('/notice');
    }

    const Enroll = async () => {
        try{
            if(title === "") {
                alert("제목을 입력해주세요.");
            } else if(content === "") {
                alert("내용을 입력해주세요.");
            }
            const { data } = await submitEnrollNotice(content, title);
            confirm("등록하시겠습니까?") ? (
                data.success ? (alert("등록되었습니다."), Router.push('/notice') ): alert(data.msg)              
            ) : alert("취소되었습니다.")
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(sessionStorage.getItem('title') == null) {
            return;
        } else if(sessionStorage.getItem('content') == null) {
            return;
        } else {
            setTitle(sessionStorage.getItem('title') || '');
            setContent(sessionStorage.getItem('content') || '');
        }       
    }, [])

    return(
        <S.EnrollNoticeContainer>
            <Header>공지사항 등록</Header>
            <S.TitlePlace>
                <S.TitleText>제목: </S.TitleText>
                <S.InputTitle placeholder="Enter a Title..." onChange={(e) => setTitle(e.target.value)} value={title} />
            </S.TitlePlace>
            <S.ContentPlace>
                <S.TitleText>내용: </S.TitleText>
                <S.InputContent placeholder="Enter a Content..." onChange={(e) => setContent(e.target.value)} value={content}/>
            </S.ContentPlace>
            <S.BtnPlace>
                <S.EnrollBtn onClick={() => Enroll()}>등록</S.EnrollBtn>
                <S.CancleBtn onClick={() => TempSave()}>취소</S.CancleBtn>
            </S.BtnPlace>
        </S.EnrollNoticeContainer>
    )
}

export default EnrollNotice;