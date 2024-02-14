"use client";

import React from "react";
import Checkbox from "./Checkbox";
import NumberFieldType from "./NumberFieldType";

interface Props {
  blok: {
    question: string;
    type: any;
  };
}

const Question: React.FC<Props> = ({ blok }) => {
  const fieldType = blok.type[0];

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl">{blok.question}</h2>
      {fieldType.component === "CheckboxFieldType" && (
        <div className="flex gap-6">
          {fieldType.options.map(
            (checkboxOption: { _uid: string; name: string }) => (
              <Checkbox
                name={blok.question}
                blok={checkboxOption}
                key={checkboxOption._uid}
              />
            )
          )}
        </div>
      )}

      {fieldType.component === "NumberFieldType" && (
        <NumberFieldType {...fieldType} />
      )}
    </div>
  );
};

export default Question;
