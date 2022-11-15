import * as React from 'react'

export interface FetchWordsDataParamsInterface {
    pattern: string,
    limit?: number
}

export interface FetchWordsDataResultInterface {
    total: number,
    data: string[]
}

export interface FetchOneWordDataParamsInterface {
    word: string
}

export interface OneWordDataResult {  
    definition: string,
    partOfSpeech: string,
    synonyms: string[]
    typeOf: string[]
    derivation: string[]
}

export interface OneWordDataSyllables {  
    count: number,
    list: string[]
}

export interface OneWordDataPronunciation {  
    all: string
}

export interface FetchOneWordDataResultInterface {
    results: OneWordDataResult[],
    syllables: OneWordDataSyllables,
    pronunciation: OneWordDataPronunciation
}