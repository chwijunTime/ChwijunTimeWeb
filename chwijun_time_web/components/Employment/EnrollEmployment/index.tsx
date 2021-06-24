import React, { useState } from 'react';
import * as S from './style';
import Router from 'next/router';
import { TagModal, LocationModal } from 'components/Modal';
import { submitEnrollEmployment } from 'service/post';
import Calendar from 'components/Calendar';

const EnrollJobNotice:React.FC = () => {
    const [name, setName] = useState('');
    const [area, setArea] = useState('');
    const [address, setAddress] = useState('');   
    const [etc, setEtc] = useState(''); 
    const [generation, setGeneration] = useState('');
    const [site, setSite] = useState('');
    const [student, setStudent] = useState('');
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
            const { data } = await submitEnrollEmployment(name, area, address, etc,
                generation + "기", site, student, tag);
            data.success ? (alert("등록되었습니다."), Router.push('/employment') ): alert(data.msg)              
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <S.MouContainer>
            <S.Header>
                <S.UrlText>취업확정 현황 &gt; 취업확정 현황 등록</S.UrlText>
                <S.Title>취업확정 현황 등록
                    <S.Sub_Title>학생들의 취업확정 현황을 등록합니다.</S.Sub_Title>
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
                    <S.Item>지역</S.Item>
                    <S.InputItem>
                        { area !== '' && <S.Location>{area}</S.Location>}
                        <S.Location_Btn onClick={() => setLocationModal(true)}>지역 선택</S.Location_Btn>
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                <S.Item>주소</S.Item>
                    <S.InputItem>
                        <S.Address placeholder="주소를 입력해주세요." onChange={(e) => setAddress(e.target.value)} />
                        <S.SubText>※ 정확한 주소를 입력해주세요.</S.SubText>
                    </S.InputItem>
                </S.ItemList>              
                <S.ItemList>
                    <S.ETC_Item>기타정보</S.ETC_Item>
                    <S.InputItem>
                    <S.M_Input placeholder="기타정보를 입력해주세요." onChange={(e) => setEtc(e.target.value)} />
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.Item>회사 홈페이지</S.Item>
                    <S.InputItem>
                        <S.Site placeholder="홈페이지 사이트를 입력해주세요." onChange={(e) => setSite(e.target.value)} />
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.Item>기수</S.Item>
                    <S.InputItem>
                        <S.Generation placeholder="기수" onChange={(e) => setGeneration(e.target.value)} /> &nbsp;기
                    </S.InputItem>
                </S.ItemList>                
                <S.ItemList>
                    <S.Item>학생 이름</S.Item>
                    <S.InputItem>
                        <S.Student placeholder="학생 이름" onChange={(e) => setStudent(e.target.value)} />
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
                <S.Cancel_Btn onClick={() => confirm('취소하시겠습니까?') ? Router.push('/employment') : null}>취소</S.Cancel_Btn>
                <S.Enroll_Btn onClick={() => confirm('등록하시겠습니까?') ? Enroll() : null}>등록</S.Enroll_Btn>
            </S.BtnPlace>
            { tagModal && 
              <TagModal handleModal={handleTagModal} currentTag={tag} handleTag={setTag} />
            }
            { locationModal &&
              <LocationModal handleModal={handleLocationModal} currentLocation={area} handleLocation={setArea} />
            }
        </S.MouContainer>
    )
}

export default EnrollJobNotice;