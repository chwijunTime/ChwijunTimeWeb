import React, {Fragment} from 'react';
import * as S from './style';
import { Logo } from 'public/index';
import Router from 'next/router';
import { removeRefreshToken, removeToken } from 'service/token';

const Template:React.FC = ({children}) => {
    const menuList = [{name: "- 협약 업체", path: "/mou"}, {name: "- 후기", path: "/postscript"}, {name: "- 취업 확정 현황", path: "/job"}
    , {name: "- 상담 신청", path: "/advice"}, {name: "- 취업 공고", path: "/jobnotice"}, {name: "- 공지사항", path: "/notice"},
    {name: "- 이력서 및 포트폴리오", path: "/portfolio"}, {name: "- 꿀팁 저장소", path: "/honeystorage"} ]

    const F_Logout = () => {
        confirm('로그아웃 하시겠습니까?') ? (removeToken(), removeRefreshToken(), Router.push('/')) : null;       
    }
        
    return(
        <S.Template>
            <S.SideBar>
                <S.LogoPlace>
                    <Logo />
                </S.LogoPlace>
                <S.SideHead>                  
                    <S.HeadText>My Info</S.HeadText>
                    <S.HeadText onClick={() => F_Logout()}>Log out</S.HeadText>
                </S.SideHead>
                <S.SideListPlace>
                { menuList.map((menu, index) => {
                        return <S.SideList key={index} onClick={() => Router.push(menu.path)}>{menu.name}</S.SideList>
                    }) }
                </S.SideListPlace>
                    
            </S.SideBar>
            <S.Content>{children}</S.Content>
        </S.Template>
    )
}

export default Template;