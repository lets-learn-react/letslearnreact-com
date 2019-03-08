import React from 'react'
import CardContainer from './CardContainer'
import AlbumContent from './AlbumContent'

function MainComponent (props) {
  const { classes } = props
  const { cards } = props

  return (
    <main>
      <AlbumContent classes={classes} />
      <CardContainer classes={classes} cards={cards} />
    </main>
  )
}

export default MainComponent
