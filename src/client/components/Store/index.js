export const createStore = initialState => {
  const getState = () => initialState;
  return { getState };
};
