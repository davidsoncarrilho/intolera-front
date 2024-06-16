/* eslint-disable react/button-has-type */
import React, { useRef, useState } from 'react';

import Router from 'next/router';
import Head from 'next/head';
import { NextPage } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import handleCreateUser from '../util/handleCreateUser';
import ProfileType from '../components/Register/ProfileType';

import 'swiper/css';
import User from '../components/Register/User';
import Address from '../components/Register/Address';

import Button from '../components/Button';
import UseTerms from '../components/Register/UseTerms';

type FormFields = {
  userType: string;
  username: string;
  email: string;
  password: string;
  state: string;
  city: string;
  street: string;
  postalCode: string;
  phone: string;
  certificate: string;
};

const formTemplate: FormFields = {
  userType: '',
  username: '',
  email: '',
  password: '',
  state: '',
  city: '',
  street: '',
  postalCode: '',
  phone: '',
  certificate: '',
};

const SignUp: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const swiperRef = useRef(null);
  const [data, setData] = useState(formTemplate);
  console.log(data);

  const updateFieldHandler = (key: string, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    swiperRef.current.slideNext();
  };

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
      <div className="flex min-h-[100vh] w-full items-center justify-center bg-[#fafafa] ">
        <div>
          <div className="flex max-w-[350px] flex-col items-center justify-center border border-stone-300 bg-white">
            <div className="w-full px-10">
              <form
                action=""
                className="signInPageFormContainer"
                onSubmit={handleFormSubmit}
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
                    <ProfileType
                      data={data}
                      updateFieldHandler={updateFieldHandler}
                    />
                    <Button type="submit" label="Próximo" />
                  </SwiperSlide>

                  <SwiperSlide key={1}>
                    <User swiperRef={swiperRef} data={data} updateFieldHandler={updateFieldHandler} />
                  </SwiperSlide>

                  <SwiperSlide key={2}>
                    <Address
                      swiperRef={swiperRef}
                      data={data}
                      updateFieldHandler={updateFieldHandler}
                    />
                  </SwiperSlide>

                  <SwiperSlide key={3}>
                    <UseTerms />
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
    </div >
  );
};

export default SignUp;
