import { Author } from "./Author"
import { Category } from "./Category"
import { Item } from "./Item"

export interface ItemResult {
  author: Author
  categories: Array<Category>
  item: Item
}
