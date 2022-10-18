import { configureStore } from '@reduxjs/toolkit'

import routinesReducer from './slice/routinesSlice'
// ...

export const store = configureStore({
  reducer: {
    routines: routinesReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
