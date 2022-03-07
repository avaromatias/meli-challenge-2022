import { Button, Container, Grid, Paper, Typography } from "@mui/material"
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb"

const BIG_MARGIN = "32px"
const SMALL_MARGIN = "16px"

export const ProductDetails = () => {
  return (
    <Container fixed>
      <Breadcrumb />
      <Paper elevation={0} sx={{ padding: BIG_MARGIN, marginBottom: 10 }}>
        <Grid container flexDirection="row" justifyContent="space-between">
          <Grid
            item
            style={{
              width: "680px",
            }}
          >
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_919017-MLA44866978637_022021-O.webp"
              style={{
                width: "100%",
                height: "auto",
                marginBottom: SMALL_MARGIN,
              }}
            />
            <Typography variant="h6" marginBottom={BIG_MARGIN} fontSize={28}>
              Descripción del producto
            </Typography>
            <Typography variant="body2" marginBottom={BIG_MARGIN} fontSize={16}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
              quisquam laudantium beatae neque architecto pariatur odit quos
              ullam molestiae quam sapiente nam, atque dolores quidem eaque
              quibusdam ducimus nesciunt saepe?
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" marginBottom={SMALL_MARGIN}>
              Nuevo - 234 vendidos
            </Typography>
            <Typography variant="h6" marginBottom={BIG_MARGIN} fontSize={24}>
              Deco Reverse Sombrero Oxford
            </Typography>
            <Typography variant="h5" marginBottom={BIG_MARGIN} fontSize={46}>
              $ 1980
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
    </Container>
  )
}
