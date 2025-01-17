import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from "react-redux" // read in the internet
import WithRestoService from "../hoc" // Отримуєм дані із сервера
import {menuLoaded,menuRequested,addedToCard} from "../../actions"
import Spinner from "../spinner"

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        this.props.menuRequested()
        //  Отримуєм дані із серверу
        const {RestoService} = this.props
        RestoService.getMenuItems()
        .then((result) => {
            this.props.menuLoaded(result)
        })
    }

    render() {
        const {menuItems,loading,addedToCard} = this.props 

        if(loading){
            return <Spinner/>
        }

        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                     return <MenuListItem 
                                key = {menuItem.id} 
                                menuItem = {menuItem}
                                onAddToCard = {() => addedToCard(menuItem.id)}
                                />
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
    // Сложна 
    menuLoaded,
    menuRequested,
    addedToCard
}

export default WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(MenuList)); // connect зв'язує Menulist & Redux