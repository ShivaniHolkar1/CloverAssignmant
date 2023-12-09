
import { ADD_DATA ,DELETE_DATA} from '../actions/actionTypes';


const initialState = {
  data: [],
  
};


const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: [...state.data, action.payload],
      };


      
case DELETE_DATA:
    const updatedData = state.data.filter((_, idx) => idx !== action.payload);
    return {
      ...state,
      data: updatedData,
    };


    case 'ADD_VALUE_TO_FORM':
        return {
          ...state,
          formData: [...state.formData, action.payload]
        };
      case 'CLEAR_FORM_DATA':
        return {
          ...state,
          formData: []
        };


    default:
      return state;
  }
};

export default formReducer;







