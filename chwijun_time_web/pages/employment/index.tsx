import React from 'react';
import { Employment, Admin_Employment, Template } from 'components';

const EmploymentPage:React.FC = () => {
    const isAdmin = typeof window !== 'undefined' ? localStorage.getItem('roles'): null;

    return (
        isAdmin === 'ROLE_User' ? <><Template /><Employment /></> :
        isAdmin === 'ROLE_Admin' ? <><Template /><Admin_Employment /></> : null 
    )
}

export default EmploymentPage;