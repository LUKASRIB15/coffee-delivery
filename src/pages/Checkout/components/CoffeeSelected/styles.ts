import styled from "styled-components";

export const LayoutCoffeeSelected = styled.div`
    h3{
        font-family: 'baloo 2', sans-serif;
        font-size: 1.125rem;
        margin-bottom: 1rem;
    }

    main{
        width: 28rem;
        background-color: ${props=>props.theme["gray-200"]};
        padding: 2.5rem;
        border-radius: 6px 44px;
    }
`
export const ContentCoffeeSelected = styled.div`
    padding: 0.5rem 0.25rem 1.5rem 0.25rem; 
    display: flex;
    gap: 1.25rem;
    border-bottom: 1px solid ${props=>props.theme["gray-500"]};

    div:nth-child(2){
        margin-right: 0.5rem;
    }

    img{
        width: 4rem;
        height: 4rem;
    }

    &+&{
        margin-top: 1.5rem;
    }
`
export const ContentButtonAmount = styled.div`
       background-color: ${props=>props.theme["gray-500"]};
       border-radius: 6px;
       display: flex;
       gap: 0.25rem;
       padding: 0.5rem;

       button{
            background-color: transparent;
            border: none;
            color:${props=>props.theme["purple-500"]};
            transition: color 0.2s;
            
            &:hover{
                color:${props=>props.theme["purple-800"]};
            }
        }
`

export const ContentCenter = styled.div`
    p{
        margin-bottom: 0.5rem;
    }
    div{
        display: flex;
        gap: 0.5rem;

        button{
            font-size: 0.75rem;
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            background-color: ${props=>props.theme["gray-500"]};
            border: none;
            border-radius: 6px;
        }
    }
`

export const DivButtonDelete = styled.div`
    button{
        padding: 0 0.5rem;
        gap: 0.25rem;
    }
`

export const ValueSelected = styled.div`
    font-weight: bold;
    width: 5.5rem;
    display: flex;
    flex-wrap: nowrap;

    p{
        display: flex;
        flex-wrap: nowrap;
    }
`

export const LayoutTotal = styled.div`
    margin-top: 1.5rem;
    div{
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.75rem;
        font-size: 0.875rem;

        &:nth-child(3){
            margin-bottom: 1.5rem;
            font-size: 1.2rem;
            font-weight: bold;
        }
    }
`

export const ButtonRequestAccept = styled.button`
    width: 100%;
    padding: 0.75rem 0.5rem;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.875rem;
    border: none;
    background-color: ${props=>props.theme["yellow-600"]};
    color: ${props=>props.theme["white"]};
    border-radius: 6px;

    transition: background-color 0.2s;

    &:not(:disabled):hover{
        background-color: ${props=>props.theme["yellow-900"]};
    }

    &:disabled{
        opacity: 0.9;
        cursor: not-allowed;
    }
`