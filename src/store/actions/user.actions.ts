// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { userDetails } from '../../models/userDetails.model'
import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';

// Section 2
export const CHANGE_NAME       = '[USERDETAILS] Change Name'
export const ADD_SUBJECT = '[USERDETAILS] Add Subjects'
export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove'

// Section 3
export class ChangeName implements Action {
    readonly type = CHANGE_NAME
    payload: any
    constructor(payload: any) {
        this.payload = payload
    }
}
export class AddSubjects implements Action {
    readonly type = ADD_SUBJECT
    payload: any
    constructor(payload: any) {
        this.payload = payload
        // console.log(this.payload)
    }
}

// export class RemoveTutorial implements Action {
//     readonly type = REMOVE_TUTORIAL

//     constructor(public payload: number) {}
// }

// Section 4
export type Actions = 
    ChangeName |
    AddSubjects