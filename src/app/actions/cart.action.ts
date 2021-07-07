import { Action } from "@ngrx/store";

export enum ActionTypes {
    Add = 'ADD',
    Remove = 'REM',
    Clear = 'CLE',
}

export const Add = (instrument: any) => {
    return <Action>{ type: ActionTypes.Add, payload: instrument };
}

export const Remove = (instrument: any) => {
    return <Action>{ type: ActionTypes.Remove, payload: instrument };
}

export const Clear = (instrument: any) => {
    return <Action>{ type: ActionTypes.Clear, payload: null };
}