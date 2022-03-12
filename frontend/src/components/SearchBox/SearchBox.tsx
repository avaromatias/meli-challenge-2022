import { Button, InputBase } from "@mui/material"

import axios from "axios";
import { styled } from "@mui/material/styles"
import { useNavigate } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import { useState } from "react"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}))

const SearchButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.3, 2),
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  color: theme.palette.getContrastText("#EEEEEE"),
  backgroundColor: "#EEEEEE",
  "&:hover": {
    backgroundColor: "#EEEEEE",
  },
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 2),
  },
  width: "100%",
}))

export const SearchBox = () => {
  const navigate = useNavigate()
  const [queryParams, setQueryParams] = useSearchParams()
  const search = queryParams.get("search") || ""
  const [query, setQuery] = useState(search)

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter")
      navigate(`/items?search=${query}`)
  }

  return (
    <Search>
      <StyledInputBase
        placeholder="Nunca dejes de buscar"
        inputProps={{ "aria-label": "search" }}
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <SearchButton onClick={() => navigate(`/items?search=${query}`)}>
        {/* <img
          src={require("../../assets/ic_Search.png")}
          style={{ pointerEvents: "none" }}
          alt="Botón de búsqueda"
        /> */}
        asd
      </SearchButton>
    </Search>
  )
}
