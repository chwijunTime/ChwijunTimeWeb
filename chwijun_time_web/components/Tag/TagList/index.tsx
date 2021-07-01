import React, { useState } from 'react';
import * as S from './style';
import { deleteTag } from 'service/delete';
import { ModifyTagModal } from 'components/Modal';
import { MdDelete } from "react-icons/md";

interface Props {
    info: any,
    idx: number,
}

const TagList:React.FC<Props> = ({info, idx}) => {
    const [modal, handleModal] = useState(false);
     
    const Click_Delete = async () => {
        try {
            const { data } = await deleteTag(info.tagIdx);
            data.success ? (alert('삭제되었습니다.'), window.location.replace('/tag')) : null;
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <>
            <S.TagList>
                <S.Number>{idx}</S.Number>
                <S.Title>
                    <S.TitleText onClick={() => handleModal(true)}>{info.tagName}</S.TitleText>
                </S.Title>
                { localStorage.getItem('roles') === 'ROLE_Admin' && (
                    <S.Delete>
                        <MdDelete onClick={() => confirm("삭제하시겠습니까?") ? Click_Delete() : null} />
                    </S.Delete>
                )}
            </S.TagList>
            { modal && <ModifyTagModal handleModal={handleModal} idx={info.tagIdx} /> }          
        </>
    )
}

export default TagList;