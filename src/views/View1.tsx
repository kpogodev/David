import ChangeViewButton from "../components/ChangeViewButton"

const View1 = () => {
  return (
    <div className='view-1'>
      <h2>View 1</h2>
      <ChangeViewButton viewName='view2' text='Go to view 2' />
      <ChangeViewButton viewName='view3' text='Go to view 3' />
    </div>
  )
}
export default View1
