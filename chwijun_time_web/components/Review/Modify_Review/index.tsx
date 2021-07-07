import React, { useState } from 'react';
import * as S from './style';
import Router from 'next/router';
import { TagModal } from 'components/Modal';
import { modifyReview } from 'service/put';
import Calendar from 'components/Calendar';

interface Props {
    info: any,
    idx: number
}

const EnrollJobNotice:React.FC<Props> = ({ info, idx }) => {
    const [name, setName] = useState(info.companyName);
    const [review, setReview] = useState(info.companyReviews);
    const [address, setAddress] = useState(info.companyAddress);
    const [date, setDate] = useState(info.companyDateofApplication);   
    const [cost, setCost] = useState(info.companyCost);
    const [question, setQuestion] = useState(info.companyFrequentlyAskedQuestions); 
    const [tag, setTag] = useState<string[]>(info.companyReviewTags);

    const [tagModal, setTagModal] = useState(false);

    const handleTagModal = (status: boolean) => {
        setTagModal(status);
    }

    const Modify = async () => {
        try {
            const { data } = await modifyReview(name, review, address, date, question, cost, tag, idx);
            data.success ? (alert("수정되었습니다."), window.location.replace(`/review/${idx}`) ): alert(data.msg)              
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <S.ReviewContainer>
            <S.Header>
                <S.UrlText>면접 후기 &gt; 면접 후기 수정</S.UrlText>
                <S.Title>면접 후기 및 회사 후기 수정
                    <S.Sub_Title>자신이 등록한 면접 후기 또는 회사 후기를 수정합니다.</S.Sub_Title>
                </S.Title>
            </S.Header>
            <S.InputContainer>
                <S.ItemList>
                    <S.Item>업체명</S.Item>
                    <S.InputItem>
                        <S.S_Input placeholder="업체명을 입력해주세요." onChange={(e) => setName(e.target.value)} value={name} />
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.Item>주소</S.Item>
                    <S.InputItem>
                        <S.Address_Input placeholder="주소를 입력해주세요." onChange={(e) => setAddress(e.target.value)} value={address} />
                        <S.SubText>※ 정확한 주소를 입력해주세요.</S.SubText>
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.ETC_Item>회사 리뷰</S.ETC_Item>
                    <S.InputItem>
                    <S.M_Input placeholder="회사리뷰를 입력해주세요." onChange={(e) => setReview(e.target.value)} value={review} />
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.ETC_Item>자주나온 질문</S.ETC_Item>
                    <S.InputItem>
                    <S.L_Input placeholder="자주나온 질문들을 입력해주세요." onChange={(e) => setQuestion(e.target.value)} value={question} />
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.Item>비용</S.Item>
                    <S.InputItem>
                        <S.Cost_Input placeholder="비용" onChange={(e) => setCost(e.target.value)} value={cost} /> &nbsp;원
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.Item>지원 날짜</S.Item>
                    <S.InputItem>
                        <Calendar handleDate={setDate} isDate={false} />
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.Item>태그</S.Item>
                    <S.InputItem>
                        { tag.map((obj, idx) => {
                            return <S.Tag key={idx}>{obj}</S.Tag>
                        })}
                        <S.Tag_Btn onClick={() => handleTagModal(true)}>태그 선택</S.Tag_Btn>
                    </S.InputItem>
                </S.ItemList>
            </S.InputContainer>
            <S.BtnPlace>               
                <S.Cancel_Btn onClick={() => confirm('취소하시겠습니까?') ? Router.push('/review') : null}>취소</S.Cancel_Btn>
                <S.Enroll_Btn onClick={() => confirm('수정하시겠습니까?') ? Modify() : null}>수정</S.Enroll_Btn>
            </S.BtnPlace>
            { tagModal && 
              <TagModal handleModal={handleTagModal} currentTag={tag} handleTag={setTag} />
            }
        </S.ReviewContainer>
    )
}

export default EnrollJobNotice;