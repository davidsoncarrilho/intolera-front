import { useState } from 'react';
import RegisterTitle from './RegisterTitle';
import Button from '../Button';

function UseTerms() {
  const [useTerms, setUseTerms] = useState(false);
  return (
    <div>
      <RegisterTitle title="TERMOS DE USO" />
      <div className="rounded border-2 border-primary/700 p-1">
        <span className="font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quis rem
          assumenda, ipsum id veritatis ipsam quam rerum ullam praesentium
          expedita cumque, voluptatem architecto, quo earum cum minus reiciendis
          enim.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          quis rem assumenda, ipsum id veritatis ipsam quam rerum ullam
          praesentium expedita cumque, voluptatem architecto, quo earum cum
          minus reiciendis enim.
        </span>
      </div>
      <div className="mt-2 flex items-center p-1">
        <input
          id="default-checkbox"
          type="checkbox"
          checked={useTerms}
          onClick={() => {
            setUseTerms(!useTerms);
          }}
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        />
        <span className="ml-2 text-sm font-medium text-gray-900 hover:underline dark:text-gray-300 ">
          Li e aceito os Temos de Uso
        </span>

        <Button type="submit" label="Próximo" disabled={!useTerms} />
      </div>
    </div>
  );
}

export default UseTerms;
