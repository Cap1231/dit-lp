import React from "react"
import Container from "@material-ui/core/Container"
import Box from '@material-ui/core/Box'
import {makeStyles} from "@material-ui/core/styles"
import {ReactComponent as Web}from '../img/web.svg'
import {ReactComponent as Sap}from '../img/sap.svg'
import {ReactComponent as Other}from '../img/other.svg'
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  serviceContainer: {
    paddingTop: '100px',
    paddingBottom: '250px',
  },
  serviceItem: {
    marginBottom: '48px',
  },
  serviceText: {
    width: '70%',
    padding: '16px'
  },
  serviceTextSp: {
    width: '100%',
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
      <Box display="flex" flexDirection={isPC ? "row" : "column"}  className={classes.serviceItem} id={'web'}>
        <div className={isPC ? classes.serviceText : classes.serviceTextSp}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, quisquam.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque cupiditate, doloribus labore officiis praesentium quas similique sint. Consequatur, cumque doloribus itaque laudantium, nulla, perspiciatis quas quidem reprehenderit saepe sapiente sequi!
        </div>
        <div className={isPC ? classes.serviceImage : classes.serviceImageSp}>
          <Web/>
        </div>
      </Box>
      <Box display="flex" flexDirection={isPC ? "row-reverse" : "column"} className={classes.serviceItem} id={'sap'}>
        <div className={isPC ? classes.serviceText : classes.serviceTextSp}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, quisquam.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque cupiditate, doloribus labore officiis praesentium quas similique sint. Consequatur, cumque doloribus itaque laudantium, nulla, perspiciatis quas quidem reprehenderit saepe sapiente sequi!
        </div>
        <div className={isPC ? classes.serviceImage : classes.serviceImageSp}>
          <Sap/>
        </div>
      </Box>
      <Box display="flex" flexDirection={isPC ? "row" : "column"} className={classes.serviceItem} id={'other'}>
        <div className={isPC ? classes.serviceText : classes.serviceTextSp}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, quisquam.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque cupiditate, doloribus labore officiis praesentium quas similique sint. Consequatur, cumque doloribus itaque laudantium, nulla, perspiciatis quas quidem reprehenderit saepe sapiente sequi!
        </div>
        <div className={isPC ? classes.serviceImage : classes.serviceImageSp}>
          <Other/>
        </div>
      </Box>
    </Container>
  )
}

export default Service
