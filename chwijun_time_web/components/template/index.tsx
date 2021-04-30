import React, {Fragment} from 'react';
import * as S from './style';
import { Logo } from 'public/index';

const Template:React.FC = ({children}) => {
    const menuList = [{name: "- 협약 업체", path: "/mou"}, {name: "- 후기", path: "/postscipt"}, {name: "- 취업 확정 현황", path: "/job"}
    , {name: "- 상담 신청", path: "/advice"}, {name: "- 취업 공고", path: "/jobnotice"}, {name: "- 공지사항", path: "/notice"},
    {name: "- 이력서 및 포트폴리오", path: "/portfolio"}, {name: "- 꿀팁 저장소", path: "/honeystorage"} ]

    return(
        <S.Template>
            <S.SideBar>
                <S.SideHead>
                    <Logo />
                    <S.HeadText>My Info</S.HeadText>
                    <S.HeadText>Log out</S.HeadText>
                </S.SideHead>
                <S.SideListPlace>
                { menuList.map((menu, index) => {
                        // 이거 Link 태그 or url 걸어주세요
                        return <S.SideList key={index}>{menu.name}</S.SideList>
                    }) }
                </S.SideListPlace>
                    
            </S.SideBar>
            <S.Content>{children}</S.Content>
        </S.Template>
    )
}

export default Template;