import { BIG_MARGIN, PRIMARY_BLUE, SMALL_MARGIN } from "../../utils/Constants"
import { Button, Grid, Typography } from "@mui/material"

import { Item } from "../../types/Item"

interface ItemSaleInformationProps {
  item: Item
}

export const ItemSaleInformation = (props: ItemSaleInformationProps) => {
  return (
    <Grid item flex={1}>
      <Typography variant="caption" marginBottom={SMALL_MARGIN}>
        {props.item.condition} - {props.item.sold_quantity} vendidos
      </Typography>
      <Typography variant="h6" marginBottom={BIG_MARGIN} fontSize={24}>
        {props.item.title}
      </Typography>
      <Typography variant="h5" marginBottom={BIG_MARGIN} fontSize={46}>
        {props.item.price.currency} {props.item.price.amount},
        {props.item.price.decimals}
      </Typography>
      <Grid item>
        <Button
          variant="contained"
          fullWidth
          style={{
            backgroundColor: PRIMARY_BLUE,
            boxShadow: "none",
            textTransform: "none",
          }}
        >
          Comprar
        </Button>
      </Grid>
    </Grid>
  )
}
