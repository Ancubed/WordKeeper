import classname from "classnames";
import React from "react";

import { StarPropsInterface } from "../types/props.types";

const Star: React.FC<StarPropsInterface> = ({
  className,
  isFilled,
  onClick,
}: StarPropsInterface) => {
  return (
    <span className={classname("text-xl", className)} onClick={onClick}>
      {isFilled ? "★" : "✩"}
    </span>
  );
};

export default Star;
