import classname from 'classnames'
import React from 'react'

import { FavouritesWordListPropsInterface } from '../types/props.types'

import Word from './Word'

const FavouritesWordsList: React.FC<FavouritesWordListPropsInterface> = ({ className, wordsSearchData }: FavouritesWordListPropsInterface) => {
  if (!wordsSearchData || wordsSearchData.length === 0) 
    return (<div className="w-full text-center mt-2">
      Здесь пока пусто
    </div>)

  return (
    <div className={classname("select-none mt-4", className)}>
        {wordsSearchData.map(wrd => 
            <Word key={wrd.word} word={wrd.word} />
        )}
    </div>
  );
}

export default FavouritesWordsList