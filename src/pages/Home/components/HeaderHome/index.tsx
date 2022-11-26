import imageCoffe from '../../../../assets/ImageCoffee.png'
import { LayoutHeaderHome, TextHome, SubtitleHome, TitleHome, MainHome, BackgroundIcon } from './styles'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function HeaderHome(){
    return(
        <LayoutHeaderHome>
            <TextHome>
                <TitleHome>Encontre o café perfeito<br/> para qualquer hora do dia</TitleHome>
                <SubtitleHome>Com o Coffee Delivery você recebe seu café onde estiver, a <br/> qualquer hora</SubtitleHome>
                <MainHome>
                    <div>
                        <p>
                            <BackgroundIcon useColor='yellowDark'>
                                <ShoppingCart weight="fill" color="#ffffff"/>
                            </BackgroundIcon>
                                Compra simples e segura
                        </p>
                        <p>
                            <BackgroundIcon useColor='yellowLight'>
                                <Timer weight="fill" color="#ffffff"/>
                            </BackgroundIcon>
                            Entrega rápida e rastreada
                        </p>
                    </div>
                    <div>
                        <p>
                            <BackgroundIcon useColor='brown'>
                                <Package weight="fill" color="#ffffff"/>
                            </BackgroundIcon>
                            Embalagem mantém o café intacto
                        </p>
                        <p>
                            <BackgroundIcon useColor='purple'>
                                <Coffee weight="fill" color="#ffffff"/>
                            </BackgroundIcon> 
                            O café chega fresquinho até você
                        </p>
                    </div>
                </MainHome>
            </TextHome>
            <div>
                <img src={imageCoffe}/>
            </div>
        </LayoutHeaderHome>
    )
}