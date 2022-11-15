import classname from 'classnames'
import React from 'react';
import { DefaultPropsInterface } from '../types/props.types' 

const Favourites: React.FC<DefaultPropsInterface> = ({ className }: DefaultPropsInterface) => {
  return (
    <div className= {classname("", className)}>
       <h1 className="text-lg">Starred Words</h1>
    </div>
  )
}

export default Favourites