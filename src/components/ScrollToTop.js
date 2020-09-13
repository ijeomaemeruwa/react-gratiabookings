import React, { Component } from 'react';

export class ScrollToTop extends Component {
    state = {
      visibleScroll: false
    }
  

    componentDidMount() {
      const scrollComponent = this;
      document.addEventListener('scroll', (e) => {
        scrollComponent.toggleVisibility();
      });
    }

    toggleVisibility() {
      if (window.pageYOffset > 500) {
        this.setState({
          visibleScroll: true
        });
      } else {
        this.setState({
          visibleScroll: false
        });
      }
    }

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    render() {
      const { visibleScroll } = this.state;
      return (
        <div className="scroll-to-top">
          { visibleScroll && (
          <div onClick={() => this.scrollToTop()}>
            
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="32" height="32"
            viewBox="0 0 172 172"
            style={{ fill: '#000000' }}>
            <g 
            fill="none" 
            fill-rule="nonzero" 
            stroke="none" stroke-width="1" 
            stroke-linecap="butt" stroke-linejoin="miter" 
            stroke-miterlimit="10" stroke-dasharray="" 
            stroke-dashoffset="0" font-family="none" 
            font-weight="none" font-size="none" 
            text-anchor="none" style={{ mixBlendMode: 'normal' }}>
            <path d="M0,172v-172h172v172z" fill="none"></path>
            
            <g fill="#3498db">
            <path d="M86,16.125c-38.52783,0 -69.875,31.34717 -69.875,
            69.875c0,38.52783 31.34717,69.875 69.875,69.875c38.52783,
            0 69.875,-31.34717 69.875,-69.875c0,-38.52783 -31.34717,
            -69.875 -69.875,-69.875zM86,26.875c32.71192,0 59.125,
            26.41309 59.125,59.125c0,32.71192 -26.41308,59.125 -59.125,
            59.125c-32.71191,0 -59.125,-26.41308 -59.125,-59.125c0,
            -32.71191 26.41309,-59.125 59.125,-59.125zM86,47.70313l-34.43359,
            34.43359l7.55859,7.72656l21.5,-21.5v55.26172h10.75v-55.26172l21.5,
            21.5l7.55859,-7.72656z">
            </path>
            </g>
            </g>
            </svg>

          </div>
          )}
          
        </div>
      );
    }
  }
  
  