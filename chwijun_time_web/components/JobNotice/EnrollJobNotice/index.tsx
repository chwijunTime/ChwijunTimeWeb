import React, { useEffect, useState } from 'react';
import * as S from './style';
import Calendar from 'components/Calendar';
import { TagModal } from 'components/Modal';
import { submitEnrollJobNotice } from 'service/post';
import Router from 'next/router';

const JobNoticeComponent:React.FC = () => {
    const [name, setName] = useState<string>('');
    const [field, setField] = useState<string>('');
    const [intro, setIntro] = useState<string>('');
    const [sweetener, setSweetener] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [deadLine, setDeadLine] = useState<string>('');
    const [other, setOther] = useState<string>('');
    const [tag, setTag] = useState<string[]>([]);

    const [tagModal, setTagModal] = useState(false);

    const handleTag = (list: string[]) => {
        setTag(list);
    }
    const handleModal = (status: boolean) => {
        setTagModal(status);
    }

    useEffect(() => {
        handleTag(tag);
    }, [tag]);

    const EnrollClick = async () => {
        try {
            const { data } = await submitEnrollJobNotice(name, field, intro, sweetener, location, deadLine, other, tag);
            confirm("등록하시겠습니까?") ? (
                data.success ? (alert("등록되었습니다."), Router.push('/jobnotice') ): alert("등록에 실패하였습니다. 이유 : " + data.msg)  
            ) : null;
        } catch(error) {
            console.log(error);
        }        
    }

    return(
        <>
        <S.JobNoticeContainer open={tagModal} >      
            <S.Header>취업 공고 등록</S.Header>
            <S.Container>
                <S.Content>
                    <S.Components>
                        <S.Title>업체명</S.Title>  
                        <S.S_Input placeholder="업체명" onChange={(e) => setName(e.target.value)} />
                    </S.Components>
                    <S.Components>
                        <S.Title>채용 분야</S.Title>  
                        <S.S_Input placeholder="채용 분야" onChange={(e) => setField(e.target.value)} />
                    </S.Components>
                    <S.Components>
                        <S.Title>회사 설명</S.Title>  
                        <S.L_Input placeholder="회사 설명" onChange={(e) => setIntro(e.target.value)} />
                    </S.Components>
                    <S.Components>
                        <S.Title>우대 조건</S.Title>  
                        <S.S_Input placeholder="우대 조건" onChange={(e) => setSweetener(e.target.value)} />
                    </S.Components>
                    <S.Components>
                        <S.Title>위치</S.Title>  
                        <S.S_Input placeholder="위치 (정확한 위치를 입력해주세요)" onChange={(e) => setLocation(e.target.value)} />
                    </S.Components>
                    <S.Sec_Components>
                        <S.Title>마감일</S.Title>  
                            <Calendar handleDate={setDeadLine} />                      
                    </S.Sec_Components>
                    <S.Components>
                        <S.Title>기타 설명</S.Title>  
                        <S.M_Input placeholder="기타 설명" onChange={(e) => setOther(e.target.value)} />
                    </S.Components>
                    <S.Sec_Components>
                        <S.Title>태그</S.Title>
                        {tag && tag.map((obj, idx) => {
                        return <S.Tag key={idx}>{obj}</S.Tag>
                        })}
                        <S.Add_Btn onClick={() => setTagModal(!tagModal)}>+</S.Add_Btn>
                    </S.Sec_Components>
                    <S.BtnPlace>
                        <S.Enroll_Btn onClick={() => EnrollClick()}>등록</S.Enroll_Btn>
                        <S.Cancel_Btn onClick={() => (confirm("취소하시겠습니까?") ? Router.push('/jobnotice') : null)}>취소</S.Cancel_Btn>
                    </S.BtnPlace>                  
                </S.Content>              
            </S.Container>
        </S.JobNoticeContainer>
        { tagModal && <TagModal handleModal={handleModal} handleTag={handleTag} currentTag={tag} /> }
        </>
    )
}

export default JobNoticeComponent;