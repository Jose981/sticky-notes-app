import { ColorProvider } from "./context/ColorContext"
import NoteBoard from "./components/NoteBoard"
import ColorSelector from "./components/ColorSelector"

function App() {
  return (
    <div className="app-container">
     <ColorProvider>
      <h1>📝 Notas Adhesivas</h1>
      <ColorSelector />
      <NoteBoard />
    </ColorProvider>
    </div>
  )
}

export default App
