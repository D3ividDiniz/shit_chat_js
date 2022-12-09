
import {useSession, signIn} from "next-auth/react"
import Router from 'next/router';

export default function Login() {
    const {data:session} = useSession();
    if(session){
        Router.push('http://localhost:3000')
    }else{
        return (<button  onClick={()=> signIn()}>login</button>)
    }
  
}
