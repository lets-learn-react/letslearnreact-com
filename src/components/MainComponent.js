import React from 'react'
import CardContainer from './CardContainer'
import AlbumContent from './AlbumContent'

export default ({ classes, cards }) => (
  <main>
    <AlbumContent classes={classes} />
    <CardContainer classes={classes} cards={cards} />
  </main>
)
