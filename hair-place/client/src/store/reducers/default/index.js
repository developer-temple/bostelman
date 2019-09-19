const initialState = {
  test: true
}

const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    default:
      return { ...state }
  }
}

export default reducer