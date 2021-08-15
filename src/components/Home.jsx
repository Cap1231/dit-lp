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
          <Accordion className="item" expanded={faqItem1Expand} onChange={()=> setFaqItem1Expand(!faqItem1Expand)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq1-content"
                id="faq1-header"
                className="title"
            >
              <Typography className={classes.heading}>Webシステムの開発の事例を教えて下さい。</Typography>
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
              <Typography className={classes.heading}>SAPシステム運用保守の実績を教えて下さい。</Typography>
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
              <Typography className={classes.heading}>RPAの開発って、SaaSと何が違うのでしょうか？</Typography>
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
