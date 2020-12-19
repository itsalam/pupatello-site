import react, { createRef, useEffect, useRef, useState } from "react";

export default () => {
    const [isSticky, setSticky] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if(ref.current){
            setSticky(ref.current.getBoundingClientRect().top <= 0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', () => handleScroll);
        };
      }, []);

    
    return ( 
    <header id='header' className={`header${isSticky ? '-sticky' : ''}`}>
        <nav>
            <h1>Pupatello Construction</h1>
            <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
                <div className='sticky-inner'>
                    <ul >
                        <li className="crumb"><a href="#">Home</a></li>
                        <li className="crumb"><a href="#">About Us</a></li>
                        <li className="crumb"><a href="#">Services</a></li>
                        <li className="crumb"><a href="#">Projects</a></li>
                        <li className="crumb"><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>


        </nav>
    </header>
    
    )
}
