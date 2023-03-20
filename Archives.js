import React from "react"; 
import Layout from "../../public/components/layout";
import styles from '../../public/components/layout.module.css'; 
import archives from '../../public/components/Archives.module.css';

export default function Archives(){


	
return(
<html lang="fr" >
	<Layout>
<head>
	<meta charset="UTF-8"></meta>
	<title>Historique de messages - Logement Communautaire Ottawa</title>
	
</head>
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
	<header>
		
		<h1>Historique de messages</h1>
	</header>
	<div className={archives.container}>
		<div className={archives.category}>
			<h2>Message actuel</h2>
			<div className={archives.message}>
				<p></p>
				<p className={archives.date}>12 mars 2023 à 10h30</p>
			</div>
		</div>
		<div className={archives.category}>
			<h2>High priority messages</h2>
			<div className={archives.message}>
				<p>message</p>
                <p className={archives.date}>12 mars 2023 à 10h30</p>
			</div>
        </div>
        <div className={archives.category}>
            <h2>Other messages</h2>
            <div className={archives.message}>
                <p>message</p>
                <p className={archives.date}>12 mars 2023 à 10h30</p>
            </div>
        </div>
        </div>
        </body>
		</Layout>
        </html>
);
}
