import React from 'react';
import { JobNoticeComponent, Admin_JobNoticeComponent, Template } from 'components';

const JobNoticePage:React.FC = () => {
    const isAdmin = typeof window !== 'undefined' ? localStorage.getItem('roles'): null;

    return (
        isAdmin === 'ROLE_User' ?  <><Template /><JobNoticeComponent /></> :
        isAdmin === 'ROLE_Admin' ? <><Template /><Admin_JobNoticeComponent /></> : null 
    )
}

export default JobNoticePage;