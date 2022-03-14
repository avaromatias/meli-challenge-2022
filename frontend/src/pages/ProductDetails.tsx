import { BIG_MARGIN, SECONDARY_GRAY, SMALL_MARGIN } from "../utils/Constants"
import { Grid, Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react"

import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb"
import { ItemPictureDescription } from "../components/ItemPictureDescription/ItemPictureDescription"
import { ItemResult } from "../types/ItemResult"
import { ItemSaleInformation } from "../components/ItemSaleInformation/ItemSaleInformation"
import { LoadingData } from "../components/LoadingData/LoadingData"
import axios from "axios"
import { useParams } from "react-router-dom"

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
    <>
      {isLoading ? (
        <LoadingData />
      ) : product ? (
        <>
          <Breadcrumb
            categories={
              product?.categories?.slice(0, 1)?.shift()?.path_from_root
            }
          />
          <Paper elevation={0} sx={{ padding: BIG_MARGIN, marginBottom: 10 }}>
            <Grid container flexDirection="row" justifyContent="space-between">
              <ItemPictureDescription item={product.item} />
              <ItemSaleInformation item={product.item} />
            </Grid>
          </Paper>
        </>
      ) : (
        <Paper elevation={0} sx={{ padding: SMALL_MARGIN }}>
          <Typography variant="caption" color={SECONDARY_GRAY}>
            Ups! Parece que el producto no existe.
          </Typography>
        </Paper>
      )}
    </>
  )
}
