import classname from 'classnames'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useSelector, useDispatch } from 'react-redux'

import { WordPropsInterface } from '../types/props.types'
import type { StoreState } from '../redux/store'

import Star from '../components/Star'
import WordDefenition from '../components/WordDefenition'

import { fetchOneWordData } from '../utils/data'
import { addWord, removeWord } from '../utils/storage'
import { add, remove } from '../redux/wordsSlice'

import { ReactComponent as DraggableIcon } from '../assets/draggable.svg'

const Word: React.FC<WordPropsInterface> = ({
    className,
    word,
    propsWordSearchData,
    isDraggable = false,
}: WordPropsInterface) => {
    const dispatch = useDispatch()
    const isWordInFavourites =
        useSelector((state: StoreState) =>
            state.search.words.findIndex((wrd) => wrd.word === word)
        ) !== -1
    const [isWordClicked, setIsWordClicked] = useState(false)

    // Если слово передано как пропс, то не нужно делать запрос
    const isWordStoraged = propsWordSearchData !== undefined
    const queryResult = useQuery(word, () => fetchOneWordData({ word }), {
        enabled: !isWordStoraged,
    })
    let wordData = isWordStoraged ? propsWordSearchData : queryResult.data

    const handleWordClick = () => setIsWordClicked(!isWordClicked)

    const addRemoveFavourite = () => {
        if (isWordInFavourites) {
            dispatch(remove(word))
            removeWord(word)
        } else if (!wordData || Object.keys(wordData).length === 0) {
            alert('Not load yet')
        } else if (!isWordInFavourites) {
            dispatch(add(wordData))
            addWord(wordData)
        }
    }

    return (
        <div
            className={classname(
                'flex justify-between w-full p-4 bg-blue-100 mb-4 rounded',
                className
            )}>
            {isDraggable && (
                <DraggableIcon className="flex items-center w-6 cursor-pointer" />
            )}
            <div className="w-10/12">
                <div className="">
                    <div onClick={handleWordClick} className="cursor-pointer">
                        <span className="text-xl">{word}</span>
                        {isWordClicked &&
                            wordData &&
                            Object.keys(wordData).length > 0 &&
                            wordData.pronunciation && (
                                <span className="italic text-base ml-2">
                                    (
                                    {typeof wordData.pronunciation === 'object'
                                        ? wordData.pronunciation.all
                                        : wordData.pronunciation}
                                    )
                                </span>
                            )}
                    </div>
                    {wordData &&
                        Object.keys(wordData).length > 0 &&
                        wordData.results &&
                        wordData.results.length > 0 && (
                            <WordDefenition
                                partOfSpeech={wordData.results[0].partOfSpeech}
                                definition={wordData.results[0].definition}
                                className={isWordClicked ? '' : 'truncate'}
                            />
                        )}
                </div>
                {isWordClicked &&
                    wordData &&
                    Object.keys(wordData).length > 1 && (
                        <div>
                            {wordData.results &&
                                wordData.results
                                    .slice(1, wordData.results.length)
                                    .map((rs: any, idx: number) => (
                                        <WordDefenition
                                            partOfSpeech={rs.partOfSpeech}
                                            definition={rs.definition}
                                            key={idx}
                                        />
                                    ))}
                        </div>
                    )}
            </div>
            <Star
                isFilled={isWordInFavourites}
                className="cursor-pointer"
                onClick={addRemoveFavourite}
            />
        </div>
    )
}

export default Word
