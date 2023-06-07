import './style/index.css';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import Button from './components/Button';

import { useState } from 'react';

function App() {
  const [toggleDialog, setDialog] = useState(false);

  const openDialog=()=>{
    setDialog(true)
  }

  const closeDialog = () =>{
    setDialog(false)
  }

  return (
    <>
    <main>
      <StarRating
      />
        {
          toggleDialog?<Dialog 
            closeDialog={closeDialog}
          /> : null
        } 
      <Button
      openDialog={openDialog}
      />
    </main>
    </>
  );
}

export default App;
