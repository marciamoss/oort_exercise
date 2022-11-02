const getEC2Reducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_EC2':
      return action.payload;
    default:
      return state;
  }
};

export default getEC2Reducer;
