import { Component } from "react";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import picture from '../../Assets/Images/profile_img.png';

export default class Banner extends Component {

  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }
  particlesInit(main) {
    //code 
  }
  particlesLoaded(container) {
    //code 
  }

  render() {
    const position = {
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      top: '50%',
      left: '50%'
    }

    return (
      <div class="relative ...">
        <Particles
          id="tsparticles"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          options={{
            fpsLimit: 60,
            particles: {
              number: {
                value: 0,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#ff0000",
                animation: {
                  enable: true,
                  speed: 180,
                  sync: true
                }
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: "https://cdn.matteobruni.it/images/particles/github.svg",
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 3,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 15,
                random: {
                  enable: true,
                  minimumValue: 5
                },
                animation: {
                  enable: true,
                  speed: 5,
                  minimumValue: 5,
                  sync: true,
                  startValue: "min",
                  destroy: "max"
                }
              },
              links: {
                enable: false
              },
              move: {
                enable: true,
                speed: 7.5,
                direction: "none",
                random: false,
                straight: false,
                outMode: "destroy",
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detectsOn: "window",
              events: {
                onhover: {
                  enable: true,
                  mode: "trail"
                },
                onclick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3
                },
                repulse: {
                  distance: 200
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                },
                trail: {
                  delay: 0.005,
                  quantity: 5
                }
              }
            },
            retina_detect: true,
            background: {
              color: "#161e2d",
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover"
            }
          }}
        />
        <div style={position}>
          <img className="mx-auto rounded-full h-36 w-36 flex items-center justify-center" src={picture} alt="profile_picture" />
          <h1 className="text-center">Kazi Rayhan</h1>
          <h3 className="text-center">UI and UX Designer and Developer</h3>
          <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" className="mt-36 mx-auto animate-bounce w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
          </svg></Link>
        </div>
      </div>
    );
  }
}
