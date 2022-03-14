import { Author } from "./Author"
import { Category } from "./Category"
import { Item } from "./Item"

export interface QueryResult {
  author: Author
  categories: Array<Category>
  items: Array<Item>
}
