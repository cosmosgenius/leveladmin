const listitems = (state = [], action) => {
    switch (action.type) {

    case 'LOAD_LIST':
        return [
            ...action.list
        ];

    default:
        return state;

    }
};

export default listitems;
