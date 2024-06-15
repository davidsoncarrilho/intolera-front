import Image from 'next/image';
import Router from 'next/router';
import { useState } from 'react';
import LogoLogin from '../../public/intoleraLogin.svg';

function ProfileType() {
  const [selectedCheckbox, setSelectedCheckbox] = useState('checked');

  const handleCheckboxChange = (checkbox) => {
    setSelectedCheckbox(checkbox);
  };

  return (
    <div className="flex min-h-[100vh] w-full items-center justify-center bg-[#fafafa]">
      <div>
        <div className="flex max-w-[350px] flex-col items-center justify-center border border-stone-300 bg-white">
          <div className="h-auto w-[230px] py-8">
            <Image src={LogoLogin} alt="Logo Intolera" />
          </div>
          <div className="px-10 pb-5 text-center font-semibold text-primary/700 ">
            <p style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
              Você é:
            </p>
          </div>
          <div className="w-full px-10">
            <div className="mb-14">
              <div>
                <div className="mb-4 flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    checked={selectedCheckbox === 'default'}
                    onChange={() => handleCheckboxChange('default')}
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-900 hover:underline dark:text-gray-300 ">
                    Profissional da área da saúde
                  </span>
                </div>
                <div className="flex items-center">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    checked={selectedCheckbox === 'checked'}
                    onChange={() => handleCheckboxChange('checked')}
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Intolerante à lactose
                  </span>
                </div>
              </div>
            </div>
            <button
              className="my-5 w-full rounded-[4px] bg-[#0095f6] px-2  py-1 text-sm font-semibold text-white hover:bg-primary/700"
              type="submit"
            >
              Próximo
            </button>
          </div>
          {/* <div className="px-10 pb-5 text-center font-semibold text-[#8e8e8e]">
          <p>Sign up to see photos and videos from your friends.</p>
        </div>
        <div className="w-full px-10">
          <form
            action=""
            className="signInPageFormContainer"
            onSubmit={(e: any) =>
              handleCreateUser({
                e,
                listeners,
                username,
                email,
                password,
                passwordFormErrors,
                emailFormErrors,
                usernameFormErrors,
                setIsSubmit,
                setLoading,
                setPasswordFormErrors,
              })
            }
          >
            <label htmlFor="signInPageUserName">
              {' '}
              <input
                className="w-full border border-stone-300 bg-[#fafafa] px-2 py-[7px] text-sm focus:outline-none"
                type="text"
                id="signInPageUserName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </label>
            <p className="h-[30px] text-[10px] text-red-600">
              {usernameFormErrors}
            </p>
            <label htmlFor="signInPageEmail">
              {' '}
              <input
                className=" w-full border border-stone-300 bg-[#fafafa] px-2 py-[7px] text-sm focus:outline-none"
                type="email"
                id="signInPageEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
              />
            </label>
            <p className="h-[20px] pb-2 text-[10px] text-red-600">
              {emailFormErrors}
            </p>
            <label htmlFor="signInPagePassword">
              {' '}
              <input
                className="w-full border border-stone-300 bg-[#fafafa] px-2 py-[7px] text-sm focus:outline-none"
                type="password"
                id="signInPagePassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </label>
            <p className="h-[20px] text-[10px] text-red-600">
              {passwordFormErrors}
            </p>
            <button
              className={`${
                emailFormErrors === '' && passwordFormErrors === ''
                  ? 'bg-[#0095f6]'
                  : 'pointer-events-none cursor-default bg-[#abddff]'
              } my-5 w-full rounded-[4px]  px-2 py-1 text-sm font-semibold text-white`}
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div> */}
        </div>
        <div className="mt-2 flex max-w-[350px] justify-center border border-stone-300 bg-white py-5 text-[14px]">
          <p>Have an account?</p>
          <button
            className="ml-1 font-semibold text-[#0095f6]"
            type="button"
            onClick={() => Router.push('/Login')}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileType;
