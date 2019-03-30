import * as React from 'react';
import { useSpring, animated, useTransition } from 'react-spring';
import './Landing.css';

export default function Landing() {
    const points: string[] = ['POWER', 'STYLE', 'AWESOMENESS', 'EVERYTHING']
    const styles = useSpring({ opacity: 1, transform: 'translate3d(0px,0,0) ', from: { opacity: 0, transform: 'translate3d(0,200px,0) ', } })
    const [title, setTitle] = React.useState<string>(points[0])

    const transitions = useTransition(title, item => item, {
        from: { transform: 'translate3d(0,-400px,0)', color: 'red' },
        enter: { transform: 'translate3d(0,0px,0)', color: 'blue' },
        leave: { transform: 'translate3d(0,-40px,0)', color: 'yellow' },
    })
    React.useEffect(() => {
        let interval = setInterval(() => {
            console.log('inside setInterval')
            if (points.indexOf(title) === 0) {
                console.log('inside setTitle(points[1])')
                setTitle(points[1])
            }
            else if (points.indexOf(title) === 1) {
                console.log('inside setTitle(points[2])')
                setTitle(points[2])
            }
            else if (points.indexOf(title) === 2) {
                console.log('inside setTitle(points[3])')
                setTitle(points[3])
            }
            else {

                console.log('inside setTitle(points[0])')
                setTitle(points[0])
            }
        }, 5000)
        return () => {
            clearInterval()
        }
    }, [title])
    return (
        <div className='landing-wrapper'>
            <div className="welcome-text">
                <animated.div style={styles}>
                    <h1>Let's explore the {title}
                        {/* {
                            transitions.map(({ item, props, key }) =>
                                <animated.span style={props} key={key}>
                                    {item}
                                </animated.span>
                            )
                        } */}
                        of typescript</h1>
                </animated.div>
            </div>
        </div>
    )
}
