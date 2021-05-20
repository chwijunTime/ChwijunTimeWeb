import React, { useState } from 'react';
import * as S from './style';
import Header from 'components/Header';
import Router from 'next/router';

const EnrollMou = () => {
    const [name, setName] = useState('');
    const [intro, setIntro] = useState('');
    const [field, setField] = useState('');
    const [address, setAddress] = useState('');
    const [salary, setSalary] = useState('');
    const [tag, setTag] = useState('');

    const Enroll = () => {
        alert('등록하시겠습니까?')
    }

    return(
        <S.EnrollMouContainer>
            <Header>협약업체 등록</Header>
            <S.NamePlace>
                <S.Text>업체명 </S.Text>
                <S.InputName placeholder="Enter a Name..." onChange={(e) => setName(e.target.value)} />
            </S.NamePlace>
            <S.IntroPlace>
                <S.Text>회사소개 </S.Text>
                <S.InputIntro placeholder="Enter a Intro..." onChange={(e) => setIntro(e.target.value)} />
            </S.IntroPlace>
            <S.NamePlace>
                <S.Text>사업분야 </S.Text>
                <S.FeildInput placeholder="Enter a Field..." onChange={(e) => setField(e.target.value)} />
            </S.NamePlace>       
            <S.NamePlace>
                <S.Text>주소 </S.Text>
                <S.InputName placeholder="Enter a Address..." onChange={(e) => setAddress(e.target.value)} />
            </S.NamePlace>
            <S.NamePlace>
                <S.Text>평균 연봉 </S.Text>
                <S.SalaryInput placeholder="Enter a Salary..." onChange={(e) => setSalary(e.target.value)} />
            </S.NamePlace>
            <S.NamePlace>
                <S.Text>태그</S.Text>
                <S.TagBtn>+ 태그추가</S.TagBtn>
            </S.NamePlace>
            <S.BtnPlace>
                <S.EnrollBtn onClick={() => Enroll()}>등록</S.EnrollBtn>
                <S.CancleBtn onClick={() => Router.push('/mou')}>취소</S.CancleBtn>
            </S.BtnPlace>
           
        </S.EnrollMouContainer>
        
    )
}

export default EnrollMou;