import classname from 'classnames'
import React from 'react'

import { StarPropsInterface } from '../types/props.types'

const Star: React.FC<StarPropsInterface> = ({ className, isFilled }: StarPropsInterface) => {
  return (
    <span className={classname("text-xl", className)}>
        {isFilled ? '★' : '✩'}
    </span>
  );
}

export default Star