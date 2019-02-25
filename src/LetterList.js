import React, { Component } from 'react';
import './LetterList.css';

class LetterList extends Component {
  render() {
    let letters = [
      '#',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ];
    let letter = letters.map(ltr => (
      <button type="button" className="btn btn-default btn-circle">
        {ltr}
      </button>
    ));
    return (
      <div>
        <ol className="letter-list">
          <li>{letter}</li>
        </ol>
      </div>
    );
  }
}

export default LetterList;
