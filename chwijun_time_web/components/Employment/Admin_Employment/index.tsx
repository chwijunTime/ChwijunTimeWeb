import React, { useEffect, useState } from 'react';
import * as S from './style';
import { getAllEmployment } from 'service/get';
import EmploymentList from './../EmploymentList';
import Pagenation from 'components/Pagenation';
import { PenIcon } from 'public';
import Router from 'next/router';

const EmploymentComponent:React.FC = () => {
    const [employmentList, setEmploymentList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentList, setCurrentList] = useState<Object[]>([]);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage; 
    const [input, setInput] = useState('');

    useEffect(() => {
        setCurrentList(employmentList.slice(indexOfFirst, indexOfLast));
    }, [currentPage, employmentList])
    
    useEffect(() => {
        async function getAllJobNoticeList() {
            try {
                const { data } = await getAllEmployment();
                setEmploymentList(data.list);
            } catch (error) {
                console.log(error);
            }
        }
        getAllJobNoticeList();
    }, [])
    
    const onSearch = () => {
        
    }

    return (
        <S.EmploymentContainer>
            <S.Header>
                <S.UrlText>HOME &gt; 취업 확정 현황</S.UrlText>
                <S.HeaderPlace>
                    <S.HeaderTitle>취업 확정 현황
                        <S.Sub_HeaderTitle>학생들의 취업 확정 현황을 볼 수 있습니다.</S.Sub_HeaderTitle>
                    </S.HeaderTitle>
                    <S.SearchPlace>
                        <S.SearchBar placeholder="검색..." onChange={(e) => setInput(e.target.value)} />
                        <S.SearchBtn>검색</S.SearchBtn>
                    </S.SearchPlace>
                </S.HeaderPlace>
            </S.Header>          
            <S.Content>
                <S.Title>
                    <S.Generation>기수</S.Generation>
                    <S.Name>업체명</S.Name>
                    <S.Student>이름</S.Student>
                    <S.Location>지역</S.Location>
                    <S.Tag>태그</S.Tag>
                </S.Title>
                <S.ListPlace>
                    {currentList.length > 0 ? currentList.map((obj, idx) => {
                        return <EmploymentList info={obj} key={idx} />
                    }) : <S.NotExistList>등록된 취업 확정 현황이 없습니다.</S.NotExistList>}
                </S.ListPlace>
                <S.OptionPlace>
                    <S.EnrollBtn onClick={() => Router.push('/employment/enrollemployment')}><PenIcon />등록</S.EnrollBtn>
                </S.OptionPlace>
                <S.PageNationPlace>
                    { employmentList.length > 0 &&                        
                        <Pagenation totalPosts={employmentList.length} postPerPage={postPerPage} paginate={setCurrentPage} currentPage={currentPage} />                  
                    }
                </S.PageNationPlace>
            </S.Content>
        </S.EmploymentContainer>
    )
}

export default EmploymentComponent;