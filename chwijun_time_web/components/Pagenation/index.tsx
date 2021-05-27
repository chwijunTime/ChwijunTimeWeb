import React, { useEffect, useState } from 'react';
import * as S from './style';
import { PenIcon } from 'public/index';
import Router from 'next/router';

interface Props {
    posts: Array<Object>,
    setCurrentList: (list: Array<any>) => void;
    setNumber: (list: Array<any>) => void;
    url: string,
}

const Pagenation:React.FC<Props> = ({ posts, setCurrentList, setNumber, url }) => {
    // 페이지네이션바의 첫번째 요소
    const [indexOfFirst, setIndexOfFirst] = useState(0);
    // 페이지네이션바의 마지막 요소
    const [indexOfLast, setIndexOfLast] = useState(5); 
    // 한번에 보여줄 리스트 갯수
    const postsPerPage = 9;
     // 사용자가 현재 보고있는 페이지
    const [currentPage, setCurrentPage] = useState<any>(1);
    // 전체 페이지 갯수
    const [totalPage, setTotalPage] = useState(Math.ceil(posts.length / postsPerPage));
    // 사용자가 볼 네비게이션바
    const [array, setArray] = useState<any>([]);
    // 페이지 번호가 담겨있는 배열. 10개씩 짤랐다.
    const [target, setTarget] = useState([]);

    const handleArray = () => {
       for(let i = 0; i < totalPage; i++) {
            array.push(i + 1);
       }
       setTarget(array.slice(indexOfFirst, indexOfLast));
    }
    const handleTarget = () => {
        setTarget(array.slice(indexOfFirst, indexOfLast));
    }
    const PrevClick = () => {
        if(currentPage === 1) return alert("첫번째 페이지입니다.");
        if(currentPage % 5 === 1) {
            setIndexOfFirst(indexOfFirst - 5);
            setIndexOfLast(indexOfLast - 5);
        }
        setCurrentPage(currentPage - 1);
    }
    const NextClick = () => {
        if(currentPage === totalPage) return alert("마지막 페이지입니다.");
        if(currentPage % 5 === 0) {
            setIndexOfFirst(indexOfFirst + 5);
            setIndexOfLast(indexOfLast + 5);
        }
        setCurrentPage(currentPage + 1);
    }

    const PageMove = () => {
        setNumber([currentPage * 9 - 9, currentPage * 9]);     
        setCurrentList(posts.slice(currentPage * postsPerPage - postsPerPage, currentPage * postsPerPage));              
    }

    // 사용자가 보고있는 페이지가 바뀌면 == 사용자가 네비게이션으로 이동하려고 한다면! 바꿔라.
    useEffect(() => {
        handleArray();
    }, [])
    useEffect(() => {
        handleTarget();
    }, [indexOfFirst, indexOfLast]);
    useEffect(() => {
        PageMove();
    }, [currentPage])

    return(
        <S.PageNationContainer>
            <S.OptionPlace>
                <S.EnrollBtn onClick={() => Router.push(url)}><PenIcon />글쓰기</S.EnrollBtn>
            </S.OptionPlace>  
            <S.PageNumberContainer>
                <S.PrevBtn onClick={() => PrevClick()}>이전</S.PrevBtn>
                {target.map((idx, key) => {
                    return <S.PageNumber onClick={() => setCurrentPage(idx)} current={currentPage === idx} key={key}>{idx}</S.PageNumber>
                })}
                <S.NextBtn onClick={() => NextClick()}>다음</S.NextBtn>
            </S.PageNumberContainer>          
        </S.PageNationContainer>
    )
}

export default Pagenation;