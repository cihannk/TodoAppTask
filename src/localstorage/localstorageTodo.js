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

export const setNightModeLocal = (nightmode) =>{
    if (nightmode){
        saveToLocalStorage("nightMode", nightmode);
    }else{
        saveToLocalStorage("nightMode", false);
    }
}
export const getNightMode = () => {
    return getFromLocalStorage("nightMode");
}