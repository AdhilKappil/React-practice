
const PropsProxy = ((FirstComponent)=>{
  
  // eslint-disable-next-line react/display-name
  return function(props){
   const newProps = {
      name:'Adhil',
      place:'Kappil'
    }
    return <FirstComponent {...props} {...newProps}/>
  }

})
export default PropsProxy