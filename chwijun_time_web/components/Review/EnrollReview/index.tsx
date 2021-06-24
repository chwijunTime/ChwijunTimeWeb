import React, { useState } from 'react';
import * as S from './style';
import Router from 'next/router';
import { TagModal } from 'components/Modal';
import { submitEnrollReview} from 'service/post';
import Calendar from 'components/Calendar';

const EnrollJobNotice:React.FC = () => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');   
    const [cost, setCost] = useState(0);
    const [question, setQuestion] = useState(''); 
    const [tag, setTag] = useState<string[]>([]);

    const [tagModal, setTagModal] = useState(false);

    const handleTagModal = (status: boolean) => {
        setTagModal(status);
    }

    const Enroll = async () => {
        try {
            const { data } = await submitEnrollReview(name, review, address, date, question, cost, tag);
            data.success ? (alert("등록되었습니다."), Router.push('/review') ): alert(data.msg)              
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <S.ReviewContainer>
            <S.Header>
                <S.UrlText>면접 후기 &gt; 면접 후기 등록</S.UrlText>
                <S.Title>면접 후기 및 회사 후기 등록
                    <S.Sub_Title>자신이 본 면접 후기 또는 회사 후기를 등록합니다.</S.Sub_Title>
                </S.Title>
            </S.Header>
            <S.InputContainer>
                <S.ItemList>
                    <S.Item>업체명</S.Item>
                    <S.InputItem>
                        <S.S_Input placeholder="업체명을 입력해주세요." onChange={(e) => setName(e.target.value)} />
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.Item>주소</S.Item>
                    <S.InputItem>
                        <S.Address_Input placeholder="주소를 입력해주세요." onChange={(e) => setAddress(e.target.value)} />
                        <S.SubText>※ 정확한 주소를 입력해주세요.</S.SubText>
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.ETC_Item>회사 리뷰</S.ETC_Item>
                    <S.InputItem>
                    <S.M_Input placeholder="회사리뷰를 입력해주세요." onChange={(e) => setReview(e.target.value)} />
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.ETC_Item>자주나온 질문</S.ETC_Item>
                    <S.InputItem>
                    <S.L_Input placeholder="자주나온 질문들을 입력해주세요." onChange={(e) => setQuestion(e.target.value)} />
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.Item>비용</S.Item>
                    <S.InputItem>
                        <S.Cost_Input placeholder="비용" onChange={(e) => setCost(e.target.value)} /> &nbsp;원
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
                <S.Enroll_Btn onClick={() => confirm('등록하시겠습니까?') ? Enroll() : null}>등록</S.Enroll_Btn>
            </S.BtnPlace>
            { tagModal && 
              <TagModal handleModal={handleTagModal} currentTag={tag} handleTag={setTag} />
            }
        </S.ReviewContainer>
    )
}

export default EnrollJobNotice;