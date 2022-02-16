const LOCAL_STORAGE_KEY = "react-sc-state";

export function loadLocalStorage(){
  const prevTodos = localStorage.getItem(LOCAL_STORAGE_KEY)
  if(!prevTodos){
    return [];
  }
  try{
    return JSON.parse(prevTodos)
  }catch(error){
    return [];
  }
}

export function saveLocalStorage(data){
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data) );
}

