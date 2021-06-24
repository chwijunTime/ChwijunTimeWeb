import React from 'react';
import * as S from './style';
import Router from 'next/router';
import { MdDelete } from "react-icons/md";
import { deleteEmployment } from 'service/delete';

interface Props {
    info: any
}

const EmploymentList:React.FC<Props> = ({info}) => {
    const MAX_LENGTH = 2;

    const Click_Delete = async () => {
        try {
            const { data } = await deleteEmployment(info.employmentConfirmationIdx);
            data.success ? (alert('삭제되었습니다.'), window.location.replace('/employment')) : null;
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <S.Container>
            <S.Generation>{info.employmentConfirmationGeneration}</S.Generation>
            <S.Name onClick={() => Router.push(`/employment/${info.employmentConfirmationIdx}`)}>{info.employmentConfirmationName}</S.Name>
            <S.Student>{info.studentName}</S.Student>
            <S.Area>{info.employmentConfirmationAreas}</S.Area>
            <S.TagPlace>
                { info.employmentConfirmationTags && info.employmentConfirmationTags.map((obj, idx) => {
                    return idx < MAX_LENGTH && <S.Tag key={idx}>{obj}</S.Tag> 
                 })                   
                }
                { info.employmentConfirmationTags && info.employmentConfirmationTags.length > MAX_LENGTH && 
                    <>외 {info.employmentConfirmationTags.length - MAX_LENGTH}개</>
                }
            </S.TagPlace>
            { localStorage.getItem('roles') === 'ROLE_Admin' && (
                <S.Delete>
                    <MdDelete onClick={() => confirm("삭제하시겠습니까?") ? Click_Delete() : null} />
                </S.Delete>
            )}  
        </S.Container>
    )
}

export default EmploymentList;