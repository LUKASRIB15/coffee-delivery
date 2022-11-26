import styled from 'styled-components'

export const LayoutPayment = styled.div`
    background-color: ${props=>props.theme["gray-200"]};
    border-radius: 6px;
    padding: 2.5rem;
    width: 40rem;

    header{
        display: flex;
        gap: 0.5rem;
        margin-bottom: 2rem;

        span{
            font-size: 0.85rem;
            color: ${props=>props.theme["brown-300"]};
        }
    }

    main{
        display: flex;
        gap: 0.75rem;

        button{
            display: flex;
            align-items: center;
            gap: 0.75rem;
            background-color: ${props=>props.theme["gray-500"]};
            border: none;
            padding: 1rem;
            flex: 1;
            text-transform: uppercase;
            font-size: 0.75rem;
            border-radius: 6px;
            cursor: pointer;
        }

        button:focus{
            outline: 1px solid ${props=>props.theme["purple-500"]};
        }
    }
`