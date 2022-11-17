import classname from "classnames";
import React from "react";

import { WordDefenitionPropsInterface } from "../types/props.types";

import { capitalizeFirstLetter } from "../utils/helpers";

const WordDefenition: React.FC<WordDefenitionPropsInterface> = ({
  className,
  partOfSpeech,
  definition,
}: WordDefenitionPropsInterface) => {
  return (
    <div className={classname("", className)}>
      <span className="italic">{capitalizeFirstLetter(partOfSpeech)}</span>
      <span className="ml-6">{capitalizeFirstLetter(definition)}</span>
    </div>
  );
};

export default WordDefenition;
