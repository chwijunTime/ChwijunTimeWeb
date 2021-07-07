import React, { useEffect, useState } from 'react';
import * as S from './style';
import { getIdxEmployment } from 'service/get';
import Router from 'next/router';
import ModifyEmployment from '../Modify_Employment';

const EmploymentElement:React.FC = () => {
    const [employmentIdx, setEmploymentIdx] = useState(typeof window !== 'undefined' ? window.location.href.split('/')[4] : '');
    const roles = typeof window !== 'undefined' ? localStorage.getItem('roles') : '';
    const [employmentInfo, setEmploymentInfo] = useState<any>();
    const [modify, handleModify] = useState(false);
  
    useEffect(() => {
        async function getIdxEmploymentList() {
            try {
                const { data } = await getIdxEmployment(parseInt(employmentIdx));
                console.log(data);
                setEmploymentInfo(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        getIdxEmploymentList();
    }, [])
    
    return(
        !modify ?
        <S.EmploymentContainer>       
            <S.Header>
                <S.UrlText>HOME &gt; 취업확정 현황</S.UrlText>
                <S.HeaderPlace>
                    <S.HeaderTitle>취업확정 현황
                        <S.Sub_HeaderTitle>학생들의 취업확정 현황 정보입니다.</S.Sub_HeaderTitle>
                    </S.HeaderTitle>
                    <S.ModifyPlace>
                        { roles === 'ROLE_Admin' && <S.ModifyBtn onClick={() => handleModify(true)}>수정</S.ModifyBtn> }
                    </S.ModifyPlace>
                </S.HeaderPlace>
            </S.Header>
            <S.ContentPlace>
                <S.TitlePlace>{ employmentInfo && employmentInfo.employmentConfirmationName }</S.TitlePlace>
                <S.Content>
                    <S.Property>주소</S.Property>
                    <S.Explain>{ employmentInfo && employmentInfo.employmentConfirmationAddress }</S.Explain>

                    <S.Property>회사 사이트</S.Property>
                    <a href={employmentInfo && employmentInfo.employmentConfirmationSite} target="_blank">
                    {employmentInfo && employmentInfo.employmentConfirmationSite}</a>
                    
                    <S.Property>기타</S.Property>
                    <S.Explain>{ employmentInfo && employmentInfo.employmentConfirmationEtc }</S.Explain>

                    <S.Property>기수</S.Property>
                    <S.Explain>{ employmentInfo && employmentInfo.employmentConfirmationGeneration }</S.Explain>

                    <S.Property>학생 이름</S.Property>
                    <S.Explain>{ employmentInfo && employmentInfo.studentName }</S.Explain>

                    <S.Property>태그</S.Property>
                    { employmentInfo && 
                        employmentInfo.employmentConfirmationTags.map((obj, idx) => {
                            return <S.Explain key={idx}>{obj}</S.Explain>
                        })
                    }
                </S.Content>
                <S.BtnPlace>
                    <S.ListBtn onClick={() => Router.push('/employment')}>목록</S.ListBtn>
                </S.BtnPlace>
            </S.ContentPlace>
        </S.EmploymentContainer> : <ModifyEmployment info={employmentInfo} idx={parseInt(employmentIdx)} />
    )
}

export default EmploymentElement;