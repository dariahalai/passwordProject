import { useState, useEffect } from 'react';
import { LETTERS, DIGITS, SPECIALS } from 'constants/constants';
import { BsCheckLg,BsRecordFill } from "react-icons/bs";

// idle
// unacted
// easy
// medium
// strong

export const StrengthPassword = ({ passwordQuery }) => {

  const [status, setStatus] = useState('idle');
  useEffect(() => {
    if (passwordQuery === '') {
      return;
    }
    if (passwordQuery.length < 8) {
      setStatus('unacted');
      return
    }
    if (
      passwordQuery.match(LETTERS) ||
      passwordQuery.match(DIGITS) ||
      passwordQuery.match(SPECIALS)
    ) {
      setStatus('easy');
    }
    if (passwordQuery.match(LETTERS) && passwordQuery.match(DIGITS)) {
      setStatus('medium');
    }
    if (passwordQuery.match(LETTERS) && passwordQuery.match(SPECIALS)) {
      setStatus('medium');
    }
    if (
      passwordQuery.match(LETTERS) &&
      passwordQuery.match(DIGITS) &&
      passwordQuery.match(SPECIALS)
    ) {
      setStatus('strong');
    }
  }, [passwordQuery]);

  if (status === 'idle' ||!passwordQuery.length)
    return (
      <>
        <p style={{ color: 'grey' }}><BsRecordFill size='16'/>Have 8 charecters</p>
        <p style={{ color: 'grey' }}><BsRecordFill size='16'/>Easy (Only letters/digits/symbols)</p>
        <p style={{ color: 'grey' }}><BsRecordFill size='16'/>Medium (Combination of letters-symbols/letters-digits/digits-symbols)</p>
        <p style={{ color: 'grey' }}><BsRecordFill size='16'/>Strong (Has letters, symbols and numbers )</p>
      </>
    );
  if (status === 'unacted')
    return (
      <>
        <p style={{ color: 'red' }}><BsRecordFill size='16'/>Have 8 charecters</p>
        <p style={{ color: 'red' }}><BsRecordFill size='16'/>Easy (Only letters/digits/symbols)</p>
        <p style={{ color: 'red' }}><BsRecordFill size='16'/>Medium (Combination of letters-symbols/letters-digits/digits-symbols)</p>
        <p style={{ color: 'red' }}><BsRecordFill size='16'/>Strong (Has letters, symbols and numbers )</p>
      </>
    );
  if (status === 'easy')
    return (
      <>
        <p style={{ color: 'green' }}><BsCheckLg size='16'/>Have 8 charecters</p>
        <p style={{ color: 'green' }}><BsCheckLg size='16'/>Easy (Only letters/digits/symbols)</p>
        <p style={{ color: 'grey' }}><BsRecordFill size='16'/>Medium (Combination of letters-symbols/letters-digits/digits-symbols)</p>
        <p style={{ color: 'grey' }}><BsRecordFill size='16'/>Strong (Has letters, symbols and numbers )</p>
      </>
    );
  if (status === 'medium')
    return (
      <>
        <p style={{ color: 'green' }}><BsCheckLg size='16'/>Have 8 charecters</p>
        <p style={{ color: 'green' }}><BsCheckLg size='16'/>Easy (Only letters/digits/symbols)</p>
        <p style={{ color: 'green' }}><BsCheckLg size='16'/>Medium (Combination of letters-symbols/letters-digits/digits-symbols)</p>
        <p style={{ color: 'grey' }}><BsRecordFill size='16'/>Strong (Has letters, symbols and numbers )</p>
      </>
    );
  if (status === 'strong')
    return (
      <>
        <p style={{ color: 'green' }}><BsCheckLg size='16'/>Have 8 charecters</p>
        <p style={{ color: 'green' }}><BsCheckLg size='16'/>Easy (Only letters/digits/symbols)</p>
        <p style={{ color: 'green' }}><BsCheckLg size='16'/>Medium (Combination of letters-symbols/letters-digits/digits-symbols)</p>
        <p style={{ color: 'green' }}><BsCheckLg size='16'/>Strong (Has letters, symbols and numbers )</p>
      </>
    );
    }

