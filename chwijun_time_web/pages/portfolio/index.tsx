import React from 'react';
import { Portfolio, Admin_Portfoilo, Template } from 'components';

const PortfolioPage = () => {
    const isAdmin = typeof window !== 'undefined' ? localStorage.getItem('roles'): null;

    return (
        isAdmin === 'ROLE_User' ? <><Template /><Portfolio /></> :
        isAdmin === 'ROLE_Admin' ? <><Template /><Admin_Portfoilo /></> : null 
    )
}

export default PortfolioPage;