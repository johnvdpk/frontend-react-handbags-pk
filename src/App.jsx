import './App.css'
import Button from "./assets/componenten/buttons/Button.jsx";
import Bag from "./assets/componenten/Bags/Bag.jsx";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";
import Card from "./assets/componenten/Tile/Tile.jsx";
import Tile from "./assets/componenten/Tile/Tile.jsx";

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
        <nav>
          <Button
              buttonType="button"
              buttonText="to the collection"
              buttonVariant="primary"
              //clickHandler={}
              />
          <Button
              buttonType="button"
              buttonText="shop all bags"
              buttonVariant="primary"
              //clickHandler={}
          />
          <Button
              buttonType="button"
              buttonText="pre-order"
              buttonVariant="primary"
              //clickHandler={}
          />
        </nav>

        <main>

            <Bag
            title="Best seller"
            image={bag1}
            name="The handy bag"
            price="400"
            />

            <Bag
                title="Best seller"
                image={bag2}
                name="The stylish bag"
                price="250"
            />

            <Bag
                title="New collection"
                image={bag3}
                name="The simple bag"
                price="300"
            />

            <Bag
                title="New collection"
                image={bag4}
                name="the trendy bag"
                price="400"
            />

        </main>
        <footer>
        <Tile>
            <h2>The Brand</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae mauris vel elit vestibulum feugiat. Sed semper, nunc a porta ullamcorper, augue odio tempus sem, eget ultrices augue felis non lorem. Nulla purus sem, tincidunt id tellus et, scelerisque pellentesque dolor. Fusce ac sagittis leo. Nullam mollis nisl sed nisl vehicula</p>
        </Tile>
        <Tile>
            <img src={brand} alt="brand" />
        </Tile>
        <Tile>
            <img src={ourStory} alt="brand" />
        </Tile>
        <Tile>
            <h2>The Brand</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae mauris vel elit vestibulum feugiat. Sed semper, nunc a porta ullamcorper, augue odio tempus sem, eget ultrices augue felis non lorem. Nulla purus sem, tincidunt id tellus et, scelerisque pellentesque dolor. Fusce ac sagittis leo. Nullam mollis nisl sed nisl vehicula</p>
        </Tile>




        </footer>

      </>
  )
}

export default App
