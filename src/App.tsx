import "./App.css"
import Views from "./components/Views"
import ViewContextProvider from "./views/ViewContext"

function App() {
  return (
    <div className='App'>
      {/* ViewContext bedzie ci nie potrzebny jezeli bedziesz uzywal reduxa, bo w reduxie z handlujesz cala logike */}
      <ViewContextProvider>
        <Views />
      </ViewContextProvider>
    </div>
  )
}

export default App
