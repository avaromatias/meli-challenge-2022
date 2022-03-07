import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material"
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb"

export const SearchResults = () => {
  const results = [
    {
      id: 1,
      thumbnail:
        "https://http2.mlstatic.com/D_NQ_NP_919017-MLA44866978637_022021-O.webp",
      price: "1400",
      title: "Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!",
      location: "Buenos Aires",
      permalink: "/item",
    },
    {
      id: 2,
      thumbnail:
        "https://http2.mlstatic.com/D_NQ_NP_919017-MLA44866978637_022021-O.webp",
      price: "1500",
      title: "Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!",
      location: "Capital Federal",
      permalink: "/item",
    },
    {
      id: 3,
      thumbnail:
        "https://http2.mlstatic.com/D_NQ_NP_919017-MLA44866978637_022021-O.webp",
      price: "1600",
      title: "Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!",
      location: "Santa Fe",
      permalink: "/item",
    },
    {
      id: 4,
      thumbnail:
        "https://http2.mlstatic.com/D_NQ_NP_919017-MLA44866978637_022021-O.webp",
      price: "1900",
      title: "Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!",
      location: "Rosario",
      permalink: "/item",
    },
  ]

  return (
    <Container fixed>
      <Breadcrumb />
      <Paper elevation={0} sx={{ padding: "16px", marginBottom: 10 }}>
        {results.map((result) => {
          return (
            <Box key={result.id}>
              {results.indexOf(result) !== 0 ? (
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
                  <a href={result.permalink}>
                    <img
                      src={result.thumbnail}
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
                        $ {result.price}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="caption" color="#999999">
                        {result.location}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Link
                      underline="none"
                      href={result.permalink}
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
    </Container>
  )
}
