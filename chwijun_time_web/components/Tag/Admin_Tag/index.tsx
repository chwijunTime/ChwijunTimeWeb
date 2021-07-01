import React, { useEffect, useState } from 'react';
import * as S from './style';
import { getAllTag } from 'service/get';
import { Pagenation } from 'components';
import { PenIcon } from 'public/index';
import Router from 'next/router';
import TagList from '../TagList';
import { ApplyTagModal, EnrollTagModal } from 'components/Modal';

const TagComponent:React.FC = () => {
    const [tagList, setTagList] = useState<any>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 9;
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;
    const [currentList, setCurrentList] = useState<Object[]>([]);
    const [modal, handleModal] = useState(false);
    const [applyModal, handleApplyModal] = useState(false);

    useEffect(() => {
        async function getAllTagList() {
            try {
                const { data } = await getAllTag();
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
        <>
            <S.Container>
                <S.Header>          
                    <S.UrlText>HOME &gt; 태그</S.UrlText>
                    <S.HeaderPlace>
                        <S.HeaderTitle>태그
                            <S.Sub_HeaderTitle>전체 태그를 확인하고 추가할 수 있습니다.</S.Sub_HeaderTitle>                      
                        </S.HeaderTitle>
                        <S.SearchPlace>
                            <S.ApplyBtn onClick={() => Router.push('/jobnotice/applyjobnotice')}>태그신청 조회</S.ApplyBtn>
                        </S.SearchPlace>
                    </S.HeaderPlace>
                </S.Header>
                <S.Content>
                    <S.Title>
                        <S.Number>번호</S.Number>
                        <S.Subject>태그</S.Subject>
                    </S.Title>
                    <S.ListPlace>
                        {currentList.length > 0 ? currentList.map((obj, idx) => {
                            return <TagList info={obj} idx={(currentPage-1) * 9 + idx + 1} key={idx} />
                        }) : <S.NotExistList>등록된 태그가 없습니다.</S.NotExistList>}
                    </S.ListPlace>
                    <S.OptionPlace>
                        <S.EnrollBtn onClick={() => handleModal(true)}><PenIcon />태그 등록</S.EnrollBtn> 
                    </S.OptionPlace>
                    <S.PageNationPlace>
                    { tagList.length > 0 &&                        
                        <Pagenation totalPosts={tagList.length} postPerPage={postPerPage} paginate={setCurrentPage} currentPage={currentPage} />                  
                    }
                    </S.PageNationPlace>
                </S.Content>
            </S.Container>
            { modal && <EnrollTagModal handleModal={handleModal} />}
        </>
    )
}

export default TagComponent;