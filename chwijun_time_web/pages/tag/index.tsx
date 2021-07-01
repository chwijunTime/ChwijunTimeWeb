import React from 'react';
import { TagComponent, Template, Admin_TagComponent } from 'components';

const TagPage = () => {
    const isAdmin = typeof window !== 'undefined' ? localStorage.getItem('roles'): null;

    return (
        isAdmin === 'ROLE_User' ? <><Template /><TagComponent /></> :
        isAdmin === 'ROLE_Admin' ? <><Template /><Admin_TagComponent /></> : null 
    )
}

export default TagPage;