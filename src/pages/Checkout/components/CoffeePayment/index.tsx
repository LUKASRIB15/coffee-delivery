import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { LayoutPayment } from "./styles";

export function CoffeePayment(){
    return(
        <LayoutPayment>
                <header>
                    <CurrencyDollar size={22} color="#8047f8"/>
                    <div>
                        <p>Pagamento</p>
                        <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                    </div>
                </header>
                <main>
                    <button>
                        <CreditCard color="#8047F8" size={16}/>
                        Cartão de crédito
                    </button>
                    <button>
                        <Bank color="#8047F8" size={16}/>
                        Cartão de débito
                    </button>
                    <button>
                        <Money color="#8047F8" size={16}/>
                        Dinheiro
                    </button>
                </main>
        </LayoutPayment>
    )
}