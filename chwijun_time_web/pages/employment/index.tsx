import React from 'react';
import { Employment, Admin_Employment } from 'components';

const EmploymentPage:React.FC = () => {
    const isAdmin = typeof window !== 'undefined' ? localStorage.getItem('roles'): null;

    return (
        isAdmin === 'ROLE_User' ? <Employment /> :
        isAdmin === 'ROLE_Admin' ? <Admin_Employment /> : null 
    )
}

export default EmploymentPage;