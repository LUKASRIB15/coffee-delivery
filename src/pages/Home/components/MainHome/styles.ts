import styled from 'styled-components'

export const LayoutMainHome = styled.div`
    padding: 2rem 10rem;

    h1{
        font-family: 'baloo 2', sans-serif;
        font-size: 2rem;
        font-weight: 800;
        margin-bottom: 3.375rem;
        color: ${props=>props.theme["brown-600"]};
    }


`

export const ListCoffee = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    overflow: hidden;
    padding: 2rem;
    box-sizing: initial;
    margin-left: -2rem;
    margin-top: -2rem;
`

export const CardCoffee = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 14rem;
    height: 19.375rem;
    background-color: ${props=>props.theme["gray-300"]};
    border-radius: 6px 36px;
    margin: 0 2rem 2.5rem 0;
    padding-right: 1.25rem;
    padding-left: 1.25rem;

    transition: transform .5s ease;

    &:hover{
        -webkit-transform: scale(1.1);
        transform: scale(1.12);
    }
        

    img{
        width: 7.5rem;
        height: 7.5rem;
        margin-top: -1rem;
        position: absolute;
    }

`

export const ContentCardCoffee = styled.div`  
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7rem;

    h2{
        font-size: 1.20rem;
        margin-bottom: 0.5rem;
        font-family: 'Baloo 2', sans-serif;
    }
    
    p{
        text-align: center;
        font-size: 0.75rem;
        color:${props=>props.theme["brown-100"]};
    }
`

export const TypeCoffee = styled.div`
        text-align: center;
        font-weight: bold;
        color: ${props=>props.theme["yellow-900"]};
        text-transform: uppercase;
        font-size: 0.75rem;
        border-radius: 100px;
        padding: 0.25rem 0.5rem;
        margin-bottom: 1rem;
        background-color: ${props=>props.theme["yellow-100"]};
`
export const AddPayment = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    p{
        font-size: 1.5rem;
        font-family: 'baloo 2', sans-serif;
        margin-right: 0.4rem;
        color: ${props=>props.theme["brown-600"]};

        span{
            font-size: 0.75rem;
            font-family: 'Roboto', sans-serif;
        }
    }
    div{
       background-color: ${props=>props.theme["gray-500"]};
       border-radius: 6px;
       padding: 0.5rem;
       display: flex;
       gap: 0.25rem;

       button{
            background-color: transparent;
            border: none;
            color:${props=>props.theme["purple-500"]};
            transition: color 0.2s;
            
            &:hover{
                color:${props=>props.theme["purple-800"]};
            }
        }

    }
`

export const ButtonCart = styled.button`
    background-color: ${props=>props.theme["purple-800"]};
    border: none;
    display: flex;
    color: ${props=>props.theme["white-900"]};
    border-radius: 6px;
    padding: 0.4rem;
    transition: background-color 0.2s;

    &:hover{
        background-color: ${props=>props.theme["purple-500"]};
    }
`

export const ListTypeCoffee = styled.div`
    display: flex;
    gap: 0.25rem;
`