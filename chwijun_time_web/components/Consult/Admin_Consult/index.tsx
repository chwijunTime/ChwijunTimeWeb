import React, { useEffect, useState } from 'react';
import * as S from './style';
import ConsultList from './../ConsultList';
import Router from 'next/router';
import { getAllConsultAdmin } from 'service/get';
import Pagenation from 'components/Pagenation';
import { PenIcon } from 'public/index';

const ConsultComponent:React.FC = () => {
    const [consultList, setConsultList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentList, setCurrentList] = useState<Object[]>([]);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage; 

    useEffect(() => {
        setCurrentList(consultList.slice(indexOfFirst, indexOfLast));
    }, [currentPage, consultList])
    
    useEffect(() => {
        async function getAllConsultList() {
            try {
                const { data } = await getAllConsultAdmin();
                setConsultList(data.list);
            } catch (error) {
                console.log(error);
            }
        }
        getAllConsultList();
    }, [])

    return (
        <S.ConsultContainer>
            <S.Header>
                <S.UrlText>HOME &gt; 상담 신청</S.UrlText>
                <S.HeaderPlace>
                    <S.HeaderTitle>상담 신청
                        <S.Sub_HeaderTitle>취업에 고민이 있는 학생과 상담을 도와줍니다.</S.Sub_HeaderTitle>
                    </S.HeaderTitle>
                    <S.ApplyPlace>
                        <S.Apply_Btn onClick={() => Router.push('/consult/applyrefer')}>상담신청 조회</S.Apply_Btn>
                    </S.ApplyPlace>
                </S.HeaderPlace>
            </S.Header>
            <S.Content>
                <S.Title>
                    <S.Number>번호</S.Number>
                    <S.Status>상태</S.Status>
                    <S.Date>날짜</S.Date>
                </S.Title>
                <S.ListPlace>
                    {currentList.length > 0 ? currentList.map((obj, idx) => {
                        return <ConsultList info={obj} idx={(currentPage-1) * 9 + idx + 1} key={idx} />
                    }) : <S.NotExistList>등록된 상담신청이 없습니다.</S.NotExistList>}
                </S.ListPlace>
                <S.OptionPlace>
                    <S.EnrollBtn onClick={() => Router.push('/consult/enrollconsult')}><PenIcon />등록</S.EnrollBtn>
                </S.OptionPlace>
                <S.PageNationPlace>
                    { consultList.length > 0 &&                        
                        <Pagenation totalPosts={consultList.length} postPerPage={postPerPage} paginate={setCurrentPage} currentPage={currentPage} />                  
                    }
                </S.PageNationPlace>
            </S.Content>
        </S.ConsultContainer>
    )
}

export default ConsultComponent;