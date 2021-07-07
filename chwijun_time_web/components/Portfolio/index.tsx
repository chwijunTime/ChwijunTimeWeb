import React, { useState } from 'react';
import * as S from './style';
import MyPortfolio from './MyPortfolio';
import MyResume from './MyResume';

const PortfolioComponent:React.FC = () => {
    const [selected, setSelected] = useState('포트폴리오');

    return(
        <S.NoticeContainer>
            <S.Header>
                <S.UrlText>HOME &gt; 이력서 및 포트폴리오</S.UrlText>
                <S.HeaderPlace>
                    <S.HeaderTitle>이력서 및 포트폴리오
                        <S.Sub_HeaderTitle>나의 포트폴리오 및 이력서를 확인 및 등록할 수 있습니다.</S.Sub_HeaderTitle>
                    </S.HeaderTitle>
                    <S.SelectPlace>
                        <S.SelectBox onChange={(e) => setSelected(e.target.value)}>
                            <option value="포트폴리오">포트폴리오</option>
                            <option value="이력서">이력서</option>
                        </S.SelectBox>
                    </S.SelectPlace>
                </S.HeaderPlace>
            </S.Header>
            <S.Content>
                <S.Title>
                    <S.Number>번호</S.Number>
                    <S.Link>링크</S.Link>
                </S.Title>
                    { selected === '포트폴리오' && <MyPortfolio /> }
                    { selected === '이력서' && <MyResume /> }
                </S.Content>
        </S.NoticeContainer>
    )
}

export default PortfolioComponent;