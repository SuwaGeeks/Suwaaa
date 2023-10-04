// components/TopBar.tsx
import { FC } from 'react'
import Link from 'next/link';
import styles from './TopBar.module.css';

interface TopBarProps {
  goBackTo: string;
  pageTitle: string;
}

const TopBar: FC<TopBarProps> = ({ goBackTo, pageTitle }) => {
  return (
    <div className={styles.topBar}>
      <Link href={goBackTo} passHref>
        <div className={styles.goBackButton}>←</div>
      </Link>
      <div className={styles.pageTitle}>{pageTitle}</div>
      <div></div> {/* この空のdivは、justify-content: space-between; によってタイトルを中央に配置するために必要です */}
    </div>
  );
};

export default TopBar;
