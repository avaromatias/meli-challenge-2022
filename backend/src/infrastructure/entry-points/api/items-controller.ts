import { ItemResultModel } from "@/domain/models/item-result";
import { QueryResultModel } from "@/domain/models/query-result";
import { IItemsService, ITEMS_SERVICE } from "@/domain/use-cases/items-service";
import {Adapter, Get, Mapping, Param, Query} from "@tsclean/core"

@Mapping("api/items")
export class SearchItem {
    constructor(
        @Adapter(ITEMS_SERVICE) private readonly itemsService: IItemsService
    ) {
    }

    @Get()
    async searchItem(@Query("q") q: String): Promise<QueryResultModel> {
        return await this.itemsService.searchItem(q);
    }
}

@Mapping("api/items/:id")
export class GetItemDetail {
    constructor(
        @Adapter(ITEMS_SERVICE) private readonly itemsService: IItemsService
    ) {
    }

    @Get()
    async getItemDetail(@Param("id") id: String): Promise<ItemResultModel> {
        return await this.itemsService.getItemDetail(id);
    }
}
