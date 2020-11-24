const initstate = {
  
};

const projectRed = (state = initstate, action) => {
  switch(action.type){
    case 'UPDATE_KEY':
      console.log("updated key")
      return state
   default:
      return state
  }
 
};

export default projectRed;
