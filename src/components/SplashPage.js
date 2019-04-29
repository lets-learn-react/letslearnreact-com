import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  card: {
    maxWidth: 345,
  },
  media: {    
    objectFit: 'contain',
  },
});

class SplashPage extends Component {
  constructor(props){
    super(props)
    this.projectsContainer = React.createRef();
    this.scrollToProjects = this.scrollToProjects.bind(this)
  }

  scrollToProjects() {
    this.projectsContainer.current.scrollIntoView({behavior: "smooth", block: "start"});
  }

  render () {
    const { classes, pages } = this.props;
    console.log(pages)
    return (
      <React.Fragment>
        <div className='splash-page'>
          <div className='splash-header'>
            <h1>Let's Learn React</h1>
          </div>
            <Button onClick={this.scrollToProjects} variant="contained" color="primary" className={classes.button}>
              View Projects
            </Button>
          <div>
          </div>
        </div>

        <div className='projects' ref={this.projectsContainer}>
          <Card className={classes.card}>
            <CardActionArea onClick={this.props.goTo.bind(this, pages.jobBoard)}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                className={classes.media}
                height="140"
                image='/JobBoard.jpg'
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Job Board
                </Typography>
                <Typography component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button disabled size="small" color="primary">
                Share
              </Button>
              <Button onClick={this.props.goTo.bind(this, pages.jobBoard)} size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>        
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(SplashPage)