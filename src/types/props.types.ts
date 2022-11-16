import * as React from 'react'

import { DefaultHookInitValType } from './hooks.types'
import { FetchWordsDataResultInterface, FetchOneWordDataResultInterface, PartOfSpeechType } from './utils.types'

export interface DefaultPropsInterface {
    className?: string
}

export interface StarPropsInterface extends DefaultPropsInterface {
    isFilled: boolean,
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export interface SearchRowPropsInterface extends DefaultPropsInterface {
    onLoad: any,
    localSearchCallback?: (filter: PartOfSpeechType | null, text: string) => void
}

export interface InputProps extends DefaultPropsInterface {
    labelText?: string,
    inputType: string,
    inputName: string,
    validation: { required: boolean, maxLength: number, minLength: number }
    formInputHook: { value: DefaultHookInitValType, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }
}

export interface SearchWordListPropsInterface extends DefaultPropsInterface {
    className?: string
    wordsSearchData: FetchWordsDataResultInterface | null
}

export interface FavouritesWordListPropsInterface extends DefaultPropsInterface {
    wordsSearchData: FetchOneWordDataResultInterface[]
}

export interface WordPropsInterface extends DefaultPropsInterface {
    key?: React.Key,
    word: string,
    propsWordSearchData?: FetchOneWordDataResultInterface
}

export interface WordDefenitionPropsInterface extends DefaultPropsInterface {
    partOfSpeech: string, 
    definition: string
}

export interface SearchFiltersPropsInterface extends DefaultPropsInterface {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: PartOfSpeechType | null
}