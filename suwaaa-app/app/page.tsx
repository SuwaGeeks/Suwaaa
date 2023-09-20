import { Button, Container, Typography } from '@mui/material';
import Link from 'next/link';
import styles from './page.module.css';

export default function Start() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src="/Suwaaa-start.png" alt="Suwaaa Logo" className={styles.logo} />
      </div>
      <div className={styles.actionContainer}>
        <Link href="/signup" passHref>
          <Button variant="contained" style={{ backgroundColor: '#217178', color: 'white' }} className={styles.button}>
            はじめて利用する
          </Button>
        </Link>
        <Link href="/login" passHref>
          <Button variant="contained" style={{ backgroundColor: '#D9D9D9', color: 'black' }} className={styles.button}>
            アカウントを持っている
          </Button>
        </Link>
      </div>
      <Container className={styles.termContainer}>
        <Typography variant="body2" className={styles.footer}>
          本サービスの利用開始により、
          <Link href="/start/policy" passHref>
            <Typography component="span" variant="body2" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              利用規約
            </Typography>
          </Link>
          とプライバシーポリシーに同意したことになります。
        </Typography>
      </Container>
    </div>
  );
}
