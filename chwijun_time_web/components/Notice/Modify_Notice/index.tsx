import React, { useState } from 'react';
import * as S from './style';
import Router from 'next/router';
import { modifyNotice } from 'service/put';

interface Props {
    info: any,
    idx: number
}

const ModifyNotice:React.FC<Props> = ({ info, idx }) => {
    const [title, setTitle] = useState(info.title);
    const [content, setContent] = useState(info.content);

    const Modify = async () => {
        try {
            const { data } = await modifyNotice(title, content, idx);
            data.success ? (alert("수정되었습니다."), window.location.replace(`/notice/${idx}`)): alert(data.msg)              
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <S.NoticeContainer>
            <S.Header>
                <S.UrlText>공지사항 &gt; 공지사항 수정</S.UrlText>
                <S.Title>공지사항 수정
                    <S.Sub_Title>등록했던 공지를 수정합니다.</S.Sub_Title>
                </S.Title>
            </S.Header>
            <S.InputContainer>
                <S.ItemList>
                    <S.Item>제목</S.Item>
                    <S.InputItem>
                        <S.S_Input placeholder="업체명을 입력해주세요." onChange={(e) => setTitle(e.target.value)} value={title} />
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.Notice_Item>내용</S.Notice_Item>
                    <S.InputItem>
                        <S.M_Input placeholder="내용을 입력해주세요." onChange={(e) => setContent(e.target.value)} value={content} />
                    </S.InputItem>
                </S.ItemList>
            </S.InputContainer>
            <S.BtnPlace>               
                <S.Cancel_Btn onClick={() => confirm('취소하시겠습니까?') ? Router.push('/notice') : null}>취소</S.Cancel_Btn>
                <S.Enroll_Btn onClick={() => confirm('수정하시겠습니까?') ? Modify() : null}>수정</S.Enroll_Btn>
            </S.BtnPlace>
        </S.NoticeContainer>
    )
}

export default ModifyNotice;