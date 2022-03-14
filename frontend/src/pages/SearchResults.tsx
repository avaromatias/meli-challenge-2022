import { Paper, Typography } from "@mui/material"
import { SECONDARY_GRAY, SMALL_MARGIN } from "../utils/Constants"
import { useEffect, useState } from "react"

import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb"
import { ItemsResultContainer } from "../components/ItemsResultContainer/ItemsResultContainer"
import { LoadingData } from "../components/LoadingData/LoadingData"
import { QueryResult } from "../types/QueryResult"
import axios from "axios"
import { useSearchParams } from "react-router-dom"

export const SearchResults = () => {
  const [queryParams] = useSearchParams()
  const search = queryParams.get("search") || ""
  const [results, setResults] = useState<QueryResult>()
  const [isLoading, setIsLoading] = useState<Boolean>(false)

  const dispatchSearch = async (query: string) => {
    setIsLoading(true)
    try {
      let apiResponse = await axios({
        method: "get",
        url: `http://localhost:9000/api/items?q=${query}`,
      })
      setResults(apiResponse.data)
      setIsLoading(false)
    } catch (ex) {
      alert(`Hubo un error al buscar el producto solicitado | ${ex}`)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    dispatchSearch(search)
  }, [search])

  return (
    <>
      {isLoading ? (
        <LoadingData />
      ) : results && results.items && results.items.length > 0 ? (
        <>
          <Breadcrumb
            categories={
              results?.categories?.slice(0, 1)?.shift()?.path_from_root
            }
          />
          <Paper elevation={0} sx={{ padding: SMALL_MARGIN, marginBottom: 10 }}>
            <ItemsResultContainer items={results.items} />
          </Paper>
        </>
      ) : (
        <Paper elevation={0} sx={{ padding: SMALL_MARGIN }}>
          <Typography variant="caption" color={SECONDARY_GRAY}>
            No se hallaron resultados.
          </Typography>
        </Paper>
      )}
    </>
  )
}
