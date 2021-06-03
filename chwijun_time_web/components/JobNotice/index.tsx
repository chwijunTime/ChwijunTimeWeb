import React, {useState, useEffect } from 'react';
import * as S from './style';
import JobComponent from './JobComponent';
import { Pagenation } from 'components';
import { getAllJobNotice } from 'service/get';
import Router from 'next/router';
import { PenIcon } from 'public/index';

const JobNoticeComponent:React.FC = () => {
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [currentList, setCurrentList] = useState<Object[]>([]);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage; 

    useEffect(() => {
        setCurrentList(posts.slice(indexOfFirst, indexOfLast));
    }, [currentPage])

    useEffect(() => {
        async function getAllJobNoticeList() {
            try {
                const { data } = await getAllJobNotice();
                setPosts(data.list);
            } catch(error) {
                console.log(error);
            }
        }
        getAllJobNoticeList();
    }, [])

    return(
        <S.JobNoticeContainer>
            <S.Header>취업 공고</S.Header>
            
            <S.Container>
                <S.SearchPlace>
                    <S.SearchBar placeholder="업체명으로 검색..." />                   
                </S.SearchPlace>
                <S.Title>
                    <S.Number>번호</S.Number>
                    <S.Name>업체명</S.Name>
                    <S.Field>채용 분야</S.Field>
                    <S.Deadline>공고일 / 마감일</S.Deadline>
                </S.Title>
                <S.Content>
                    <S.ListPlace>
                    {currentList.length > 0 ? currentList.map((obj: any, idx) => {
                        return <JobComponent name={obj.name} field={obj.recruitmentField} day={obj.deadLine} key={idx} />
                    }) : <S.NotExistList>등록된 취업공고가 없습니다.</S.NotExistList>}
                    </S.ListPlace>
                    <S.OptionPlace>
                        <S.EnrollBtn onClick={() => Router.push('/jobnotice/enrollJobNotice')}><PenIcon />글쓰기</S.EnrollBtn>
                    </S.OptionPlace>
                    <S.PageNationPlace>
                    { posts.length > 0 &&                       
                        <Pagenation totalPosts={posts.length} postPerPage={postPerPage} paginate={setCurrentPage} currentPage={currentPage} />                  
                    }
                    </S.PageNationPlace>
                </S.Content>
            </S.Container>
        </S.JobNoticeContainer>  
    )
}

export default JobNoticeComponent;