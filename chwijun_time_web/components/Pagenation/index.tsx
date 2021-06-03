import React, { useEffect, useState } from 'react';
import * as S from './style';

interface Props {
    totalPosts: number,
    postPerPage: number,
    paginate: (currentPage: number) => void,
    currentPage: number,
}

const Pagenation:React.FC<Props> = ({ totalPosts, postPerPage, paginate, currentPage }) => {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(5);
    // 전체 페이지 배열
    const array: Array<number> = [];
    // 실제 사용자에게 보여질 배열 ( 5개씩 잘려있다. )
    const [target, setTarget] = useState<number[]>([]);

    for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        array.push(i);
    }
    const handleTarget = () => {
        setTarget(array.slice(start, end));
    }
    const PrevClick = () => {
        if(currentPage === 1) return alert("첫번째 페이지입니다.");
        if(currentPage % 5 === 1) {
            setStart(start - 5); setEnd(end - 5);
        }
        paginate(currentPage - 1);
    }
    const NextClick = () => {
        if(currentPage === array.length) return alert("마지막 페이지입니다.");
        if(currentPage % 5 === 0) {
            setStart(start + 5); setEnd(end + 5);
        }
        paginate(currentPage + 1);
    }

    useEffect(() => {
        handleTarget();
    }, [start, end]);

    return(
        <S.PageNationContainer>
              
            <S.PageNumberContainer>
                <S.PrevBtn onClick={() => PrevClick()}>이전</S.PrevBtn>
                {target.map((idx, key) => {
                    return <S.PageNumber onClick={() => paginate(idx)} current={currentPage === idx} key={key}>{idx}</S.PageNumber>
                })}
                <S.NextBtn onClick={() => NextClick()}>다음</S.NextBtn>
            </S.PageNumberContainer>
        </S.PageNationContainer>
    )
}

export default Pagenation;