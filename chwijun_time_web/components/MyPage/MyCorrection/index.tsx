import React, { useState, useEffect } from 'react';
import * as S from './style';
import DataList from './../CorrectionList';
import { getMyPageCorrection } from 'service/get';
import Pagenation from 'components/Pagenation';

const MyCorrection = () => {
    const [correctionList, setCorrectionList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;
    const [currentList, setCurrentList] = useState<Object[]>([]);

    useEffect(() => {
        async function getMyPageCorrectionList() {
            try {
                const { data } = await getMyPageCorrection();
                setCorrectionList(data.list);
            } catch (error) {
                console.log(error);
            }
        }
        getMyPageCorrectionList();
    }, [])

    useEffect(() => {
        setCurrentList(correctionList.slice(indexOfFirst, indexOfLast));
    }, [currentPage, correctionList])

    return (
        <>
            <S.ListPlace>
                {currentList.length > 0 ? currentList.map((obj, idx) => {
                    return <DataList info={obj} idx={(currentPage-1) * 9 + idx + 1} key={idx} />
                }) : <S.NotExistList>완료된 포트폴리오나 이력서가 없습니다.</S.NotExistList>}
            </S.ListPlace>  
            <S.OptionPlace />
            <S.PageNationPlace>
            { correctionList.length > 0 &&
                <Pagenation totalPosts={correctionList.length} postPerPage={postPerPage} paginate={setCurrentPage} currentPage={currentPage} />                  
            }
            </S.PageNationPlace>
        </>
    )
}

export default MyCorrection;