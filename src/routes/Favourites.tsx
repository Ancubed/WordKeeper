import classname from 'classnames'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { DefaultPropsInterface } from '../types/props.types' 
import { PartOfSpeechType, FetchOneWordDataResultInterface, SortType } from '../types/utils.types'
import type { StoreState } from '../redux/store'

import SearchRow from '../components/SearchRow'
import FavouritesWordsList from '../components/FavouritesWordsList'

const sortFunction = (selector: FetchOneWordDataResultInterface[], filter: PartOfSpeechType | null, text: string, sortType: SortType = "filter", disable=false) => {
  if (disable) return selector 

  if (sortType === "alphabet" || filter === null && text === '') {
    return [...selector].sort((a, b) => {
      if ( a.word < b.word ) return -1
      if ( a.word > b.word ) return 1
      return 0;
    })
  }

  if (sortType === "filter") {
    return selector.filter(wsd => {
      if ((filter
        && wsd.word.startsWith(text) 
        && wsd.results 
        && wsd.results.findIndex(res => res.partOfSpeech === filter) !== -1)
        || !filter && wsd.word.startsWith(text))
          return true
      return false
    })
  }

  return selector 
}

const Favourites: React.FC<DefaultPropsInterface> = ({ className }: DefaultPropsInterface) => {
  const [filter, setFilter] = useState<PartOfSpeechType | null>(null)
  const [text, setText] = useState<string>('')
  const [typeOfSort, setTypeOfSort] = useState<SortType>('alphabet')
  let wordsSearchData = useSelector((state: StoreState) => sortFunction(state.search.words, filter, text, typeOfSort, false))

  const onLoad = (data: any) => {}

  const localSearchCallback = (filter: PartOfSpeechType | null, newText: string) => {
    setTypeOfSort('filter');
    setFilter(filter)
    setText(newText)
  }

  return (
    <div className= {classname("", className)}>
       <h1 className="text-lg">Starred Words</h1>
       <div className="mt-4">
          <SearchRow onLoad={onLoad} localSearchCallback={localSearchCallback}/>
          <FavouritesWordsList wordsSearchData={wordsSearchData}/>
        </div>
    </div>
  )
}

export default Favourites