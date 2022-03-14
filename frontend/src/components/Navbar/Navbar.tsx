import { AppBar, Container, Grid, Toolbar } from "@mui/material"

import { PRIMARY_YELLOW } from "../../utils/Constants"
import { SearchBox } from "../SearchBox/SearchBox"

export const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      style={{ backgroundColor: PRIMARY_YELLOW, boxShadow: "none" }}
    >
      <Toolbar>
        <Container fixed>
          <Grid container flexDirection="row">
            <Grid item xs={3} sm={2} md={1}>
              <a href="/">
                <img
                  src={require("../../assets/Logo_ML.png")}
                  style={{ pointerEvents: "none" }}
                  alt="Logo"
                />
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
