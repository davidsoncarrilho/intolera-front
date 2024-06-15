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
    <div className="flex max-w-[350px] flex-col items-center justify-center">
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
      </div>
    </div>
  );
}

export default ProfileType;
