export const transactionsReducer = (state, action) => {
    switch (action.type) {
      case 'START_LOADING':
        return {...state, isLoading: true};
      case 'END_LOADING':
        return {...state, isLoading: false};
      case 'FETCH_TRANSACTIONS':
        return {...state, transactions: action.payload};
      default:
        return state;
    }
  };