import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title='Populaires' fetchURL={requests.requestPopular}/>
      <Row rowID="2" title='Mieux classés' fetchURL={requests.requestTopRated}/>
      <Row rowID="3" title='Tendances' fetchURL={requests.requestTrending}/>
      <Row rowID="4" title='Prochainement' fetchURL={requests.requestUpcoming}/>
    </>
  )
}

export default Home