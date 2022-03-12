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
