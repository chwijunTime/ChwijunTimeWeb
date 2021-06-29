import React, { useState } from 'react';
import { submitAcceptJobNotice, submitRejectJobNotice } from 'service/post';
import * as S from './style';

interface Props {
    info: any,
    idx: number
}

const ApplyList:React.FC<Props> = ({info, idx}) => {
    let status;

    switch(info.applicationEmploymentStatus) {
        case 'Wait': status='대기중'; break;
        case 'Approve': status='승인'; break;
        case 'Reject': status='거절'; break;
    }

    const Approve_Btn = async () => {
        try {
            const { data } = await submitAcceptJobNotice(info.applicationEmploymentIdx);
            data.success ? (alert('수락되었습니다.'), window.location.replace('/jobnotice/applyjobnotice')) : alert(data.msg);
        } catch(error) {
            console.log(error);
        }
    }
    const Reject_Btn = async () => {
        try {
            const { data } = await submitRejectJobNotice(info.applicationEmploymentIdx);
            data.success ? (alert('거절되었습니다.'), window.location.replace('/jobnotice/applyjobnotice')) : alert(data.msg);
        } catch(error) {
            console.log(error);
        }
    }


    return(
        <S.Container>
            <S.Number>{idx}</S.Number>
            <S.Name>{info.employmentAnnouncementName}</S.Name>
            <S.Status>{status}</S.Status>
            <S.ClassNumber>{info.memberClassNumber}</S.ClassNumber>
            <S.Field>{info.recruitmentField}</S.Field>
            <S.BtnPlace>
                    <S.Btn status={true} onClick={() => Approve_Btn()} >수락</S.Btn>
                    <S.Btn status={false} onClick={() => Reject_Btn()}>거절</S.Btn>
            </S.BtnPlace>
        </S.Container>
    )
}

export default ApplyList;