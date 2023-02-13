import { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Cointainer from './components/Cointainer'
import Coin from './models/Coin'
import './App.css'

function App() {

  const [coins, setCoins] = useState([])
  const [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    fetch('https://ten-coins.herokuapp.com/coins').then((res) => {
    if (res.status != 200) {
      console.log('We couldnt get the data, sorry')
    }

      console.log('STATUS 200')

      return res.json()

    }).then((json) => {
      let coinsModel = []
      json.forEach((obj) => {
        const coin = new Coin(obj)
        coinsModel.push(coin)
      })

      setCoins(coinsModel)
      setIsLoading(false)
    })
  }, [])

  useEffect(() => {
    console.log('UPDATE OF COINS GOING ON')
    console.log(coins)
  }, [coins])

  return (
    <div className="App">
      { isLoading && <Loading />}
      <div className="coins-grid">
      { coins && coins.map((coin) => {
          return <Cointainer name={coin.name} sign={coin.sign} price={coin.price} image={coin.image}  />
      })}
      </div>
    </div>
  )
}

export default App
