export const userReducer = (state, action) => {
    switch (action.type) {
      case 'START_LOADING':
        return {...state, isLoading: true};
      case 'END_LOADING':
        return {...state, isLoading: false};
      case 'FETCH_USER':
        return {...state, user: action.payload};
      default:
        return state;
    }
  };