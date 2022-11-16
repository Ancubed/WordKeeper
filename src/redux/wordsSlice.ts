import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { WordReducerStateInterface } from '../types/reducers.types'
import { FetchOneWordDataResultInterface } from '../types/utils.types'

import { getAllWords } from '../utils/storage'

let allWords = getAllWords()

const initialState: WordReducerStateInterface = {
  words: allWords
}

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    add(state, action: PayloadAction<FetchOneWordDataResultInterface>) {
      state.words.push(action.payload)
    },
    remove(state, action: PayloadAction<string>) {
      state.words = state.words.filter(wrd => wrd.word !== action.payload)
    }
  }
})

export const { add, remove } = wordsSlice.actions
export default wordsSlice.reducer