import React, { useEffect } from "react";
import * as S from './style'

import KakaoMap from "containers/Map";
import Header from 'components/Header';

const Map: React.FC = () => {
  return(
    <>
      <Header />
      <KakaoMap />
    </>
  )
};

export default Map;