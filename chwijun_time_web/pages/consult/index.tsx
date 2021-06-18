import React from 'react';
import { ConsultComponent, Admin_ConsultComponent } from 'components';

const ConsultPage:React.FC = () => {
    const isAdmin = typeof window !== 'undefined' ? localStorage.getItem('roles'): null;

    return (
        isAdmin === 'ROLE_User' ? <ConsultComponent /> :
        isAdmin === 'ROLE_Admin' ? <Admin_ConsultComponent /> : null 
    )
}

export default ConsultPage;