import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  subHeader: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  subHeaderButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}))

const IndexPage = () => {
  const classes = useStyles()
  return (
  <Layout>
    <SEO title="Home" />
    <div className={classes.subHeader}>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Free & open source app to manage your reef
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          The monitoring of parameters is a key element for the maintenance of a reef aquarium.
        </Typography>
        <div className={classes.subHeaderButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary" href="https://app.reef-supervisor.fr">
                Go to the app
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" href="https://github.com/leoBergerot">
                Source code
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  </Layout>
  )
}

export default IndexPage
