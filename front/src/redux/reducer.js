import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actions";

const inicialState = {
  miFavorites: []
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return { ...state, myFavorites: [...state.miFavorites, action.payload] }
    case REMOVE_FAVORITE:
      return { ...state, miFavorites: state.miFavorites.filter(char => char.id !== action.payload) }

    default:
      return { ...state }
  }
}

export default rootReducer;