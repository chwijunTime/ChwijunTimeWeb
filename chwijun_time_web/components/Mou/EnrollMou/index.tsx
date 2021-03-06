import React, { useState } from 'react';
import * as S from './style';
import Router from 'next/router';
import { TagModal, LocationModal } from 'components/Modal';
import { submitEnrollMou } from 'service/post';

const EnrollMou:React.FC = () => {
    const [name, setName] = useState('');
    const [business, setBusiness] = useState('');
    const [location, setLocation] = useState('');
    const [address, setAddress] = useState('');
    const [etc, setEtc] = useState('');
    const [salary, setSalary] = useState('');
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
            const { data } = await submitEnrollMou(name, business, location, address, etc, salary, tag);
                data.success ? (alert("등록되었습니다."), Router.push('/mou') ): alert(data.msg)              
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <S.MouContainer>
            <S.Header>
                <S.UrlText>협약업체 &gt; 협약업체 등록</S.UrlText>
                <S.Title>협약업체 등록
                    <S.Sub_Title>학교에 들어온 MOU 업체들을 등록합니다.</S.Sub_Title>
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
                    <S.Item>사업 분야</S.Item>
                    <S.InputItem>
                        <S.S_Input placeholder="사업 분야를 입력해주세요." onChange={(e) => setBusiness(e.target.value)} />
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
                    <S.Item>주소</S.Item>
                    <S.InputItem>
                    <S.Address_Input placeholder="주소를 입력해주세요." onChange={(e) => setAddress(e.target.value)} />
                    <S.SubText>※ 정확한 주소를 입력해주세요.</S.SubText>
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.Item>평균연봉</S.Item>
                    <S.InputItem>
                    <S.Salary_Input placeholder="연봉" onChange={(e) => setSalary(e.target.value + " 만원")} /> &nbsp; 만원
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.ETC_Item>회사소개</S.ETC_Item>
                    <S.InputItem>
                    <S.M_Input placeholder="회사소개를 입력해주세요." onChange={(e) => setEtc(e.target.value)} />
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

export default EnrollMou;