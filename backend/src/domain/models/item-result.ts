import { AuthorModel } from "./author"
import { CategoryModel } from "./category"
import { ItemModel } from "./item"

export type ItemResultModel = {
    author: AuthorModel,
    categories: Array<CategoryModel>,
    item: ItemModel
}
