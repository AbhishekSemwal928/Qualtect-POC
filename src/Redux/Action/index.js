

export const loggedIn = (bool) => {
  return {
    type: "LOGGED_IN",
    payload: bool
  }
}

export const userData = (name)=>{
  return{
    type:"USER_DATA",
    payload:name
  }
}