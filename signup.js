import React, { useEffect, useState } from "react";
import Layout from "../../public/components/layout";
import styles from "../../public/components/layout.module.css"; 
import { doc } from "firebase/firestore";
import {db,app} from '../configs/firebase-config'; 
import { getDoc } from "firebase/firestore"; 
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {useRouter} from 'next/router'; 

export default function SignUp(){ 
    const [data,setData] = useState([]); 
    const router = useRouter(); 
    const fetchinfo = async() => { 
        try{
            const docref = doc(db,"users","Emails"); 
            const snapshot = await getDoc(docref); 
            //const data = snapshot.data.(doc=>({id: doc.id, ...doc.data()})); 
            setData(snapshot.data()["LCOEmails"]); 
            console.log(data)
        }
        catch(error){ 
            console.error(error);
        }
    }
       
    const createUser = async(event) => {
        event.preventDefault();
        try{
            fetchinfo();
            let username = event.target.emailinp.value; 
            let password = event.target.password.value; 
            let checkpassword = event.target.checkpassword.value; 
            const auth = getAuth(); 
            if(data.includes(username) && password === checkpassword){ 
                  createUserWithEmailAndPassword(auth,username,password).then(usercreds => { 
                    <h1>Redirecting... Please Wait</h1>
                    router.push("/Ecrans/GestAccueil");
                  })
            }          
        }
        catch(error){ 
            console.error(error);
        }
    };

/*useEffect(()=> { 
    fetchinfo();
});*/
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

<body className={styles.divs}>
    <h1 className={styles.header} style={{top:10}}> Create an Account</h1>

    <form method="post" className={styles.grid} style={{padding:40}} onSubmit={createUser}> 
    
    <div>
    <label for = "first" className={styles.label} style={{left:45}}> Email </label>
    </div>
    <div>
    <input type = "email" id = "emailinp" name = "email" className={styles.input}/>
    </div>
    <div>
    <label for = "second" className={styles.label} style ={{left:30}}>Password</label>
    </div>                    
    <div>

    <input type = "password" id = "password" name="password" className={styles.input}/>
    </div>
    <div>
    <label for = "third" className={styles.label} style={{left:12}}>Verify Password</label>
    </div>
    <div>
    <input type="password" id="checkpassword" name = "passcheck" className={styles.input}/>
    </div>
    <div>
    <button type="submit" className={styles.button} onSubmit="return CheckLog()" style={{left:50}}>Sign Up!</button>
</div>
    </form>
</body>




</Layout>






</>



);


}
