import { Routes, Route } from "react-router-dom"
import "./App.css"
import { Navbar } from "./components/Navbar/Navbar"
import { ProductDetails } from "./pages/ProductDetails"
import { SearchResults } from "./pages/SearchResults"
import WithNavigation from "./utils/hooks/WithNavigation"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route
        path="/items"
        element={
          <WithNavigation>
            <SearchResults />
          </WithNavigation>
        }
      />
      <Route
        path="/item"
        element={
          <WithNavigation>
            <ProductDetails />
          </WithNavigation>
        }
      />
    </Routes>
  )
}

export default App
