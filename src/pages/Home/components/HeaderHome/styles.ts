import styled from 'styled-components'
import banner from '../../../../../public/Background.png'

export const LayoutHeaderHome = styled.div`
    display: flex;
    padding: 5.75rem 10rem;
    gap: 3.5rem;
    background-image: url(${banner});
`
export const TextHome = styled.div`
    width: 588px;
`
export const TitleHome = styled.h1`
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2.70rem;
    line-height: 1.2;
    color: ${props=>props.theme["brown-900"]};
`

export const SubtitleHome = styled.p`
    font-size: 0.95rem;
    margin-top: 1rem;
`

const USE_COLORS = {
    yellowDark: 'yellow-900',
    yellowLight: 'yellow-600',
    brown: 'brown-300',
    purple: 'purple-500',
} as const

interface BackgroundProps{
    useColor: keyof typeof USE_COLORS;
}

export const MainHome = styled.div`
    display: flex;
    gap: 2.5rem;
    font-size: 0.80rem;
    margin-top: 4.125rem;

    p{
        display: flex;
        align-items: center;
        gap: 0.75rem;
        line-height: 3;
    }

`

export const BackgroundIcon = styled.div<BackgroundProps>`
    padding: 0.25rem;
    display: flex;
    background-color: ${props=>props.theme[USE_COLORS[props.useColor]]};
    border-radius: 999px;
        
`



