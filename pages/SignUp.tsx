import React, { useRef, useState } from 'react';

import Router from 'next/router';
import Head from 'next/head';
import { useAtom } from 'jotai';
import { NextPage } from 'next';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import atoms from '../util/atoms';
import useHandleSignIn from '../hooks/useHandleSignIn';
import useSetFormErrors from '../hooks/useSetFormErrors';
import handleCreateUser from '../util/handleCreateUser';
import ProfileType from '../components/Register/ProfileType';

import 'swiper/css';
import User from '../components/Register/User';
import Address from '../components/Register/Address';
import RegisterTitle from '../components/Register/RegisterTitle';

const SignUp: NextPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [emailFormErrors, setEmailFormErrors] = React.useState('');
  const [passwordFormErrors, setPasswordFormErrors] = React.useState('');
  const [usernameFormErrors, setUsernameFormErrors] = React.useState('');
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const swiperRef = useRef(null);

  const [listeners] = useAtom(atoms.listeners);

  useSetFormErrors({
    email,
    password,
    username,
    setEmailFormErrors,
    setPasswordFormErrors,
    setUsernameFormErrors,
  });

  useHandleSignIn({ isSubmit });

  if (loading) {
    return (
      <div className="flex h-[100vh] w-full items-center justify-center dark:bg-[#131313]">
        <picture>
          <img src="/instagramLoading.png" alt="loading" />
        </picture>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Instagram • Sign up</title>
        <meta name="description" content="Instagram Clone" />
        <link rel="icon" href="/instagram.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
      </Head>
      <div className="flex min-h-[100vh] w-full items-center justify-center bg-[#fafafa]">
        <div>
          <div className="flex max-w-[350px] flex-col items-center justify-center border border-stone-300 bg-white">
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
                <Swiper
                  slidesPerView={1}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  allowTouchMove={false}
                  loop={false}
                  spaceBetween={40}
                >
                  <SwiperSlide key={0}>
                    <ProfileType />
                    <button
                      onClick={() => swiperRef.current.slideNext()}
                      className="my-5 w-full rounded-[4px]  bg-[#0095f6] px-2 py-1 text-sm
                           font-semibold hover:bg-[#abddff]"
                    >
                      Próximo
                    </button>
                  </SwiperSlide>

                  <SwiperSlide key={1}>
                    <div className='flex flex-col justify-around'>
                      <User />
                      <div className='flex flex-row justify-between items-end'>
                        <button
                          onClick={() => swiperRef.current.slidePrev()}
                          className="my-5 w-1/2 rounded-[4px]  bg-[#0095f6] px-2 py-1 text-sm
                           font-semibold hover:bg-[#abddff]"
                        >
                          Anterior
                        </button>
                        <button
                          onClick={() => swiperRef.current.slideNext()}
                          className="my-5 w-1/2 rounded-[4px]  bg-[#0095f6] px-2 py-1 text-sm
                           font-semibold hover:bg-[#abddff]"
                        >
                          Próximo
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide key={2}>
                    <Address></Address>
                    <button
                      onClick={() => swiperRef.current.slidePrev()}
                      className="my-5 w-1/2 rounded-[4px]  bg-[#0095f6] px-2 py-1 text-sm
                           font-semibold hover:bg-[#abddff]"
                    >
                      Anterior
                    </button>
                    <button
                      onClick={() => swiperRef.current.slideNext()}
                      className="my-5 w-1/2 rounded-[4px]  bg-[#0095f6] px-2 py-1 text-sm
                           font-semibold hover:bg-[#abddff]"
                    >
                      Próximo
                    </button>
                  </SwiperSlide>

                  <SwiperSlide key={3}>
                    <button
                      className={`${emailFormErrors === '' && passwordFormErrors === ''
                        ? 'bg-[#0095f6]'
                        : 'pointer-events-none cursor-default bg-[#abddff]'
                        } my-5 w-full rounded-[4px]  px-2 py-1 text-sm font-semibold text-white`}
                      type="submit"
                    >
                      Cadastrar
                    </button>
                  </SwiperSlide>

                </Swiper>
              </form>
            </div>
          </div>
          <div className="mt-2 flex max-w-[350px] flex-col justify-center border border-stone-300 bg-white py-5 text-center text-[14px]">
            <p>Já possui uma conta?</p>
            <button
              className="ml-1 font-semibold text-[#0095f6]"
              type="button"
              onClick={() => Router.push('/Login')}
            >
              Logar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
