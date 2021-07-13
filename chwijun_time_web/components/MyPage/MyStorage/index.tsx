import React, { useState, useEffect } from 'react';
import * as S from './style';
import DataList from '../../Storage/StorageList';
import { getMyPageStorage } from 'service/get';
import Pagenation from 'components/Pagenation';

const MyStorage = () => {
    const [storageList, setStorageList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;
    const [currentList, setCurrentList] = useState<Object[]>([]);

    useEffect(() => {
        async function getMyPageStorageList() {
            try {
                const { data } = await getMyPageStorage();
                setStorageList(data.list);
            } catch (error) {
                console.log(error);
            }
        }
        getMyPageStorageList();
    }, [])

    useEffect(() => {
        setCurrentList(storageList.slice(indexOfFirst, indexOfLast));
    }, [currentPage, storageList])

    return (
        <>
            <S.ListPlace>
                {currentList.length > 0 ? currentList.map((obj, idx) => {
                    return <DataList info={obj} idx={(currentPage-1) * 9 + idx + 1} key={idx} />
                }) : <S.NotExistList>등록한 꿀팁이 없습니다.</S.NotExistList>}
            </S.ListPlace>
            <S.OptionPlace />
            <S.PageNationPlace>
            { storageList.length > 0 &&
                <Pagenation totalPosts={storageList.length} postPerPage={postPerPage} paginate={setCurrentPage} currentPage={currentPage} />                  
            }
            </S.PageNationPlace>
        </>
    )
}

export default MyStorage;