import {saveToLocalStorage, removeFromLocalStorage, getFromLocalStorage} from "./localstorage";

export const addUsername = (username) =>{
    saveToLocalStorage("username", username);
}

export const removeUsername = () =>{
    removeFromLocalStorage("username");
}

export const userNameExist = () =>{
    return getFromLocalStorage("username") !== null ? true : false;
}