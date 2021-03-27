import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from "react-redux" // read in the internet
import WithRestoService from "../hoc" // Отримуєм дані із сервера
<<<<<<< HEAD
import {menuLoaded,menuRequested,addedToCard} from "../../actions"
=======
import {menuLoaded} from "../../actions"
>>>>>>> 8c593d1d6a6039a030f6c3bc3219de8872bd14a6
import Spinner from "../spinner"

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
<<<<<<< HEAD
        this.props.menuRequested()
=======
>>>>>>> 8c593d1d6a6039a030f6c3bc3219de8872bd14a6
        //  Оримуєм дані із серверу
        const {RestoService} = this.props
        RestoService.getMenuItems()
        .then((result) => {
            this.props.menuLoaded(result)
        })
    }

    render() {
<<<<<<< HEAD
        const {menuItems,loading,addedToCard} = this.props 
=======
        const {menuItems,loading} = this.props 
>>>>>>> 8c593d1d6a6039a030f6c3bc3219de8872bd14a6

        if(loading){
            return <Spinner/>
        }

        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
<<<<<<< HEAD
                     return <MenuListItem 
                                key = {menuItem.id} 
                                menuItem = {menuItem}
                                onAddToCard = {() => addedToCard(menuItem.id)}
                                />
=======
                     return <MenuListItem key = {menuItem.id} menuItem = {menuItem}/>
>>>>>>> 8c593d1d6a6039a030f6c3bc3219de8872bd14a6
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems:state.menu,
        loading:state.loading
    }
} 

const mapDispatchToProps = {
<<<<<<< HEAD
    // Сложна 
    menuLoaded,
    menuRequested,
    addedToCard
=======
    // Сложна
    menuLoaded
>>>>>>> 8c593d1d6a6039a030f6c3bc3219de8872bd14a6
}

export default WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(MenuList)); // connect зв'язує Menulist & Redux