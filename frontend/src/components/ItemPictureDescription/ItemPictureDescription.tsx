import { BIG_MARGIN, SMALL_MARGIN } from "../../utils/Constants"
import { Grid, Typography } from "@mui/material"

import { Item } from "../../types/Item"

interface ItemPictureDescriptionProps {
  item: Item
}

export const ItemPictureDescription = (props: ItemPictureDescriptionProps) => {
  return (
    <Grid
      item
      style={{
        width: "680px",
      }}
    >
      <img
        src={props.item.picture}
        style={{
          width: "100%",
          height: "auto",
          marginBottom: SMALL_MARGIN,
        }}
        alt="Miniatura del producto"
      />
      <Typography variant="h6" marginBottom={BIG_MARGIN} fontSize={28}>
        Descripción del producto
      </Typography>
      <Typography variant="body2" marginBottom={BIG_MARGIN} fontSize={16}>
        {props.item.description}
      </Typography>
    </Grid>
  )
}
