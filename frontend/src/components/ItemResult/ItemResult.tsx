import {
  BIG_MARGIN,
  PRIMARY_BLACK,
  SECONDARY_GRAY,
  SMALL_MARGIN,
} from "../../utils/Constants"
import { Grid, Link, Typography } from "@mui/material"

import { Item } from "../../types/Item"

const PICTURE_SIZE = "180px"

interface ItemResultProps {
  item: Item
  index: Number
}

export const ItemResult = (props: ItemResultProps) => {
  const locations = [
    "Capital Federal",
    "Buenos Aires",
    "Rosario",
    "Santa Fe",
    "Córdoba",
    "Mendoza",
    "Misiones",
  ]

  return (
    <Grid container>
      <Grid
        item
        style={{
          width: PICTURE_SIZE,
          height: PICTURE_SIZE,
        }}
      >
        <a id={`item-picture-${props.index}`} href={`/item/${props.item.id}`}>
          <img
            src={props.item.picture}
            style={{
              width: PICTURE_SIZE,
              height: PICTURE_SIZE,
              borderRadius: "4px",
            }}
            alt="Miniatura del producto"
          />
        </a>
      </Grid>
      <Grid item paddingX={SMALL_MARGIN} flex={1}>
        <Grid container item flexDirection="row" justifyContent="space-between">
          <Grid item>
            <Typography
              variant="h5"
              color={PRIMARY_BLACK}
              marginBottom={BIG_MARGIN}
            >
              $ {props.item.price.amount}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" color={SECONDARY_GRAY}>
              {locations[Math.floor(Math.random() * locations.length)]}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Link
            underline="none"
            href={`/item/${props.item.id}`}
            fontSize={18}
            fontFamily="sans-serif"
            color={PRIMARY_BLACK}
          >
            {props.item.title}
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}
