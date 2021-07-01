import React from 'react';
import * as S from './style';
import JobNotice from './JobNotice';

const MyPageComponent:React.FC = () => {
    const selected = '안녕';

    const ReturnList = () => {
        switch(selected) {
            case '안녕': return (<JobNotice  />)
        }
    }

    return(
        <S.NoticeContainer>
            <S.Header>
                <S.UrlText>HOME &gt; 마이페이지</S.UrlText>
                <S.HeaderTitle>마이페이지
                    <S.Sub_HeaderTitle>내 정보와 내가 등록한 글들을 확인할 수 있습니다.</S.Sub_HeaderTitle>
                </S.HeaderTitle>
            </S.Header>
            <S.Content>
                {ReturnList()}
            </S.Content>
        </S.NoticeContainer>
    )
}

export default MyPageComponent;