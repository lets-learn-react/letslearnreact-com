import React from "react";
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import JobModalFields from './JobModalFields';

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
});

class JobModalNew extends React.Component {

    //call props on handleClose
    handleClose = (e) => {
        e.preventDefault();
        this.props.onClose();
    }

    render() {
        const { classes } = this.props;

        return (
            <Modal
                aria-labelledby="Job description"
                aria-describedby="This is Job Modal"
                open={this.props.isOpen}
                onClose={this.handleClose}
            >
                <JobModalFields className={classes.paper}></JobModalFields>
            </Modal>
        )
    }


}

const SimpleModalWrapped = withStyles(styles)(JobModalNew);

export default SimpleModalWrapped;