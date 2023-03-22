import React from "react"; 
import ForgetPassword from "../../public/components/forgotpassword.module.css";

export default function ForgotPassword(){ 

    return(
        
        /*<html>
        <head>
   
    <title>Mot de passe oublié</title>
</head>
<body>
    <h1 className={ForgetPassword.h1}>Mot de passe oublié</h1>
    <form action="traitement_mot_de_passe_oublie.php" method="post" className={ForgetPassword.form}>
        <label for="email" className={ForgetPassword.label}>Adresse e-mail :</label>
        <input type="email" id="email" name="email" required className={ForgetPassword.input}></input>
        <br></br>
        <button type="submit" className={ForgetPassword.button}>Envoyer</button>
    </form>
</body>
</html>
*/
<html style={{backgroundColor:"#7E968C"}}>
<head>
    
    <title>Mot de passe oublié</title>

</head>
<body >
    <div className={ForgetPassword.container}>
        <img src="https://mma.prnewswire.com/media/1252012/Soci_t__canadienne_d_hypoth_ques_et_de_logement_Le_plus_grand_in.jpg?p=facebook" alt="Logo" className={ForgetPassword.img}></img>
        <div className={ForgetPassword.line}></div>
        <div className={ForgetPassword.contact}>Contact</div>
    </div>
    <h1 style={{textAlign: "center"}}>Mot de passe oublié</h1>
    <form action="traitement_mot_de_passe_oublie.php" method="post" className={ForgetPassword.form} >
        <label for="email" className={ForgetPassword.label}>Adresse e-mail :</label>
        <input type="email" id="email" name="email" required className={ForgetPassword.input}></input>
        <br></br>
        <button type="submit" className={ForgetPassword.button}>Envoyer</button>
    </form>
</body>
</html>
    );


}
