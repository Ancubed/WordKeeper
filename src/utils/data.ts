import axios from 'axios'

import {
    FetchWordsDataParamsInterface,
    FetchWordsDataResultInterface,
    FetchOneWordDataParamsInterface,
    FetchOneWordDataResultInterface,
} from '../types/utils.types'

import { trimAllString } from './helpers'

const options = {
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST,
    },
}

export const fetchWordsData = async ({
    pattern,
    partOfSpeech,
    limit = 10,
}: FetchWordsDataParamsInterface): Promise<FetchWordsDataResultInterface> => {
    const response = await axios.get(
        encodeURI(
            `https://wordsapiv1.p.rapidapi.com/words/?letterPattern=^${trimAllString(
                pattern
            )}&limit=${limit}&hasDetails=definitions${
                partOfSpeech ? `&partOfSpeech=${partOfSpeech}` : ''
            }`
        ),
        options
    )

    return response.data.results
}

export const fetchOneWordData = async ({
    word,
}: FetchOneWordDataParamsInterface): Promise<FetchOneWordDataResultInterface> => {
    const response = await axios.get(
        encodeURI(
            `https://wordsapiv1.p.rapidapi.com/words/${trimAllString(word)}`
        ),
        options
    )

    return response.data
}
