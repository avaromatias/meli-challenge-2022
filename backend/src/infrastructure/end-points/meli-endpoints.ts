import axios from "axios"

const ITEMS_QUANTITY = 4

export async function search(query: String) {
  try {
    let apiResponse = await axios({
      method: "get",
      url: `https://api.mercadolibre.com/sites/MLA/search?q=${query}`,
    })
    apiResponse.data.results = apiResponse.data.results?.slice(
      0,
      ITEMS_QUANTITY
    )
    return apiResponse
  } catch (ex) {
    throw ex
  }
}

export async function getItem(id: String) {
  try {
    let apiResponseItem = await axios({
      method: "get",
      url: `https://api.mercadolibre.com/items/${id}`,
    })
    return apiResponseItem
  } catch (ex) {
    throw ex
  }
}

export async function getItemDescription(id: String) {
  try {
    let apiResponseDescription = await axios({
      method: "get",
      url: `https://api.mercadolibre.com/items/${id}/description`,
    })
    return apiResponseDescription
  } catch (ex) {
    throw ex
  }
}

export async function getItemCategories(id: String) {
  try {
    let apiResponseCategories = await axios({
      method: "get",
      url: `https://api.mercadolibre.com/categories/${id}`,
    })
    return apiResponseCategories
  } catch (ex) {
    throw ex
  }
}
