import React from 'react';
import * as S from './style';
import { deleteApplyTag } from 'service/delete';
import { MdDelete } from "react-icons/md";

interface Props {
    info: any,
    idx: number,
}

const ApplyTagList:React.FC<Props> = ({info, idx}) => {

    const Click_Delete = async () => {
        try {
            const { data } = await deleteApplyTag(info.tagIdx);
            data.success ? (alert('삭제되었습니다.'), window.location.replace('/tag/applytag')) : null;
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <>
            <S.TagList>
                <S.Number>{idx}</S.Number>
                <S.Title>
                    <S.TitleText>{info.tagName}</S.TitleText>
                </S.Title>
                { localStorage.getItem('roles') === 'ROLE_Admin' && (
                    <S.Delete>
                        <MdDelete onClick={() => confirm("삭제하시겠습니까?") ? Click_Delete() : null} />
                    </S.Delete>
                )}
            </S.TagList>
        </>
    )
}

export default ApplyTagList;