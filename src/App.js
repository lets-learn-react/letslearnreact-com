import React, { Component } from 'react'
// import Layout from './components/Layout'
import Album from './components/ManyComponentsInOne'
import SplashPage from './components/SplashPage'

const Pages = {
  splashPage: 'Splash Page',
  jobBoard: 'Job Board'
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      component: 'Splash Page'
    }
    this.goToComponent = this.goToComponent.bind(this)
  }
  goToComponent(component){
    this.setState({component})
    document.body.scrollIntoView();
  }
  render () {    
    switch (this.state.component) {
      case 'Splash Page':
        return <SplashPage goTo={this.goToComponent} pages={Pages} />        
      case 'Job Board':
        return <Album />        
      default:
        return (<h1>Page Not Found</h1>)
    }
  }
}

export default App
