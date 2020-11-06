import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import Img from "gatsby-image"
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";


const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: `2px solid ${theme.palette.primary.light}`,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.up("sm")]: {
      width: "60vw",
      height: "60vh",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "calc(100% - 44px)",
    },
    position: "relative"
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
    display: "flex",
    alignItems: "center"
  },
  closeContainer: {
    position: "absolute",
    right: "20px",
    zIndex: 10000,
    color:theme.palette.primary.light,
    cursor:"pointer",
    "&:hover":{
      color:theme.palette.primary.dark
    }
  },
}))

export default function ModalImage({ setOpen, open }) {
  const classes = useStyles()

  const handleClose = () => {
    setOpen({ open: false, image: undefined })
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open.open}>
          <div className={classes.paper}>
            <span className={classes.closeContainer} onClick={() => setOpen(false)}><FontAwesomeIcon icon={faTimesCircle}/></span>
            <div className={classes.imageContainer}>
              {open.image && (
                open.image instanceof Object ? <Img style={{ flexGrow: 1 }} fluid={open.image}/> :
                  <img style={{ width: "100%" }} src={open.image}/>
              )}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}