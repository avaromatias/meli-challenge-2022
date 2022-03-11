import {IItemsService} from "@/domain/use-cases/items-service"
import { QueryResultModel } from "@/domain/models/query-result"
import { ItemModel, QueryResultItemModel } from "@/domain/models/item"
import {Service} from "@tsclean/core"
import axios from "axios"
import { PriceModel } from "@/domain/models/price"
import { ItemResultModel } from "@/domain/models/item-result"
import { CategoryModel } from "@/domain/models/category"

const ITEMS_QUANTITY = 4

@Service()
export class ItemsServiceImpl implements IItemsService {
    constructor() {
    }
    
    async searchItem(query: String): Promise<QueryResultModel> {
        let apiResponse = await axios({
            method: 'get',
            url: `https://api.mercadolibre.com/sites/MLA/search?q=${query}`,
        })
        apiResponse.data.results = apiResponse.data.results?.slice(0, ITEMS_QUANTITY)
        let queryResult: QueryResultModel = {
            author: {
                name: "Matías",
                lastname: "Avaro"
            },
            categories: apiResponse.data.filters?.find(f => f.id == "category")?.values,
            items: apiResponse.data.results?.map(r => <QueryResultItemModel>{
                id: r.id,
                title: r.title,
                price: <PriceModel>{
                    currency: r.currency_id,
                    amount: Math.trunc(r.price),
                    decimals: parseFloat((r.price % 1).toFixed(4))
                },
                picture: r.thumbnail,
                condition: r.condition,
                free_shipping: r.shipping.free_shipping
            })
        }
        return queryResult
    }
    
    async getItemDetail(id: String): Promise<ItemResultModel> {
        let apiResponseItem = await axios({
            method: 'get',
            url: `https://api.mercadolibre.com/items/${id}`,
        })
        let apiResponseDescription = await axios({
            method: 'get',
            url: `https://api.mercadolibre.com/items/${id}/description`,
        })
        let apiResponseCategories = await axios({
            method: 'get',
            url: `https://api.mercadolibre.com/categories/${apiResponseItem.data.category_id}`,
        })
        let itemResult: ItemResultModel = {
            author: {
                name: "Matías",
                lastname: "Avaro"
            },
            categories: <Array<CategoryModel>>[
                {
                    id: apiResponseCategories.data.id,
                    name: apiResponseCategories.data.name,
                    path_from_root: apiResponseCategories.data.path_from_root
                }
            ],
            item: <ItemModel>{
                id: apiResponseItem.data.id,
                title: apiResponseItem.data.title,
                price: <PriceModel>{
                    currency: apiResponseItem.data.currency_id,
                    amount: Math.trunc(apiResponseItem.data.price),
                    decimals: parseFloat((apiResponseItem.data.price % 1).toFixed(4))
                },
                picture: apiResponseItem.data.thumbnail,
                condition: apiResponseItem.data.condition,
                free_shipping: apiResponseItem.data.shipping?.free_shipping,
                sold_quantity: apiResponseItem.data.sold_quantity,
                description: apiResponseDescription.data.plain_text
            }
        }
        return itemResult
    }
}