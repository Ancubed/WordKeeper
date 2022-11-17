import * as React from 'react'

export type PartOfSpeechType = 'noun' | 'adjective' | 'verb'

export type SortType = 'filter' | 'alphabet' | 'custom'

export interface FetchWordsDataParamsInterface {
    pattern: string
    limit?: number
    partOfSpeech?: PartOfSpeechType
}

export interface FetchWordsDataResultInterface {
    total: number
    data: string[]
}

export interface FetchOneWordDataParamsInterface {
    word: string
}

export interface OneWordDataResult {
    definition: string
    partOfSpeech: string
    synonyms?: string[]
    typeOf?: string[]
    derivation?: string[]
    instanceOf?: string[]
    similarTo?: string[]
    hasTypes?: string[]
    examples?: string[]
    cause?: string[]
}

export interface OneWordDataSyllables {
    count: number
    list: string[]
}

export interface OneWordDataPronunciation {
    all?: string
}

export interface FetchOneWordDataResultInterface {
    word: string
    results?: OneWordDataResult[]
    syllables?: OneWordDataSyllables
    pronunciation?: OneWordDataPronunciation
    frequency?: number
}
