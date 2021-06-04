import React, {useEffect, useState} from 'react';
import * as S from './style';
import { CancelIcon } from 'public/index';
import { getAllTag } from 'service/get';

interface Props {
    handleModal: (status: boolean) => void,
    handleTag: (status: string[]) => void,
    currentTag: string[]
}
const TagModal:React.FC<Props> = ({handleModal, handleTag, currentTag}) => {
    const [tagList, setTagList] = useState<any>([]);
    const [findList, setFindList] = useState<any>();
    const [selected, setSelected] = useState<string[]>(currentTag);

    useEffect(() => {
        async function getAllTagList() {
            try {
                const { data } = await getAllTag();
                setTagList(data.list);
            } catch (error) {
                console.log(error);
            }
        }
        getAllTagList();
    }, [])

    return(
        <S.ModalContainer>
            <S.TagModal>
                <S.SearchPlace>
                    <S.SearchBar placeholder="태그 검색..." onChange={(e) => setFindList(tagList.filter(obj => obj.tagName.includes(e.target.value.toLowerCase())))} />                  
                </S.SearchPlace>
                <S.DropdownListPlace>
                { findList && findList.map((obj, idx) => {
                    return (
                        idx < 3 && <S.DropdownList key={idx} onClick={() => 
                        {selected.includes(obj.tagName) ? alert("이미 선택된 태그입니다.") : setSelected(selected => [...selected, obj.tagName])}}>
                            {obj.tagName}</S.DropdownList>
                    )    
                })}
                </S.DropdownListPlace>
                <S.Text>선택된 태그</S.Text>
                <S.TagSelected>
                    { selected.map((obj, idx) => {
                        return (<S.Tag key={idx}>{obj}
                        <S.CancelImg onClick={() => setSelected(selected.filter(list => obj !== list))}><CancelIcon /></S.CancelImg>
                            </S.Tag>)
                    })}
                </S.TagSelected>
                <S.BtnPlace>
                    <S.ConfirmBtn onClick={() => (handleModal(false), handleTag(selected))}>확인</S.ConfirmBtn>
                    <S.CancelBtn onClick={() => {handleModal(false)}}>취소</S.CancelBtn>
                </S.BtnPlace>              
            </S.TagModal>
        </S.ModalContainer>
    )
}

export default TagModal;