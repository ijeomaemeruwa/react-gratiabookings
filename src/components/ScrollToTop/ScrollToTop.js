import React, { useState, useEffect } from 'react'
import { useWindowScroll } from 'react-use'
import { MdArrowUpward } from 'react-icons/md'
import '../ScrollToTop/scrolltotop.css'

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll()
    const [visibility, setVisibility] = useState(false)

    useEffect(() => {
    if(pageYOffset > 400){
        setVisibility(true)
    }else{
        setVisibility(false)
    }
    }, [pageYOffset])

    const handleScroll = () => window.scrollTo({ top: 0, behavior: "smooth"})

    if(!visibility) {
        return false;
    }

    return (
    <>
    <div 
    className="scroll text-center" 
    onClick={handleScroll} >
     <MdArrowUpward className="icon" />     
    </div>      
    </>
    )
}

export default ScrollToTop
