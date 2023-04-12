import { useContext } from "react"
import { ViewContext } from "../views/ViewContext"

const View2 = () => {
  const { changeView, prevView } = useContext(ViewContext)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => changeView({ view: prevView.view })
  return (
    <div>
      <h2>View 2</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus similique vitae sapiente totam eligendi,
        veritatis distinctio quas rerum mollitia neque eveniet, modi vero cum deserunt nihil hic quisquam cumque saepe.
      </p>
      <button onClick={handleClick}>Go Back</button>
    </div>
  )
}
export default View2
