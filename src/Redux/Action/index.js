

export const loggedIn = (bool) => {
  return {
    type: "LOGGED_IN",
    payload: bool
  }
}

export const showLoader = (bool) =>{
  return{
    type:"SHOW_LOADER",
    payload:bool
  }
}