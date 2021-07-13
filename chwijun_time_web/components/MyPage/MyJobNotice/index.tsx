import React, { useState, useEffect } from 'react';
import * as S from './style';
import DataList from '../../JobNotice/JobNoticeList';
import { getMyPageJobNotice } from 'service/get';
import Pagenation from 'components/Pagenation';

const MyJobNotice = () => {
    const [jobNoticeList, setJobNoticeList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;
    const [currentList, setCurrentList] = useState<Object[]>([]);

    useEffect(() => {
        async function getMyPageJobNoticeList() {
            try {
                const { data } = await getMyPageJobNotice();
                setJobNoticeList(data.list);
            } catch (error) {
                console.log(error);
            }
        }
        getMyPageJobNoticeList();
    }, [])

    useEffect(() => {
        setCurrentList(jobNoticeList.slice(indexOfFirst, indexOfLast));
    }, [currentPage, jobNoticeList])

    return (
        <>
            <S.Title>
                <S.Number>번호</S.Number>
                <S.Name>업체명</S.Name>
                <S.Field>채용분야</S.Field>
            </S.Title>
            <S.ListPlace>
                {currentList.length > 0 ? currentList.map((obj, idx) => {
                    return <DataList info={obj} idx={(currentPage-1) * 9 + idx + 1} key={idx} />
                }) : <S.NotExistList>등록한 취업공고가 없습니다.</S.NotExistList>}
            </S.ListPlace>  
            <S.OptionPlace />
            <S.PageNationPlace>
            { jobNoticeList.length > 0 &&
                <Pagenation totalPosts={jobNoticeList.length} postPerPage={postPerPage} paginate={setCurrentPage} currentPage={currentPage} />                  
            }
            </S.PageNationPlace>
        </>
    )
}

export default MyJobNotice;