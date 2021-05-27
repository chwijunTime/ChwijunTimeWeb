import React, { useState } from 'react';
import * as S from './style';
import Calendar from 'components/Calendar';
import { TagModal } from 'components/Modal';

interface Props {

}

const JobNoticeComponent:React.FC = () => {
    const [date, setDate] = useState<string>();
    const [tagModal, setTagModal] = useState(false);

    const handleModal = (status: boolean) => {
        setTagModal(status);
    }

    return(
        <>
        <S.JobNoticeContainer open={tagModal} >      
            <S.Header>취업 공고 등록</S.Header>
            <S.Container>
                <S.Content>
                    <S.Components>
                        <S.Title>업체명</S.Title>  
                        <S.S_Input placeholder="업체명" />
                    </S.Components>
                    <S.Components>
                        <S.Title>채용 분야</S.Title>  
                        <S.S_Input placeholder="채용 분야" />
                    </S.Components>
                    <S.Components>
                        <S.Title>회사 설명</S.Title>  
                        <S.L_Input placeholder="회사 설명" />
                    </S.Components>
                    <S.Components>
                        <S.Title>우대 조건</S.Title>  
                        <S.S_Input placeholder="우대 조건" />
                    </S.Components>
                    <S.Components>
                        <S.Title>위치</S.Title>  
                        <S.S_Input placeholder="위치 (정확한 위치를 입력해주세요)" />
                    </S.Components>
                    <S.Sec_Components>
                        <S.Title>마감일</S.Title>  
                            <Calendar handleDate={setDate} />                      
                    </S.Sec_Components>
                    <S.Components>
                        <S.Title>기타 설명</S.Title>  
                        <S.M_Input placeholder="기타 설명" />
                    </S.Components>
                    <S.Sec_Components>
                        <S.Title>태그</S.Title> 
                        <S.Add_Btn onClick={() => setTagModal(!tagModal)}>+</S.Add_Btn>
                    </S.Sec_Components>
                </S.Content>
            </S.Container>
            
        </S.JobNoticeContainer>
        { tagModal && <TagModal handleModal={handleModal} /> }
        </>
    )
}

export default JobNoticeComponent;