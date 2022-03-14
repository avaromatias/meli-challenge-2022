import { Button, InputBase } from "@mui/material"

import { LIGHT_GREY } from "../../utils/Constants"
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
  color: theme.palette.getContrastText(LIGHT_GREY),
  backgroundColor: LIGHT_GREY,
  "&:hover": {
    backgroundColor: LIGHT_GREY,
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
  const [queryParams] = useSearchParams()
  const search = queryParams.get("search") || ""
  const [query, setQuery] = useState(search)

  const handleSearch = () => {
    if (query.length > 0) navigate(`/items?search=${query}`)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") handleSearch()
  }

  return (
    <Search>
      <StyledInputBase
        placeholder="Nunca dejes de buscar"
        inputProps={{ "aria-label": "search" }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <SearchButton onClick={handleSearch}>
        <img
          src={require("../../assets/ic_Search.png")}
          style={{ pointerEvents: "none" }}
          alt="Botón de búsqueda"
        />
      </SearchButton>
    </Search>
  )
}
