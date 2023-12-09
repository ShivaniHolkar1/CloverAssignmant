export const addValueToForm = (name, count) => {
    return {
      type: 'ADD_VALUE_TO_FORM',
      payload: { name, count }
    };
  };
  
  export const clearFormData = () => {
    return {
      type: 'CLEAR_FORM_DATA'
    };
  };
  