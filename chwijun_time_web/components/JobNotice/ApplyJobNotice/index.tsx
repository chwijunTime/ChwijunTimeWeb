import React, { useEffect, useState } from 'react';
import * as S from './style';
import ApplyList from './../ApplyList';
import { getAllConsultUser } from 'service/get';
import Pagenation from 'components/Pagenation';

const ConsultComponent:React.FC = () => {
    const [applyList, setApplyList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentList, setCurrentList] = useState<Object[]>([]);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;

    useEffect(() => {
        setCurrentList(applyList.slice(indexOfFirst, indexOfLast));
    }, [currentPage, applyList])
    
    useEffect(() => {
        async function getAllApplyList() {
            try {
                const { data } = await getAllConsultUser();
                setApplyList(data.list);
            } catch (error) {
                console.log(error);
            }
        }
        getAllApplyList();
    }, [])

    return (
        <S.ConsultContainer>
            <S.Header>
                <S.UrlText>HOME &gt; 상담 신청 &gt; 상담 신청 조회</S.UrlText>
                <S.HeaderPlace>
                    <S.HeaderTitle>상담 신청
                        <S.Sub_HeaderTitle>취업에 고민이 있는 학생들의 신청 리스트입니다.</S.Sub_HeaderTitle>
                    </S.HeaderTitle>
                </S.HeaderPlace>
            </S.Header>
            <S.Content>
                <S.Title>
                    <S.Number>번호</S.Number>
                    <S.ClassNumber>학번</S.ClassNumber>
                    <S.Name>이름</S.Name>
                    <S.Date>날짜</S.Date>
                </S.Title>
                <S.ListPlace>
                    {currentList.length > 0 ? currentList.map((obj, idx) => {
                        return <ApplyList info={obj} idx={(currentPage-1) * 9 + idx + 1} key={idx} />
                    }) : <S.NotExistList>신청된 상담 목록이 없습니다.</S.NotExistList>}
                </S.ListPlace>
                <S.OptionPlace />
                <S.PageNationPlace>
                    { applyList.length > 0 &&                        
                        <Pagenation totalPosts={applyList.length} postPerPage={postPerPage} paginate={setCurrentPage} currentPage={currentPage} />                  
                    }
                </S.PageNationPlace>
            </S.Content>
        </S.ConsultContainer>
    )
}

export default ConsultComponent;