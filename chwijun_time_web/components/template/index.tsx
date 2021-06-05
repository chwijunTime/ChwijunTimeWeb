import React, { useEffect, useState } from 'react';
import * as S from './style';
import { CgOrganisation } from "react-icons/cg";
import { BsBookHalf, BsInboxesFill } from "react-icons/bs";
import { VscMegaphone } from "react-icons/vsc";
import { FaSchool } from "react-icons/fa";
import { TiHeadphones } from "react-icons/ti";
import { BiChalkboard, BiFile } from "react-icons/bi";
import Router from 'next/router';
import { removeRefreshToken, removeToken } from 'service/token';

const Template:React.FC = ({children}) => {
    const color = '#b4c2ed';
    const [para, setPara] = useState('');
    const menuList = [
        {name: "협약 업체", path: "/mou", icon: <CgOrganisation color={para === '/mou' ? '#f0f2f7' : color} style={{marginRight: '10px'}} />},
        {name: "면접 후기", path: "/postscript", icon: <BsBookHalf color={para === '/postscript' ? '#f0f2f7' : color} style={{marginRight: '10px'}} />},
        {name: "취업 확정 현황", path: "/job", icon: <FaSchool color={para === '/job' ? '#f0f2f7' : color} style={{marginRight: '10px'}} />}, 
        {name: "상담 신청", path: "/advice", icon: <TiHeadphones color={para === '/advice' ? '#f0f2f7' : color} style={{marginRight: '10px'}} />}, 
        {name: "취업 공고", path: "/jobnotice", icon: <BiChalkboard color={para === '/jobnotice' ? '#f0f2f7' : color} style={{marginRight: '10px'}} />}, 
        {name: "공지사항", path: "/notice", icon: <VscMegaphone color={para === '/notice' ? '#f0f2f7' : color} style={{marginRight: '10px'}} />},
        {name: "이력서 및 포트폴리오", path: "/portfolio", icon: <BiFile color={para === '/portfolio' ? '#f0f2f7' : color} style={{marginRight: '10px'}} />}, 
        {name: "꿀팁 저장소", path: "/honeystorage", icon: <BsInboxesFill color={para === '/honeystorage' ? '#f0f2f7' : color} style={{marginRight: '10px'}} />}
    ]

    const F_Logout = () => {
        confirm('로그아웃 하시겠습니까?') ? (removeToken(), removeRefreshToken(), Router.push('/')) : null;       
    }
    

    // 나중에 배포하면 오류뜰거임. 그때 저 배열안에 값 바꿔주세요.
    useEffect(() => {
        setPara('/'+window.location.href.split('/')[3]);
    }, [])

    return(
        <S.Template>
            <S.SideBar>
                <S.LogoPlace>취준타임</S.LogoPlace>
                <S.UserPlace>로그인된 이메일:
                    <S.User_Email>answoals11@naver.com</S.User_Email>
                    <S.BtnPlace>
                        <S.Profile_Btn>내 정보</S.Profile_Btn>
                        <S.Logout_Btn onClick={() => F_Logout()}>로그아웃</S.Logout_Btn>
                    </S.BtnPlace>
                </S.UserPlace>
                <S.Divide_Line />
                <S.MenuListPlace>
                    {menuList.map((obj, idx) => {
                        return <S.MenuList current={para === obj.path} onClick={() => Router.push(obj.path)} key={idx}>
                                {obj.icon}{obj.name}
                            </S.MenuList>
                    })}
                </S.MenuListPlace>
            </S.SideBar>
            <S.Content>{children}</S.Content>
        </S.Template>
    )
}

export default Template;