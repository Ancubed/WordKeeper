import { FetchOneWordDataResultInterface } from '../types/utils.types';

const getWords = (): FetchOneWordDataResultInterface[] => {
    let wordsString = localStorage.getItem('words');
    if (wordsString === null || wordsString === undefined) {
        localStorage.setItem('words', JSON.stringify([]))
        return [];
    }
    return JSON.parse(wordsString)
}

const handleError = (err: Error) => {
    console.log(err)
}

export const addWord = (word: FetchOneWordDataResultInterface) => {
    try {
        let words = getWords()
        words.push(word);
        localStorage.setItem('words', JSON.stringify(words))
    } catch (err) {
        handleError(err)
    }
}

export const removeWord = (word: string) => {
    try {
        let words = getWords()
        words = words.filter(wrd => wrd.word !== word)
        localStorage.setItem('words', JSON.stringify(words))
    } catch (err) {
        handleError(err)
    }
}

export const getWord = (word: string): FetchOneWordDataResultInterface | undefined => {
    try {
        let words = getWords()
        return words.find(wrd => wrd.word === word)
    } catch (err) {
        handleError(err)
    }
}

export const isWordContains = (word: string): boolean => {
    try {
        let words = getWords()
        return words.findIndex(wrd => wrd.word === word) !== -1
    } catch (err) {
        handleError(err)
    }
    return false
}

export const getAllWords = (): FetchOneWordDataResultInterface[] => {
    try {
        let words = getWords()
        return words
    } catch (err) {
        handleError(err)
    }
    return []
}

export const setAllWords = (words: FetchOneWordDataResultInterface[]) => {
    try {
        localStorage.setItem('words', JSON.stringify(words))
    } catch (err) {
        handleError(err)
    }
    return []
}