import React, { useEffect, useState } from 'react';
import * as S from './style';
import Router from 'next/router';
import { getMyPageJobNotice } from 'service/get';
import { JobApproveModal } from 'components/Modal';

const MypageJobNoticeList:React.FC = () => {
    const [data, setData] = useState<any>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentList, setCurrentList] = useState<Object[]>([]);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;
    const [modal, handleModal] = useState(false);

    useEffect(() => {
        setCurrentList(data.slice(indexOfFirst, indexOfLast));
    }, [currentPage, data])
    
    useEffect(() => {
        async function getMypageJobNotice() {
            try {
                const { data } = await getMyPageJobNotice();
                setData(data.list);
            } catch(error) {
                console.log(error);
            }
        }
        getMypageJobNotice();
    }, []);

    return(
        <>
            <S.Title>
                <S.Number>번호</S.Number>
                <S.Name>업체명</S.Name>
                <S.Field>채용분야</S.Field>
                <S.Location>지역</S.Location>
                <S.Tag>태그</S.Tag>
            </S.Title>
            <S.ListPlace>
                {currentList.length > 0 ? currentList.map((obj, idx) => {
                    return <JobNoticeList info={obj} key={idx} idx={ (currentPage-1) * 9 + idx + 1} />
                }) : <S.NotExistList>등록된 취업공고가 없습니다.</S.NotExistList>}
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

export default MypageJobNoticeList;