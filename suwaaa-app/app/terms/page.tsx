// start/policy/page.tsx
import Link from 'next/link'
import { Typography, Stack, Box, Button } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import styles from './page.module.css';

export default function Policy() {
  return (
    <div className={styles.container}>
      <Stack>
        <Box>
          <Link href='/'>
            <Button><ChevronLeftIcon /> 戻る</Button>
          </Link>
        </Box>
        <Typography variant='h1' align="center" style={{fontSize: '40px'}}>
          Suwaaa利用規約
        </Typography>
        <Typography>
          以下の項目は、Suwaaa(以下、本サービス)の利用に際して必須とされる利用規約(以下、本規約)です。<br />
          以下の規約をお読みいただき、ご同意の上ご利用ください。
        </Typography>
        <Stack gap={3} my={2}>
          <div className={styles.box}>
            <h2>
              第一条: アカウントのログインについて
            </h2>
            <p>
              本サービスのアカウントに関しては、登録した本人のみが利用することが許可されています。<br />
              他人へのアカウントの賞与や共有、第三者によるログインは固く禁止されています
            </p>
          </div>
          <div className={styles.box}>
            <h2>
              第二条: 本サービスの不具合について
            </h2>
            <p>
              本サービスにおいて、不具合やエラーが発生した場合には、それを不正な手段で利用することは禁止されています。<br />
              不正な行為やセキュリティの侵害は犯罪となる場合があります。
            </p>
          </div>
          <div className={styles.box}>
            <h2>
              第三条: 本規約の変更について
            </h2>
            <p>
              本サービスの利用規約は、必要に応じて変更されることがあります。<br />
              ただし、重要な変更に関して、事前に通知いたします<br />
              利用者は定期的に利用規約を確認し、最新の内容に同意する必要があります。<br />
              同意が困難な変更がなされた場合には下記連絡先へ同意しない旨を連絡してください。
            </p>
          </div>
          <div className={styles.box}>
            <h2>
              第四条: 本サービスによって受ける被害および損害について
            </h2>
            <p>
              本サービスの利用規約は、必要に応じて変更されることがあります。<br />
              ただし、重要な変更に関して、事前に通知いたします<br />
              利用者は定期的に利用規約を確認し、最新の内容に同意する必要があります。<br />
              同意が困難な変更がなされた場合には下記連絡先へ同意しない旨を連絡してください。
            </p>
          </div>
          <div className={styles.box}>
            <h2>
              第五条: 情報取得について
            </h2>
            <p>
              本サービスでは、利用者から以下の情報を収集します。<br />
              <ul>
                <li>メールアドレス</li>
                <li>利用者の学科及び入学年度</li>
                <li>店舗情報の閲覧履歴</li>
                <li>店舗の利用履歴</li>
                <li>端末識別子</li>
                <li>IPアドレス</li>
                <li>ブラウザ設定情報</li>
              </ul>
              利用者は以上を確認し、収集される情報に同意するものとします。<br />
              学籍番号に関しては、所有確認メールの送信後個人が識別できない状態で保管します。
            </p>
          </div>
          <div className={styles.box}>
            <h2>
              第六条: 本規約の更新履歴について
            </h2>
            <p>
              本規約の更新履歴について、下記の通り表示されます。<br />
              利用者は第三条にある通り更新履歴を確認することにより、最新の規約に同意する必要があります。
            </p>
            <p>
              本規約は、利用者と当方との契約となります。<br />
              利用者が本サービスを利用する際には、上記の規約に同意したものとみなされます。<br />
              当方は、違反行為が確認された場合や必要に応じて利用者に対して制限措置を講じる権利を有します。
            </p>
            <br />
            <h3>
              規約改定履歴
            </h3>
            <ul>
              <li>2023/09/20 初期規約の制定</li>
            </ul>
          </div>
        </Stack>
        <span>連絡先: suwaaa210@gmail.com</span>
      </Stack>
    </div>
  );
}
