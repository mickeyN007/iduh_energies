// MultipleObserver.js
import { useInView } from 'react-intersection-observer';

const MultipleObserver = ( {children} ) => {

    const { ref, inView } = useInView({ triggerOnce: true });

    return (
             <div ref={ref}>
               { inView ? <span>{children}</span> : 'Loading...' }
             </div>
          )
}

export default MultipleObserver;
