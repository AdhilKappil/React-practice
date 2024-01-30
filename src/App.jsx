
import './App.css'
import { lazy, Suspense } from 'react'
const ParanetComponent = lazy(()=> import('./ParanetComponent')) 
// import MyProps from './Myprops'
// import PropsProxy from './PropsProxy'
// import UseMemo from './useMemo'
// import UseRef from './UseRef'
// import UseReduce from './useReduce'
// import Calculator from './InputCalculator'
// import Sample from './Sample'
// import Calculator from './Calculator'
// import Stundents from './Props'
// import OnChange from './OnChange'
// import Count from './Count'
// import Person from './Person'
// import Button from'./Button'

// const FirstComponent = PropsProxy(MyProps)

function App() {
  return (
  <>
     <Suspense fallback={<div>loading...</div>}>
      <ParanetComponent />
     </Suspense>
     {/* <FirstComponent degree='BCOM'/> */}
  </>

  )
}

export default App
