
import { ADD_DATA , DELETE_DATA} from './actionTypes';
export const addData = (formData) => ({
  type: ADD_DATA,
  payload: formData,
});

export const deleteData = (index) => ({
    type: DELETE_DATA,
    payload: index,
  });

