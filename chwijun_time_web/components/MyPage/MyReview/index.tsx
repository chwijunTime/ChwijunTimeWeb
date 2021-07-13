import React, { useState, useEffect } from 'react';
import * as S from './style';
import DataList from '../../Review/ReviewList';
import { getMyPageReview } from 'service/get';
import Pagenation from 'components/Pagenation';

const MyReview = () => {
    const [reviewList, setReviewList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;
    const [currentList, setCurrentList] = useState<Object[]>([]);

    useEffect(() => {
        async function getMyPageReviewList() {
            try {
                const { data } = await getMyPageReview();
                setReviewList(data.list);
            } catch (error) {
                console.log(error);
            }
        }
        getMyPageReviewList();
    }, [])

    useEffect(() => {
        setCurrentList(reviewList.slice(indexOfFirst, indexOfLast));
    }, [currentPage, reviewList])

    return (
        <>
            <S.ListPlace>
                {currentList.length > 0 ? currentList.map((obj, idx) => {
                    return <DataList info={obj} idx={(currentPage-1) * 9 + idx + 1} key={idx} />
                }) : <S.NotExistList>등록한 꿀팁이 없습니다.</S.NotExistList>}
            </S.ListPlace>
            <S.OptionPlace />
            <S.PageNationPlace>
            { reviewList.length > 0 &&
                <Pagenation totalPosts={reviewList.length} postPerPage={postPerPage} paginate={setCurrentPage} currentPage={currentPage} />                  
            }
            </S.PageNationPlace>
        </>
    )
}

export default MyReview;