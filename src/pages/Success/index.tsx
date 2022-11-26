import successImage from "../../assets/Illustration.svg"
import { LayoutInformation, LayoutSuccess, LayoutImage, DivInfo, DivIcon } from "./styles"
import { MapPin, CurrencyDollar, Timer} from "phosphor-react"

export function Success(){
    setTimeout(()=>{
        window.location.href = "http://127.0.0.1:5173/"
    }, 5000)
    return(
        <LayoutSuccess>
            <div>
                <h1>Uhu! Pedido confirmado</h1>
                <span>Agora é só aguardar que logo o café chegará até você</span>
                <LayoutInformation>
                    <DivInfo>
                        <DivIcon useColor="purple">
                            <MapPin weight="fill"/>
                        </DivIcon>
                        <div>
                            <p>Entrega em <strong>Rua Dom Manuel, 102</strong></p>
                            <p>Centro - Aracati,CE</p>
                        </div>
                    </DivInfo>
                    <DivInfo>
                        <DivIcon useColor="yellowLight">
                            <Timer weight="fill"/>
                        </DivIcon>
                        <div>
                            <p>Previsão de entrega</p>
                            <strong>20 min - 30 min</strong>
                        </div>
                    </DivInfo>
                    <DivInfo>
                        <DivIcon useColor="yellowDark">
                            <CurrencyDollar weight="fill"/>
                        </DivIcon>
                        <div>
                            <p>Pagamento na entrega</p>
                            <strong>Cartão de crédito</strong>
                        </div>
                    </DivInfo>
                </LayoutInformation>
            </div>
            <LayoutImage>
                <img src={successImage}/>
            </LayoutImage>
        </LayoutSuccess>
    )
}