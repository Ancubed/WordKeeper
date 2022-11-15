import classname from 'classnames'
import React from 'react'
import { Link } from "react-router-dom"

import { DefaultPropsInterface } from '../types/props.types'

import Star from '../components/Star'

const Header: React.FC<DefaultPropsInterface> = ({ className }: DefaultPropsInterface) => {
  return (
    <header className={classname("h-12 bg-blue-100 mb-6 rounded", className)}>
      <nav className="flex items-center justify-between w-full h-full">
        <Link to="/" className="">Words Keeper</Link>
        <Link to="/favourites" className="">
          <Star isFilled={true} className="mr-2"/>
          Starred Words
        </Link>
      </nav>
    </header>
  );
}

export default Header