import { useContext } from "react"
import { ViewContext } from "../views/ViewContext"

// Tutaj mozesz ewentualnie nawet uzyc lazy loadingu, zeby nie importowac wszystkich widokow naraz
// https://react.dev/reference/react/lazy
import View1 from "../views/View1"
import View2 from "../views/View2"
import View3 from "../views/View3"

type ViewType = { [key: string]: JSX.Element }

const view: ViewType = {
  view1: <View1 />,
  view2: <View2 />,
  view3: <View3 />,
}

const Views = () => {
  const { currentView } = useContext(ViewContext)
  return <>{view[currentView.view]}</>
}
export default Views
