import React, { useState, useEffect, Fragment } from 'react';
import * as S from './style';
import { CgOrganisation, CgMenu } from "react-icons/cg";
import { BsBookHalf, BsInboxesFill } from "react-icons/bs";
import { VscMegaphone } from "react-icons/vsc";
import { FaSchool } from "react-icons/fa";
import { TiHeadphones } from "react-icons/ti";
import { BiChalkboard, BiFile } from "react-icons/bi";
import Router from 'next/router';
import { removeToken } from 'service/token';
import { Logout } from 'service/post';

const Template:React.FC = () => {
    const [open, setOpen] = useState(true);
    const email = useState(typeof window !== 'undefined' ? localStorage.getItem('email') : '');
    const color = '#b4c2ed';
    const [para, setPara] = useState('');
    const menuList = [
        {name: "협약 업체", path: "/mou", icon: <CgOrganisation color={para === '/mou' ? '#f0f2f7' : color} />},
        {name: "면접 후기", path: "/review", icon: <BsBookHalf color={para === '/review' ? '#f0f2f7' : color} />},
        {name: "취업 확정 현황", path: "/employment", icon: <FaSchool color={para === '/employment' ? '#f0f2f7' : color} />}, 
        {name: "상담 신청", path: "/consult", icon: <TiHeadphones color={para === '/consult' ? '#f0f2f7' : color} />}, 
        {name: "취업 공고", path: "/jobnotice", icon: <BiChalkboard color={para === '/jobnotice' ? '#f0f2f7' : color} />}, 
        {name: "공지사항", path: "/notice", icon: <VscMegaphone color={para === '/notice' ? '#f0f2f7' : color} />},
        {name: "이력서 및 포트폴리오", path: "/portfolio", icon: <BiFile color={para === '/portfolio' ? '#f0f2f7' : color} />}, 
        {name: "꿀팁 저장소", path: "/storage", icon: <BsInboxesFill color={para === '/storage' ? '#f0f2f7' : color} />}
    ]

    const F_Logout = async () => {
        confirm('로그아웃 하시겠습니까?') ? (
            await Logout(),
            removeToken(), window.location.replace('/')
            ) : null;
    }
    
    // 나중에 배포하면 오류뜰거임. 그때 저 배열안에 값 바꿔주세요.
    useEffect(() => {
        setPara('/'+window.location.href.split('/')[3]);
    }, [])

    return(
        <S.SideBar current={open}>
            { open ? (
                <Fragment>
                    <S.LogoPlace>취준타임<CgMenu onClick={() => setOpen(!open)} style={{width: '30px', height: '30px'}} /></S.LogoPlace>
                    <S.UserPlace>로그인된 이메일:
                        <S.User_Email>{email}</S.User_Email>
                        <S.BtnPlace>
                            <S.Profile_Btn>내 정보</S.Profile_Btn>
                            <S.Logout_Btn onClick={() => F_Logout()}>로그아웃</S.Logout_Btn>
                        </S.BtnPlace>
                    </S.UserPlace>
                    <S.Divide_Line />
                    <S.MenuListPlace>
                        {menuList.map((obj, idx) => {
                            return <S.MenuList current={para === obj.path} onClick={() => (Router.push(obj.path), setPara(obj.path))} key={idx}>
                                {obj.icon}
                                <S.Menu>{obj.name}</S.Menu>                             
                            </S.MenuList>
                        })}
                    </S.MenuListPlace>
                </Fragment>
            ) : (
                <Fragment>
                    <S.S_LogoPlace><CgMenu onClick={() => setOpen(!open)} style={{width: '30px', height: '30px'}} /></S.S_LogoPlace>
                    <S.Divide_Line />
                    <S.S_MenuListPlace>
                        {menuList.map((obj, idx) => {
                            return <S.S_MenuList current={para === obj.path} onClick={() => (Router.push(obj.path), setPara(obj.path))} key={idx}>
                                    {obj.icon}                             
                                </S.S_MenuList>
                        })}
                    </S.S_MenuListPlace>
                </Fragment>
            )}
        </S.SideBar>

    )
}

export default Template;