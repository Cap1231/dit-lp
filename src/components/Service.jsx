import React from "react"
import Container from "@material-ui/core/Container"
import Box from '@material-ui/core/Box'
import {makeStyles} from "@material-ui/core/styles"
import {ReactComponent as Web}from '../img/web.svg'
import {ReactComponent as Sap}from '../img/sap.svg'
import {ReactComponent as Other}from '../img/other.svg'
import useMediaQuery from "@material-ui/core/useMediaQuery"

const useStyles = makeStyles((theme) => ({
  serviceContainer: {
    paddingTop: '50px',
    paddingBottom: '250px',
  },
  serviceTitle: {
    padding: '24px 16px'
  },
  serviceItem: {
    marginBottom: '48px',
  },
  serviceItemFadeRight: {
    animationName: '$fadeRight',
    animationDuration: '2s',
    animationIterationCount: '1',
  },
  '@keyframes fadeRight': {
    'from': {
      opacity: '0',
      transform: 'translateX(-150px)',
    },
    'to': {
      opacity: '1',
      transform: 'translateX(0)',
    }
  },
  serviceItemFadeLeft: {
    animationName: '$fadeLeft',
    animationDuration: '2s',
    animationIterationCount: '1',
  },
  '@keyframes fadeLeft': {
    'from': {
      opacity: '0',
      transform: 'translateX(150px)',
    },
    'to': {
      opacity: '1',
      transform: 'translateX(0)',
    }
  },
  serviceText: {
    width: '70%',
    padding: '0 16px 16px'
  },
  serviceTextSp: {
    width: '100%',
    marginBottom: '36px'
  },
  serviceTextHead: {
    marginTop: 0,
  },
  serviceImage: {
    width: '30%',
    '& > svg': {
      width: '100%',
      height: '200px',
    },
  },
  serviceImageSp: {
    width: '100%',
    marginBottom: '24px',
    '& > svg': {
      width: '100%',
      height: '200px',
    },
  }
}))

const Service = () => {
  const classes = useStyles()
  const isPC = useMediaQuery('(min-width:768px)')
  return (
    <Container maxWidth="md" className={classes.serviceContainer}>
      <h2 className={classes.serviceTitle}>サービス</h2>
      <Box display="flex" alignItems={'center'} flexDirection={isPC ? "row" : "column"}
           className={`${classes.serviceItem} ${classes.serviceItemFadeRight}`} id={'web'}>
        <div className={isPC ? classes.serviceText : classes.serviceTextSp}>
          <h3 className={classes.serviceTextHead}>Webシステム開発</h3>
          <div>
            Ruby on Railsを主体に、クラウドサービス（AWSやGCPなど）を使いWebシステムの開発を行っております。
            Ruby on Railsは生産性と拡張性に優れたプラットフォームで、スタートアップ事業などサービスインのスピードと柔軟な要件吸収が求められる場合などに適しております。<br/>
            開発はRuby on Railsのコーディング規約に厳格に準拠し、高い保守性と汎用性を担保し、適宜テストプログラムも実装し開発を行い、バグ発生率の極小化を実現しております。<br/>
            また、DevOps＋アジャイルでの開発により、開発のスピードアップと要件漏れや認識齟齬の極小化も実現しております。
          </div>
        </div>
        <div className={isPC ? classes.serviceImage : classes.serviceImageSp}>
          <Web/>
        </div>
      </Box>
      <Box display="flex" alignItems={'center'} flexDirection={isPC ? "row-reverse" : "column"}
           className={`${classes.serviceItem} ${classes.serviceItemFadeLeft}`} id={'sap'}>
        <div className={isPC ? classes.serviceText : classes.serviceTextSp}>
          <h3 className={classes.serviceTextHead}>SAPシステム運用保守</h3>
          <div>
            SAPシステムの運用保守チーム（業務側）の工数は肥大化することが多く、そのコストに悩まされているお客様も非常に多いです。
            弊社では運用ツール・RPAなどを開発・活用しつつ、エンジニアを主体としたチームにて最小の工数で高い品質の運用保守サービスを提供致します。
          </div>
        </div>
        <div className={isPC ? classes.serviceImage : classes.serviceImageSp}>
          <Sap/>
        </div>
      </Box>
      <Box display="flex" alignItems={'center'} flexDirection={isPC ? "row" : "column"}
           className={`${classes.serviceItem} ${classes.serviceItemFadeRight}`} id={'other'}>
        <div className={isPC ? classes.serviceText : classes.serviceTextSp}>
          <h3 className={classes.serviceTextHead}>その他</h3>
          <div>
            RPA開発など、事務作業の自動化・効率化が得意です。付加価値の低い業務からスタッフを開放して、より高付加価値な業務に専念できる環境づくりをサポート致します。
          </div>
        </div>
        <div className={isPC ? classes.serviceImage : classes.serviceImageSp}>
          <Other/>
        </div>
      </Box>
    </Container>
  )
}

export default Service
