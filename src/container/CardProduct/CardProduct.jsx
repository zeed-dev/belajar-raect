import React, { Component } from 'react';
import "../Product/Product.css";

class CardProduct extends Component{
    state = {
        order: 4,
    }

    handlerCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlerMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handlerCounterChange(this.state.order);
            });
        }
    }

    handlerPlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handlerCounterChange(this.state.order);
        });
    }
    
    render(){
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://i.ytimg.com/vi/_EatT18zjmw/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCgCAXixMayGY3yYoH01mVYAlBvDg" alt=""/>
                </div>
                <p className="product-title">Daging Ayam</p>
                <p className="product-price">Rp 4.000</p>
                <div className="counter">
                    <button onClick={this.handlerMinus} className="minus">-</button>
                    <input className="text-count" type="text" value={this.state.order}/>
                    <button onClick={this.handlerPlus} className="plus">+</button>
                </div>
            </div>
        );
    }
}

export default CardProduct;