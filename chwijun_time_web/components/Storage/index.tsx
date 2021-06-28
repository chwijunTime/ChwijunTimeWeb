import React, { useEffect, useState } from 'react';
import * as S from './style';
import StorageList from './StorageList';
import { getAllStorage } from 'service/get';
import Pagenation from 'components/Pagenation';
import Router from 'next/router';
import { PenIcon } from 'public';

const StorageComponent:React.FC = () => {
    const [storageList, setStorageList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;
    const [currentList, setCurrentList] = useState<Object[]>([]);
    
    useEffect(() => {
        async function getAllStorageList() {
            try {
                const { data } = await getAllStorage();
                setStorageList(data.list);
            } catch (error) {
                console.log(error);
            }
        }
        getAllStorageList();
    }, [])

    useEffect(() => {
        setCurrentList(storageList.slice(indexOfFirst, indexOfLast));
    }, [currentPage, storageList])
    
    return(
        <S.Container>
            <S.Header>
                <S.UrlText>HOME &gt; 꿀팁 저장소</S.UrlText>
                <S.HeaderTitle>꿀팁 저장소
                    <S.Sub_HeaderTitle>취업에 도움이 될만한 꿀팁들을 확인할 수 있습니다.</S.Sub_HeaderTitle>
                </S.HeaderTitle>
            </S.Header>
            <S.Content>
                <S.Title>
                    <S.Number>번호</S.Number>
                    <S.Name>업체명</S.Name>
                    <S.Address>위치</S.Address>
                </S.Title>
                    <S.ListPlace> 
                        {currentList.length > 0 ? currentList.map((obj, idx) => {
                            return <StorageList info={obj} idx={(currentPage-1) * 9 + idx + 1} key={idx} />
                        }) : <S.NotExistList>등록된 꿀팁이 없습니다.</S.NotExistList>}
                    </S.ListPlace>
                    <S.OptionPlace>
                        <S.EnrollBtn onClick={() => Router.push('/storage/enrollstorage')}><PenIcon />글쓰기</S.EnrollBtn>
                    </S.OptionPlace>
                    <S.PageNationPlace>
                    { storageList.length > 0 &&                        
                        <Pagenation totalPosts={storageList.length} postPerPage={postPerPage} paginate={setCurrentPage} currentPage={currentPage} />                  
                    }
                    </S.PageNationPlace>
                </S.Content>
        </S.Container>
    )
}

export default StorageComponent;