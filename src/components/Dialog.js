function Dialog({
  closeDialog = f => f,
  openDialog = g => g
}){
  return(
    <div className="dialog">
      <div className="dialogBox "> 
        <p>Dialog Text</p>
        <button onClick={closeDialog}>Close</button>
      </div>
    </div>
  )
}

export default Dialog;