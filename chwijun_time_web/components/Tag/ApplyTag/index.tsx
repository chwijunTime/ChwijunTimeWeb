import React, { useEffect, useState } from 'react';
import * as S from './style';
import { getAllApplyTag } from 'service/get';
import { Pagenation } from 'components';
import ApplyTagList from '../ApplyTagList';

const ApplyTagComponent:React.FC = () => {
    const [tagList, setTagList] = useState<any>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;
    const [currentList, setCurrentList] = useState<Object[]>([]);

    useEffect(() => {
        async function getAllTagList() {
            try {
                const { data } = await getAllApplyTag();
                setTagList(data.list);
            } catch (error) {
                console.log(error);
            }
        }
        getAllTagList();
    }, [])
    useEffect(() => {
        setCurrentList(tagList.slice(indexOfFirst, indexOfLast));
    }, [currentPage, tagList])

    return (
        <S.Container>
            <S.Header>
                <S.UrlText>HOME &gt; 태그</S.UrlText>
                <S.HeaderTitle>태그 신청 조회
                    <S.Sub_HeaderTitle>학생들이 요청한 태그 리스트입니다.</S.Sub_HeaderTitle>
                </S.HeaderTitle>
            </S.Header>
            <S.Content>
                <S.Title>
                    <S.Number>번호</S.Number>
                    <S.Subject>태그</S.Subject>
                </S.Title>
                <S.ListPlace>
                    {currentList.length > 0 ? currentList.map((obj, idx) => {
                        return <ApplyTagList info={obj} idx={(currentPage-1) * 9 + idx + 1} key={idx} />
                    }) : <S.NotExistList>신청된 태그가 없습니다.</S.NotExistList>}
                </S.ListPlace>
                <S.OptionPlace />
                <S.PageNationPlace>
                { tagList.length > 0 &&                        
                    <Pagenation totalPosts={tagList.length} postPerPage={postPerPage} paginate={setCurrentPage} currentPage={currentPage} />                  
                }
                </S.PageNationPlace>
            </S.Content>
        </S.Container>
    )
}

export default ApplyTagComponent;