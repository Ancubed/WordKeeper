import axios from 'axios'

import { FetchWordsDataParamsInterface, FetchWordsDataResultInterface, FetchOneWordDataParamsInterface, FetchOneWordDataResultInterface } from '../types/utils.types'

import { trimAllString } from './helpers'

const options = {
    headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST
    }
};

export const fetchWordsData = async ({ pattern, partOfSpeech, limit = 5 } : FetchWordsDataParamsInterface): Promise<FetchWordsDataResultInterface> => {    
    //const response = await axios.get(encodeURI(`https://wordsapiv1.p.rapidapi.com/words/?letterPattern=^${trimAllString(pattern)}&limit=${limit}&hasDetails=definitions${partOfSpeech ? `&partOfSpeech=${partOfSpeech}` : ''}`), options);
    
    //return response.data.results

    return {total: 100, data: ['eva braun', 'evacuant', 'evacuate']}
}

export const fetchOneWordData = async ({ word } : FetchOneWordDataParamsInterface): Promise<FetchOneWordDataResultInterface> => {    
    //const response = await axios.get(encodeURI(`https://wordsapiv1.p.rapidapi.com/words/${trimAllString(word)}`), options);

    //return response.data

    if (word == 'eva braun') return {
        "word": "eva braun",
        "results": [
          {
            "definition": "the German mistress of Adolf Hitler (1910-1945)",
            "partOfSpeech": "noun",
            "synonyms": [
              "braun"
            ],
            "instanceOf": [
              "fancy woman",
              "kept woman",
              "mistress"
            ]
          }
        ]
      }

    if (word == 'evacuant') return {
        "word": "evacuant",
        "results": [
          {
            "definition": "strongly laxative",
            "partOfSpeech": "adjective",
            "synonyms": [
              "cathartic",
              "purgative"
            ],
            "similarTo": [
              "laxative"
            ],
            "derivation": [
              "evacuate"
            ]
          }
        ],
        "syllables": {
          "count": 4,
          "list": [
            "e",
            "vac",
            "u",
            "ant"
          ]
        },
        "pronunciation": {
          "all": "ɪ'vækjuənt"
        }
    }

    return {
        "word": "evacuate",
        "results": [
          {
            "definition": "excrete or discharge from the body",
            "partOfSpeech": "verb",
            "synonyms": [
              "empty",
              "void"
            ],
            "typeOf": [
              "pass",
              "egest",
              "eliminate",
              "excrete"
            ],
            "hasTypes": [
              "suction"
            ],
            "derivation": [
              "evacuant",
              "evacuation"
            ]
          },
          {
            "definition": "create a vacuum in (a bulb, flask, reaction vessel)",
            "partOfSpeech": "verb",
            "typeOf": [
              "empty"
            ]
          },
          {
            "definition": "empty completely",
            "partOfSpeech": "verb",
            "typeOf": [
              "empty"
            ],
            "derivation": [
              "evacuation"
            ],
            "examples": [
              "evacuate the bottle"
            ]
          },
          {
            "definition": "move out of an unsafe location into safety",
            "partOfSpeech": "verb",
            "typeOf": [
              "move"
            ],
            "derivation": [
              "evacuation"
            ],
            "examples": [
              "After the earthquake, residents were evacuated"
            ]
          },
          {
            "definition": "move people from their homes or country",
            "partOfSpeech": "verb",
            "cause": [
              "move"
            ],
            "typeOf": [
              "displace"
            ],
            "derivation": [
              "evacuation"
            ]
          }
        ],
        "syllables": {
          "count": 4,
          "list": [
            "e",
            "vac",
            "u",
            "ate"
          ]
        },
        "pronunciation": {
          "all": "ɪ'vækju,eɪt"
        },
        "frequency": 3.78
      }
}