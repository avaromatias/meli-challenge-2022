import { IItemsService } from "@/domain/use-cases/items-service"
import { ItemResultModel } from "@/domain/models/item-result"
import { QueryResultModel } from "@/domain/models/query-result"
import { Service } from "@tsclean/core"
import getItemDetail from "@/application/functions/get-item-detail"
import searchItem from "@/application/functions/search-item"

@Service()
export class ItemsServiceImpl implements IItemsService {
  constructor() {}

  async searchItem(query: String): Promise<QueryResultModel> {
    return await searchItem(query)
  }

  async getItemDetail(id: String): Promise<ItemResultModel> {
    return await getItemDetail(id)
  }
}
