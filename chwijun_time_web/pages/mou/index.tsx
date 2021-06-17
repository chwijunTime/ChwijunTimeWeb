import React from 'react';
import { MouComponent, Admin_MouComponent } from 'components';

const MouPage:React.FC = () => {
    const isAdmin = typeof window !== 'undefined' ? localStorage.getItem('roles'): null;

    return (
 
        isAdmin === 'ROLE_User' ? <MouComponent /> :
        isAdmin === 'ROLE_Admin' ? <Admin_MouComponent /> : null 

    )
}

export default MouPage;