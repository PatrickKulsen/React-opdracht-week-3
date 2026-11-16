import './App.css'
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";

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
        <main>
            <Product redLabel="Best seller" image="./src/assets/bag_1.png" bagName="The handy bag" bagPrice={400}/>
            <Product redLabel="Best seller" image="./src/assets/bag_2.png" bagName="The stylish bag" bagPrice={250}/>
            <Product redLabel="New collection" image="./src/assets/bag_3.png" bagName="The simple bag" bagPrice={300}/>
            <Product redLabel="New collection" image="./src/assets/bag_4.png" bagName="The trendy bag" bagPrice={150}/>
        </main>
        <footer>

            <Tile tileType="" image="" tileTitle="THE BRAND" tileText="Lorum ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt." />
            <Tile tileType="photo" image="./src/assets/brand.png" tileTitle="" tileText="" />
            <Tile tileType="photo" image="./src/assets/our_story.png" tileTitle="" tileText="" />
            <Tile tileType="" image="" tileTitle="OUR STORY" tileText="Lorum ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt." />
        </footer>
      </>
  )
}

export default App
