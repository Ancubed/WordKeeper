/// <reference types="vite-plugin-svgr/client" />
import classname from 'classnames'
import React, { useEffect, useState } from 'react'

import { SearchRowPropsInterface } from '../types/props.types'
import {
    FetchWordsDataParamsInterface,
    PartOfSpeechType,
} from '../types/utils.types'

import Input from '../components/Input'
import SearchFilters from '../components/SearchFilters'

import useFormInput from '../hooks/useFormInput'

import { fetchWordsData } from '../utils/data'

import { ReactComponent as SearchIcon } from '../assets/search.svg'

const SearchRow: React.FC<SearchRowPropsInterface> = ({
    className,
    onLoad,
    localSearchCallback,
}: SearchRowPropsInterface) => {
    const serachInputHook = useFormInput('')
    const [filter, setFilter] = useState<PartOfSpeechType | null>(null)

    const onFiltersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (filter === (e.target.value as PartOfSpeechType)) setFilter(null)
        else setFilter(e.target.value as PartOfSpeechType)
    }

    const loadWords = async () => {
        if (localSearchCallback)
            return localSearchCallback(filter, serachInputHook.value)

        if (serachInputHook.value && serachInputHook.value != '') {
            let params: FetchWordsDataParamsInterface = {
                pattern: serachInputHook.value,
            }
            if (filter !== null) params.partOfSpeech = filter
            onLoad(await fetchWordsData(params))
        } else {
            onLoad(null)
        }
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(loadWords, 700)

        return () => clearTimeout(delayDebounceFn)
    }, [serachInputHook.value])

    useEffect(() => {
        loadWords()
    }, [filter])

    return (
        <div
            className={classname('rounded p-1 bg-slate-400 h-full', className)}>
            <div className="relative w-full h-full">
                <Input
                    inputType="text"
                    inputName="search"
                    validation={{
                        required: false,
                        maxLength: 128,
                        minLength: 0,
                    }}
                    formInputHook={serachInputHook}
                    className="h-8"
                />
                <SearchIcon className="w-6 absolute right-[10px] top-1 fill-blue-300" />
            </div>
            <SearchFilters onChange={onFiltersChange} value={filter} />
        </div>
    )
}

export default SearchRow
