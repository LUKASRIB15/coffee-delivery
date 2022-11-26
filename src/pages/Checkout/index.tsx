import { LayoutCheckout, LayoutRequest } from "./styles";
import { CoffeePayment } from "./components/CoffeePayment";
import { MapPinLine, Minus, Plus, Trash} from "phosphor-react";
import { LayoutAddress, LayoutCEP, LayoutForm, LayoutInputCity, LayoutInputNumber, LayoutInputStreet } from "../Checkout/components/CoffeeAddress/styles";
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form" 
import * as yup from 'yup'
import { LayoutCoffeeSelected,ContentButtonAmount,ButtonRequestAccept,ContentCenter,ContentCoffeeSelected,DivButtonDelete,LayoutTotal,ValueSelected } from "./components/CoffeeSelected/styles";
import { FormEvent, useContext } from "react";
import { CoffeeDeliveryContext } from "../../Context/context";
import { NavLink } from "react-router-dom";

const schema = yup.object().shape({
    cep: yup.string().min(8).max(8).required(),
    street: yup.string().required(),
    number: yup.string().required(),
    complement: yup.string(),
    district: yup.string().required(),
    city: yup.string().required(),
    uf: yup.string().min(2).max(2).required(),

})

interface schemaProps{
    cep: string;
    street: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    uf: string;
}

export function Checkout(){
    
    let totalItems = 0;
    const {coffeeData, plusAmountCoffee, returnAmountCoffeeToZero, minusAmountCoffee, deleteCoffeeSelected} = useContext(CoffeeDeliveryContext)

    const {register, watch, handleSubmit, formState:{errors}, reset}= useForm<schemaProps>({
        resolver: yupResolver(schema)
    })


    const verify = watch("uf")

    function AcceptAddress(data:schemaProps){
        console.log(data)
        reset()
    }

    return(
        <LayoutCheckout>
            <LayoutRequest>
                <h3>Complete seu pedido</h3>
                <LayoutAddress>
                <header>
                    <MapPinLine size={22} color="#c47f17"/>
                    <div>
                        <p>Endereço de Entrega</p>
                        <span>Informe o endereço onde deseja receber seu pedido</span>
                    </div>
                </header>
                <LayoutForm action="" onSubmit={handleSubmit(AcceptAddress)} id="formAddress">
                        <LayoutCEP>
                            <input
                                id="cep" 
                                type="text" 
                                placeholder="CEP"
                                {...register("cep",{required:true})}
                            />
                        </LayoutCEP>
                        <LayoutInputStreet>
                            <input
                                id="street" 
                                type="text" 
                                placeholder="Rua"
                                {...register("street", {required:true})}
                            />
                        </LayoutInputStreet>
                        <LayoutInputNumber>
                                <input
                                    id="number" 
                                    type="text" 
                                    placeholder="Número"
                                    {...register("number", {required:true})}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Complemento"
                                    {...register("complement", {required: false})}
                                />
                        </LayoutInputNumber>
                        <LayoutInputCity>
                            <input
                                id="district" 
                                type="text" 
                                placeholder="Bairro"
                                {...register("district", {required:true})}
                            />
                            <input
                                id="city" 
                                type="text" 
                                placeholder="Cidade"
                                {...register("city", {required:true})}
                            />
                            <input
                                id="uf" 
                                type="text" 
                                placeholder="UF"
                                {...register("uf", {required:true})}
                            />
                        </LayoutInputCity>
                </LayoutForm>
        </LayoutAddress>
                <CoffeePayment/>
            </LayoutRequest>
            <LayoutCoffeeSelected>
                <h3>Café selecionados</h3>
                <main>
                        {
                            coffeeData.map(coffee=>{
                                if(coffee.amount>0){
                                    totalItems = totalItems + (coffee.amount * coffee.value)
                                    return(
                                        <ContentCoffeeSelected key={coffee.id}>
                                            <div>
                                                <img src={coffee.avatarUrl}/>
                                            </div>
                                            <ContentCenter>
                                                <p>{coffee.name}</p>
                                                <div>
                                                    <ContentButtonAmount>
                                                        <button type="submit" onClick={()=>minusAmountCoffee(coffee.id)}><Minus/></button>
                                                        <span>{coffee.amount}</span>
                                                        <button type="submit" onClick={()=>plusAmountCoffee(coffee.id)}><Plus/></button>
                                                    </ContentButtonAmount>
                                                    <DivButtonDelete>
                                                        <button type="button" onClick={()=>deleteCoffeeSelected(coffee.id)}>
                                                            <Trash size={16} color="#8047f8"/>
                                                            Remover
                                                        </button>
                                                    </DivButtonDelete>
                                                </div>
                                            </ContentCenter>
                                            <ValueSelected>
                                                <p>R$ {(coffee.value * coffee.amount).toFixed(2).toString().replace(".", "," )}</p>
                                            </ValueSelected>
                                        </ContentCoffeeSelected>
                                    )
                                }
                            })
                        }
                    <LayoutTotal>
                        <div>
                            <p>Total de itens</p>
                            <p>R$ {totalItems.toFixed(2).toString().replace(".", ",")}</p>
                        </div>
                        <div>
                            {
                            totalItems != 0 ?
                            <>
                                <p>Entrega</p>
                                <p>R$ 3,50</p>
                            </>
                            :
                            <>
                                <p>Entrega</p>
                                <p>R$ 0,00</p>
                            </>
                            }
                        </div>
                        <div>
                            {
                                totalItems != 0 ?
                                <>
                                    <p>Total</p>
                                    <p>R$ {(totalItems + 3.50).toFixed(2).toString().replace(".", ",")}</p>
                                </>
                                :
                                <>
                                    <p>Total</p>
                                    <p>R$ {(totalItems + 0.00).toFixed(2).toString().replace(".", ",")}</p>
                                </>
                            }
                        </div>
                    </LayoutTotal>
                        <NavLink to="/checkout/success">
                        <ButtonRequestAccept 
                            disabled={!totalItems || !verify} 
                            type="submit"
                            form="formAddress"
                            onClick={returnAmountCoffeeToZero}
                        >
                            Confirmar pedido
                        </ButtonRequestAccept>
                        </NavLink>
                </main>
        </LayoutCoffeeSelected>
        </LayoutCheckout>
    )
}