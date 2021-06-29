import React, { useState } from 'react';
import * as S from './style';
import Router from 'next/router';
import { deleteJobNotice } from 'service/delete'; 
import { MdDelete } from "react-icons/md";
import { JobApplyModal } from 'components/Modal';

interface Props {
    info: any,
    idx: number
}

const JobNoticeList:React.FC<Props> = ({info, idx}) => {
    const MAX_LENGTH = 2;
    const [modal, handleModal] = useState(false);

    const Click_Delete = async () => {
        try {
            const { data } = await deleteJobNotice(info.employmentAnnouncementIdx);
            data.success ? (alert('삭제되었습니다.'), window.location.replace('/jobnotice')) : null;
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <>
        <S.Container>
            <S.Number>{idx}</S.Number>
            <S.Name onClick={() => Router.push(`jobnotice/${info.employmentAnnouncementIdx}`)}>{info.employmentAnnouncementName}</S.Name>
            <S.Field>{info.recruitmentField}</S.Field>
            <S.Location>{info.employmentAnnouncementAddress}</S.Location>
            <S.TagPlace>
                { info.employmentAnnouncementTags && info.employmentAnnouncementTags.map((obj, idx) => {
                    return idx < MAX_LENGTH && <S.Tag key={idx}>{obj}</S.Tag> 
                 })                   
                }
                { info.employmentAnnouncementTags && info.employmentAnnouncementTags.length > MAX_LENGTH && 
                    <>외 {info.employmentAnnouncementTags.length - MAX_LENGTH}개</>
                }
            </S.TagPlace>
            { localStorage.getItem('roles') === 'ROLE_Admin' && (
                <S.Delete>
                    <MdDelete onClick={() => confirm("삭제하시겠습니까?") ? Click_Delete() : null} />
                </S.Delete>
            )}
            { localStorage.getItem('roles') === 'ROLE_User' && (
                <S.Apply>
                    <S.Apply_Btn onClick={() =>  handleModal(true)}>신청</S.Apply_Btn>
                </S.Apply>
            )}
        </S.Container>
        { modal && <JobApplyModal handleModal={handleModal} idx={info.employmentAnnouncementIdx} />}
        </>
    )
}

export default JobNoticeList;