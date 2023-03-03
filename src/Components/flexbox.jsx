import React from "react";
import '../App.css'
import Image from 'react-bootstrap/Image'

export default function App(){
  return (
    <div className="d-flex p-2 justify-content-evenly">
        <Image fluid src="https://placehold.jp/200x100.png"/>
        <Image fluid src="https://placehold.jp/200x100.png"/>
        <Image fluid src="https://placehold.jp/200x100.png"/>
        <Image fluid src="https://placehold.jp/200x100.png"/>
    </div>
  );
}