import React, { Component, Fragment } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import "./Product.css";

class Product extends Component{

    state={
        order: 4,
    }

    handlerCounterChange = (newValue) => {
        this.setState({
            order: newValue
        });
    }

    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://info.etanee.id/wp-content/uploads/2021/01/cropped-cropped-cropped-etanee-biru-1.png" alt="logo"/>
                    </div>
                    <div className="troley">
                        <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png" alt="troley"/>
                        <p className="count">{this.state.order}</p>
                    </div>
                </div>
                <CardProduct onCounterChange={ (value) => this.handlerCounterChange(value) }/>
            </Fragment>
        );
    }
}

export default Product;