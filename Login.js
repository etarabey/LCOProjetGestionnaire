import React, { useState, useEffect, useLayoutEffect,useRef} from "react";
import Layout from "../../public/components/layout"; 
import styles from '../../public/components/layout.module.css'; 
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'; 
import { collection, getDocs,getDoc, doc } from 'firebase/firestore'; 
import { app,db } from "../configs/firebase-config";
import { initializeApp } from 'firebase/app'; 
import {useRouter} from 'next/router'; 

export default function Login(){
    const [data, setData] = useState([]); 
    const [isLoading,setLoading] = useState(true); 
    const[emailval,setEmail] = useState(''); 
    const [passwordval,setPassword] = useState(''); 
    const router = useRouter(); 

    const fetchinfo = async() => { 
        try{
            const docref = doc(db,"users","Emails");
            const snapshot = await getDoc(docref); 
            const data = snapshot.docs.map(doc=>({id: doc.id, ...doc.data()})); 
            console.log(snapshot.data());
            setData(snapshot.data()); 
            console.log(data)
        }
        catch(error){ 
            console.error(error);
        }
        finally{ 
            setLoading(false);
        }
        }

    /*const signup = async() => { 
        if(data.includes(email)){ 
            const auth = getAuth(); 
            createUserWithEmailAndPassword(auth,email,password).then((Usercredentials)=> { 
                const user = Usercredentials.user(); 
                console.log(user); 
            })
        };
This code will be used later in the signup.js file. 
    };*/ 


    async function SignIn(event){ 
        event.preventDefault();
        let email = event.target.email.value; 
        let password = event.target.password.value; 
        try{
        const auth = getAuth(app); 
        await signInWithEmailAndPassword(auth,email,password).then((usercreds)=> { 
            console.log("Login worked"); 
            setEmail(usercreds.user.email); 
            router.push('/Ecrans/GestAccueil');

    
            
            
            

        });
        console.log(emailval);
        
        }
        catch(error){ 
            console.error(error);
        }  
    }

    /*useEffect(()=> { 
        fetchinfo();
    },[]); 

    /*const siginuser = async() => { 
        
    }*/
  
if(isLoading){ 
    setLoading(false); 
    return <h1>Loading Please Wait...</h1>
}



return(
    <> 
    <Layout>
    <header className={styles.navbar}>
    <img src = "https://mma.prnewswire.com/media/1252012/Soci_t__canadienne_d_hypoth_ques_et_de_logement_Le_plus_grand_in.jpg?p=facebook" className={styles.logo}></img> 
        <nav>
        <ul className={styles.ulists}>
    <li className={styles.lists}><a href = "http://lco.ca">LCO.ca</a></li>
    <li className={styles.lists}><a>Contact</a></li>
    </ul>
</nav>
</header>
    <h1> 
    Bienvenue



    </h1>

    <form  method="post" onSubmit={SignIn}>
        <label for = "first"  className = {styles.label}>Email</label>
        <input type = "email" id = "email" name = "first" className= {styles.input}/>
        <label for = "last" className={styles.label} >Password</label>
        <input type = "password" id = "password" name = "last" className={styles.input} />
        <button type = "submit" className={styles.button} style={{top:30,left:55}} >Login</button>
        <button type = "submit" className={styles.button} style={{right:100,position:"relative",top:38}}>Forgot Password?</button>
        <button type = "submit" className={styles.button} style={{left:120,bottom:22}}>Create an account</button>
        
        
         </form>
         <script> 





         </script>



    </Layout>
    
    
    
    
    </>


); 
    }

