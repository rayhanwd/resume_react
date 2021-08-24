// blog_img_import
import b_1 from '../../src/images/blog/dom_vs_vdom.png';
import b_2 from '../../src/images/blog/react_hoc.png';
import b_3 from '../../src/images/blog/react_props.png';
import b_4 from '../../src/images/blog/node_js.png';
import b_5 from '../../src/images/blog/javascript_parameter.png';
//service_icon_import
import { FaGithub, FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
//portfolio_img_import
import p_1 from '../../src/images/portfolio/Startup_agency.PNG';
import p_2 from '../../src/images/portfolio/car_cleaning.PNG';
import p_3 from '../../src/images/portfolio/Ride_Finder_APP.PNG';
import p_4 from '../../src/images/portfolio/Technical_Blog.png';
import p_5 from '../../src/images/portfolio/vpn_services.png';
import p_6 from '../../src/images/portfolio/Gadget_bd.png';
import p_7 from '../../src/images/portfolio/Cooking_Master.png';
import p_8 from '../../src/images/portfolio/Current_weather_app.png';
import p_9 from '../../src/images/portfolio/dental_service.png';
import p_10 from '../../src/images/portfolio/Soccer_club.png';

export const blog_json = [{
    id: 1,
    img: b_1,
    category: 'Javascript',
    color: 'text-yellow-500',
    title: 'What are the differences between V-DOM and DOM',
    desc: 'The DOM represents the document as nodes and objects.A virtual DOM object is a representation of a DOM object, like a lightweight copy.',
    view: '243',
    message: '3'
},
{
    id: 2,
    img: b_2,
    category: 'React',
    color: 'text-blue-500',
    title: 'What are the different phases of React component’s lifecycle?',
    desc: 'These methods are called the components lifecycle methods and they are invoked in a predictable order. Basically all the React components lifecycle methods can be split in four phases: initialization, mounting, updating and unmounting',
    view: '1.0K',
    message: '79'
},
{
    id: 3,
    img: b_3,
    category: 'React',
    color: 'text-blue-500',
    title: 'What is Props in React?',
    desc: 'It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. It is similar to function arguments. Props are passed to the component in the same way as arguments passed in a function',
    view: '1.1K',
    message: '111'

},
{
    id: 4,
    img: b_4,
    category: 'Node JS',
    color: 'text-green-600',
    title: 'Why Node.js is single threaded?',
    desc: 'js was created as an experiment in asynchronous processing and in theory was that doing asynchronous processing on a single thread could provide more performance and scalability under typical web loads than the typical thread-based implementation',
    view: '247',
    message: '3'

},
{
    id: 5,
    img: b_5,
    category: 'Javascript',
    color: 'text-yellow-500',
    title: 'What is default parameter?',
    desc: 'A default argument is a value provided in a function declaration that is automatically assigned by the compiler if the caller of the function does not provide a value for the argument with a default value',
    view: '987',
    message: '4'

}];

export const skill_json = [{
    id: 1,
    parsent: 89,
    title: 'Javascript',
},
{
    id: 2,
    parsent: 90,
    title: 'React react-native',
},
{
    id: 3,
    parsent: 83,
    title: 'Redux',
}
    ,
{
    id: 4,
    parsent: 83,
    title: 'Node JS',
}
    ,
{
    id: 5,
    parsent: 81,
    title: 'MongoDB',
}
    ,
{
    id: 6,
    parsent: 82,
    title: 'Express',
}
    ,
{
    id: 7,
    parsent: 87,
    title: 'Scss',
}
    ,
{
    id: 8,
    parsent: 88,
    title: 'Bootstrap',
}
    ,
{
    id: 9,
    parsent: 89,
    title: 'Tailwind',
}
    ,
{
    id: 10,
    parsent: 89,
    title: 'Css',
}
    ,
{
    id: 11,
    parsent: 86,
    title: 'HTML',
}
    ,
{
    id: 12,
    parsent: 83,
    title: 'Git github',
}
];

export const DevServices = [{
    icon: <FaGithub />,
    title: 'Web design',
    desc: 'webbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
},
{
    icon: <FaLinkedinIn />,
    title: 'Web development',
    desc: 'webbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
},
{
    icon: <FaFacebookF />,
    title: 'Single Page Application',
    desc: 'webbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
},
{
    icon: <FaTwitter />,
    title: 'React Application',
    desc: 'webbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
},
{
    icon: <FaTwitter />,
    title: 'E commerce Development',
    desc: 'webbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
},
{
    icon: <FaTwitter />,
    title: 'React Native Development',
    desc: 'webbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
}];
export const Experiences = [{
    P_name: '',
    P_title: '',
    P_desc: '',
},
{
    P_name: '',
    P_title: '',
    P_desc: '',
},
{
    P_name: '',
    P_title: '',
    P_desc: '',
},
{
    P_name: '',
    P_title: '',
    P_desc: '',
},
{
    P_name: '',
    P_title: '',
    P_desc: '',
},
{
    P_name: '',
    P_title: '',
    P_desc: '',
},
{
    P_name: '',
    P_title: '',
    P_desc: '',
}];
export const Feedback = [{
    text: '',
    name: '',
    companyName: '',
},
{
    text: '',
    name: '',
    companyName: '',
},
{
    text: '',
    name: '',
    companyName: '',
},
{
    text: '',
    name: '',
    companyName: '',
},
{
    text: '',
    name: '',
    companyName: '',
}];
export const P_Data = [{
    id: 1,
    img: p_1,
    title: 'Agency website',
    technology: ['React','Bootstrap','Scss','Javascript','Firebase','tailwind css','Redux','Node JS', 'Javascript'],
    desc: 'I love country',
    live_link:'https://gadget-bd-82db7.web.app/',
    git_link:'https://github.com/rayhanwd/Gadget-Bd-React-Redux-Toolkit',
},
{
    id: 2,
    img: p_2,
    title: 'Car care service',
    technology: ['React','Bootstrap','Scss','Javascript','Firebase','tailwind css','Redux','Node JS', 'Javascript'],
    desc: 'we bbb bbb bbb bb bbbbb bbbbb bbbbb bbbbbb bbb bbbbbbb bbbb bbbb bbb bbb',
    live_link:'https://gkcarcleaner.web.app/',
    git_link:'https://github.com/rayhanwd/Car_cleaning_service_MERN',
},
{
    id: 3,
    img: p_3,
    title: 'Ride finder App',
    technology: ['React','Bootstrap','Scss','Javascript','Firebase','tailwind css','Redux','Node JS', 'Javascript'],
    desc: 'we bbb bbb bbb bb bbbbb bbbbb bbbbb bbbbbb bbb bbbbbbb bbbb bbbb bbb bbb',
    live_link:'https://ride-finding.web.app/',
    git_link:'https://github.com/rayhanwd/Ride-sharing-app-React-Toolkit',
},
{
    id: 4,
    img: p_4,
    title: 'Tech blog master',
    technology: ['React','Bootstrap','Scss','Javascript','Firebase','tailwind css','Redux','Node JS', 'Javascript'],
    desc: 'we bbb bbb bbb bb bbbbb bbbbb bbbbb bbbbbb bbb bbbbbbb bbbb bbbb bbb bbb',
    live_link:'https://lkagency.web.app/',
    git_link:'https://github.com/rayhanwd/Startup-Business-agency-MERN-Stack',
},
{
    id: 5,
    img: p_5,
    title: 'vpn provider',
    technology: ['React','Bootstrap','Scss','Javascript','Firebase','tailwind css','Redux','Node JS', 'Javascript'],
    desc: 'we bbb bbb bbb bb bbbbb bbbbb bbbbb bbbbbb bbb bbbbbbb bbbb bbbb bbb bbb',
    live_link:'https://hoursevpnservice.web.app/',
    git_link:'https://github.com/rayhanwd/react-service-app',
},
{
    id: 6,
    img: p_6,
    title: 'Redux shopping cart',
    technology: ['React','Bootstrap','Scss','Javascript','Firebase','tailwind css','Redux','Node JS', 'Javascript'],
    desc: 'we bbb bbb bbb bb bbbbb bbbbb bbbbb bbbbbb bbb bbbbbbb bbbb bbbb bbb bbb',
    live_link:'https://gadget-bd-82db7.web.app/',
    git_link:'https://github.com/rayhanwd/Gadget-Bd-React-Redux-Toolkit',
},
{
    id: 7,
    img: p_7,
    title: 'Restaurant, food',
    technology: ['React','Bootstrap','Scss','Javascript','Firebase','tailwind css','Redux','Node JS', 'Javascript'],
    desc: 'we bbb bbb bbb bb bbbbb bbbbb bbbbb bbbbbb bbb bbbbbbb bbbb bbbb bbb bbb',
    live_link:'https://rayhanwd.github.io/cooking-master/',
    git_link:'https://github.com/rayhanwd/cooking-master',
},
{
    id: 8,
    img: p_8,
    title: 'Weather tracking App',
    technology: ['React','Bootstrap','Scss','Javascript','Firebase','tailwind css','Redux','Node JS', 'Javascript'],
    desc: 'we bbb bbb bbb bb bbbbb bbbbb bbbbb bbbbbb bbb bbbbbbb bbbb bbbb bbb bbb',
    live_link:'https://rayhanwd.github.io/current-weatherApp/',
    git_link:'https://github.com/rayhanwd/current-weatherApp',
},
{
    id: 9,
    img: p_9,
    title: 'Dental service center',
    technology: ['React','Bootstrap','Scss','Javascript','Firebase','tailwind css','Redux','Node JS', 'Javascript'],
    desc: 'we bbb bbb bbb bb bbbbb bbbbb bbbbb bbbbbb bbb bbbbbbb bbbb bbbb bbb bbb',
    live_link:'https://dental-service-5195f.web.app/',
    git_link:'https://github.com/rayhanwd/dental-service',
},
{
    id: 10,  
    img: p_10,
    title: 'Sport team tracker',
    technology: ['React','Bootstrap','Scss','Javascript','Firebase','tailwind css','Redux','Node JS', 'Javascript'],
    desc: 'we bbb bbb bbb bb bbbbb bbbbb bbbbb bbbbbb bbb bbbbbbb bbbb bbbb bbb bbb',
    live_link:'https://professional-sport-team.netlify.app/',
    git_link:'https://github.com/rayhanwd/A-sport-team-builder-react-js',
}];
export const Res_json = [{
    id: 1,
    key: 'Create in-house web and mobile applications'
},
{
    id: 2,
    key: 'Design mockups and wire frames'
},
{
    id: 3,
    key: 'Bug fix, QA, and problem solve'
},
{
    id: 4,
    key: 'Maintain, update, and improve existing company websites'
},
{
    id: 5,
    key: 'Implement websites, landing pages, and applications from concept through deployment, with a responsive, mobile-first approach'
},
{
    id: 6,
    key: 'Work closely with other team members on the development team'
},
{
    id: 7,
    key: 'Perform code reviews'
},
{
    id: 8,
    key: 'Mentor junior developers'
}
];