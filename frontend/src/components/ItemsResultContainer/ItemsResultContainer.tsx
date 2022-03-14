import { Box, Divider } from "@mui/material"

import { Item } from "../../types/Item"
import { ItemResult } from "../ItemResult/ItemResult"
import { SMALL_MARGIN } from "../../utils/Constants"

interface ItemsResultContainerProps {
  items: Array<Item>
}

export const ItemsResultContainer = (props: ItemsResultContainerProps) => {
  return (
    <>
      {props.items.map((item, index) => {
        return (
          <Box key={item.id}>
            {props.items?.indexOf(item) !== 0 ? (
              <Divider sx={{ marginX: "5px", marginY: SMALL_MARGIN }} />
            ) : null}
            <ItemResult item={item} index={index} />
          </Box>
        )
      })}
    </>
  )
}
