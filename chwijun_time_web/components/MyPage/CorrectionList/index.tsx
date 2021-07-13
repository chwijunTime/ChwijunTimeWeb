import React, { useState } from 'react';
import * as S from './style';
import { MyPageCorrectionModal } from 'components/Modal';

interface Props {
    info: any,
    idx: number
}

const DataList:React.FC<Props> = ({info, idx}) => {
    const status = useState<string>(info.correctionStatus === 'Correction_Applying' ? '신청중' : 
    (info.correctionStatus === 'Correction_Successful' ? '첨삭 완료' :
    (info.correctionStatus === 'Correction_Rejection' ? '거절' : '' )))
    const link = info.correctionType === 'Resume' ? info.resumeFileURL : 
    (info.correctionType === 'Portfolio' ? info.notionPortfolioURL : null);
    const [modal, setModal] = useState(false);

    return(
        <>
            <S.Container>
                <S.Number>{idx}</S.Number>
                <S.Kind onClick={() => setModal(true)}>{info.correctionType}</S.Kind>
                <S.Status stats={status}>{status}</S.Status>       
                <S.Link target='_blank' href={`${link}`} rel="noreferrer">{link}</S.Link>
            </S.Container>
            { modal && <MyPageCorrectionModal handleModal={setModal} info={info} /> }
        </>
    )
}

export default DataList;