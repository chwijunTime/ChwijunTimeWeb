import React, { useEffect, useState } from 'react';
import * as S from './style';
import JobNoticeList from './../JobNoticeList';
import { getAllJobNotice } from 'service/get';
import Pagenation from 'components/Pagenation';
import Router from 'next/router';
import { PenIcon } from 'public/index';

const JobNoticeComponent:React.FC = () => {
    const [jobNoticeList, setJobNoticeList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentList, setCurrentList] = useState<Object[]>([]);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage; 
    const [input, setInput] = useState('');

    useEffect(() => {
        setCurrentList(jobNoticeList.slice(indexOfFirst, indexOfLast));
    }, [currentPage, jobNoticeList])
    
    useEffect(() => {
        async function getAllJobNoticeList() {
            try {
                const { data } = await getAllJobNotice();
                setJobNoticeList(data.list);
            } catch (error) {
                console.log(error);
            }
        }
        getAllJobNoticeList();
    }, [])
    
    const onSearch = () => {
        
    }

    return (
        <S.MouContainer>
            <S.Header>
                <S.UrlText>HOME &gt; 취업 공고</S.UrlText>
                <S.HeaderPlace>
                    <S.HeaderTitle>취업 공고
                        <S.Sub_HeaderTitle>학교에 들어온 취업 공고 리스트입니다.</S.Sub_HeaderTitle>
                    </S.HeaderTitle>
                    <S.SearchPlace>
                        <S.SearchBar placeholder="검색..." onChange={(e) => setInput(e.target.value)} />
                        <S.SearchBtn>검색</S.SearchBtn>
                    </S.SearchPlace>
                </S.HeaderPlace>
            </S.Header>          
            <S.Content>
                <S.Title>
                    <S.Number>번호</S.Number>
                    <S.Name>업체명</S.Name>
                    <S.Field>채용분야</S.Field>
                    <S.Location>지역</S.Location>
                    <S.Tag>태그</S.Tag>
                </S.Title>
                <S.ListPlace>
                    {currentList.length > 0 ? currentList.map((obj, idx) => {
                        return <JobNoticeList info={obj} idx={ currentPage * idx + 1} key={idx} />
                    }) : <S.NotExistList>등록된 취업공고가 없습니다.</S.NotExistList>}
                </S.ListPlace>
                <S.OptionPlace>
                    <S.EnrollBtn onClick={() => Router.push('/jobNotice/enrolljobnotice')}><PenIcon />등록</S.EnrollBtn>
                </S.OptionPlace>
                <S.PageNationPlace>
                    { jobNoticeList.length > 0 &&                        
                        <Pagenation totalPosts={jobNoticeList.length} postPerPage={postPerPage} paginate={setCurrentPage} currentPage={currentPage} />                  
                    }
                </S.PageNationPlace>
            </S.Content>
        </S.MouContainer>
    )
}

export default JobNoticeComponent;