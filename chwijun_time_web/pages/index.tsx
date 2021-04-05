import Head from 'next/head'
import React, {useState} from 'react';

export default function Home() {
  const [text, setText] = useState('ff');

  return (
    <>
      <input type="text" onChange={(e) => {setText(e.target.value)}} />
      <div>{text}</div>
    </>
  )
}
