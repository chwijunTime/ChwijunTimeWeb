import React from 'react';
import * as S from './style';
import Router from 'next/router';
import { MdDelete } from "react-icons/md";
import { deleteReview } from 'service/delete';

interface Props {
    info: any,
    idx: number
}

const ReviewList:React.FC<Props> = ({info, idx}) => {
    const MAX_LENGTH = 2;

    const Click_Delete = async () => {
        try {
            const { data } = await deleteReview(info.companyReviewIdx);
            data.success ? (alert('삭제되었습니다.'), window.location.replace('/review')) : null;
        } catch(error) {
            console.log(error);
        }   
    }

    return(
        <S.Container>
            <S.Number>{idx}</S.Number>
            <S.Name onClick={() => Router.push(`review/${info.companyReviewIdx}`)}>{info.companyName}</S.Name>
            <S.Date>{info.companyDateofApplication}</S.Date>
            <S.TagPlace>
                { info.companyReviewTags && info.companyReviewTags.map((obj, idx) => {
                    return idx < MAX_LENGTH && <S.Tag key={idx}>{obj}</S.Tag> 
                 })                   
                }
                { info.companyReviewTags && info.companyReviewTags.length > MAX_LENGTH && 
                    <>외 {info.companyReviewTags.length - MAX_LENGTH}개</>
                }
            </S.TagPlace>            
            <S.Delete>
                    <MdDelete onClick={() => confirm("삭제하시겠습니까?") ? Click_Delete() : null}>삭제</MdDelete>
            </S.Delete>
        </S.Container>
    )
}

export default ReviewList;