export const walletReducer = (state, action) => {
    switch (action.type) {
      case 'START_LOADING':
        return {...state, isLoading: true};
      case 'END_LOADING':
        return {...state, isLoading: false};
      case 'FETCH_WALLET':
        return {...state, wallet: action.payload};
      default:
        return state;
    }
  };