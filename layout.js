import styles from './layout.module.css'; 
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'; 
export default function Layout({children}){ 
    return (<div className={styles.container}>{children}
    </div>
    
    )
    
}
