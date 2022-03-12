import { QueryResultModel } from "@/domain/models/query-result"
import { QueryResultItemModel } from "@/domain/models/item"
import { PriceModel } from "@/domain/models/price"
import { search } from "../../infrastructure/end-points/meli-endpoints"

export default async function searchItem(
  query: String
): Promise<QueryResultModel> {
  const apiResponse = await search(query)
  const queryResult: QueryResultModel = {
    author: {
      name: "Matías",
      lastname: "Avaro",
    },
    categories: apiResponse.data.filters?.find((f) => f.id == "category")
      ?.values,
    items: apiResponse.data.results?.map(
      (r) =>
        <QueryResultItemModel>{
          id: r.id,
          title: r.title,
          price: <PriceModel>{
            currency: r.currency_id,
            amount: Math.trunc(r.price),
            decimals: parseFloat((r.price % 1).toFixed(4)),
          },
          picture: r.thumbnail,
          condition: r.condition,
          free_shipping: r.shipping.free_shipping,
        }
    ),
  }
  return queryResult
}
