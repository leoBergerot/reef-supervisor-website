/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import "./global.css"

import Header from "./header"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => (
  {
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6)
    }
  }
))

function Copyright({siteTitle}) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        {siteTitle}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const classes = useStyles()

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      <footer className={classes.footer}>
        <Typography variant="overline" component="h1" align="center" gutterBottom>
          Manage easily your tank
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Open source application
        </Typography>
        <Copyright siteTitle={data.site.siteMetadata.title}/>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
