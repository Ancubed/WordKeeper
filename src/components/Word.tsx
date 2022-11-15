import classname from 'classnames'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { WordPropsInterface } from '../types/props.types'

import Star from '../components/Star'
import WordDefenition from '../components/WordDefenition'

import { fetchOneWordData } from '../utils/data'

const Word: React.FC<WordPropsInterface> = ({ className, word }: WordPropsInterface) => {
  const [isClicked, setIsClicked] = useState(false)
  const { data, isLoading } = useQuery(word, () => fetchOneWordData({ word }))

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
            {data && Object.keys(data).length > 0 
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
              {data.results.slice(1, data.results.length - 1).map((rs: any, idx: number) => 
                <WordDefenition partOfSpeech={rs.partOfSpeech} definition={rs.definition} key={idx}/>)
              }
            </div>
          }
        </div>
        <Star isFilled={false} className="cursor-pointer"/>
    </div>
  );
}

export default Word