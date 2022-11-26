import styled from "styled-components"

export const LayoutSuccess = styled.div`
    padding: 5rem 10rem;
    display: flex;
    gap: 6.375rem;
    justify-content: flex-end;

    h1{
        font-size: 2rem;
        font-family: 'baloo 2', sans-serif;
        font-weight: 800;
        color: ${props=>props.theme["yellow-900"]};
    }

    span{
        font-size: 1.15rem;
    }
`

export const LayoutInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2.5rem;
    position: relative;
    background-color: ${props=>props.theme["white-900"]};
    border-radius: 6px 36px;
    padding: 2.5rem;
    &::after{
        content:'';
        z-index: -1;
        position: absolute;
        top: -1.5px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        background: linear-gradient(to right, ${props=>props.theme["yellow-600"]}, ${props=>props.theme["purple-500"]});
        border-radius: 6px 36px;
    }

`
export const LayoutImage= styled.div`
    margin-top: 7rem;
`

export const DivInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

const USE_COLORS = {
    yellowDark: "yellow-900",
    yellowLight: "yellow-600",
    purple: "purple-500", 
} as const

interface BackgroundProps{
    useColor: keyof typeof USE_COLORS;
}
export const DivIcon = styled.div<BackgroundProps>`
    color:${props=>props.theme["white"]};
    background-color: ${props=>props.theme[USE_COLORS[props.useColor]]};
    display: flex;
    padding: 0.5rem;
    border-radius: 100%;
`