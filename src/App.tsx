import Navbar from "./components/navbar/Navbar"
import SearchUser from "./components/searchuser/SearchUser"
import { Toaster } from "@/components/ui/toaster"

function App() {
  return (
    <>
        <Navbar />
        <SearchUser/>
        <Toaster/>
    </>
  )
}

export default App
