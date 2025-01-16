import Twikkie from '../src/assets/images/twikkie.png';
import ForWheels from "./assets/images/forwheels.png"
import PlatePal from '../src/assets/images/platepal.png';
import EduLearn from '../src/assets/images/edulearn.png';


export const projects = [
    {
        id: '1',
        route: '',
        image: Twikkie,
        title: 'Maximizing Workplace Potential: An All-in-One Cloud Solution for People Management - (Protected).',
        description: 'a collaboration system designed to enhance group learning, encourage knowledge exchange, and promote teamwork among students.',
        tags: 'website design, web app design, design system',
        isExternal: false
    },
    {
        id: '2',
        route: 'forwheels',
        image: ForWheels,
        title: 'Revolutionizing Automotive Services using Augmented Reality.',
        description: 'automobile learning application that enhances the learning experience of the users by introducting new concepts in a visually engaging manner.',
        tags: 'Augmented reality, design system',
        isExternal: false
    },
    {
        id: '3',
        route: 'platepal',
        image: PlatePal,
        title: 'Building Better Eating Habits through Smart Meal Planning Technology.',
        description: 'meal planning and recipe application that helps to improve the cooking experience and make meal preparation simpler and less frustrating.',
        tags: 'web app design, mobile app design, accessibilty',
        isExternal: false
    },
    {
        id: '4',
        externalUrl: "https://medium.com/@haneefahaliu/edulearn-a-ux-case-study-f9071fb39613",
        image: EduLearn,
        title: 'Expanding Classroom Boundaries With Smart Teaching Solutions',
        description: 'online educational platform designed to make teaching easier by extending learning beyond the physical classroom.',
        tags: 'edutech, web app design, website design',
        isExternal: true
    },
]