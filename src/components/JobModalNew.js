import React from 'react'
import Modal from '@material-ui/core/Modal'
import { withStyles } from '@material-ui/core/styles'
import JobModalFields from './JobModalFields'

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none'
  }
})

const JobModalNew = ({ classes, isOpen, onClose, jobModalFields }) => (
  <Modal
    aria-labelledby='Job description'
    aria-describedby='This is Job Modal'
    open={isOpen}
    onClose={onClose}
  >
    <JobModalFields className={classes.paper} jobModalFields={jobModalFields} />
  </Modal>
)

const SimpleModalWrapped = withStyles(styles)(JobModalNew)

export default SimpleModalWrapped
