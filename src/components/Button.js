function Button({
  openDialog = g => g,
}){
  return(
    <button className="dialogButton" onClick={openDialog}>Open Dialog</button>
  )
}

export default Button;