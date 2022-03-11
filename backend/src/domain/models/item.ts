import { PriceModel } from "./price"

export type ItemModel = {
    id: String,
    title: String,
    price: PriceModel,
    picture: String,
    condition: String,
    free_shipping: Boolean,
    sold_quantity: Number,
    description: String
}

export type QueryResultItemModel = Omit<ItemModel, 'sold_quantity' | 'description'>
