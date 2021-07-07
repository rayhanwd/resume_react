import { Component } from "react";
import Particles from "react-tsparticles";
import picture from '../../Assets/Images/profile_img.png';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaTwitter, FaHandPointDown } from 'react-icons/fa';
import Typical from 'react-typical';
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
      top: '55%',
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
          <img className="drop-shadow-sm img-border shadow mx-auto rounded-full h-40 w-40 flex items-center justify-center" src={picture} alt="profile_picture" />
          <h1 className="black text-white text-center text-3xl my-4">Kazi Rayhan</h1>

          <h3 className="text-white text-center text-2xl mb-2">👨‍💻I'M a              <Typical
              steps={['Front-end Developer', 1000, 'Back-end Developer', 500,'React Developer', 500,'React-native Developer', 500]}
              loop={Infinity}
              wrapper="span"
            />
          </h3>
          <div className="flex justify-center">
            <a className="m-4 rounded-full bg-indigo-500 text-white text-xl p-3" href="http://https://github.com/rayhanwd" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a className="m-4 rounded-full bg-indigo-500 text-white text-xl p-3" href="https://www.linkedin.com/in/rayhanwd/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a className="m-4 rounded-full bg-indigo-500 text-white text-xl p-3" href="https://www.facebook.com/KR.RAYHAN70/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a className="m-4 rounded-full bg-indigo-500 text-white text-xl p-3" href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter />
            </a>
          </div>
          <div className="mt-28">
            <a className="text-4xl" href="#skill" rel="noopener noreferrer">
              <FaHandPointDown className="p-2 rounded-full mx-auto animate-bounce bg-indigo-500 text-white" /></a>
          </div>
        </div>
      </div>
    );
  }
}
