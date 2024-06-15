import { useState } from "react";

function User({}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [emailFormErrors, setEmailFormErrors] = useState('');
    const [passwordFormErrors, setPasswordFormErrors] = useState('');
    const [usernameFormErrors, setUsernameFormErrors] = useState('');

  return (
    
    <div>
        
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

    </div>
  );
}

export default User;
