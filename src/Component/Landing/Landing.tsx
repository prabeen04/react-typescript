import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import { ICardData } from './LandingInterface'
import Card from './Card';
import './Landing.css';
const cardData: ICardData[] = [
    { title: 'Counter', description: 'Explore the Counter ', action: null },
    { title: 'Todo', description: 'Explore the Todo ', action: null },
    { title: 'Users', description: 'Explore the Users ', action: null },
]
export default function Landing() {
    const points: string[] = [' POWER ', ' STYLE ', ' AWESOMENESS ', ' EVERYTHING ']
    const [cardState, setCardState] = React.useState<ICardData[]>(cardData)
    const styles = useSpring({
        opacity: 1, transform: 'translate3d(0px,0,0) ', rotate: '0',
        from: { opacity: 0, transform: 'translate3d(0,200px,0) ', rotate: '180', }
    })
    const [title, setTitle] = React.useState<string>(points[0])

    React.useEffect(() => {
        setTimeout(() => {
            let index = points.indexOf(title);
            if (index < points.length - 1) {
                setTitle(points[index + 1])
            }
            else {
                setTitle(points[0])
            }
        }, 3000)
        return () => {
            clearTimeout()
        }
    }, [title])
    return (
        <div className='landing-wrapper' data-test="Landing">
            <div className='welcome-text-container'>
                <animated.div style={styles}>
                    <>
                        <h1 className="welcome-text">Let's explore the
                        {<Title title={title} />}
                            of typescript</h1>
                    </>
                </animated.div>
            </div>
            <div className="feature-card-list">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

function Title({ title }: { title: string }) {
    const textStyles = useSpring(
        {
            transform: 'translate3d(0,-400px,0)',
            color: 'red',
            opacity: 1,
            from: {
                transform: 'translate3d(0,0px,0)',
                color: 'blue',
                opacity: 0,
            },
            delay: 1000
        })
    return (
        <animated.span style={textStyles}>
            {title}
        </animated.span>
    )
}