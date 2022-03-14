import getItemDetail from "../src/application/functions/get-item-detail"
import searchItem from "../src/application/functions/search-item"

describe("SearchItem", () => {
  test("should return items when passing common queries", async () => {
    const response = await searchItem("silla")
    expect(response.items).toBeDefined()
  })
  test("should not return categories when passing unintelligible queries", async () => {
    const response = await searchItem("sdfbdsbfjksdnfjksd")
    expect(response.categories).toBeUndefined()
  })
})

describe("GetItemDetail", () => {
  test("should return an item by passing a valid ID", async () => {
    const response = await getItemDetail("MLA870975041")
    expect(response.item).toBeDefined()
  })
})
