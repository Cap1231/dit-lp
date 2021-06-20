import React, {useState} from 'react'
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
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

const ServiceItem = ({title, children, icon, classes}) => {
  return (
    <Card className='service-item'>
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
  const classes = useStyles()
  const [faqItem1Expand, setFaqItem1Expand] = useState(true)
  const [faqItem2Expand, setFaqItem2Expand] = useState(true)
  const [faqItem3Expand, setFaqItem3Expand] = useState(true)

  return (
    <>
      <div className="top">
        <p className="top-text">
          多様に変化するビジネスの<br className="br-sp"/>成功に貢献できる<br/>
          ITサービス・製品を提供する<br className="br-sp"/>技術者集団
        </p>
      </div>

      <Container className='service'>
        <ServiceItem title="SAPシステム運用保守" icon={<PeopleOutlineIcon style={{ color: '#58A6F2'}}/>} classes={classes}>
          SAPシステムの運用の効率をもっとあげませんか？<br/><br/>
          SAPシステム運用の効率をあげたいと思っている方、SAPのデータを毎日自動でパソコンにダウンロードしたい方、もっとプロアクティブに異常を発見したい方、これがSAPの限界？とあきらめている方、当社にご相談くだされば、必ず貴方を非効率な運用業務から解放する解決策をご提案致します。
        </ServiceItem>
        <ServiceItem title="MS-Accessシステム開発" icon={<CodeIcon style={{ color: '#58A6F2'}}/>} classes={classes}>
          効率の悪いExcelの業務をAccessに切り替えませんか？<br/><br/>
          何度も同じデータを入力している、毎月の請求処理、支払処理、その確認作業に膨大な時間を費やしている、データーベースを活用してコンピュータをもっと経営に役立てたい、雑務から従業員を開放しもっと生産的な仕事をさせたい、とお考えの御社は、当社にご相談ください。
        </ServiceItem>
        <ServiceItem title="RF-Gen ソリューション" icon={<AllInclusiveIcon style={{ color: '#58A6F2'}}/>} classes={classes}>
          ハンディターミナルを活用した倉庫システムの決定版！<br/>
          SAP他様々なホストシステム・DataBaseシステムとリアルタイム連携可能。<br/>
          標準テンプレートもあり、安価で短期間で導入・稼働ができます。<br/>
          当社はRFGenの日本総代理店のパートナーとして、導入コンサルタント、倉庫システムの開発などを行っております。<br/>
          RFGenにご興味がある方は当社にご連絡ください。
        </ServiceItem>
      </Container>

      <div className="accomplishment">
        <Box
          display="flex"
          justifyContent="center"
          alignItems={isPC ? "" : "center"}
          flexDirection={isPC ? "row" : "column"}
          className="accomplishment-list"
        >
          <div className="accomplishment-item">
            <p className="accomplishment-item-number">10</p>
            <p className="accomplishment-item-word">年以上の開発・保守経験</p>
          </div>
          <div className="accomplishment-item">
            <p className="accomplishment-item-number">10</p>
            <p className="accomplishment-item-word">年以上の取引継続年数</p>
          </div>
        </Box>
      </div>

      <div className="faq">
        <Container maxWidth="md">
          <Accordion className="item" expanded={faqItem1Expand} onChange={()=> setFaqItem1Expand(!faqItem1Expand)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq1-content"
                id="faq1-header"
                className="title"
            >
              <Typography className={classes.heading}>運用サービスの実績を教えてください</Typography>
            </AccordionSummary>
            <AccordionDetails className="body">
              <Typography>
                メルセデス・ベンツ日本様にてSAPと倉庫管理システムの運用を請け負っています。詳細についてはお問い合わせページより、お問い合わせください。
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="item" expanded={faqItem2Expand} onChange={()=> setFaqItem2Expand(!faqItem2Expand)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq2-content"
                id="faq2-header"
                className="title"
            >
              <Typography className={classes.heading}>どのような開発を行っていますか</Typography>
            </AccordionSummary>
            <AccordionDetails className="body">
              <Typography>
                主に業務システムで、会計も含めた全社システムの開発も手がけております。物流業関係、工事業関係、製造業関係、ファイナンス業関係、で大小様々なシステムを多様なプラットフォームで開発しております。ECサイトの構築やHPの構築を始め、最近ではCRMシステムやビッグデータシステムにも注力しております。詳細についてはお問い合わせページより、お問い合わせください。
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="item" expanded={faqItem3Expand} onChange={()=> setFaqItem3Expand(!faqItem3Expand)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq3-content"
                id="faq3-header"
                className="title"
            >
              <Typography className={classes.heading}>RFGenの導入実績を教えてください</Typography>
            </AccordionSummary>
            <AccordionDetails className="body">
              <Typography>
                直近ではスウォッチグループジャパン様に導入し、費用・導入スピード・品質ともに好評をいただいております。詳細についてはお問い合わせページより、お問い合わせください。
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </div>
    </>
  )
}
export default Home
