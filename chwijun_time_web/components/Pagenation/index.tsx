import React, { useEffect, useState } from 'react';
import * as S from './style';

interface Props {
    posts: Array<Object>,
    setCurrentList: (list: Array<any>) => void,
}

const Pagenation:React.FC<Props> = ({ posts, setCurrentList }) => {

    // 첫번째 요소
    const [indexOfFirst, setIndexOfFirst] = useState(1);
    // 마지막 요소
    const [indexOfLast, setIndexOfLast] = useState(1);
    // 사용자가 현재 보고있는 페이지
    const [currentPage, setCurrentPage] = useState(1);
    // 한번에 보여줄 리스트 갯수
    const postsPerPage = 9;
    // 전체 페이지 갯수
    const [totalPage, setTotalPage] = useState(1);
    // 사용자가 볼 네비게이션바
    const [array, setArray] = useState<Number[]>([]);
    // 페이지 번호가 담겨있는 배열
    const target = array.slice(indexOfFirst, indexOfLast);
    
    function SetArray() {
       for(let i = indexOfFirst; i <= totalPage; i++ ) {
            array.push(i);
       }
    }
    function PageMove() {

    }

    // 사용자가 보고있는 페이지가 바뀌면 == 사용자가 네비게이션으로 이동하려고 한다면! 바꿔라.
    useEffect(() => {
        // totalPage 수를 구함.
        setTotalPage(Math.ceil(posts.length / postsPerPage));
        SetArray();
        // 보여줘야 할 리스트 배열 리턴
        setCurrentList(posts.slice(currentPage * postsPerPage - postsPerPage, currentPage * postsPerPage))
    }, [currentPage])

    return(
        <div>
            {array.map((idx) => {
                return <S.PageNumber onClick={PageMove}>{idx}</S.PageNumber>
            })}
        </div>
    )
}

export default Pagenation;