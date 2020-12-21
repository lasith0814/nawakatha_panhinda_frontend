const state = {
    data : 2
};

const getters = {
    DataSet : (state) => state.data
};

const actions = {};

const mutations = {
    setDataSet(state,data){
        state.data = data;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}