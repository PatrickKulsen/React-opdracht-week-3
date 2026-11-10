import './App.css'
import Button from "./components/Button.jsx";

function App() {
  function clickButton1() {
    console.log('to the collection');
  }

  function clickButton2() {
    console.log('shop all bags');
  }
  function clickButton3() {
    console.log('to the collection');
  }


  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
          <Button buttonText="to the collection" disableButton={false}/>
          <Button buttonText="shop all bags" disableButton={false}/>
          <Button buttonText="pre-order" disableButton={true}/>
        </nav>
      </>
  )
}

export default App
