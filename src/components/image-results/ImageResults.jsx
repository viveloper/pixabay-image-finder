import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { GridList, GridListTile, GridListTileBar, IconButton, makeStyles } from '@material-ui/core'
import { ZoomIn } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

const useStyles = makeStyles(theme => ({
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}))

const ImageResults = props => {

  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const handleClickOpen = img => {
    setOpen(true);
    setCurrentImg(img);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { images } = props
  console.log(images);
  const classes = useStyles();

  let imageListContent

  if (images) {
    imageListContent = (
      <GridList cols={3}>
        {
          images.map(img => (
            <GridListTile key={img.id} >
              <img src={img.webformatURL} alt="" />
              <GridListTileBar
                title={img.tags}
                subtitle={<span>by: <strong>{img.user}</strong></span>}
                actionIcon={
                  <IconButton aria-label={`info about ${img.tag}`} className={classes.icon} onClick={() => { handleClickOpen(img.largeImageURL) }}>
                    <ZoomIn />
                  </IconButton>
                }
              />
            </GridListTile>
          ))
        }
      </GridList>
    )
  }
  else {
    imageListContent = null
  }

  return (
    <div>
      {imageListContent}
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <img src={currentImg} alt="" style={{ width: '100%' }} />
          <DialogActions>
            <Button onClick={handleClose} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
}

export default ImageResults