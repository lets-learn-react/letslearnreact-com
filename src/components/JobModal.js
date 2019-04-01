import React from 'react'
import JobModalFields from './JobModalFields'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';



class JobModal extends React.Component {

    close(e) {
        e.preventDefault()

        if (this.props.onClose) {
            this.props.onClose()
        }
    }

    render() {
        if (this.props.isOpen === false)
            return null

        let modalStyle = {
            width: '500px',
            height: '500px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-250px',
            marginLeft: '-250px',
            zIndex: 9999,
            background: 'white'
        }

        let backdropStyle = {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0px',
            left: '0px',
            zIndex: '9998',
            background: 'rgba(0, 0, 0, 0.3)'
        }

        return (
            <div>
                <div style={modalStyle}>
                    <IconButton color="secondary" aria-label="Add an alarm" style={{ float: "right" }} onClick={e => this.close(e)}>
                        <Icon>clear</Icon>
                    </IconButton>
                    <JobModalFields></JobModalFields>
                </div>
                <div style={backdropStyle} onClick={e => this.close(e)} />
            </div>
        )
    }


}


export default JobModal;