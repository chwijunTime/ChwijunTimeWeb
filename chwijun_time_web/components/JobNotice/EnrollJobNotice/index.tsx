import React, { useState } from 'react';
import * as S from './style';
import Router from 'next/router';
import { TagModal, LocationModal } from 'components/Modal';
import { submitEnrollJobNotice } from 'service/post';
import Calendar from 'components/Calendar';

const EnrollJobNotice:React.FC = () => {
    const [name, setName] = useState('');
    const [field, setField] = useState('');
    const [explain, setExplain] = useState('');   
    const [condition, setCondition] = useState('');
    const [location, setLocation] = useState(''); 
    const [deadline, setDeadline] = useState('');
    const [etc, setEtc] = useState('');
    const [tag, setTag] = useState<string[]>([]);

    const [tagModal, setTagModal] = useState(false);
    const [locationModal, setLocationModal] = useState(false);

    const handleTagModal = (status: boolean) => {
        setTagModal(status);
    }
    const handleLocationModal = (status: boolean) => {
        setLocationModal(status);
    }

    const Enroll = async () => {
        try {
            const { data } = await submitEnrollJobNotice(name, field, explain, condition,
                location, deadline, etc, tag);
            data.success ? (alert("등록되었습니다."), Router.push('/jobnotice') ): alert(data.msg)              
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <S.MouContainer>
            <S.Header>
                <S.UrlText>취업공고 &gt; 취업공고 등록</S.UrlText>
                <S.Title>취업공고 등록
                    <S.Sub_Title>학교에 들어온 취업공고들을 등록합니다.</S.Sub_Title>
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
                    <S.ETC_Item>회사설명</S.ETC_Item>
                    <S.InputItem>
                    <S.M_Input placeholder="회사설명을 입력해주세요." onChange={(e) => setExplain(e.target.value)} />
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.Item>지역</S.Item>
                    <S.InputItem>
                        { location !== '' && <S.Location>{location}</S.Location>}
                        <S.Location_Btn onClick={() => setLocationModal(true)}>지역 선택</S.Location_Btn>
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                <S.Item>채용분야</S.Item>
                    <S.InputItem>
                        <S.S_Input placeholder="채용분야를 입력해주세요." onChange={(e) => setField(e.target.value)} />
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.Item>우대조건</S.Item>
                    <S.InputItem>
                        <S.Condition_Input placeholder="우대조건을 입력해주세요." onChange={(e) => setCondition(e.target.value)} />
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.Item>마감일</S.Item>
                    <S.InputItem>
                        <Calendar handleDate={setDeadline} isDate={true} />
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.ETC_Item>기타정보</S.ETC_Item>
                    <S.InputItem>
                    <S.M_Input placeholder="기타정보를 입력해주세요." onChange={(e) => setEtc(e.target.value)} />
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
                <S.Cancel_Btn onClick={() => confirm('취소하시겠습니까?') ? Router.push('/mou') : null}>취소</S.Cancel_Btn>
                <S.Enroll_Btn onClick={() => confirm('등록하시겠습니까?') ? Enroll() : null}>등록</S.Enroll_Btn>
            </S.BtnPlace>
            { tagModal && 
              <TagModal handleModal={handleTagModal} currentTag={tag} handleTag={setTag} />
            }
            { locationModal &&
              <LocationModal handleModal={handleLocationModal} currentLocation={location} handleLocation={setLocation} />
            }
        </S.MouContainer>
    )
}

export default EnrollJobNotice;