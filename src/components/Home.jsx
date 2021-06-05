import React from 'react'
import './Home.scss'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import CodeIcon from '@material-ui/icons/Code'
import AllInclusiveIcon from '@material-ui/icons/AllInclusive'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import useMediaQuery from '@material-ui/core/useMediaQuery'


const ServiceItem = ({title, children, icon}) => {
  return (
    <Card className="service-item">
      <CardContent>
        {icon}
        <Typography variant="h5" component="h2" className="service-item_title">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className="service-item_text">
          {children}
        </Typography>
      </CardContent>
    </Card>
  )
}

const Home = () => {
  const isPC = useMediaQuery('(min-width:768px)')

  return (
    <>
      <div className="top">
        <p className="top-text">
          多様に変化するビジネスの<br className="br-sp"/>成功に貢献できる<br/>
          ITサービス・製品を提供する<br className="br-sp"/>技術者集団
        </p>
      </div>

      <Container className="service">
        <Box
          display="flex"
          justifyContent="center"
          alignItems={isPC ? "" : "center"}
          flexDirection={isPC ? "row" : "column"}
        >
          <ServiceItem title="SAPシステム運用保守" icon={<PeopleOutlineIcon />}>
            SAPシステムの運用の効率をもっとあげませんか？<br/><br/>
            SAPシステム運用の効率をあげたいと思っている方、SAPのデータを毎日自動でパソコンにダウンロードしたい方、もっとプロアクティブに異常を発見したい方、これがSAPの限界？とあきらめている方、当社にご相談くだされば、必ず貴方を非効率な運用業務から解放する解決策をご提案致します。
          </ServiceItem>
          <ServiceItem title="MS-Accessシステム開発" icon={<CodeIcon />}>
            効率の悪いExcelの業務をAccessに切り替えませんか？<br/><br/>
            何度も同じデータを入力している、毎月の請求処理、支払処理、その確認作業に膨大な時間を費やしている、データーベースを活用してコンピュータをもっと経営に役立てたい、雑務から従業員を開放しもっと生産的な仕事をさせたい、とお考えの御社は、当社にご相談ください。
          </ServiceItem>
          <ServiceItem title="RF-Gen ソリューション" icon={<AllInclusiveIcon />}>
            ハンディターミナルを活用した倉庫システムの決定版！<br/>
            SAP他様々なホストシステム・DataBaseシステムとリアルタイム連携可能。<br/>
            標準テンプレートもあり、安価で短期間で導入・稼働ができます。<br/>
            当社はRFGenの日本総代理店のパートナーとして、導入コンサルタント、倉庫システムの開発などを行っております。<br/>
            RFGenにご興味がある方は当社にご連絡ください。
          </ServiceItem>
        </Box>
      </Container>

      <div className="accomplishment">
        
      </div>
    </>
  )
}
export default Home
