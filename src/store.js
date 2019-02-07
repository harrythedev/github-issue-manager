import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import storage from 'redux-persist/lib/storage'

import reducer from './reducers'
import middleware from './middleware'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
)
export const persistor = persistStore(store)
