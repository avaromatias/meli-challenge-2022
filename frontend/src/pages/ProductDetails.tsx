import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material"
import { useEffect, useState } from "react"

import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb"
import axios from "axios"
import { useParams } from "react-router-dom"

const BIG_MARGIN = "32px"
const SMALL_MARGIN = "16px"

interface Author {
  name: string
  lastname: string
}

interface Price {
  currency: string
  amount: Number
  decimals: Number
}

interface Item {
  id: string
  title: string
  price: Price
  picture: string
  condition: string
  free_shipping: Boolean
  sold_quantity: Number
  description: String
}

interface Category {
  id: string
  name: string
  path_from_root: Array<Category>
}

interface ItemResult {
  author: Author
  categories: Array<Category>
  item: Item
}

export const ProductDetails = () => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [product, setProduct] = useState<ItemResult>()

  const getProduct = async (id?: string) => {
    setIsLoading(true)
    try {
      let apiResponse = await axios({
        method: "get",
        url: `http://localhost:9000/api/items/${id}`,
      })
      setProduct(apiResponse.data)
      setIsLoading(false)
    } catch (ex) {
      alert(`Hubo un error al buscar el producto solicitado | ${ex}`)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getProduct(id)
  }, [id])

  return (
    <Container fixed style={{ marginTop: "16px" }}>
      {isLoading ? (
        <Grid container flexDirection="row" justifyContent="center">
          <Grid item>
            <CircularProgress size={100} style={{ color: "#999999" }} />
          </Grid>
        </Grid>
      ) : product ? (
        <>
          <Breadcrumb
            categories={
              product?.categories?.slice(0, 1)?.shift()?.path_from_root
            }
          />
          <Paper elevation={0} sx={{ padding: BIG_MARGIN, marginBottom: 10 }}>
            <Grid container flexDirection="row" justifyContent="space-between">
              <Grid
                item
                style={{
                  width: "680px",
                }}
              >
                <img
                  src={product?.item.picture}
                  style={{
                    width: "100%",
                    height: "auto",
                    marginBottom: SMALL_MARGIN,
                  }}
                />
                <Typography
                  variant="h6"
                  marginBottom={BIG_MARGIN}
                  fontSize={28}
                >
                  Descripción del producto
                </Typography>
                <Typography
                  variant="body2"
                  marginBottom={BIG_MARGIN}
                  fontSize={16}
                >
                  {product?.item.description}
                </Typography>
              </Grid>
              <Grid item flex={1}>
                <Typography variant="caption" marginBottom={SMALL_MARGIN}>
                  {product?.item.condition} - {product?.item.sold_quantity}{" "}
                  vendidos
                </Typography>
                <Typography
                  variant="h6"
                  marginBottom={BIG_MARGIN}
                  fontSize={24}
                >
                  {product?.item.title}
                </Typography>
                <Typography
                  variant="h5"
                  marginBottom={BIG_MARGIN}
                  fontSize={46}
                >
                  {product?.item.price.currency} {product?.item.price.amount},
                  {product?.item.price.decimals}
                </Typography>
                <Grid item>
                  <Button
                    variant="contained"
                    fullWidth
                    style={{
                      backgroundColor: "#3483FA",
                      boxShadow: "none",
                      textTransform: "none",
                    }}
                  >
                    Comprar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </>
      ) : (
        <Paper elevation={0} sx={{ padding: "16px" }}>
          <Typography variant="caption" color="#999999">
            Ups! Parece que el producto no existe.
          </Typography>
        </Paper>
      )}
    </Container>
  )
}
