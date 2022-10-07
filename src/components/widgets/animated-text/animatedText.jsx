import {useEffect, useState} from 'react';
import TextTransition,{presets} from 'react-text-transition';
import './animated-text.css';
const AnimatedText = (props) => {
    const [textIndex,setText] = useState(0);
    useEffect(()=>
    {
        let intervalId = setInterval(() => {
            setText(textIndex>=props.text.length-1?0:textIndex+1);
        }, props.delay);
        return () => clearTimeout(intervalId);
    })
    return (  
         <div><TextTransition className='job-div'springConfig={presets.wobbly}>{props.text[textIndex]}</TextTransition></div>
    );
}
 
export default AnimatedText;