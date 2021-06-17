import React from 'react';
import * as S from './style';

interface Props {
    info: any,
    idx: number
}

const EmploymentList:React.FC<Props> = ({info, idx}) => {
    const MAX_LENGTH = 2;

    return(
        <S.Container>
            <S.Number>{idx}</S.Number>
            <S.Name>{info.employmentAnnouncementName}</S.Name>
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
        </S.Container>
    )
}

export default EmploymentList;