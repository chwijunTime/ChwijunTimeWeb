import React, { useEffect, useState } from 'react';
import * as S from './style';
import ApplyList from './../ApplyList';
import { getAllApplyJobNotice } from 'service/get';
import Pagenation from 'components/Pagenation';

const ApplyJobNotice:React.FC = () => {
    const [applyList, setApplyList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentList, setCurrentList] = useState<Object[]>([]);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;

    useEffect(() => {
        setCurrentList(applyList.slice(indexOfFirst, indexOfLast));
    }, [currentPage, applyList])
    
    useEffect(() => {
        async function getAllApplyList() {
            try {
                const { data } = await getAllApplyJobNotice('All');
                setApplyList(data.list);
            } catch (error) {
                console.log(error);
            }
        }
        getAllApplyList();
    }, [])

    return (
        <S.ApplyContainer>
            <S.Header>
                <S.UrlText>HOME &gt; 취업 공고 &gt; 취업공고 신청조회</S.UrlText>
                <S.HeaderPlace>
                    <S.HeaderTitle>취업공고 신청
                        <S.Sub_HeaderTitle>취업공고 신청을 한 학생들 리스트입니다.</S.Sub_HeaderTitle>
                    </S.HeaderTitle>
                </S.HeaderPlace>
            </S.Header>
            <S.Content>
                <S.Title>
                    <S.Number>번호</S.Number>
                    <S.ClassNumber>학번</S.ClassNumber>
                    <S.Name>이름</S.Name>
                    <S.Date>날짜</S.Date>
                </S.Title>
                <S.ListPlace>
                    {currentList.length > 0 ? currentList.map((obj, idx) => {
                        return <ApplyList info={obj} idx={(currentPage-1) * 9 + idx + 1} key={idx} />
                    }) : <S.NotExistList>신청된 취업공고 목록이 없습니다.</S.NotExistList>}
                </S.ListPlace>
                <S.OptionPlace />
                <S.PageNationPlace>
                    { applyList.length > 0 &&                        
                        <Pagenation totalPosts={applyList.length} postPerPage={postPerPage} paginate={setCurrentPage} currentPage={currentPage} />                  
                    }
                </S.PageNationPlace>
            </S.Content>
        </S.ApplyContainer>
    )
}

export default ApplyJobNotice;