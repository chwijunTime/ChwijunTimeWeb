import React from 'react';
import { ConsultComponent, Admin_ConsultComponent, Template } from 'components';

const ConsultPage:React.FC = () => {
    const isAdmin = typeof window !== 'undefined' ? localStorage.getItem('roles'): null;

    return (
        isAdmin === 'ROLE_User' ? <><Template /><ConsultComponent /></> :
        isAdmin === 'ROLE_Admin' ? <><Template /><Admin_ConsultComponent /></> : null 
    )
}

export default ConsultPage;