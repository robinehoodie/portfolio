import React from 'react'
import LetterColor from './LetterColor.jsx';

function MoveLetters(props) {
  return (
    <p>
        {props.word.split('').map((letter, index) => (letter === ' ' ? ' ' : (
        <LetterColor rotation={20} timing={200} letter={letter} key={index}>
        </LetterColor>
      )))}
    </p>
  )
}

export default MoveLetters