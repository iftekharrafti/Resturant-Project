import React, { Component}from 'react';
import MenuItems from './MenuItems';
import MenuDetails from './MenuDetails';
import Dishes from '../../data/dishes';

class Menu extends Component {

    state = {
        dishes : Dishes,
        selectedDish: null
    }

    onDishSelect = dish => {
        this.setState({
            selectedDish: dish
        })
    }

    render() {

        const menu = this.state.dishes.map((item) => {
            return (
                <MenuItems 
                dish = {item}
                DishSelect = {() => this.onDishSelect(item)}
                key={item.id}
            />
            )
        })

        let dishDetail = null;
        if(this.state.selectedDish != null) {
            dishDetail = <MenuDetails dish={this.state.selectedDish} />
        }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            {menu}
                        </div>
                        <div className="col-6">
                            {dishDetail}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;