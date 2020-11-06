import React, {useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import CardContent from "@material-ui/core/CardContent"
import Card from "@material-ui/core/Card"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import add from "../images/add-dashboard.gif"
import edit from "../images/edit-dashboard.gif"
import archives from "../images/archives.gif"
import ModalImage from "../components/modalImage"


const useStyles = makeStyles((theme) => ({
  subHeader: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  subHeaderButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: theme.palette.primary.dark
  },
  divCardGrid: {
    backgroundColor: theme.palette.primary.dark
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
  },
  cardImg: {
    maxHeight: "250px",
    width: "100%"
  },
  preFooterButtons: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  preFooter: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 4)
  }
}))

const IndexPage = () => {
  const classes = useStyles()
  const [open, setOpen] = useState({open: false, image: undefined});
  const images = useStaticQuery(graphql`
    query {
          multiple: file(relativePath: { eq: "multiple.png" }) {
            childImageSharp {
              fluid(maxWidth: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          
          board: file(relativePath: { eq: "board.png" }) {
            childImageSharp {
              fluid(maxWidth: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          
          switch: file(relativePath: { eq: "switch.png" }) {
            childImageSharp {
              fluid(maxWidth: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
 `)

  const cards = [
    {
      title: "Gestion multiple d'aquarium",
      content: "L'application permet de manager plusieurs aquarium à partir du même compte",
      image: images.multiple.childImageSharp.fluid,
      imageTitle: "Gestion multiple"
    },
    {
      title: "Tableau de bord",
      content: "Un tableau de bord affichant le dernier relevé et l’augmentation ou diminution par rapport avant-dernier relever",
      image: images.board.childImageSharp.fluid,
      imageTitle: "imageTitle1"
    },
    {
      title: "Accès rapide aux autres aquariums",
      content: "Depuis le menu en haut à droite vous pouvez rapidement accèder au tableau de bord de vos autres aquariums",
      image: images.switch.childImageSharp.fluid,
      imageTitle: "imageTitle1"
    },
    {
      title: "Ajout rapide d'un paramètre",
      content: "Depuis le dashboard vous pourrez rapidement ajouter la dernière mesure effectuée, vous pourrez y associer la date et l'heure",
      image: add,
      imageTitle: "imageTitle1"
    },
    {
      title: "Accès aux anciennes valeurs",
      content: "Un historique des valeurs est accessible depuis le dashboard, vous pourrez en supprimer ou les éditer en cas d'erreurs de saisie",
      image: edit,
      imageTitle: "imageTitle1"
    },
    {
      title: "Graphiques",
      content: "Grâce à cette fonctionnalité, vous aurez une évolution visuelle de vos paramètres en un click, de plus vous pouvez filtrer les résultats entre deux dates",
      image: archives,
      imageTitle: "imageTitle1"
    }
  ]
  return (
  <Layout>
    <SEO title="Accueil"/>
    <div className={classes.subHeader}>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Application gratuite & ouverte pour la gestion des aquariums récifal
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Le suivi des paramètres de l'eau est un élément clef pour une la bonne santé de votre bac
        </Typography>
        <div className={classes.subHeaderButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary" href="https://app.reef-supervisor.fr">
                Application
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" href="https://github.com/leoBergerot">
                Code source
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
    <div className={classes.divCardGrid}>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((value, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <div style={{ "padding": "16px", "cursor":"pointer" }} onClick={() => setOpen({open:true, image: value.image} )}>
                  {value.image instanceof Object ? <Img fluid={value.image} alt={value.imageTitle}/> :
                    <img className={classes.cardImg} src={value.image} alt={value.imageTitle}/>}
                </div>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {value.title}
                  </Typography>
                  <Typography>
                    {value.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
    <div className={classes.preFooter}>
      <Container maxWidth="md">
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Application web Compatible iOS et Android, vos paramètres sont à porter de vous !
        </Typography>
        <div className={classes.preFooterButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="outlined" color="primary" href="https://app.reef-supervisor.fr">
                Je l'adopte
              </Button>
            </Grid>
          </Grid>
        </div>
        <Typography variant="overline" component="h1" align="center" paragraph>
          Manage easily your tank
        </Typography>
      </Container>
    </div>
    <ModalImage open={open} setOpen={setOpen}/>
  </Layout>
  )
}

export default IndexPage
