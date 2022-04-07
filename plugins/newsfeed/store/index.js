export default {
    state: {
        test: 'i am test from store',
    },
    getters: {
        getTest(state) {
            return state.test;
        },
    },
    mutations: {},
    actions: {},
}