import { createContext, useEffect, useState } from "react"
import useCustomRouter from "../hooks/useCutomRouter"

type UseViewStateManagerResult = ReturnType<typeof useViewStateManager>

interface RandomData {
  id: number
  userId: number
  title: string
  body: string
}

export const ViewContext = createContext<UseViewStateManagerResult>({} as UseViewStateManagerResult)

const useViewStateManager = () => {
  const [randomData, setRandomData] = useState<RandomData[]>([])
  const { currentView, prevView, changeView } = useCustomRouter()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
      const data = await response.json()
      setRandomData(data)
    }
    fetchData()
  }, [])

  return {
    randomData,
    currentView,
    prevView,
    changeView,
  }
}

export default function ViewContextProvider({ children }: { children: React.ReactNode }) {
  return <ViewContext.Provider value={useViewStateManager()}>{children}</ViewContext.Provider>
}
