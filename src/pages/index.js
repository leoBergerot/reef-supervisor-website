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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

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
    {/*<Typography  component="h1" variant="overline" align="center" color="textPrimary">*/}
    {/*  How does it work ?*/}
    {/*</Typography>*/}
    {/*<Container className={classes.cardGrid} maxWidth="md">*/}
    {/*  <Grid container spacing={4}>*/}
    {/*    {cards.map((card) => (*/}
    {/*      <Grid item key={card} xs={12} sm={6} md={4}>*/}
    {/*        <Card className={classes.card}>*/}
    {/*          <CardMedia*/}
    {/*            className={classes.cardMedia}*/}
    {/*            image="https://source.unsplash.com/random"*/}
    {/*            title="Image title"*/}
    {/*          />*/}
    {/*          <CardContent className={classes.cardContent}>*/}
    {/*            <Typography gutterBottom variant="h5" component="h2">*/}
    {/*              Heading*/}
    {/*            </Typography>*/}
    {/*            <Typography>*/}
    {/*              This is a media card. You can use this section to describe the content.*/}
    {/*            </Typography>*/}
    {/*          </CardContent>*/}
    {/*          <CardActions>*/}
    {/*            <Button size="small" color="primary">*/}
    {/*              View*/}
    {/*            </Button>*/}
    {/*            <Button size="small" color="primary">*/}
    {/*              Edit*/}
    {/*            </Button>*/}
    {/*          </CardActions>*/}
    {/*        </Card>*/}
    {/*      </Grid>*/}
    {/*    ))}*/}
    {/*  </Grid>*/}
    {/*</Container>*/}
  </Layout>
  )
}

export default IndexPage
