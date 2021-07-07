import { InstrumentModel } from "./instrument.model";

export class CartModel {
    public instruments: InstrumentModel[] = [];
    public total: number = 0;
}