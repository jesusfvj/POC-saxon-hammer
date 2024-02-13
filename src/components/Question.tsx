import { SbBlokData } from "@storyblok/js";
import React from "react";

interface Props {
  blok: SbBlokData;
}

const Question: React.FC<Props> = ({ blok }) => {
  return <div>Pregunta</div>;
};

export default Question;
