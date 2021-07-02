import React, { useState, useEffect } from 'react';
import * as S from './style';
import DataList from '../DataList';
import { getMyPortfolio } from 'service/get';
import Pagenation from 'components/Pagenation';
import { PenIcon } from 'public/index';
import { EnrollCorrectionModal } from 'components/Modal';

const MyPortfolio = () => {
    const [portfolioList, setPortfolioList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;
    const [currentList, setCurrentList] = useState<Object[]>([]);
    const [modal, handleModal] = useState(false);
    
    useEffect(() => {
        async function getMyPortfolioList() {
            try {
                const { data } = await getMyPortfolio();
                setPortfolioList(data.list);
            } catch (error) {
                console.log(error);
            }
        }
        getMyPortfolioList();
    }, [])

    useEffect(() => {
        setCurrentList(portfolioList.slice(indexOfFirst, indexOfLast));
    }, [currentPage, portfolioList])

    return (
        <>
            <S.ListPlace>
                {currentList.length > 0 ? currentList.map((obj, idx) => {
                    return <DataList info={obj} idx={(currentPage-1) * 9 + idx + 1} isResume={false}  key={idx} />
                }) : <S.NotExistList>등록한 포트폴리오가 없습니다.</S.NotExistList>}
            </S.ListPlace>
            <S.OptionPlace>
                <S.EnrollBtn onClick={() => handleModal(true)}><PenIcon />등록</S.EnrollBtn>
            </S.OptionPlace>
            <S.PageNationPlace>
            { portfolioList.length > 0 &&
                <Pagenation totalPosts={portfolioList.length} postPerPage={postPerPage} paginate={setCurrentPage} currentPage={currentPage} />                  
            }
            </S.PageNationPlace>
            { modal && <EnrollCorrectionModal handleModal={handleModal} isResume={false} />}
        </>
    )
}

export default MyPortfolio;