const defaultState = [
    {
        id: 0,
        text: 'foo 1'
    },
    {
        id: 1,
        text: 'foo 2'
    }
];
// const calls = (state = [], action) => {
const calls = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
};

export default calls;