import React, { useEffect, useState } from 'react';
import * as S from './style';
import NoticeList from './NoticeComponent';
import Router from 'next/router';
import { getAllNotice } from 'service/get';
import Pagenation from 'components/Pagenation';
import { PenIcon } from 'public/index';

const MouComponent:React.FC = () => {
    const [noticeList, setNoticeList] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentList, setCurrentList] = useState<Object[]>([]);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage; 

    useEffect(() => {
        setCurrentList(noticeList.slice(indexOfFirst, indexOfLast));
    }, [currentPage])
    
    useEffect(() => {
        async function getAllMouList() {
            try {
                const { data } = await getAllNotice();
                setNoticeList(data.list);
            } catch (error) {
                console.log(error);
            }
        }
        getAllMouList();
    }, [])

    return(
        <S.NoticeContainer>
            <S.Header>
                <S.UrlText>HOME &gt; 공지사항</S.UrlText>
                <S.HeaderTitle>공지사항
                    <S.Sub_HeaderTitle>학생들에게 도움이 되는 소식들을 공지합니다.</S.Sub_HeaderTitle>
                </S.HeaderTitle>
            </S.Header>
            <S.Content>
                <S.Title>
                    <S.Number>번호</S.Number>
                    <S.Subject>제목</S.Subject>
                    <S.Date>등록일</S.Date>
                </S.Title>
                    <S.ListPlace>
                    {currentList.length > 0 ? currentList.map((obj, idx) => {
                        return <NoticeList info={obj} key={idx} />
                    }) : <S.NotExistList>등록된 공지사항이 없습니다.</S.NotExistList>}
                    </S.ListPlace>
                    <S.OptionPlace>
                        <S.EnrollBtn onClick={() => Router.push('/notice/enrollNotice')}><PenIcon />글쓰기</S.EnrollBtn>
                    </S.OptionPlace>
                    <S.PageNationPlace>
                    { noticeList.length > 0 &&                        
                        <Pagenation totalPosts={noticeList.length} postPerPage={postPerPage} paginate={setCurrentPage} currentPage={currentPage} />                  
                    }
                    </S.PageNationPlace>
                </S.Content>
        </S.NoticeContainer>
    )
}

export default MouComponent;