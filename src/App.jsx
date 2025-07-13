import { Button, HStack } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/Login"
import { SignupPage } from "./pages/Signup"
import { Counter } from "./components/counter/Counter"
import { TodoApp } from "./pages/TodoApp"

function App() {

  return (
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/todo" element={<TodoApp />} />
    </Routes>
  )
}

export default App;
