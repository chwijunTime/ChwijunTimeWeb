import React, { useEffect, useState } from 'react';
import * as S from './style';
import MouList from './MouComponent';
import Router from 'next/router';
import { getAllMou } from 'service/get';
import Pagenation from 'components/Pagenation';
import { PenIcon } from 'public/index';

const MouComponent:React.FC = () => {
    const [mouList, setMouList] = useState([{}]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentList, setCurrentList] = useState<Object[]>([]);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage; 
    const [input, setInput] = useState('');

    useEffect(() => {
        setCurrentList(mouList.slice(indexOfFirst, indexOfLast));
    }, [currentPage])
    
    useEffect(() => {
        async function getAllMouList() {
            try {
                const { data } = await getAllMou();
                setMouList(data.list);
            } catch (error) {
                console.log(error);
            }
        }
        getAllMouList();
    }, [])
    
    const onSearch = () => {
        
    }

    return(
        <S.JobNoticeContainer>
            <S.Header>협약 업체</S.Header>
                <S.SearchPlace>
                    <S.SearchBar placeholder="업체명으로 검색..." onChange={(e) => setInput(e.target.value)} />
                    <S.SearchBtn>검색</S.SearchBtn>
                </S.SearchPlace>
                <S.Content>
                    <S.Title>
                        <S.Number>번호</S.Number>
                        <S.Name>업체명</S.Name>
                        <S.Field>태그</S.Field>
                        <S.Deadline>주소</S.Deadline>
                    </S.Title>
                    <S.ListPlace>
                    {mouList.length > 0 ? mouList.map((obj, idx) => {
                        return <MouList info={obj} key={idx} />
                    }) : <S.NotExistList>등록된 협약업체가 없습니다.</S.NotExistList>}
                    </S.ListPlace>
                    <S.OptionPlace>
                        <S.EnrollBtn onClick={() => Router.push('/mou/enrollMou')}><PenIcon />글쓰기</S.EnrollBtn>
                    </S.OptionPlace>
                    <S.PageNationPlace>
                    { mouList.length > 0 &&                        
                        <Pagenation totalPosts={mouList.length} postPerPage={postPerPage} paginate={setCurrentPage} currentPage={currentPage} />                  
                    }
                    </S.PageNationPlace>
                </S.Content>
        </S.JobNoticeContainer>
    )
}

export default MouComponent;