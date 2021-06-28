import React, { useEffect, useState } from 'react';
import * as S from './style';
import { getIdxStorage } from 'service/get';
import Router from 'next/router';

const StorageElement:React.FC = () => {
    const [storageIdx, setStorageIdx] = useState(typeof window !== 'undefined' ? window.location.href.split('/')[4] : '');
    const [storageInfo, setStorageInfo] = useState<any>();
  
    useEffect(() => {
        async function getIdxStorageList() {
            try {
                const { data } = await getIdxStorage(parseInt(storageIdx));
                console.log(data);
                setStorageInfo(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        getIdxStorageList();
    }, [])
    
    return(
        <S.MouContainer>       
            <S.Header>
                <S.UrlText>HOME &gt; 꿀팁 저장소</S.UrlText>
                <S.HeaderTitle>꿀팁 저장소
                    <S.Sub_HeaderTitle>취업에 도움이 될만한 꿀팁들을 확인할 수 있습니다.</S.Sub_HeaderTitle>
                </S.HeaderTitle>
            </S.Header>
            <S.ContentPlace>
                <S.TitlePlace>{ storageInfo && storageInfo.workCompanyName }</S.TitlePlace>
                <S.Content>
                    <S.Property>주소</S.Property>
                    <S.Explain>{ storageInfo && storageInfo.workCompanyAddress }</S.Explain>
                    
                    <S.Property>꿀팁 정보</S.Property>
                    <S.Explain>{ storageInfo && storageInfo.tipsInfo }</S.Explain>

                    { storageInfo && (
                            <>
                                <S.Property>태그</S.Property>
                                {
                                storageInfo.tagName.map((obj, idx) => {
                                    return <S.Explain key={idx}>{obj}</S.Explain>
                                })
                                }                   
                            </>
                    )}
                </S.Content>
                <S.BtnPlace>
                    <S.ListBtn onClick={() => Router.push('/storage')}>목록</S.ListBtn>
                </S.BtnPlace>
            </S.ContentPlace>
        </S.MouContainer>
    )
}

export default StorageElement;