import { StrengthPassword } from 'components/StrengthPassword/StrengthPassword';

import { useState } from 'react';

export const Form = () => {
  const [passwordQuery, setPasswordQuery] = useState('');

  const handleChange = e => {
    const query = e.currentTarget.value;
    setPasswordQuery(query);
  };

  return (
    <>
      <form>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={passwordQuery}
          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
          placeholder="Enter password"
          title="Password may contain letters, numbers, symbols. Min length 8 characters, max length - 16 characters."
        ></input>
      </form>
      {passwordQuery.length > 8 && <StrengthPassword passwordQuery={passwordQuery} />}
    </>
  );
};
