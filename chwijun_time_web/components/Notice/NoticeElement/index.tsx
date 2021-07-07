import React, { useEffect, useState } from 'react';
import * as S from './style';
import { getIdxNotice } from 'service/get';
import Router from 'next/router';
import ModifyNotice from '../Modify_Notice';

const NoticeElement:React.FC = () => {
    const [noticeIdx, setNoticeIdx] = useState(typeof window !== 'undefined' ? window.location.href.split('/')[4] : '');
    const roles = typeof window !== 'undefined' ? localStorage.getItem('roles') : '';
    const [noticeInfo, setNoticeInfo] = useState<any>();
    const [modify, handleModify] = useState(false);
  
    useEffect(() => {
        async function getIdxNoticeList() {
            try {
                const { data } = await getIdxNotice(parseInt(noticeIdx));
                console.log(data);
                setNoticeInfo(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        getIdxNoticeList();
    }, [])
    
    return (
        !modify ? <S.NoticeContainer>     
            <S.Header>
                <S.UrlText>HOME &gt; 공지사항</S.UrlText>
                <S.HeaderPlace>               
                    <S.HeaderTitle>공지사항
                        <S.Sub_HeaderTitle>학생들에게 도움이 되는 소식들을 공지합니다.</S.Sub_HeaderTitle>
                    </S.HeaderTitle>
                    <S.ModifyPlace>
                        { roles === 'ROLE_Admin' && <S.ModifyBtn onClick={() => handleModify(true)}>수정</S.ModifyBtn> }
                    </S.ModifyPlace>
                </S.HeaderPlace>
            </S.Header>
            <S.ContentPlace>
                <S.TitlePlace>
                    <S.Title>{noticeInfo && noticeInfo.title}</S.Title>
                    <S.CreateDate>{noticeInfo && noticeInfo.createDated.split('T')[0]}</S.CreateDate>
                </S.TitlePlace>
                <S.Content>
                    { noticeInfo && 
                        noticeInfo.content.split('\n').map( line => {
                            return (<>{line}<br/></>)
                        })
                    }
                </S.Content>
                <S.BtnPlace>
                    <S.ListBtn onClick={() => Router.push('/notice')}>목록</S.ListBtn>
                </S.BtnPlace>
            </S.ContentPlace>
        </S.NoticeContainer> : <ModifyNotice info={noticeInfo} idx={parseInt(noticeIdx)} /> )    
    
}

export default NoticeElement;