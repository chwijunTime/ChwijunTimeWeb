import React from 'react';
import { MyPageComponent, Template } from 'components';

const MyPage = () => {
    const isAdmin = typeof window !== 'undefined' ? localStorage.getItem('roles'): null;

    return (
        isAdmin === 'ROLE_User' ? <><Template /><MyPageComponent /></> :
        isAdmin === 'ROLE_Admin' ? alert('관리자는 접근이 불가합니다.') : null
    )
}

export default MyPage;