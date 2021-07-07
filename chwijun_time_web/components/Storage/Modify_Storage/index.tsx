import React, { useState } from 'react';
import * as S from './style';
import Router from 'next/router';
import { TagModal } from 'components/Modal';
import { modifyStorage } from 'service/put';

interface Props {
    data: any,
    idx: number
}

const EnrollStorage:React.FC<Props> = ({ data, idx }) => {
    const [name, setName] = useState(data.workCompanyName);
    const [address, setAddress] = useState(data.workCompanyAddress);
    const [info, setInfo] = useState(data.tipsInfo);
    const [tag, setTag] = useState<string[]>(data.tagName);

    const [tagModal, setTagModal] = useState(false);
    
    const handleTagModal = (status: boolean) => {
        setTagModal(status);
    }

    const Enroll = async () => {
        try {
            const { data } = await modifyStorage(name, address, info, tag, idx);
                data.success ? (alert("수정되었습니다."), window.location.replace(`/storage/${idx}`)): alert(data.msg)              
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <S.Container>
            <S.Header>
                <S.UrlText>꿀팁 저장소 &gt; 꿀팁 저장소 수정</S.UrlText>
                <S.Title>꿀팁저장소 수정
                    <S.Sub_Title>자신이 등록한 꿀팁 게시글을 수정합니다.</S.Sub_Title>
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
                    <S.Item>꿀팁 정보</S.Item>
                    <S.InputItem>
                        <S.M_Input placeholder="꿀팁 정보를 입력해주세요." onChange={(e) => setInfo(e.target.value)} value={info} />
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
                <S.Cancel_Btn onClick={() => confirm('취소하시겠습니까?') ? Router.push('/storage') : null}>취소</S.Cancel_Btn>
                <S.Enroll_Btn onClick={() => confirm('수정하시겠습니까?') ? Enroll() : null}>수정</S.Enroll_Btn>
            </S.BtnPlace>
            { tagModal && 
              <TagModal handleModal={handleTagModal} currentTag={tag} handleTag={setTag} />
            }
        </S.Container>
    )
}

export default EnrollStorage;