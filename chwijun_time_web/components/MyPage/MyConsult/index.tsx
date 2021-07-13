import React, { useState, useEffect } from 'react';
import * as S from './style';
import DataList from '../../Consult/ConsultList';
import { getMyPageConsult } from 'service/get';
import Pagenation from 'components/Pagenation';

const MyConsult = () => {
    const [consultList, setConsultList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;
    const [currentList, setCurrentList] = useState<Object[]>([]);

    useEffect(() => {
        async function getMyPageConsultList() {
            try {
                const { data } = await getMyPageConsult();
                setConsultList(data.list);
            } catch (error) {
                console.log(error);
            }
        }
        getMyPageConsultList();
    }, [])

    useEffect(() => {
        setCurrentList(consultList.slice(indexOfFirst, indexOfLast));
    }, [currentPage, consultList])

    return (
        <>
            <S.ListPlace>
                {currentList.length > 0 ? currentList.map((obj, idx) => {
                    return <DataList info={obj} idx={(currentPage-1) * 9 + idx + 1} key={idx} />
                }) : <S.NotExistList>등록한 포트폴리오가 없습니다.</S.NotExistList>}
            </S.ListPlace>
            <S.OptionPlace />
            <S.PageNationPlace>
            { consultList.length > 0 &&
                <Pagenation totalPosts={consultList.length} postPerPage={postPerPage} paginate={setCurrentPage} currentPage={currentPage} />                  
            }
            </S.PageNationPlace>
        </>
    )
}

export default MyConsult;