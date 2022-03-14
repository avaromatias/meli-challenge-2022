import { Price } from "./Price"

export interface Item {
  id: string
  title: string
  price: Price
  picture: string
  condition: string
  free_shipping: Boolean
  sold_quantity: Number
  description: String
}
