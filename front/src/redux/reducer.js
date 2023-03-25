const inicialState = {
  miFavorites: []
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    default:
      return { ...state }
  }
}

export default rootReducer;