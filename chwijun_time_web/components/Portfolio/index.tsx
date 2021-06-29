import React, { useEffect, useState } from 'react';
import * as S from './style';
import DataList from './DataList';
import { getAllCorrection } from 'service/get';
import Pagenation from 'components/Pagenation';

const PortfolioComponent:React.FC = () => {
    const [correctionList, setCorrectionList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;
    const [currentList, setCurrentList] = useState<Object[]>([]);
    
    useEffect(() => {
        async function getAllDataList() {
            try {
                const { data } = await getAllCorrection();
                setCorrectionList(data.list);
            } catch (error) {
                console.log(error);
            }
        }
        getAllDataList();
    }, [])

    useEffect(() => {
        setCurrentList(correctionList.slice(indexOfFirst, indexOfLast));
    }, [currentPage, correctionList])
    
    return(
        <S.NoticeContainer>
            <S.Header>
                <S.UrlText>HOME &gt; 이력서 및 포트폴리오</S.UrlText>
                <S.HeaderTitle>이력서 및 포트폴리오
                    <S.Sub_HeaderTitle>학생들이 신청한 이력서 및 포트폴리오를 확인할 수 있습니다.</S.Sub_HeaderTitle>
                </S.HeaderTitle>
            </S.Header>
            <S.Content>
                <S.Title>
                    <S.Number>번호</S.Number>
                    <S.Kind>종류</S.Kind>
                    <S.Status>상태</S.Status>
                    <S.ClassNumber>학번</S.ClassNumber>
                    <S.Link>링크</S.Link>
                </S.Title>
                    <S.ListPlace>
                    {currentList.length > 0 ? currentList.map((obj, idx) => {
                        return <DataList info={obj} idx={(currentPage-1) * 9 + idx + 1} key={idx} />
                    }) : <S.NotExistList>신청된 이력서나 포트폴리오가 없습니다.</S.NotExistList>}
                    </S.ListPlace>  
                    <S.OptionPlace />
                    <S.PageNationPlace>
                    { correctionList.length > 0 &&
                        <Pagenation totalPosts={correctionList.length} postPerPage={postPerPage} paginate={setCurrentPage} currentPage={currentPage} />                  
                    }
                    </S.PageNationPlace>
                </S.Content>
        </S.NoticeContainer>
    )
}

export default PortfolioComponent;