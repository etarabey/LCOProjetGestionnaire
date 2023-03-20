import React from "react";
import Layout from "../../public/components/layout";
import styles from "../../public/components/layout.module.css"; 
import {db,app} from '../configs/firebase-config'; 
import { getDoc } from "firebase/firestore";
import {doc,updateDoc,arrayUnion} from 'firebase/firestore'; 
import { getAuth } from "firebase/auth";
export default function Messages(){

function ClickedButton(event){ 
    var change = document.getElementById("div1"); 
    var change2 = document.getElementById("div2");
    if(change.style.display !== 'none'){ 
        change2.style.display = 'inline-flex';
        change.style.display = 'none'; 
    } 

    else{ 
        change.style.display = 'inline-grid'; 
        change2.style.display = 'none'; 
    }
}


const fetchtheinfo = async(event) => { 
    event.preventDefault();
    try{ 
        const docref = doc(db,"users","Messages"); 
        const snapshot = await getDoc(docref); 
        const arr = snapshot.data()["Destinataires"]["etarabey03@gmail.com"]; 
        let Message = event.target.Message.value; 
        console.log(snapshot.data()["Destinataires"]["etarabey03@gmail.com"]);
        arr.unshift(Message);
        await updateDoc(docref, { 
            Destinataires: {"etarabey03@gmail.com":arr},
        }); 
    }
    catch(error){ 
        console.error(error); 
    }
}

return(
        <>
        <Layout>
        
           
                <title>Ma page de messagerie</title>
                
                
                <header className={styles.navbar}>
    <img src = "https://mma.prnewswire.com/media/1252012/Soci_t__canadienne_d_hypoth_ques_et_de_logement_Le_plus_grand_in.jpg?p=facebook" className={styles.logo}></img> 
        <nav>
        <ul className={styles.ulists}>
    <li className={styles.lists}><a href = "http://lco.ca">LCO.ca</a></li>
    <li className={styles.lists}><a>Contact</a></li>
    </ul>
</nav>
</header>

<body>
                    <div className={styles.bigdiv}>
                    <h1>Ma page de messagerie</h1> 
                    <div className={styles.grid}>
                    <form>
                        <div className={styles.divsbuttons} style={{display:"inline-grid",rowGap:10}}>
                        <button type="button" id="ed1" className={styles.buildbutton}>
                            <h2>125 McLeod</h2>
                        </button>
                        <button type="button" id="ed1" className={styles.buildbutton}>
                            <h2>303 King Edward</h2>
                        </button>
                        <button type="button" id="ed1" className={styles.buildbutton}>
                        <h2>Britannia Woods</h2></button>
                        </div>
                        <div className={styles.divsbuttons} style={{display:"inline-grid",rowGap:10}}>
                        <button type="button" id="ed1" className={styles.buildbutton}><h2>225 Donald</h2></button>
                        <button type="button" id="ed1" className={styles.buildbutton}><h2>Walkley Manor</h2></button>
                        <button type="button" id="ed1" className={styles.buildbutton}><h2>215 Wurtemburg</h2></button>
                        </div>
                    </form>

                    <form> 
                        <div> 
                            <div style={{display:"grid",rowGap:50,marginBottom:300,justifyContent:"center",top:80,position:"relative"}}>
                                <div style={{display:"grid",position:"relative",justifyContent:"center"}}>
                                    <div style={{display:"grid",marginRight:300,bottom:100,position:"relative"}}>
                            <h2>Floor Number </h2>
                            <input type="text" id = "mes" className={styles.input}>
                            </input>
                            </div>
                            <div style = {{display:"flex", justifyContent:"center",marginRight:100,position:"relative",bottom:95,right:20}}>
                            <input type="checkbox" id="building" value = "Build">
                            </input>
                            <label>Skip</label>
                            </div>

                            
                            </div>
                            <div style={{display:"grid",position:"relative",justifyContent:"center", marginLeft:300,bottom:273}}>
                                <h2>Unit Number</h2>
                            
                            <input type="text" id = "mes" className={styles.input}></input>
                            <div style={{display:"flex",top:5,position:"relative",marginLeft:155}}>
                            <input type="checkbox" id="Unit" value="Unitcheck"></input>
                            <label>Skip</label>
                            </div>
                            </div>
                            </div>
                            </div>.










                            </form>
                            <form method = "post" onSubmit={fetchtheinfo}>
                                <div style={{display:"grid",justifyContent:"center",position:"relative",bottom:450}}>
                            <h2 style={{justifyContent:"center",position:"relative",left:30}}>Select Message Type </h2>
                            <button type='button' id="selectmessage" className={styles.button} style={{padding:80}} onClick={ClickedButton}>
                                <h2 className={styles.buttontext}>Customize Message
                                    </h2>
                                </button>
                            </div>
                            <div id = "div1" style={{justifyContent:"center",display:"inline-grid",bottom:400,position:"relative",left:310}}>
                            <textarea className={styles.textboxes} id = "Message"></textarea>
                            </div>

                            <div id = "div2" style={{display:"none", position:"relative",bottom:200,gap:20}} className={styles.divs}>
                               <img src="../Images/Elec.png" className={styles.image}></img>
                               <img src = "../Images/Construction.png" className={styles.image}></img>
                               <label className={styles.label}> Set Daily Message</label>
                               <img src = "../Images/OpenWindow.png" className={styles.image}></img> 
                               <img src = "../Images/ClosedWindow.png" className={styles.image}></img>


                            </div>



                            <div style={{display:"inline-flex", position:"relative",justifyContent:"center", gap:100,flexWrap:"wrap",bottom:100}}>
                            <button type = "submit" className={styles.button}> 
                            <h2>Envoie Message</h2></button>
                            
                           
                            <button className={styles.button}>
                                <h2>Archives</h2>
                            </button>
                            </div>
                            
                            
                            </form>
                      

                    




                    </div>
                
                        </div>
                      
                </body>

                
</Layout>
                </>
);
};
