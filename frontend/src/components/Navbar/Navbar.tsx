import { AppBar, Container, Grid, Toolbar } from "@mui/material"

import { SearchBox } from "../SearchBox/SearchBox"

export const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      style={{ backgroundColor: "#FFE600", boxShadow: "none" }}
    >
      <Toolbar>
        <Container fixed>
          <Grid container flexDirection="row">
            <Grid item xs={3} sm={2} md={1}>
              <a href="/">
                {/* <img
                  src={require("../../assets/Logo_ML.png")}
                  style={{ pointerEvents: "none" }}
                  alt="Logo"
                /> */}
                ML
              </a>
            </Grid>
            <Grid item xs={9} sm={10} md={11}>
              <SearchBox />
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
