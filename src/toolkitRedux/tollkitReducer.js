import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    answer: [],
}

export const answerAction = createAction("SENDANSWER")

export default createReducer(initialState, {
    [answerAction]: function(state){
        state.count = state.count + 1;
        state.answer.push(`${state.count}`)
        // initialState.answer.push(state.answer)
    }
})
console.log(initialState.count)