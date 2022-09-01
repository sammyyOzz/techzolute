import { articleApi } from '@features/articles/api/article.api';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(articleApi.middleware),
    devTools: process.env.NODE_ENV !== 'production'
})




export type RootState = ReturnType<typeof store.getState>;