import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { LayoutHeader, LayoutMenu, LayoutLocation } from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeDeliveryContext } from '../../Context/context'


export function Header(){
    let count = 0;
    const {coffeeData} = useContext(CoffeeDeliveryContext)
    return(
        <LayoutHeader>
           <img src={logo}/>
           <LayoutMenu>
                <LayoutLocation>
                    <MapPin size={22} weight="fill" color="#8047F8"/>
                    Aracati,CE
                </LayoutLocation>
                <NavLink to="/checkout" title="Checkout">
                    <button 
                        type="button"
                    >
                    {
                        coffeeData.map(coffee=>{
                            if(coffee.amount>0){
                               count += coffee.amount;
                               return(
                                <div>{count}</div>
                               )                 
                            }
                        })
                    }
                    <ShoppingCart size={22} weight="fill" />
                </button></NavLink>
           </LayoutMenu>
        </LayoutHeader>
    )
}