// import "./App.css"

// import { QueryClient, QueryClientProvider } from "react-query"
import { Route, Routes } from "react-router-dom"

// import { BrowserRouter } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { ProductDetails } from "./pages/ProductDetails"
import { SearchResults } from "./pages/SearchResults"
import WithNavigation from "./utils/hooks/WithNavigation"

// const queryClient = new QueryClient()

function App() {
  return (
    // <BrowserRouter>
    //   <QueryClientProvider client={queryClient}>
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
        path="/item/:id"
        element={
          <WithNavigation>
            <ProductDetails />
          </WithNavigation>
        }
      />
    </Routes>
    // </QueryClientProvider>
    // </BrowserRouter>
  )
}

export default App
