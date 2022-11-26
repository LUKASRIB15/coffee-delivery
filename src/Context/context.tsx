import { createContext, ReactNode, useEffect, useReducer, useState } from 'react';
import Coffee1 from '../assets/Coffee.svg'
import Coffee2 from '../assets/Coffee2.svg'
import Coffee3 from '../assets/Coffee3.svg'
import Coffee4 from '../assets/Coffee4.svg'
import Coffee5 from '../assets/Coffee5.svg' 
import Coffee6 from '../assets/Coffee6.svg'
import Coffee7 from '../assets/Coffee7.svg'
import Coffee8 from '../assets/Coffee8.svg'

interface CoffeeDeliveryProps{
    id: number;
    avatarUrl: string;
    type: string[];
    name: string;
    information: string;
    value: number;
    amount: number;
}


interface CoffeeDeliveryContextProviderProps{
    children: ReactNode;
}

interface CoffeeDeliveryContextProps{
    coffeeData: CoffeeDeliveryProps[];
    plusAmountCoffee: (id: number)=> void;
    minusAmountCoffee: (id:number)=>void;
    deleteCoffeeSelected: (id:number)=>void;
    returnAmountCoffeeToZero: ()=>void;
}

export const CoffeeDeliveryContext = createContext({} as CoffeeDeliveryContextProps)

export function CoffeeDeliveryContextProvider({children}:CoffeeDeliveryContextProviderProps){
    const [coffeeData, setCoffeeData] = useState<CoffeeDeliveryProps[]>([{
        id: 1,
        avatarUrl: `${Coffee1}`,
        type: ['tradicional'],
        name: 'Expresso Tradicional',
        information: 'O tradicional café feito com água quente e grãos moídos',
        value: 9.90,
        amount: 0,
    },
    {
        id: 2,
        avatarUrl: `${Coffee2}`,
        type: ['tradicional'],
        name: 'Expresso Americano',
        information: 'Expresso diluído, menos intenso que o tradicional',
        value: 9.90,
        amount:0,
    },
    {
        id: 3,
        avatarUrl: `${Coffee3}`,
        type: ['tradicional'],
        name: 'Expresso Cremoso',
        information: 'Café expresso tradicional com espuma cremosa',
        value: 9.90,
        amount:0,
    },
    {
        id: 4,
        avatarUrl: `${Coffee4}`,
        type: ['tradicional', 'gelado'],
        name: 'Expresso Gelado',
        information: 'Bebida preparada com café expresso e cubos de gelo',
        value: 9.90,
        amount:0,
    },
    {
        id: 5,
        avatarUrl: `${Coffee5}`,
        type: ['tradicional', 'com leite'],
        name: 'Café com leite',
        information: 'Meio a meio de expresso tradicional com leite vaporizado',
        value: 9.90,
        amount:0,
    },
    {
        id: 6,
        avatarUrl: `${Coffee6}`,
        type: ['tradicional', 'com leite'],
        name: 'Latte',
        information: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        value: 9.90,
        amount:0,
    },
    {
        id: 7,
        avatarUrl: `${Coffee7}`,
        type: ['tradicional', 'com leite'],
        name: 'Capuccino',
        information: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        value:9.90,
        amount:0,
    },
    {
        id: 8,
        avatarUrl: `${Coffee8}`,
        type: ['tradicional', 'com leite'],
        name: 'Macchiato',
        information: 'Café expresso misturado com um pouco de leite quente e espuma',
        value: 9.90,
        amount:0,
    }
    ])
    function plusAmountCoffee(id:number){
        setCoffeeData(coffeeData.map(coffee=>{
            if(coffee.id == id){
                return {...coffee, amount: coffee.amount + 1}
            }else{
                return coffee
            }
        }))
    }

    function minusAmountCoffee(id:number){
        setCoffeeData(coffeeData.map(coffee=>{
            if(coffee.id == id && coffee.amount>0){
                return {...coffee, amount: coffee.amount - 1}
            }else{
                return coffee
            }
        }))
    }

    function returnAmountCoffeeToZero(){
        setCoffeeData(coffeeData.map(coffee=>{
            return {...coffee, amount: 0}
        }))
    }

    function deleteCoffeeSelected(id:number){
        setCoffeeData(coffeeData.map(coffee=>{
            if(coffee.id == id){
                return {...coffee, amount: 0}
            }else{
                return coffee
            }
        }))
    }

    useEffect(()=>{
        const stateJSON = JSON.stringify(coffeeData)

        localStorage.setItem('@coffee-delivery:coffees-state-1.0.0', stateJSON)
    }, [coffeeData])


    return(
        <CoffeeDeliveryContext.Provider value={{
            coffeeData,
            plusAmountCoffee,
            minusAmountCoffee,
            deleteCoffeeSelected,
            returnAmountCoffeeToZero,
        }}>
            {children}
        </CoffeeDeliveryContext.Provider>
    )
}




