import React from 'react'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import CardComponent from './CardComponent'
import casual from 'casual-browserify'

var designations = ['Junior Software Engineer', 'Manager', 'Assistant', 'Secratory', 'Human Resource', 'Middle Manager', 'Officer', 'Frontend Developer', 'Backend Developer', 'Operator', 'Tester', 'Designer']

casual.define('jobModalFields', function () {
  return {
    designation: casual.random_element(designations),
    location: casual.city,
    companyName: casual.last_name,
    dayAdded: casual.integer(1, 365),
    shiftType: casual.random_element(['FullTime', 'PartTime']),
    descripton: casual.description,
    catchPhrase: casual.catch_phrase

  }
})

export default ({ cards, classes }) => (
  <div className={classNames(classes.layout, classes.cardGrid)}>
    <Grid container spacing={40}>
      {cards.map((card, index) => (
        <CardComponent key={index} card={card} cards={cards} classes={classes} jobModalFields ={casual.jobModalFields} />
      ))}
    </Grid>
  </div>
)
