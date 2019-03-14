import React from 'react'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import CardComponent from './CardComponent'

export default (props) => {
  const { cards } = props
  const { classes } = props

  return (
    <div className={classNames(classes.layout, classes.cardGrid)}>
      <Grid container spacing={40}>
        {cards.map(card => (
          <CardComponent card={card} cards={props.cards} classes={classes} />
        ))}
      </Grid>
    </div>
  )
}
