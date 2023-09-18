// start/policy/page.tsx
import TopBar from '../../components/TopBar';
import styles from './page.module.css';

export default function Policy() {
  return (
    <div className={styles.container}>
      <TopBar goBackTo="/start" pageTitle="利用規約" />
      <br></br>
      <h1>利用規約</h1>
      <p>ここに利用規約の内容を記述します。</p>
      {/* 何か追加するものがあればここに */}
    </div>
  );
}
