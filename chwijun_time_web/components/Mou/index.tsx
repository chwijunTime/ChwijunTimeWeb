import React, { useEffect, useState } from 'react';
import * as S from './style';
import MouList from './MouComponent';
import { getAllMou } from 'service/get';
import Router from 'next/router';

const MouComponent:React.FC = () => {
    const [selected, setSelected] = useState(0);
    const [mouList, setMouList] = useState([]);

    async function getAllMouList() {
        try {
            const { data } = await getAllMou();
            setMouList(data.list);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllMouList();
    })

    return(
        <S.MouPlace>
            <S.Header>협약 업체</S.Header>
            <S.Additinal>
                <S.OptionPlace>
                    <S.Option current={selected === 0} onClick={() => setSelected(0)}>전체</S.Option>
                    <S.Option current={selected === 1} onClick={() => setSelected(1)}>관심</S.Option>
                    <S.Option current={selected === 2} onClick={() => setSelected(2)}>태그</S.Option>
                </S.OptionPlace>    
                <S.AddNotice>
                    <S.EnrollNotice onClick={() => Router.push('/mou/enrollMou')}>등록</S.EnrollNotice>
                </S.AddNotice>   
            </S.Additinal>
            <S.MouContainer>
                {/* {mouList && mouList.map((obj: any, idx) => {
                    <MouList name={obj.contractingCompanyName} tag={obj.contractingCompanyTags} 
                    address={obj.contractingCompanyAddress} salary={obj.contractingCompanyAverageAnnualSalary} />
                })} */}
                <MouList name={"(주) 엠몬스타"} tag={["프론트엔드", "백엔드", "인공지능"]} 
                address={"서울시 성남구 어디로 어디어디 몇층"} salary={"3000만원 ~ 3200만원"} />
            </S.MouContainer>
        </S.MouPlace>
    )
}

export default MouComponent;