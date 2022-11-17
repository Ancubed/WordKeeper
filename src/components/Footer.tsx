import classname from "classnames";
import React from "react";

import { DefaultPropsInterface } from "../types/props.types";

const Footer: React.FC<DefaultPropsInterface> = ({
  className,
}: DefaultPropsInterface) => {
  return (
    <footer
      className={classname("fixed left-0 bottom-0 py-2 w-full", className)}
    >
      Powered by{" "}
      <a href="https://github.com/Ancubed" target="_blank">
        Ancubed
      </a>
    </footer>
  );
};

export default Footer;
