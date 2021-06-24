import React, { useState } from 'react';
import * as S from './style';
import Router from 'next/router';
import { submitEnrollConsult } from 'service/post';
import Calendar from 'components/Calendar';

const EnrollConsult:React.FC = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const Enroll = async () => {
        if(date === '' || time === '') {
            alert('날짜와 시간 모두 입력해주세요.'); return;
        }
        try {
            const { data } = await submitEnrollConsult(date + "T" + time);
            data.success ? (alert("등록되었습니다."), Router.push('/consult')): alert(data.msg)              
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <S.ConsultContainer>
            <S.Header>
                <S.UrlText>상담신청 &gt; 상담신청 등록</S.UrlText>
                <S.Title>상담신청 등록
                    <S.Sub_Title>선생님이 가능하신 시간에 상담신청 글을 등록합니다.</S.Sub_Title>
                </S.Title>
            </S.Header>
            <S.InputContainer>
                <S.ItemList>
                    <S.Item>상담일자</S.Item>
                    <S.InputItem>
                        <Calendar handleDate={setDate} isDate={true} />
                    </S.InputItem>
                </S.ItemList>
                <S.ItemList>
                    <S.Item>상담시간</S.Item>
                    <S.InputItem>
                        <S.TimePlace>
                            <S.InputTime type="time" onChange={(e) => setTime(e.target.value)} />
                        </S.TimePlace>                        
                    </S.InputItem>
                </S.ItemList>             
            </S.InputContainer>
            <S.BtnPlace>               
                <S.Cancel_Btn onClick={() => confirm('취소하시겠습니까?') ? Router.push('/consult') : null}>취소</S.Cancel_Btn>
                <S.Enroll_Btn onClick={() => confirm('등록하시겠습니까?') ? Enroll() : null}>등록</S.Enroll_Btn>
            </S.BtnPlace>
        </S.ConsultContainer>
    )
}

export default EnrollConsult;