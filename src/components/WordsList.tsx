import classname from 'classnames'
import React from 'react'

import { WordListPropsInterface } from '../types/props.types'

import Word from './Word'

const WordList: React.FC<WordListPropsInterface> = ({ className, wordsSearchData }: WordListPropsInterface) => {
  return (
    <div className={classname("select-none mt-4", className)}>
        {
          wordsSearchData !== null
        ? 
          wordsSearchData.data && wordsSearchData.data.length > 0 
          ? 
            wordsSearchData.data.sort().map(word => 
              <Word key={word} word={word} />)
          : <div className="w-full text-center mt-2">По вашему запросу ничего не найдено</div>
        : 
          <div className="w-full text-center mt-2">Введите поисковый запрос</div>
        }
        
    </div>
  );
}

export default WordList