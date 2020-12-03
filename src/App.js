import React, { useState } from 'react';
import FriesPhoto from './images/fastfood_6.png';
import HamburgerPhoto from './images/fastfood_12.png';

const Product = ({ price, incrementTotalPrice, decrementTotalPrice, imageSrc }) => {
    const [productsQuantity, setProductsQuantity] = useState(0);

    const handleAdd = () => {
        setProductsQuantity((prevQuantity) => prevQuantity + 1);
        incrementTotalPrice(price);
    };

    const handleRemove = () => {
        setProductsQuantity((prevQuantity) => prevQuantity - 1);
        decrementTotalPrice(price);
    };

    return (
        <div className="ProductBox">
            <span className="ProductInfoBox QuantityBox">{productsQuantity}</span>
            <img src={imageSrc} />
            <div id="quantityControllerContainer">
                <button onClick={() => handleAdd()} className="AddElementBox ProductInfoBox">
                    +
                </button>
                {productsQuantity > 0 && (
                    <button onClick={() => handleRemove()} className="DecrementBox ProductInfoBox">
                        -
                    </button>
                )}
            </div>
        </div>
    );
};

const Heading = () => {
    return (
        <div id="heading">
            <h1>Add elements to your basket</h1>
            <BurgerBars />
        </div>
    );
};
const BurgerBars = () => {
    return (
        <div id="burgerBars">
            <span className="burgerBar" />
            <span className="burgerBar brownBurger" />
            <span className="burgerBar" />
        </div>
    );
};

const App = () => {
    const [totalPrice, setTotalPrice] = useState(0);

    const incrementTotalPrice = (price) => {
        const countedPrice = Math.round((totalPrice + price) * 100 + Number.EPSILON) / 100;
        setTotalPrice(countedPrice);
    };

    const decrementTotalPrice = (price) => {
        const countedPrice = Math.round((totalPrice - price) * 100 + Number.EPSILON) / 100;
        setTotalPrice(countedPrice);
    };

    return (
        <main>
            <Heading />
            <div id="ProductsContainer">
                <Product
                    imageSrc={FriesPhoto}
                    price={4.99}
                    incrementTotalPrice={incrementTotalPrice}
                    decrementTotalPrice={decrementTotalPrice}
                />
                <Product
                    imageSrc={HamburgerPhoto}
                    price={5.99}
                    incrementTotalPrice={incrementTotalPrice}
                    decrementTotalPrice={decrementTotalPrice}
                />
                <h2 id="totalResult">{totalPrice}</h2>
            </div>
        </main>
    );
};

export default App;
