import styled from 'styled-components';

export const HeaderPlace = styled.div`
    display: flex;
    width: auto;
    height: auto;

    background-color: #396371;
    color: white;
`;

export const HeaderRight = styled.div`
    display: flex;
    justify-content: right;

    color: white;
    width: 20%;
    height: 120px;
`;
export const HeaderLeft = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 80%;
    height: 120px;

    font-size: 17px;
`;

export const Logo = styled.img`
    width: 100px;
    height: 100px;
`;

export const Text = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

export const InfoLogin = styled.div`
    padding-top: 20px;
`;

export const MenuList = styled.div`
    padding-top: 15px;
`;