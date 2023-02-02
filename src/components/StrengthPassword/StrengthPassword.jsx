import { useState, useEffect } from 'react';
import { LETTERS, DIGITS, SPECIALS } from 'constants/constants';

export const StrengthPassword = ({ passwordQuery }) => {
  const [easy, setEasy] = useState(0);
  const [medium, setMedium] = useState(0);
  const [strong, setStrong] = useState(0);
  useEffect(() => {
    if (passwordQuery === '') {
      return;
    }
    
    if (
      passwordQuery.match(LETTERS) ||
      passwordQuery.match(DIGITS) ||
      passwordQuery.match(SPECIALS)
    ) {
      setEasy(1);
    }
    if (passwordQuery.match(LETTERS) && passwordQuery.match(DIGITS)) {
      setMedium(1);
    }
    if (passwordQuery.match(LETTERS) && passwordQuery.match(SPECIALS)) {
      setMedium(1);
    }
    if (
      passwordQuery.match(LETTERS) &&
      passwordQuery.match(DIGITS) &&
      passwordQuery.match(SPECIALS)
    ) {
      setStrong(1);
    }
  }, [passwordQuery]);
  return (
    <>
      <p>Easy: {easy}</p>
      <p>Medium: {medium}</p>
      <p>Strong: {strong}</p>
    </>
  );
};
