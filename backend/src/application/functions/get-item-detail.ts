import { ItemModel } from "@/domain/models/item"
import { PriceModel } from "@/domain/models/price"
import { ItemResultModel } from "@/domain/models/item-result"
import { CategoryModel } from "@/domain/models/category"
import {
  getItem,
  getItemCategories,
  getItemDescription,
} from "../../infrastructure/end-points/meli-endpoints"

export default async function getItemDetail(
  id: String
): Promise<ItemResultModel> {
  let apiResponseItem = await getItem(id)
  let apiResponseDescription = await getItemDescription(id)
  let apiResponseCategories = await getItemCategories(
    apiResponseItem.data.category_id
  )
  let itemResult: ItemResultModel = {
    author: {
      name: "Matías",
      lastname: "Avaro",
    },
    categories: <Array<CategoryModel>>[
      {
        id: apiResponseCategories.data.id,
        name: apiResponseCategories.data.name,
        path_from_root: apiResponseCategories.data.path_from_root,
      },
    ],
    item: <ItemModel>{
      id: apiResponseItem.data.id,
      title: apiResponseItem.data.title,
      price: <PriceModel>{
        currency: apiResponseItem.data.currency_id,
        amount: Math.trunc(apiResponseItem.data.price),
        decimals: parseFloat((apiResponseItem.data.price % 1).toFixed(4)),
      },
      picture: apiResponseItem.data.thumbnail,
      condition: apiResponseItem.data.condition,
      free_shipping: apiResponseItem.data.shipping?.free_shipping,
      sold_quantity: apiResponseItem.data.sold_quantity,
      description: apiResponseDescription.data.plain_text,
    },
  }
  return itemResult
}
