import { useState } from "react"

type ViewType = {
  view: string
  id?: string
}

const useCustomRouter = () => {
  const [currentView, setCurrentView] = useState<ViewType>({ view: "view1" })
  const [prevView, setPrevView] = useState<ViewType>({ view: "view1" })

  const changeView = ({ view, id }: ViewType) => {
    setPrevView(currentView)
    setCurrentView({ view, id })
  }

  return { prevView, currentView, changeView }
}

export default useCustomRouter
