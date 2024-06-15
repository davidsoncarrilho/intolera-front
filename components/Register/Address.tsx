import { useState } from "react";
import RegisterTitle from "./RegisterTitle";

function Address({ }) {
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [postCode, setPostCode] = useState('');
    const [phone, setPhone] = useState('');

    return (

        <div className="flex flex-col gap-5">

            <RegisterTitle title='ENDEREÇO'></RegisterTitle>
            <label htmlFor="signInPageState">
                {' '}
                <input
                    className="w-full border border-stone-300 bg-[#fafafa] px-2 py-[7px] text-sm focus:outline-none"
                    type="text"
                    id="signInPageState"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Estado"
                />
            </label>
            <label htmlFor="signInPageCity">
                {' '}
                <input
                    className=" w-full border border-stone-300 bg-[#fafafa] px-2 py-[7px] text-sm focus:outline-none"
                    type="text"
                    id="signInPageCity"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Cidade"
                />
            </label>
            <label htmlFor="signInPageStreet">
                {' '}
                <input
                    className="w-full border border-stone-300 bg-[#fafafa] px-2 py-[7px] text-sm focus:outline-none"
                    type="text"
                    id="signInPageStreet"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    placeholder="Rua"
                />
            </label>
            <label htmlFor="signInPagePostCode">
                {' '}
                <input
                    className="w-full border border-stone-300 bg-[#fafafa] px-2 py-[7px] text-sm focus:outline-none"
                    type="text"
                    id="signInPagePostCode"
                    value={postCode}
                    onChange={(e) => setPostCode(e.target.value)}
                    placeholder="CEP"
                />
            </label>
            <label htmlFor="signInPagePhone">
                {' '}
                <input
                    className="w-full border border-stone-300 bg-[#fafafa] px-2 py-[7px] text-sm focus:outline-none"
                    type="text"
                    id="signInPagePhone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Telefone"
                />
            </label>

        </div>
    );
}

export default Address;
