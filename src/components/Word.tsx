import classname from 'classnames'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { WordPropsInterface } from '../types/props.types'

import Star from '../components/Star'
import WordDefenition from '../components/WordDefenition'

import { fetchOneWordData } from '../utils/data'
import { isWordContains, addWord, removeWord } from '../utils/storage'

const Word: React.FC<WordPropsInterface> = ({ className, word }: WordPropsInterface) => {
  const [isClicked, setIsClicked] = useState(false)
  const [isInFavourites, setIsInFavourites] = useState(isWordContains(word))
  const { data, isLoading } = useQuery(word, () => fetchOneWordData({ word }))

  const addRemoveFavourite = () => {
    try {
      if (isInFavourites) {
        removeWord(word)
        if (!isWordContains(word)) {
          setIsInFavourites(false);
        }
      } else if (!data || Object.keys(data).length === 0) {
        throw new Error('Not load yet')
      } else if(!isWordContains(word)) {
        addWord(data)
        if (isWordContains(word)) {
          setIsInFavourites(true);
        }
      }
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <div className={classname("flex justify-between w-full p-4 bg-blue-100 mb-2 rounded", className)} >
        <div className="w-11/12">
          <div className="">
            <div onClick={() => setIsClicked(!isClicked)} className="cursor-pointer">
              <span className="text-xl">{word}</span>
              {isClicked && data && Object.keys(data).length > 0 && data.pronunciation
              && 
                <span className="italic text-base ml-2">({typeof data.pronunciation === 'object' ? data.pronunciation.all : data.pronunciation})</span>
              }
            </div>
            {data && Object.keys(data).length > 0 && data.results
            &&
              <WordDefenition 
                partOfSpeech={data.results[0].partOfSpeech} 
                definition={data.results[0].definition} 
                className={isClicked ? '' : 'truncate'}/>
            }    
          </div>
          {isClicked && data && Object.keys(data).length > 1
          &&
            <div>
              {data.results && data.results.slice(1, data.results.length - 1).map((rs: any, idx: number) => 
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