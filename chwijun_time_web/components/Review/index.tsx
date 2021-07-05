import React, { useEffect, useState } from 'react';
import * as S from './style';
import ReviewList from './ReviewList';
import { getAllReview, getSearchReview } from 'service/get';
import Pagenation from 'components/Pagenation';
import Router from 'next/router';
import { PenIcon } from 'public';

const ReviewComponent:React.FC = () => {
    const [reviewList, setReviewList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;
    const [currentList, setCurrentList] = useState<Object[]>([]);
    const [input, setInput] = useState('');

    async function getAllReviewList() {
        try {
            const { data } = await getAllReview();
            setReviewList(data.list);
        } catch (error) {
            console.log(error);
        }
    }
    const onSearch = async() => {
        try {
            const { data } = await getSearchReview(input);
            setReviewList(data.list);
            setCurrentPage(1);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {       
        getAllReviewList();
    }, [])
    useEffect(() => {
        setCurrentList(reviewList.slice(indexOfFirst, indexOfLast));
    }, [currentPage, reviewList])
    
    return(
        <S.NoticeContainer>
            <S.Header>
                <S.UrlText>HOME &gt; 면접 후기</S.UrlText>
                <S.HeaderPlace>
                    <S.HeaderTitle>면접 후기 및 회사 후기
                        <S.Sub_HeaderTitle>학생들이 본 면접후기 및 회사후기를 확인할 수 있습니다.</S.Sub_HeaderTitle>
                    </S.HeaderTitle>
                    <S.SearchPlace>
                        <S.SearchBar placeholder="업체명으로 검색..." onChange={(e) => setInput(e.target.value)} />
                        <S.SearchBtn onClick={() => onSearch()}>검색</S.SearchBtn>
                        <S.ResetBtn onClick={() => getAllReviewList()}>목록</S.ResetBtn>
                    </S.SearchPlace>
                </S.HeaderPlace>
            </S.Header>
            <S.Content>
                <S.Title>
                    <S.Number>번호</S.Number>
                    <S.Name>업체명</S.Name>
                    <S.Date>지원 날짜</S.Date>
                    <S.Tag>태그</S.Tag>
                </S.Title>
                    <S.ListPlace>
                        {currentList.length > 0 ? currentList.map((obj, idx) => {
                            return <ReviewList info={obj} idx={(currentPage-1) * 9 + idx + 1} key={idx} />
                        }) : <S.NotExistList>등록된 후기가 없습니다.</S.NotExistList>}
                    </S.ListPlace>
                    <S.OptionPlace>
                        <S.EnrollBtn onClick={() => Router.push('/review/enrollreview')}><PenIcon />글쓰기</S.EnrollBtn>                      
                    </S.OptionPlace>
                    <S.PageNationPlace>
                    { reviewList.length > 0 &&                        
                        <Pagenation totalPosts={reviewList.length} postPerPage={postPerPage} paginate={setCurrentPage} currentPage={currentPage} />                  
                    }
                    </S.PageNationPlace>
                </S.Content>
        </S.NoticeContainer>
    )
}

export default ReviewComponent;