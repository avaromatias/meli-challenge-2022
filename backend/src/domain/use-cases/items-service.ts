import { ItemResultModel } from "../models/item-result"
import { QueryResultModel } from "../models/query-result"

export const ITEMS_SERVICE = "ITEMS_SERVICE"

export interface IItemsService {
  searchItem: (query: String) => Promise<QueryResultModel>
  getItemDetail: (id: String) => Promise<ItemResultModel>
}
