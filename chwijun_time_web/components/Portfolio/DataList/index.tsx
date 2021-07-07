import React, { useState } from 'react';
import * as S from './style';
import { MdDelete } from "react-icons/md";
import { deleteMyResume, deleteMyPortfolio } from 'service/delete';
import { ModifyPortfolioModal } from 'components/Modal';

interface Props {
    info: any,
    idx: number,
    isResume: boolean
}

const DataList:React.FC<Props> = ({info, idx, isResume}) => {
    const link = isResume ? info.resumeFileURL : info.notionPortfolioURL;
    const [modal, handleModal] = useState(false);

    const Delete_Portfolio = async () => {
        try {
            const { data } = await deleteMyPortfolio(info.memberPortfolioIdx);
            data.success ? (alert('삭제되었습니다.'), window.location.replace('/portfolio')) : null;
        } catch(error) {
            console.log(error);
        }
    }
    const Delete_Resume = async () => {
        try {
            const { data } = await deleteMyResume(info.memberResumeIdx);
            data.success ? (alert('삭제되었습니다.'), window.location.replace('/portfolio')) : null;
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <>
            <S.Container>
                <S.Number>{idx}</S.Number>        
                <S.Link target='_blank' href={`${link}`} rel="noreferrer">{link}</S.Link>
                <S.Modify>
                    <S.ModifyBtn onClick={() => handleModal(true)}>수정</S.ModifyBtn>
                </S.Modify>
                <S.Delete>
                    <MdDelete onClick={() => confirm('삭제하시겠습니까?') ?
                    ( isResume ? Delete_Resume() : Delete_Portfolio()) : null}>삭제</MdDelete>
                </S.Delete>
            </S.Container>
            { modal && <ModifyPortfolioModal handleModal={handleModal}
            idx={isResume ? info.memberResumeIdx : info.memberPortfolioIdx } isResume={isResume} />}
         </>
    )
}

export default DataList;