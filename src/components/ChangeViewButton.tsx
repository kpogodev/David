import { useContext } from "react"
import { ViewContext } from "../views/ViewContext"

const ChangeViewButton = ({ text, viewName }: { text: string; viewName: string }) => {
  const { changeView } = useContext(ViewContext)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => changeView({ view: e.currentTarget.value })

  return (
    <button value={viewName} onClick={handleClick}>
      {text}
    </button>
  )
}
export default ChangeViewButton
