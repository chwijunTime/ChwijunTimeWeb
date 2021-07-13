import React, { useState, useEffect } from 'react';
import * as S from './style';
import DataList from '../../Portfolio/DataList';
import { getMyPageResume } from 'service/get';
import Pagenation from 'components/Pagenation';

const MyResume = () => {
    const [resumeList, setResumeList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;
    const [currentList, setCurrentList] = useState<Object[]>([]);

    useEffect(() => {
        async function getMyPageResumeList() {
            try {
                const { data } = await getMyPageResume();
                setResumeList(data.list);
            } catch (error) {
                console.log(error);
            }
        }
        getMyPageResumeList();
    }, [])

    useEffect(() => {
        setCurrentList(resumeList.slice(indexOfFirst, indexOfLast));
    }, [currentPage, resumeList])

    return (
        <>
            <S.ListPlace>
                {currentList.length > 0 ? currentList.map((obj, idx) => {
                    return <DataList info={obj} idx={(currentPage-1) * 9 + idx + 1} isResume={true} key={idx} />
                }) : <S.NotExistList>등록한 이력서가 없습니다.</S.NotExistList>}
            </S.ListPlace>  
            <S.OptionPlace />
            <S.PageNationPlace>
            { resumeList.length > 0 &&
                <Pagenation totalPosts={resumeList.length} postPerPage={postPerPage} paginate={setCurrentPage} currentPage={currentPage} />                  
            }
            </S.PageNationPlace>
        </>
    )
}

export default MyResume;