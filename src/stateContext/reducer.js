const initialState = {
    formValues: {
        firstname: "",
        lastname: "",
        line1: "",
        line2: "",
        postal_code: "",
        city: "",
        amount: "",
        size:"",
        phone:""
    },
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'editFormValue':
            state.formValues[action.key.toLowerCase()] = action.value;
            return { ...state };

        case 'emptyFormValue':
            return {
                ...state,
                formValues: initialState.formValues
            };
        default:
    };
    return state;
};

export { initialState, reducer }