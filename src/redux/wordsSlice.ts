import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { WordReducerStateInterface, ReorderReducerPayloadInterface } from '../types/reducers.types'
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
    },
    reorder(state, action: PayloadAction<ReorderReducerPayloadInterface>) {
      const [removed] = state.words.splice(action.payload.source.index, 1);
      state.words.splice(action.payload.destination.index, 0, removed);
    }
  }
})

export const { add, remove, reorder } = wordsSlice.actions
export default wordsSlice.reducer