import * as React from 'react';
import { useSpring, animated, useTransition } from 'react-spring';
import './Landing.css';

export default function Landing() {
    const styles = useSpring({ opacity: 1, transform: 'translate3d(0px,0,0) ', from: { opacity: 0, transform: 'translate3d(0,200px,0) ', } })
    const [items, set] = React.useState(['a', 'b', 'c', 'v'])
    const transitions = useTransition(items, item => item, {
        from: { transform: 'translate3d(0,-40px,0)', color: 'red' },
        enter: { transform: 'translate3d(0,0px,0)', color: 'blue'  },
        leave: { transform: 'translate3d(0,-40px,0)', color: 'yellow'  },
    })
    return (
        <div className='landing-wrapper'>
            <div className="welcome-text">
                <animated.h1 style={styles}>
                    <h1>Let's explore the POWER of typescript</h1>
                </animated.h1>
            </div>
            <div className="jumbotron">
                {
                    transitions.map(({ item, props, key }) =>
                        <animated.div key={key} style={props}>{item}</animated.div>
                    )
                }
            </div>
        </div>
    )
}
