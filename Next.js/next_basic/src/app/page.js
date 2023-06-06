/** @format */


import { User } from "./Pages/Users";
import styles from "./page.module.css";

export default function Home() {

let name='thore'
  return (
    <main className={styles.main}>
      <User name="Ajit yadav"/>
      
      
      <h1>Hello Next.js</h1>
    </main>
  );
}

