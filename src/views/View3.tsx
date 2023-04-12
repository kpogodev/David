import { useContext } from "react"
import { ViewContext } from "../views/ViewContext"

const View3 = () => {
  const { changeView, prevView, randomData } = useContext(ViewContext)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => changeView({ view: prevView.view })
  return (
    <div>
      <h2>View 3</h2>
      <p>Tutaj dane z json placeholdera, które są pobierane w ViewContextProvider</p>
      {randomData.map((data) => (
        <p>{data.title}</p>
      ))}
      <button onClick={handleClick}>Go Back</button>
    </div>
  )
}
export default View3
