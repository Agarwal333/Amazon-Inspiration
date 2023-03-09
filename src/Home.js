import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(){
    return(
        <div className="home">
            <div className="homeContainer">
                <img className="homeImage" src="https://m.media-amazon.com/images/I/710AJP6tPrL._SX3000_.jpg" alt="background image" />
                <div className="homeRow">
                    <Product id={"1"} title={"Samsung Galaxy Note 20 Ultra 5G Factory Unlocked Android Cell Phone 128GB US "}image={"./images/phone.jpg"} price={22} rating={5}/>
                    <Product id={"2"} title={"Coleman Polyester Darwin 3 Dome Tent 3 Man Camping Tent with Fibreglass Poles, 3000Mm (3 Person, Green)"}image={"./images/tent.jpg"} price={94} rating={4}/>
                </div>
                <div className="homeRow">
                    <Product id={"3"} title={"AmazonBasics 13mm Extra Thick Yoga and Exercise Mat with Carrying Strap"}image={"./images/mat.jpg"} price={16} rating={5}/>
                    <Product id={"4"} title={"Hero Sprint Men's Frame 18 Inch Santiago 26T SS Hybrid City Bike, White (SSAN26WHWH01HM)"}image={"./images/cycle.jpg"} price={10} rating={5}/>
                    <Product id={"5"} title={"Ugaoo Good Luck Money Plant Variegated with Self Watering Pot "}image={"./images/plant.jpg"} price={5} rating={5}/>
                </div>
                <div className="homeRow">
                <Product id={"6"} title={"Samsung 27 inch (68.6 cm) Smart Monitor with Netflix, YouTube, Prime Video and Apple TV Streaming (LS27AM501NWXXL, White) "}image={"./images/tv.jpg"} price={2500} rating={5}/>
                </div>
            </div>
        </div>
    )
}
export default Home;