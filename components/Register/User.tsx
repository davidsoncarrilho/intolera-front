/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import RegisterTitle from './RegisterTitle';
import InputField from '../InputField';
import Button from '../Button';

type UserProps = {
  data: {
    username: string;
    email: string;
    password: string;
  };
  updateFieldHandler: (key: string, value: string) => void;
};

function User({ swiperRef, data, updateFieldHandler }: UserProps) {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isFormFilled = Boolean(
      data.username && data.email && data.password && confirmPassword
    );
    const isPasswordMatch = data.password === confirmPassword;

    setPasswordError(isPasswordMatch ? '' : 'As senhas não coincidem.');
    setIsFormValid(isFormFilled && isPasswordMatch);
  }, [data, confirmPassword]);

  return (
    <>
      <div>
        <RegisterTitle title="CADASTRO" />
        <div className="flex flex-col gap-4">
          <InputField
            id="username"
            type="text"
            label="Nome de Usuário:"
            value={data.username || ''}
            onChange={updateFieldHandler}
            placeholder="Username"
          />
          <InputField
            id="email"
            type="email"
            label="Email:"
            value={data.email}
            onChange={updateFieldHandler}
            placeholder="Email address"
          />
          <InputField
            id="password"
            type="password"
            label="Senha:"
            value={data.password}
            onChange={updateFieldHandler}
            placeholder="Password"
          />
          <div>
            <label className="font-semibold">Confirmar Senha:</label>
            <input
              className="w-full rounded-md border border-stone-300 bg-[#fafafa] px-2 py-[7px]  text-sm font-normal shadow-md hover:border-primary/700 focus:outline-primary/700 "
              type="password"
              id="signInPageConfirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </div>
          {passwordError && <p className="text-red-500">{passwordError}</p>}
        </div>
      </div>
      <div className="mt-32 flex space-x-4">
        <Button
          onClick={() => swiperRef.current.slidePrev()}
          label="Anterior"
          disabled={isFormValid}
        />
        <Button type="submit" label="Próximo" disabled={!isFormValid} />
      </div>
    </>
  );
}

export default User;
