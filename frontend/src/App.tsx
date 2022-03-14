import "./App.css"

import { Route, Routes } from "react-router-dom"

import { Navbar } from "./components/Navbar/Navbar"
import { ProductDetails } from "./pages/ProductDetails"
import { SearchResults } from "./pages/SearchResults"
import WithContainer from "./utils/hooks/WithContainer"
import WithNavigation from "./utils/hooks/WithNavigation"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route
        path="/items"
        element={
          <WithNavigation>
            <WithContainer>
              <SearchResults />
            </WithContainer>
          </WithNavigation>
        }
      />
      <Route
        path="/item/:id"
        element={
          <WithNavigation>
            <WithContainer>
              <ProductDetails />
            </WithContainer>
          </WithNavigation>
        }
      />
    </Routes>
  )
}

export default App
