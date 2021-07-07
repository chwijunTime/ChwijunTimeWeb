import React, { useState } from 'react';
import * as S from './style';
import Router from 'next/router';
import { TagModal, LocationModal } from 'components/Modal';
import { modifyJobNotice } from 'service/put';
import Calendar from 'components/Calendar';

interface Props {
    info: any,
    idx: number
}

const EnrollJobNotice:React.FC<Props> = ({ info, idx }) => {
    const [name, setName] = useState(info.employmentAnnouncementName);
    const [field, setField] = useState(info.recruitmentField);
    const [explain, setExplain] = useState(info.employmentAnnouncementExplanation);   
    const [condition, setCondition] = useState(info.preferentialConditions);
    const [location, setLocation] = useState(info.employmentAnnouncementAddress); 
    const [deadline, setDeadline] = useState(info.deadLine);
    const [etc, setEtc] = useState(info.employmentAnnouncementEtc);
    const [tag, setTag] = useState<string[]>(info.employmentAnnouncementTags);

    const [tagModal, setTagModal] = useState(false);
    const [locationModal, setLocationModal] = useState(false);

    const handleTagModal = (status: boolean) => {
        setTagModal(status);
    }
    const handleLocationModal = (status: boolean) => {
        setLocationModal(status);
    }

    const Modify = async () => {
        try {
            const { data } = await modifyJobNotice(name, field, explain, condition,
                location, etc, tag, idx);
            data.success ? (alert("수정되었습니다."), window.location.replace(`/jobnotice/${idx}`)): alert(data.msg)              
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <S.MouContainer>
            <S.Header>
                <S.UrlText>취업공고 &gt; 취업공고 수정</S.UrlText>
                <S.Title>취업공고 수정
                    <S.Sub_Title>등록한 취업공고를 수정합니다.</S.Sub_Title>
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
                    <S.ETC_Item>회사설명</S.ETC_Item>
                    <S.InputItem>
                    <S.M_Input placeholder="회사설명을 입력해주세요." onChange={(e) => setExplain(e.target.value)} value={explain} />
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
                        <S.S_Input placeholder="채용분야를 입력해주세요." onChange={(e) => setField(e.target.value)} value={field} />
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.Item>우대조건</S.Item>
                    <S.InputItem>
                        <S.Condition_Input placeholder="우대조건을 입력해주세요." onChange={(e) => setCondition(e.target.value)} value={condition} />
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.Item>마감일</S.Item>
                    <S.InputItem>
                        {deadline}
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.ETC_Item>기타정보</S.ETC_Item>
                    <S.InputItem>
                    <S.M_Input placeholder="기타정보를 입력해주세요." onChange={(e) => setEtc(e.target.value)} value={etc} />
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
                <S.Cancel_Btn onClick={() => confirm('취소하시겠습니까?') ? Router.push('/jobnotice') : null}>취소</S.Cancel_Btn>
                <S.Enroll_Btn onClick={() => confirm('수정하시겠습니까?') ? Modify() : null}>수정</S.Enroll_Btn>
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