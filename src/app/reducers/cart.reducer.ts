import { ActionTypes } from '../actions/cart.action';
import { ActionModel } from '../models/action.model';
import { CartModel } from '../models/cart.model';
import { InstrumentModel } from '../models/instrument.model';

export const cart = new CartModel();

export function cartReducer(state = cart, action: ActionModel) {
    switch (action.type) {
        case ActionTypes.Add:
            {
                state.instruments.push(action.payload);
                state.total = calculateTotal(state.instruments);

                console.log(state);
                return state;
            };

        case ActionTypes.Remove:
            {
                const index = state.instruments.indexOf(action.payload);
                state.instruments.splice(index, 1);
                state.total = calculateTotal(state.instruments);

                console.log(state);
                return state;
            };

        case ActionTypes.Clear:
            {
                state = new CartModel();
                state.total = calculateTotal(state.instruments);

                console.log(state);
                return state;
            }

        default:
            return state;
    }


}

function calculateTotal(instruments: InstrumentModel[]): number {
    let total: number = 0;
    instruments.forEach(instrument => {
        total += instrument.price;
    });
    return total;
}