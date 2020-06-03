import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { graphql, useStaticQuery } from "gatsby"


const useStyles = makeStyles((theme) => ({
  containerLogo: {
    flexGrow: 1
  },
  logo: {
    [theme.breakpoints.up("xs")]: {
      height: "60px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "52px"
    }
  }
}))

const Header = ({siteTitle}) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "reef-supervisor-logo.svg" }) {
        publicURL
      }
    }
  `)
  const classes = useStyles()
  return (<header>
      <AppBar position="relative" color={"inherit"} >
        <Toolbar>
          <div className={classes.containerLogo}>
            <img alt={siteTitle} className={classes.logo} src={data.file.publicURL}/>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  )
}
export default Header
