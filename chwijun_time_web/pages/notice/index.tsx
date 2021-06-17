import React from 'react';
import { NoticeComponent, Admin_NoticeComponent } from 'components';

const NoticePage:React.FC = () => {
    const isAdmin = typeof window !== 'undefined' ? localStorage.getItem('roles'): null;

    return (
        isAdmin === 'ROLE_User' ? <NoticeComponent /> :
        isAdmin === 'ROLE_Admin' ? <Admin_NoticeComponent /> : null 
    )
}

export default NoticePage;