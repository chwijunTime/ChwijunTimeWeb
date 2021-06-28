import React, { useState } from "react";
import * as S from './style';
import DatePicker, {registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from 'date-fns/locale/ko';
import { DownIcon } from 'public/index';

registerLocale('ko', ko);

interface Props {
    handleDate: (day: string) => void,
    isDate: boolean
}

const Calendar:React.FC<Props> = ({handleDate, isDate}) => {
  const [startDate, setStartDate] = useState(new Date());

  const ExampleCustomInput = ({ value, onClick }: {value: string; onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void}) => (
    <S.Btn className="example-custom-input" onClick={onClick}>
      {value}
      {handleDate(value)}
      <DownIcon />
    </S.Btn>
  );

  return (
    <>
      { isDate && <DatePicker locale={ko} selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()}
      dateFormat={'yyyy-MM-dd'} customInput={React.createElement(ExampleCustomInput)} /> }
      { !isDate && <DatePicker locale={ko} selected={startDate} onChange={date => setStartDate(date)} maxDate={new Date()}
      dateFormat={'yyyy-MM-dd'} customInput={React.createElement(ExampleCustomInput)} /> }
    </>
  );
};

export default Calendar