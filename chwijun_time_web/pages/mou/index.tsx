import React from 'react';
import { MouComponent, Admin_MouComponent, Template } from 'components';

const MouPage:React.FC = () => {
    const isAdmin = typeof window !== 'undefined' ? localStorage.getItem('roles'): null;

    return (
 
        isAdmin === 'ROLE_User' ?  <><Template /><MouComponent /></> :
        isAdmin === 'ROLE_Admin' ? <><Template /><Admin_MouComponent /></> : null 

    )
}

export default MouPage;