import React, { useEffect, useState } from 'react';
import * as S from './style';
import MouList from './MouList';
import { getAllMou, getSearchMou } from 'service/get';
import Pagenation from 'components/Pagenation';

const MouComponent:React.FC = () => {
    const [mouList, setMouList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage; 
    const [currentList, setCurrentList] = useState<Object[]>([]);    
    const [input, setInput] = useState('');
    
    async function getAllMouList() {
        try {
            const { data } = await getAllMou();
            setMouList(data.list);
        } catch (error) {
            console.log(error);
        }
    }
    const onSearch = async() => {
        try {
            const { data } = await getSearchMou(input);
            setMouList(data.list);
            setCurrentPage(1);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllMouList();
    }, [])
    useEffect(() => {
        setCurrentList(mouList.slice(indexOfFirst, indexOfLast));
    }, [currentPage, mouList])

    return (
        <S.MouContainer>
            <S.Header>
                <S.UrlText>HOME &gt; 협약 업체</S.UrlText>
                <S.HeaderPlace>
                    <S.HeaderTitle>협약 업체
                        <S.Sub_HeaderTitle>학교와 MOU 체결을 맺은 기업 리스트입니다.</S.Sub_HeaderTitle>
                    </S.HeaderTitle>
                    <S.SearchPlace>
                        <S.SearchBar placeholder="업체명으로 검색..." onChange={(e) => setInput(e.target.value)} />
                        <S.SearchBtn onClick={() => onSearch()}>검색</S.SearchBtn>
                        <S.ResetBtn onClick={() => getAllMouList()}>목록</S.ResetBtn>
                    </S.SearchPlace>
                </S.HeaderPlace>
            </S.Header>
            <S.Content>
                <S.Title>
                    <S.Number>번호</S.Number>
                    <S.Name>업체명</S.Name>
                    <S.Tag>태그</S.Tag>
                    <S.Address>주소</S.Address>
                </S.Title>
                <S.ListPlace>
                    {currentList.length > 0 ? currentList.map((obj, idx) => {
                        return <MouList info={obj} idx={ (currentPage-1) * 9 + idx + 1 } key={idx} />
                    }) : <S.NotExistList>등록된 협약업체가 없습니다.</S.NotExistList>}
                </S.ListPlace>
                <S.OptionPlace />
                <S.PageNationPlace>
                    { mouList.length > 0 &&                        
                        <Pagenation totalPosts={mouList.length} postPerPage={postPerPage} paginate={setCurrentPage} currentPage={currentPage} />                  
                    }
                </S.PageNationPlace>
            </S.Content>
        </S.MouContainer>
    )
}

export default MouComponent;