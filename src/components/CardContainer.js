import React from 'react'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import CardComponent from './CardComponent'

export default ({ cards, classes }) => (
  <div className={classNames(classes.layout, classes.cardGrid)}>
    <Grid container spacing={40}>
      {cards.map((card, index) => (
        <CardComponent key={index} card={card} cards={cards} classes={classes} />
      ))}
    </Grid>
  </div>
)
