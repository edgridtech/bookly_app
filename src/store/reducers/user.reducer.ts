import { Action } from '@ngrx/store'
import { userDetails } from '../../models/userDetails.model'
import initialStateShape from './../initialState'
import * as userActions from '../actions/user.actions'

const initialState: userDetails = {
    personalDetails: initialStateShape.personalDetails,
    achievements: initialStateShape.achievementsState,
    notes: initialStateShape.notesState,
    subjects: initialStateShape.availableSubjectsState,
    selectedSubjects: initialStateShape.selectedSubjects,
    subjectDetails: initialStateShape.subjectDetails
}
// const subjectsState: userDetails['selectedSubjects'] = {
//     subjects: initialStateShape.selectedSubjects
// }

export function reducer(
    state: userDetails[] = [initialState], 
    action: userActions.Actions) {
    // Section 3
    switch(action.type) {
        case userActions.CHANGE_NAME:
            let newState1 = state.slice()
            console.log(newState1[0].personalDetails)
            newState1[0].personalDetails[0].fullname = action.payload
            state = newState1
            return [...state, action.payload]
        case userActions.ADD_SUBJECT:
            // console.log(action)
            let newState2 = state.slice()
            newState2[0].selectedSubjects = state[0].selectedSubjects.concat(action.payload)
            state = newState2
            return state
        default:
            return state;
    }
}
// export function subejectsReducer(
//     state: userDetails[].selectedSubjects = [initialState.selectedSubjects], 
//     action: userActions.Actions) {
//     // Section 3
//     switch(action.type) {
//         case userActions.CHANGE_NAME:
//             return [action.payload]
//         case userActions.ADD_SUBJECT:
//             return action.payload;
//         default:
//             return state;
//     }
// }