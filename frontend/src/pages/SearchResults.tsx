import {
  Box,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material"
import { useEffect, useState } from "react"

import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb"
import axios from "axios"
import { useSearchParams } from "react-router-dom"

interface Author {
  name: string,
  lastname: string
}

interface Category {
  id: string,
  name: string,
  path_from_root: Array<Category>
}

interface Price {
  currency: string,
  amount: Number,
  decimals: Number
}

interface Item {
  id: string,
  title: string,
  price: Price,
  picture: string,
  condition: string,
  free_shipping: Boolean
}

interface QueryResult {
  author: Author,
  categories: Array<Category>,
  items: Array<Item>
}

export const SearchResults = () => {
  const [queryParams, setQueryParams] = useSearchParams()
  const search = queryParams.get("search") || ""
  const [results, setResults] = useState<QueryResult>()
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const locations = ["Capital Federal", "Buenos Aires", "Rosario", "Santa Fe", "Córdoba", "Mendoza", "Misiones"]

  const dispatchSearch = async (query: string) => {
    setIsLoading(true)
    try {
      let apiResponse = await axios({
        method: 'get',
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
    <Container fixed style={{ marginTop: "16px" }}>
      {
        isLoading ? (
          <Grid container flexDirection="row" justifyContent="center" >
            <Grid item>
              <CircularProgress size={100} style={{ color: "#999999" }} />
            </Grid>
          </Grid>
        ) :
        results && results.items && results.items.length > 0
        ? (<>
          <Breadcrumb categories={results?.categories?.slice(0, 1)?.shift()?.path_from_root} />
          <Paper elevation={0} sx={{ padding: "16px", marginBottom: 10 }}>
            {results?.items?.map((result) => {
              return (
                <Box key={result.id}>
                  {results?.items?.indexOf(result) !== 0 ? (
                    <Divider sx={{ marginX: "5px", marginY: "16px" }} />
                  ) : null}
                  <Grid container>
                    <Grid
                      item
                      style={{
                        width: "180px",
                        height: "180px",
                      }}
                    >
                      <a href={`/item/${result.id}`}>
                        <img
                          src={result.picture}
                          style={{
                            width: "180px",
                            height: "180px",
                            borderRadius: "4px",
                          }}
                          alt="Miniatura del producto"
                        />
                      </a>
                    </Grid>
                    <Grid item paddingX="16px" flexGrow={1}>
                      <Grid
                        container
                        item
                        flexDirection="row"
                        justifyContent="space-between"
                      >
                        <Grid item>
                          <Typography
                            variant="h5"
                            color="#333333"
                            marginBottom="32px"
                          >
                            $ {result.price.amount}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="caption" color="#999999">
                            {locations[Math.floor(Math.random()*locations.length)]}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Link
                          underline="none"
                          href={`/item/${result.id}`}
                          fontSize={18}
                          fontFamily="sans-serif"
                          color="#333333"
                        >
                          {result.title}
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              )
            })}
          </Paper>
        </>)
        : (<Paper elevation={0} sx={{ padding: "16px" }}>
          <Typography variant="caption" color="#999999">
            No se hallaron resultados.
          </Typography>
        </Paper>)
      }
    </Container>
  )
}
