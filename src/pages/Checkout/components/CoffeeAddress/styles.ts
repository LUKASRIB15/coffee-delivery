import styled from 'styled-components'

export const LayoutAddress = styled.div`
    background-color: ${props=>props.theme["gray-200"]};
    border-radius: 6px;
    padding: 2.5rem;
    width: 40rem;
    margin-bottom: 0.75rem;

    header{
        display: flex;
        gap: 0.5rem;
        margin-bottom: 2rem;

        span{
            font-size: 0.85rem;
            color: ${props=>props.theme["brown-300"]};
        }
    }
    
`

export const LayoutForm = styled.form`
    display: flex;
    flex-direction: column;
    input{
        background-color: ${props=>props.theme["gray-300"]};
        border-radius: 4px;
        padding: 0.75rem;
        border: none;
    }

    input:focus{
        outline: 1px solid ${props=>props.theme["yellow-900"]};
    }

    div{
        display: flex;
        gap: 0.75rem;

        &:last-child{
            margin-bottom: 0;
        }
    }
`

export const LayoutCEP = styled.div`
    width: 19.5%;
    margin-bottom: 1rem;
    color: ${props=>props.theme["brown-300"]};
`

export const LayoutInputStreet= styled.div`
    margin-bottom: 1rem;
    color: ${props=>props.theme["brown-300"]};
    input{
        flex:1;
    }
`

export const LayoutInputNumber = styled.div`
    margin-bottom: 1rem;
    color: ${props=>props.theme["brown-300"]};
    input:nth-child(2){
        flex: 1;
    }
`

export const LayoutInputCity = styled.div`
    color: ${props=>props.theme["brown-300"]};
    input:nth-child(3){
        max-width: 10%;
    }

    input:nth-child(2){
        flex:1;
    }
`
