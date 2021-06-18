import React, { useState } from 'react';
import * as S from './style';
import { deleteConsult } from 'service/delete';
import { ApplyModal } from 'components/Modal';
import moment from 'moment';
import { MdDelete } from "react-icons/md";
interface Props {
    info: any,
    idx: number
}

const JobNoticeList:React.FC<Props> = ({info, idx}) => {
    const status = useState(info.consultingStatus === 'No_Application' ? '신청중' :
     info.consultingStatus === 'Apply' ? '마감' : '');
    const [modal, handleModal] = useState(false);
    const [date, setDate] = useState<string>(moment(new Date(info.applicationDate)).format('yyyy-MM-DD HH:mm'));

    const Click_Apply = () => {
        handleModal(true);
    }
    const Click_Delete = async () => {
        const { data } = await deleteConsult(info.consultingIdx);
        data.success ? (alert('삭제되었습니다.'), window.location.replace('/consult') ): data.msg;
    }

    return(
        <>
            <S.Container>
                <S.Number>{idx}</S.Number>
                <S.Status status={info.consultingStatus === "No_Application"}>{status}</S.Status>
                <S.Date>{date}</S.Date>
                { localStorage.getItem('roles') === 'ROLE_User' && (
                    <S.Apply>
                        <S.Apply_Btn disabled={info.consultingStatus === "Apply"} 
                        status={info.consultingStatus === "No_Application"} onClick={() => Click_Apply()}>신청</S.Apply_Btn>
                    </S.Apply>
                )}
                { localStorage.getItem('roles') === 'ROLE_Admin' && (
                    <S.Apply>
                        <MdDelete onClick={() => confirm("삭제하시겠습니까?") ? Click_Delete() : null}>삭제</MdDelete>
                    </S.Apply>
                )}
            </S.Container>
            { modal && <ApplyModal handleModal={handleModal} consultIdx={info.consultingIdx} /> }
        </>
    )
}

export default JobNoticeList;