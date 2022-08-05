import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Data from "../data"

function App() {


 const myFriends = Data.map((friend) => (
   <Card
     key={friend.id}
     item={friend}
   />
   
 )) 

  return (
     <div>
      <Header />
      <div className='main'>
        {myFriends}
      </div>
      <Footer />
     </div>
  )
}

export default App
