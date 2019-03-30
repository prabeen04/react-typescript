import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import './Landing.css';

export default function Landing() {
    const points: string[] = [' POWER ', ' STYLE ', ' AWESOMENESS ', ' EVERYTHING ']
    const styles = useSpring({ opacity: 1, transform: 'translate3d(0px,0,0) ', from: { opacity: 0, transform: 'translate3d(0,200px,0) ', } })
    const textStyles = useSpring(
        {
            transform: 'translate3d(0,-400px,0)', color: 'red',
            from: { transform: 'translate3d(0,0px,0)', color: 'blue' }
        })
    const [title, setTitle] = React.useState<string>(points[0])

    React.useEffect(() => {
        setTimeout(() => {
            if (points.indexOf(title) === 0) {
                setTitle(points[1])
            }
            else if (points.indexOf(title) === 1) {
                setTitle(points[2])
            }
            else if (points.indexOf(title) === 2) {
                setTitle(points[3])
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
        <div className='landing-wrapper'>
            <div className="welcome-text">
                <animated.div style={styles}>
                    <h1>Let's explore the
                        {
                            <animated.span style={textStyles}>
                                {title}
                            </animated.span>
                        }
                        of typescript</h1>
                </animated.div>
            </div>
        </div>
    )
}
