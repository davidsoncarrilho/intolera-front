import { useState } from 'react';
import FileInput from '../FileInput';
import Button from '../Button';

function PDFCertificate() {
  const [value, setPdfValue] = useState();
  const handlePdfSelect = (e) => {
    const file = e.target.files[0];
    setPdfValue(file);
  };
  console.log(value);

  return (
    <>
      <h2 className="my-16 text-center text-lg font-semibold">
        Anexe aqui seu documento de permissão para trabalhar na área da saúde
      </h2>
      <div>
        <FileInput setPdfValue={setPdfValue} />
      </div>
      <div className="mt-40">
        <Button type="submit" label="Cadastrar" disabled={!value} />
      </div>
    </>
  );
}

export default PDFCertificate;
