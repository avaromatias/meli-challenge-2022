import { AuthorModel } from "./author"
import { CategoryModel } from "./category"
import { QueryResultItemModel } from "./item"

export type QueryResultModel = {
  author: AuthorModel
  categories: Array<CategoryModel>
  items: Array<QueryResultItemModel>
}
