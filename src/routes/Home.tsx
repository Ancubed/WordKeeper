import classname from 'classnames'
import React, { useState } from 'react';

import { DefaultPropsInterface } from '../types/props.types'
import { FetchWordsDataResultInterface } from '../types/utils.types'

import SearchRow from '../components/SearchRow'
import SearchWordsList from '../components/SearchWordsList'

const Home: React.FC<DefaultPropsInterface> = ({ className }: DefaultPropsInterface) => {
  const [wordsSearchData, setWordsSearchData] = useState<FetchWordsDataResultInterface | null>(null)

  const onLoad = (data: any) => {
    setWordsSearchData(data)
  }

  return (
    <div className= {classname("", className)}>
      <h1 className="text-lg">Search Words</h1>
      <div className="mt-4">
        <SearchRow onLoad={onLoad}/>
        <SearchWordsList wordsSearchData={wordsSearchData}/>
      </div>
    </div>
  )
}

export default Home