import React from "react";

type Props = {
  name: string;
  blok: {
    name: string;
  };
};

const Checkbox: React.FC<Props> = ({ blok, name }) => {
  return (
    <label
      htmlFor={blok.name}
      className=" cursor-pointer p-4 border-2 rounded-xl border-rose-800 max-w-[250px] h-[200px] flex justify-center items-center flex-col w-full gap-3"
    >
      {blok.name}

      <div>
        <input
          className="w-12 h-12 cursor-pointer"
          name={name}
          id={blok.name}
          value={blok.name}
          type="radio"
        />
      </div>
    </label>
  );
};

export default Checkbox;
