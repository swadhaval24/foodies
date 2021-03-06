import { toast } from "react-toastify";

export const success = (message) =>{
    toast.success(message,  {position: toast.POSITION.TOP_CENTER});
    
}
export const danger = (message) =>{
    toast.error(message,  {position: toast.POSITION.TOP_CENTER});

}
export const info = (message) =>{
    toast.info(message,  {position: toast.POSITION.TOP_CENTER , theme : "dark"});

}

export const welcomeMessage =(name,role) =>{
    toast.success("Hello "+name+", Welcome to Foodies....",  {position: toast.POSITION.TOP_CENTER});
}