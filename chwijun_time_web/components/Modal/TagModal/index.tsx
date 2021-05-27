import React, {useEffect, useState} from 'react';
import * as S from './style';
import { CancelIcon } from 'public/index';

interface Props {
    handleModal: (status: boolean) => void;
}
const TagModal:React.FC<Props> = ({handleModal}) => {
    const [tagList, setTagList] = useState([{name: 'React'}, {name: 'TypeScript'}, {name: 'feadsf'}, {name: 'feadsffea'},
                                            {name: 'fandskfne'}])
    const [input, setInput] = useState<string>(' ');
    const [findList, setFindList] = useState<any>();
    const [selected, setSelected] = useState<string[]>([]);
    const [removeIdx, setRemoveIdx] = useState<string>('');
    const [clicked, setClicked] = useState('');
    
    const OverlapCheck = () => {
        selected.includes(clicked) ? alert("이미 선택된 태그입니다.") : selected.push(clicked);
        if(selected[0] == "") {
            selected.pop();
        }
    }
    useEffect(() => {
        setFindList(tagList.filter(obj => {
            return obj.name.includes(input);
        }))
    }, [input, clicked])
    useEffect(() => {
        setSelected(selected.filter(obj => removeIdx !== obj))
    }, [removeIdx])
    useEffect(() => {
        OverlapCheck();
    }, [clicked])
    return(
        <S.ModalContainer>
            <S.TagModal>
                <S.SearchPlace>
                    <S.SearchBar placeholder="태그 검색..." onChange={(e) => setInput(e.target.value)} />                  
                </S.SearchPlace>
                <S.DropdownListPlace>

                { findList && findList.map((obj, idx) => {
                    return (
                        idx < 3 && <S.DropdownList key={idx} onClick={() => setClicked(obj.name)}>{obj.name}</S.DropdownList>
                    )    
                })}
                </S.DropdownListPlace>
                <S.Text>선택된 태그</S.Text>
                <S.TagSelected>
                    { selected.map((obj, idx) => {
                        return (<S.Tag key={idx}>{obj}
                        <S.CancelImg onClick={() => setRemoveIdx(obj)}><CancelIcon /></S.CancelImg>
                            </S.Tag>)
                    })}
                </S.TagSelected>
                <S.BtnPlace>
                    <S.ConfirmBtn onClick={() => handleModal(false)}>확인</S.ConfirmBtn>
                    <S.CancelBtn onClick={() => handleModal(false)}>취소</S.CancelBtn>
                </S.BtnPlace>
                
            </S.TagModal>
        </S.ModalContainer>
    )
}

export default TagModal;