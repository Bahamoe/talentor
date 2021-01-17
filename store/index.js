import candidates from '~/data/candidates';


export const state = () => ({
    candidates,
});
  
export const mutations = {
    add(state, candidate) {
        state.candidates.push(candidate)
    },
    update(state, updatedCandidate) {
        let candidatesCopy = state.candidates;
        const candidateIndex = candidatesCopy.findIndex( candidate => candidate.id === updatedCandidate.id);
        candidatesCopy[candidateIndex] = Object.assign({}, candidates[candidateIndex], updatedCandidate);
        state.candidates = [ ...candidatesCopy ];
    },
    destroy(state, candidateId) {
        const newState = state.candidates.filter(candidate => candidate.id !== candidateId);
        state.candidates = [ ...newState ];
    },
};

export const getters = {
    candidates: (state) => (searchVal = null) => {
        if(searchVal) {
            let query = searchVal.toLowerCase();
            return state.candidates.filter(candidate => candidate.name.toLowerCase().indexOf(query) >= 0);
        }else{
            return state.candidates;
        }
        
    }
}