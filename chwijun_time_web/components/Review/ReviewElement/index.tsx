import React, { useEffect, useState } from 'react';
import * as S from './style';
import { getIdxReview } from 'service/get';
import Router from 'next/router';
import ModifyReview from '../Modify_Review';

const ReviewElement:React.FC = () => {
    const [reviewIdx, setReviewIdx] = useState(typeof window !== 'undefined' ? window.location.href.split('/')[4] : '');
    const roles = typeof window !== 'undefined' ? localStorage.getItem('roles') : '';
    const [reviewInfo, setReviewInfo] = useState<any>();
    const [modify, handleModify] = useState(false);
  
    useEffect(() => {
        async function getIdxReviewInfo() {
            try {
                const { data } = await getIdxReview(parseInt(reviewIdx));
                console.log(data);
                setReviewInfo(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        getIdxReviewInfo();
    }, [])
    
    return(
        !modify ? <S.ReviewContainer>       
            <S.Header>
                <S.UrlText>HOME &gt; 면접 후기</S.UrlText>
                    <S.HeaderPlace>
                        <S.HeaderTitle>면접 후기 및 회사 후기
                            <S.Sub_HeaderTitle>학생들이 본 면접후기 및 회사후기를 확인할 수 있습니다.</S.Sub_HeaderTitle>
                        </S.HeaderTitle>
                        <S.ModifyPlace>
                            <S.ModifyBtn onClick={() => handleModify(true)}>수정</S.ModifyBtn>
                        </S.ModifyPlace>
                </S.HeaderPlace>
            </S.Header>
            <S.ContentPlace>
                <S.TitlePlace>{ reviewInfo && reviewInfo.companyName }</S.TitlePlace>
                <S.Content>
                    <S.Property>지원 날짜</S.Property>
                    <S.Explain>{ reviewInfo && reviewInfo.companyDateofApplication }</S.Explain>
                    
                    <S.Property>주소</S.Property>
                    <S.Explain>{ reviewInfo && reviewInfo.companyAddress }</S.Explain>

                    <S.Property>회사 리뷰</S.Property>
                    <S.Explain>{ reviewInfo && reviewInfo.companyReviews }</S.Explain>

                    <S.Property>자주 나온 질문</S.Property>
                    <S.Explain>{ reviewInfo && reviewInfo.companyFrequentlyAskedQuestions }</S.Explain>

                    <S.Property>비용</S.Property>
                    <S.Explain>{ reviewInfo && reviewInfo.companyCost } 원</S.Explain>

                    <S.Property>태그</S.Property>
                    { reviewInfo &&
                        reviewInfo.companyReviewTags.map((obj, idx) => {
                            return <S.Explain key={idx}>{obj}</S.Explain>
                        })
                    } 
                </S.Content>
                <S.BtnPlace>
                    <S.ListBtn onClick={() => Router.push('/review')}>목록</S.ListBtn>
                </S.BtnPlace>
            </S.ContentPlace>
        </S.ReviewContainer> : <ModifyReview info={reviewInfo} idx={parseInt(reviewIdx)} />
    )
}

export default ReviewElement;