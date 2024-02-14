import React, { useState } from "react";
type Props = {
  title: string;
  placeholder: string;
};

const NumberFieldType: React.FC<Props> = ({ title, placeholder }) => {
  const [value, setValue] = useState<number>(0);
  return (
    <div>
      <h5>{title}</h5>
      <input
        type="number"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </div>
  );
};

export default NumberFieldType;
