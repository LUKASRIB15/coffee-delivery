import { AddPayment, ButtonCart, CardCoffee, ListTypeCoffee, ContentCardCoffee, LayoutMainHome, ListCoffee, TypeCoffee } from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CoffeeDeliveryContext } from "../../../../Context/context";
import { NavLink } from "react-router-dom";

export function MainHome(){
    const {coffeeData, minusAmountCoffee, plusAmountCoffee} = useContext(CoffeeDeliveryContext)
    return(
        <LayoutMainHome>
            <h1>Nossos cafés</h1>
            <ListCoffee>
                {coffeeData.map((coffee)=>{
                    return(
                        <CardCoffee key={coffee.id}>
                        <img src={coffee.avatarUrl}/>
                        <ContentCardCoffee>
                            {coffee.type.length <= 1 ?
                                <TypeCoffee>
                                    {coffee.type}
                                </TypeCoffee>
                            :
                                
                                <ListTypeCoffee>
                                    {coffee.type.map(type=>{
                                        return (
                                            <TypeCoffee key={type}>
                                                {type}
                                            </TypeCoffee>
                                        )
                                    })}
                                </ListTypeCoffee>
                            }
                            <h2>{coffee.name}</h2>
                            <p>{coffee.information}</p>
                            <AddPayment>
                                <p><span>R$</span>{coffee.value.toFixed(2).toString().replace(".", ",")}</p>
                                <div>
                                    <button type="submit" onClick={()=>minusAmountCoffee(coffee.id)}><Minus/></button>
                                    <span>{coffee.amount}</span>
                                    <button type="submit" onClick={()=>plusAmountCoffee(coffee.id)}><Plus/></button>
                                </div>
                                <NavLink to="/checkout">
                                    <ButtonCart>
                                        <ShoppingCart size={22} weight="fill"/>
                                    </ButtonCart>
                                </NavLink>
                        </AddPayment>
                    </ContentCardCoffee>
                </CardCoffee>
                    )
                })}
            </ListCoffee>
        </LayoutMainHome>
    )
}