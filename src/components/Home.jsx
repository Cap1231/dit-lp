import React, {useState} from 'react'
import './Home.scss'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {ReactComponent as Web}from '../img/web.svg'
import {ReactComponent as Sap}from '../img/sap.svg'
import {ReactComponent as Other}from '../img/other.svg'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  cardIcon: {
    '& > svg': {
      width: '100%',
      height: '100px',
    },
  },
  cardAction: {
    padding: '0 16px 16px'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

const FaqItem = ({expanded, handleChange, headingClass, title, children}) => (
  <Accordion className="item" expanded={expanded} onChange={handleChange}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      className="title"
    >
      <Typography className={headingClass}>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails className="body">
      <Typography>
        {children}
      </Typography>
    </AccordionDetails>
  </Accordion>
)

const ServiceItem = ({title, children, icon, classes, linkHref}) => {
  return (
    <Card className='service-item'>
      <CardContent>
        <div className={classes.cardIcon}>{icon}</div>
        <Typography variant="h5" component="h2" className="service-item_title">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className="service-item_text">
          {children}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardAction}>
        <Link href={linkHref}>
          詳細はこちら
        </Link>
      </CardActions>
    </Card>
  )
}

const Home = () => {
  const isPC = useMediaQuery('(min-width:768px)')
  const classes = useStyles()
  const [faqItem1Expand, setFaqItem1Expand] = useState(true)
  const [faqItem2Expand, setFaqItem2Expand] = useState(true)
  const [faqItem3Expand, setFaqItem3Expand] = useState(true)
  const currentYear = new Date().getFullYear()
  const foundationYear = 2007
  const yearsSinceFoundation = currentYear - foundationYear

  return (
    <>
      <div className="top">
        <p className="top-text">
          多様に変化するビジネスの<br className="br-sp"/>成功に貢献できる<br/>
          ITサービス・製品を提供する<br className="br-sp"/>技術者集団
        </p>
      </div>

      <Container className='service'>
        <h2 className='service-title'>SERVICE</h2>
        <div className="service-list">
          <ServiceItem title="Webシステム開発" icon={<Web />} classes={classes} linkHref={"/service#web"}>
            Ruby on RailsによるWebシステムの開発、クラウドの構築・運用・保守を行っております。
          </ServiceItem>
          <ServiceItem title="SAPシステム運用保守" icon={<Sap />} classes={classes} linkHref={"/service#sap"}>
            最小の工数で最大のサービスを提供致します。
          </ServiceItem>
          <ServiceItem title="その他" icon={<Other />} classes={classes} linkHref={"/service#other"}>
            RPA開発、スマホアプリ開発、AccessやExcelによる業務システムの開発
          </ServiceItem>
        </div>
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
            <p className="accomplishment-item-number">{yearsSinceFoundation}</p>
            <p className="accomplishment-item-word">年以上の開発・保守経験</p>
          </div>
          <div className="accomplishment-item">
            <p className="accomplishment-item-number">{yearsSinceFoundation}</p>
            <p className="accomplishment-item-word">年以上の取引継続年数</p>
          </div>
        </Box>
      </div>

      <div className="faq">
        <Container maxWidth="md">
          <h2 className='faq-title'>FAQ</h2>
          <FaqItem
            expanded={faqItem1Expand}
            handleChange={()=> setFaqItem1Expand(!faqItem1Expand)}
            headingClass={classes.heading}
            title={"Webシステムの開発の事例を教えて下さい。"}
          >
            自動車整備管理システム、ECシステム、金融商品取引システム、予約サービスシステムなどになり、すべてAWS＋Ruby(on Rails)を中心に
            構築し、安定した運用保守を実現しております。<br/>
            また、必要に応じてスマホのアプリの開発も行います。
          </FaqItem>
          <FaqItem
            expanded={faqItem2Expand}
            handleChange={()=> setFaqItem2Expand(!faqItem2Expand)}
            headingClass={classes.heading}
            title={"システム運用保守の実績を教えて下さい。"}
          >
            メルセデス・ベンツ日本様でのSAPと倉庫管理システムの運用をはじめ、スウォッチグループジャパン様他、物流業関係、サービス、
            小売業など幅広い業態にて、運用保守の実績がございます。<br/>
            詳細はお問い合わせください。
          </FaqItem>
          <FaqItem
            expanded={faqItem3Expand}
            handleChange={()=> setFaqItem3Expand(!faqItem3Expand)}
            headingClass={classes.heading}
            title={"RPAのスクラッチ開発は、SaaSやパッケージ製品のRPAと何が違うのでしょうか？"}
          >
            RPAの要件は様々で、Webサービス、Office製品、基幹システムなども含め全プロセスを全自動で自動制御したり、データの判定や加工などを同時に行うなど高度な機能を実現するためにはスクラッチ開発が必要となります。<br/>
            パッケージの場合、各プロセスをつまみぐいRPAによる半自動化にとどまる事が多く、パッケージからスクラッチへの移行を行うお客様もいらっしゃいます。<br/>
            弊社では、より付加価値の高い業務にスタッフのコストを投入したい、とお考えの皆様の課題に日々取り組んでおります。
          </FaqItem>
        </Container>
      </div>
    </>
  )
}
export default Home
