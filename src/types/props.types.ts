import * as React from 'react'

import { DefaultHookInitValType } from './hooks.types'
import { FetchWordsDataResultInterface, PartOfSpeechType } from './utils.types'

export interface DefaultPropsInterface {
    className?: string
}

export interface StarPropsInterface extends DefaultPropsInterface {
    isFilled: boolean
}

export interface SearchRowPropsInterface extends DefaultPropsInterface {
    onLoad: any
}

export interface InputProps extends DefaultPropsInterface {
    labelText?: string,
    inputType: string,
    inputName: string,
    validation: { required: boolean, maxLength: number, minLength: number }
    formInputHook: { value: DefaultHookInitValType, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }
}

export interface WordListPropsInterface extends DefaultPropsInterface {
    className?: string
    wordsSearchData: FetchWordsDataResultInterface | null
}

export interface WordPropsInterface extends DefaultPropsInterface {
    key: React.Key,
    word: string
}

export interface WordDefenitionPropsInterface extends DefaultPropsInterface {
    partOfSpeech: string, 
    definition: string
}

export interface SearchFiltersPropsInterface extends DefaultPropsInterface {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: PartOfSpeechType | null
}