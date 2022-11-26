import styled from 'styled-components'
import { ThemeType } from '../../@types/styles'

export const LayoutHeader = styled.header<{theme: ThemeType}>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2rem 10rem; 
`

export const LayoutMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    button{
        background-color: ${props=>props.theme["yellow-100"]};
        color: ${props=>props.theme["yellow-900"]};
        border-radius: 6px;
        display: flex;
        border: none;
        padding: 0.5rem;
        box-sizing: initial;

        div{
            background-color:${props=>props.theme["yellow-900"]};
            color: ${props=>props.theme["white-900"]};
            position: absolute;
            margin-top: -1.10rem;
            margin-left: 1.23rem;
            font-weight: bold;
            font-size: 0.75rem;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1.25rem;
            height: 1.25rem;
            border-radius: 1000px;
        }
    }
`

export const LayoutLocation = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background-color: ${props=>props.theme["purple-100"]};
    color: ${props=>props.theme["purple-800"]};
    padding: 0.5rem;
    border-radius: 6px;
`