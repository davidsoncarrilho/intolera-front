import axios from 'axios';

interface Props {
  e: any;
  listeners: any[];
  email: string;
  password: string;
  emailFormErrors: string;
  passwordFormErrors: string;
  guest: boolean;
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>;
  setPasswordFormErrors: React.Dispatch<React.SetStateAction<string>>;
}

async function handleSignIn({
  e,
  listeners,
  passwordFormErrors,
  emailFormErrors,
  email,
  password,
  guest,
  setIsSubmit,
  setPasswordFormErrors,
}: Props) {
  e.preventDefault();

  if (passwordFormErrors === '' && emailFormErrors === '') {
    try {
      const url = `${process.env.API_URL_HML}auth/login`;
      const data = {
        email,
        password,
      };

      await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setIsSubmit(true);
    } catch (error) {
      setPasswordFormErrors(error.message);
    }
  }
}

export default handleSignIn;
