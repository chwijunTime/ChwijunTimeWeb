import React, { useEffect, useState } from 'react';
import * as S from './style';
import NoticeList from './NoticeList';
import { getAllNotice } from 'service/get';
import Pagenation from 'components/Pagenation';

const NoticeComponent:React.FC = () => {
    const [noticeList, setNoticeList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;
    const [currentList, setCurrentList] = useState<Object[]>([]);
    
    useEffect(() => {
        async function getAllNoticeList() {
            try {
                const { data } = await getAllNotice();
                setNoticeList(data.list);
            } catch (error) {
                console.log(error);
            }
        }
        getAllNoticeList();
    }, [])

    useEffect(() => {
        setCurrentList(noticeList.slice(indexOfFirst, indexOfLast));
    }, [currentPage, noticeList])
    
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
                            return <NoticeList info={obj} idx={currentPage * idx + 1} key={idx} />
                        }) : <S.NotExistList>등록된 공지사항이 없습니다.</S.NotExistList>}
                    </S.ListPlace>
                    <S.OptionPlace>
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

export default NoticeComponent;