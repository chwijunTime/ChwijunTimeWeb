import React, { useState } from 'react';
import * as S from './style';
import MyPortfolio from './MyPortfolio';
import MyResume from './MyResume';
import MyCorrection from './MyCorrection';
import MyConsult from './MyConsult';
import MyReview from './MyReview';
import MyApplyCorrection from './MyApplyCorrection';
import MyStorage from './MyStorage';
import JobNotice from './MyJobNotice';

const MyPageComponent:React.FC = () => {
    const [selected, setSelected] = useState('취업공고');

    const switchContent = () => {
        switch(selected) {
            case '취업공고': return <JobNotice />;
            case '면접후기': return <MyReview />;
            case '상담신청': return <MyConsult />;
            case '첨삭': return <MyCorrection />;
            case '첨삭신청': return <MyApplyCorrection />;
            case '포트폴리오': return <MyPortfolio />;
            case '이력서': return <MyResume />;
            case '꿀팁': return <MyStorage />;
            default: return '';
        }
    }

    return(
        <S.NoticeContainer>
            <S.Header>
                <S.UrlText>HOME &gt; 마이페이지</S.UrlText>
                <S.HeaderPlace>
                    <S.HeaderTitle>마이페이지
                        <S.Sub_HeaderTitle>내가 등록한 게시글과 나의 정보를 확인할 수 있습니다.</S.Sub_HeaderTitle>
                    </S.HeaderTitle>
                    <S.SelectPlace>
                        <S.SelectBox onChange={(e) => setSelected(e.target.value)}>
                            <option value="취업공고">취업공고</option>
                            <option value="면접후기">면접후기</option>
                            <option value="상담신청">상담신청</option>
                            <option value="첨삭">첨삭</option>
                            <option value="첨삭신청">첨삭신청</option>
                            <option value="포트폴리오">포트폴리오</option>
                            <option value="이력서">이력서</option>
                            <option value="꿀팁">꿀팁</option>
                        </S.SelectBox>
                    </S.SelectPlace>
                </S.HeaderPlace>
            </S.Header>
            <S.Content>
                    { switchContent() }
                </S.Content>
        </S.NoticeContainer>
    )
}

export default MyPageComponent;