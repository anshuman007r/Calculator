import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { percentageController } from './PercentageOperatorReducer'


const rootReducer = combineReducers({
    percentageController : percentageController
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'percentageController'
    ],
    timeout: null,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer
);
const persistor = persistStore(store);

export { store, persistor };