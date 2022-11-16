import classname from 'classnames'
import React, { useCallback, useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { WordPropsInterface } from '../types/props.types'

import Star from '../components/Star'
import WordDefenition from '../components/WordDefenition'

import { fetchOneWordData } from '../utils/data'
import { isWordContains, addWord, removeWord } from '../utils/storage'

const Word: React.FC<WordPropsInterface> = ({ className, word, storagedWordSearchData }: WordPropsInterface) => {
  const [isWordClicked, setIsWordClicked] = useState(false)
  const [isInFavourites, setIsInFavourites] = useState(isWordContains(word))

  const isWordStoraged = storagedWordSearchData !== undefined
  const queryResult = useQuery(word, () => fetchOneWordData({ word }), { enabled: !isWordStoraged })
  let wordData = isWordStoraged ? storagedWordSearchData : queryResult.data

  const handleWordClick = () => setIsWordClicked(!isWordClicked)

  const addRemoveFavourite = () => {
    if (isInFavourites) {
      removeWord(word)
      if (!isWordContains(word)) {
        setIsInFavourites(false);
      }
    } else if (!wordData || Object.keys(wordData).length === 0) {
      alert('Not load yet')
    } else if (!isWordContains(word)) {
      addWord(wordData)
      if (isWordContains(word)) {
        setIsInFavourites(true);
      }
    }
  }

  return (
    <div className={classname("flex justify-between w-full p-4 bg-blue-100 mb-2 rounded", className)} >
        <div className="w-11/12">
          <div className="">
            <div onClick={handleWordClick} className="cursor-pointer">
              <span className="text-xl">{word}</span>
              {isWordClicked && wordData && Object.keys(wordData).length > 0 && wordData.pronunciation
              && 
                <span className="italic text-base ml-2">({typeof wordData.pronunciation === 'object' ? wordData.pronunciation.all : wordData.pronunciation})</span>
              }
            </div>
            {wordData && Object.keys(wordData).length > 0 && wordData.results
            &&
              <WordDefenition 
                partOfSpeech={wordData.results[0].partOfSpeech} 
                definition={wordData.results[0].definition} 
                className={isWordClicked ? '' : 'truncate'}/>
            }    
          </div>
          {isWordClicked && wordData && Object.keys(wordData).length > 1
          &&
            <div>
              {wordData.results && wordData.results.slice(1, wordData.results.length - 1).map((rs: any, idx: number) => 
                <WordDefenition partOfSpeech={rs.partOfSpeech} definition={rs.definition} key={idx}/>)
              }
            </div>
          }
        </div>
        <Star isFilled={isInFavourites} className="cursor-pointer" onClick={addRemoveFavourite}/>
    </div>
  );
}

export default Word