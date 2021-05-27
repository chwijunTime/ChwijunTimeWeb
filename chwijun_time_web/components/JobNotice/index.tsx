import React, {useState, useEffect } from 'react';
import * as S from './style';
import JobComponent from './JobComponent';
import { Pagenation } from 'components';

const JobNoticeComponent:React.FC = () => {
    // 전체 배열
    const [posts, setPosts] = useState([{name: "(주)엠몬스타", field: "프론트엔드, 백엔드", day: "2021-02-01 ~ 2021-04-13"}
                                        ,{name: "고스트패스", field: "프론트엔드, 인공지능", day: "2021-02-01 ~ 2021-04-13"}
                                        ,{name: "고스트패스", field: "프론트엔드, 인공지능", day: "2021-02-01 ~ 2021-04-13"}
                                        ,{name: "고스트패스", field: "프론트엔드, 인공지능", day: "2021-02-01 ~ 2021-04-13"}
                                        ,{name: "고스트패스", field: "프론트엔드, 인공지능", day: "2021-02-01 ~ 2021-04-13"}
                                        ,{name: "고스트패스", field: "프론트엔드, 인공지능", day: "2021-02-01 ~ 2021-04-13"}
                                        ,{name: "고스트패스", field: "프론트엔드, 인공지능", day: "2021-02-01 ~ 2021-04-13"}
                                        ,{name: "고스트패스", field: "프론트엔드, 인공지능", day: "2021-02-01 ~ 2021-04-13"}
                                        ,{name: "고스트패스", field: "프론트엔드, 인공지능", day: "2021-02-01 ~ 2021-04-13"}
                                        ,{name: "고스트패스", field: "프론트엔드, 인공지능", day: "2021-02-01 ~ 2021-04-13"}
                                        ,{name: "고스트패스", field: "프론트엔드, 인공지능", day: "2021-02-01 ~ 2021-04-13"}])

    // 페이지네이션에서 값을 관리해주는 배열 ( map함수로 돌려줄 배열 (리스트들) ); 현재 보여줄 리스트들이 담겨있는 배열
    const [currentList, setCurrentList] = useState(posts.slice(0,9));
    const [number, setNumber] = useState([1, 9]);

    return(
        <S.JobNoticeContainer>
            <S.Header>취업 공고</S.Header>
            
            <S.Container>
                <S.SearchPlace>
                    <S.SearchBar placeholder="업체명으로 검색..." />                   
                </S.SearchPlace>
                <S.Title>
                    <S.Number>번호</S.Number>
                    <S.Name>업체명</S.Name>
                    <S.Field>채용 분야</S.Field>
                    <S.Deadline>공고일 / 마감일</S.Deadline>
                </S.Title>
                <S.Content>
                    <S.ListPlace>
                    {currentList.map((obj, idx) => {
                        return <JobComponent name={obj.name} field={obj.field} day={obj.day} key={idx} />
                    })}
                    </S.ListPlace>
                    
                    <S.PageNationPlace>
                        <Pagenation posts={posts} setCurrentList={setCurrentList} setNumber={setNumber} url={'/jobnotice/enrollJobNotice'} />
                    </S.PageNationPlace>
                </S.Content>               
            </S.Container>
        </S.JobNoticeContainer>  
    )
}

export default JobNoticeComponent;