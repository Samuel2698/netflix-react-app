import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <Main />
      <Row title='Populaires' fetchURL={requests.requestPopular}/>
      <Row title='Mieux classés' fetchURL={requests.requestTopRated}/>
      <Row title='Tendances' fetchURL={requests.requestTrending}/>
      <Row title='Derniers' fetchURL={requests.requestLatest}/>
      <Row title='Prochainement' fetchURL={requests.requestUpcoming}/>
    </>
  )
}

export default Home