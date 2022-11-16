import classname from 'classnames'
import React from 'react'

import { WordListPropsInterface } from '../types/props.types'

import Word from './Word'

const WordsList: React.FC<WordListPropsInterface> = ({ className, wordsSearchData }: WordListPropsInterface) => {

  if (wordsSearchData === null) 
    return (<div className="w-full text-center mt-2">Введите поисковый запрос</div>)

  if (wordsSearchData.data && wordsSearchData.data.length === 0) 
    return (<div className="w-full text-center mt-2">По вашему запросу ничего не найдено</div>)

  return (
    <div className={classname("select-none mt-4", className)}>
        {wordsSearchData.data.sort().map(word => 
              <Word key={word} word={word} />
        )}
    </div>
  );
}

export default WordsList