// start/policy/page.tsx
import { Button } from '@mui/material'
import styles from './page.module.css';

export default function Policy() {
  return (
    <div className={styles.container}>
      <h1>利用規約</h1>
      <h2>第一条</h2>
      <p>ここに利用規約の内容を記述します。</p>
      <h2>第二条</h2>
      <p>ここに利用規約の内容を記述します。</p>
    </div>
  );
}
