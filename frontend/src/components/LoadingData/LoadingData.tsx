import { CircularProgress, Grid } from "@mui/material"

import { SECONDARY_GRAY } from "../../utils/Constants"

export const LoadingData = () => {
  return (
    <Grid container flexDirection="row" justifyContent="center">
      <Grid item>
        <CircularProgress size={100} style={{ color: SECONDARY_GRAY }} />
      </Grid>
    </Grid>
  )
}
