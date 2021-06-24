import React from 'react';
import { NoticeComponent, Admin_NoticeComponent, Template } from 'components';

const NoticePage:React.FC = () => {
    const isAdmin = typeof window !== 'undefined' ? localStorage.getItem('roles'): null;

    return (
        isAdmin === 'ROLE_User' ? <><Template /><NoticeComponent /></> :
        isAdmin === 'ROLE_Admin' ? <><Template /><Admin_NoticeComponent /></> : null 
    )
}

export default NoticePage;