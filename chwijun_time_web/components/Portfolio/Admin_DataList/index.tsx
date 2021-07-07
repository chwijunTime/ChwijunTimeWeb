import React, { useState } from 'react';
import * as S from './style';
import { CorrectionModal } from 'components/Modal';

interface Props {
    info: any,
    idx: number
}

const DataList:React.FC<Props> = ({info, idx}) => {
    const status = useState(info.correctionStatus === 'Correction_Applying' ? '신청중' : 
    (info.correctionStatus === 'Correction_Successful' ? '첨삭 완료' :
    (info.correctionStatus === 'Correction_Rejection' ? '거절' : '' )))
    const link = info.correctionType === 'Resume' ? info.resumeFileURL : 
    (info.correctionType === 'Portfolio' ? info.notionPortfolioURL : null);
    const [modal, setModal] = useState(false);
    const [clicked, setClicked] = useState(false);

    const Btn_OnClick = (status: boolean) => {  
        setClicked(status); 
        setModal(true);
    }

    return(
        <>
            <S.Container>
                <S.Number>{idx}</S.Number>
                <S.Kind>{info.correctionType}</S.Kind>
                <S.Status status={status}>{status}</S.Status>
                {console.log(link)}
                <S.ClassNumber>{info.memberClassNumber}</S.ClassNumber>          
                <S.Link target='_blank' href={`${link}`} rel="noreferrer">{link}</S.Link>
                <S.BtnPlace>
                    <S.Btn status={true} onClick={() => Btn_OnClick(true)}>수락</S.Btn>
                    <S.Btn status={false} onClick={() => Btn_OnClick(false)}>거절</S.Btn>
                </S.BtnPlace>
            </S.Container>
            { modal && <CorrectionModal classNumber={info.memberClassNumber} idx={info.correctionApplyIdx}
            handleModal={setModal} clicked={clicked} /> }
        </>
    )
}

export default DataList;