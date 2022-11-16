import classname from 'classnames'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { DefaultPropsInterface } from '../types/props.types' 
import { FetchOneWordDataResultInterface } from '../types/utils.types'
import type { StoreState } from '../redux/store'

import SearchRow from '../components/SearchRow'
import FavouritesWordsList from '../components/FavouritesWordsList'


const Favourites: React.FC<DefaultPropsInterface> = ({ className }: DefaultPropsInterface) => {
  const wordsSearchData = useSelector((state: StoreState) => state.search.words)
  
  return (
    <div className= {classname("", className)}>
       <h1 className="text-lg">Starred Words</h1>
       <div className="mt-4">
          <FavouritesWordsList wordsSearchData={wordsSearchData}/>
        </div>
    </div>
  )
}

export default Favourites