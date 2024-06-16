import React, { useState } from 'react';
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
          <InputField
            id="signInPageConfirmPassword"
            type="password"
            label="Confirmar Senha:"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div className="mt-32 flex space-x-4">
        <Button
          onClick={() => swiperRef.current.slidePrev()}
          label="Anterior"
        />
        <Button type="submit" label="Próximo" />
      </div>
    </>
  );
}

export default User;
