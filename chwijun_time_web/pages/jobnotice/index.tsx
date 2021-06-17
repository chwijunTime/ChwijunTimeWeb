import React from 'react';
import { JobNoticeComponent, Admin_JobNoticeComponent } from 'components';

const NoticePage:React.FC = () => {
    const isAdmin = typeof window !== 'undefined' ? localStorage.getItem('roles'): null;

    return (
        isAdmin === 'ROLE_User' ? <JobNoticeComponent /> :
        isAdmin === 'ROLE_Admin' ? <Admin_JobNoticeComponent /> : null 

    )
}

export default NoticePage;