import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { pokemonReducer } from "./reducers";

const rootReducers = combineReducers({
  pokemon: pokemonReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
