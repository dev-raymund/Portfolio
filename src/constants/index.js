import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const social = [
    {
        title: "gmail",
        link: "mailto:raymundhermoso.dev@gmail.com",
        target: "",
        icon: faEnvelope
    },
    {
        title: "linkedin",
        link: "https://www.linkedin.com/in/raymund-hermoso-b00586207/",
        target: "_blank",
        icon: faLinkedin
    },
    {
        title: "github",
        link: "https://github.com/dev-raymund",
        target: "_blank",
        icon: faGithub
    }
]

import {
    htmlIcon,
    cssIcon,
    jsIcon,
    bootstrapIcon,
    tailwindIcon,
    phpIcon,
    laravelIcon,
    mysqlIcon,
    mongodbIcon,
    jqueryIcon,
    vueIcon,
    reactIcon,
    nodeIcon,
    wordpressIcon,
    shopifyIcon,
    githubIcon,
    dockerIcon,
    adobeIcon
} from '../assets'

export const skills = [
    {
        title: "html",
        icon: htmlIcon
    },
    {
        title: "css",
        icon: cssIcon,
    },
    {
        title: "javascript",
        icon: jsIcon,
    },
    {
        title: "bootstrap",
        icon: bootstrapIcon,
    },
    {
        title: "tailwind",
        icon: tailwindIcon,
    },
    {
        title: "php",
        icon: phpIcon,
    },
    {
        title: "laravel",
        icon: laravelIcon,
    },
    {
        title: "mysql",
        icon: mysqlIcon,
    },
    {
        title: "mongodb",
        icon: mongodbIcon,
    },
    {
        title: "jquery",
        icon: jqueryIcon,
    },
    {
        title: "vue",
        icon: vueIcon,
    },
    {
        title: "react",
        icon: reactIcon,
    },
    {
        title: "node",
        icon: nodeIcon,
    },
    {
        title: "wordpress",
        icon: wordpressIcon,
    },
    {
        title: "shopify",
        icon: shopifyIcon,
    },
    {
        title: "github",
        icon: githubIcon,
    },
    {
        title: "docker",
        icon: dockerIcon
    },
    {
        title: "adobe",
        icon: adobeIcon
    }
]

export const experiences = [
    {
        date: "MAY 2024 - JAN 2025",
        company: "YEWS - Your Easy Web Solutions",
        link: "#",
        position: "Web Developer / Web Designer",
        description: "YEWS is a leading marketing agency in Brisbane, Melbourne and Gold Coast. Worked with some of Australia’s leading business owners in helping them grow their businesses through our marketing and technical experience.",
        technologies: ['wordpress', 'shopify', 'jquery', 'adobe']
    },
    {
        date: "MAY 2023 - Present",
        company: "PPD - ThermoFisher Scientific",
        link: "#",
        position: "Technical Application Specialist I",
        description: "PPD is now part of Thermo Fisher Scientific, the world leader in serving science. Together, Thermo Fisher and PPD are creating a unique opportunity to advance their shared pursuit to enable customers to make the world healthier by accelerating the development of new medicines.",
        technologies: ['react', 'jquery', 'php', 'laravel', 'docker']
    },
    {
        date: "NOV 2022 - MAY 2023",
        company: "Setup Phils. Inc.",
        link: "#",
        position: "Web Developer / Software Developer",
        description: "It is a duly licensed software development company based in Manila, Philippines. Its primary field of expertise is the optimization of business processes through pre-existing or fully customized software solutions. Services include Web/Mobile App Development, could-based custom ERP and CMS systems, and IT resource outsourcing.",
        technologies: ['wordpress', 'react', 'vue', 'jquery', 'php', 'laravel']
    },
    {
        date: "NOV 2018 - JUN 2019",
        company: "Night Birds Solution",
        link: "#",
        position: "Web Developer",
        description: "A company based in Bacolod, Philippines that provides a quality and responsive design built with Wordpress or an E-Commerce store from a Shopify. Creating landing pages that built with ClickFunnels",
        technologies: ['wordpress', 'shopify', 'jquery']
    }
]

import {
    tgsHub,
    coffsCityLockmart,
    karrathaLocksmith,
    bus4x4,
    perfectFloors,
    fastTrackHomeLoans
} from '../assets'

export const projects = [
    {
        category: "wordpress",
        project_list: [
            {
                title: "Talk Global Study",
                link: "https://talkglobalstudy.com",
                featured_image: tgsHub,
                description: "Fully custom Wordpress website from scratch and run from a REST API of its functionality. Speak privately online or in person with universities, colleges and government organisations from around the world who will answer all your questions."
            },
            {
                title: "Coffs City Lockmart",
                link: "https://www.coffscitylockmart.com.au/",
                featured_image: coffsCityLockmart,
                description: "Trusted Locksmith Services for 40+ Years Securing Homes, Schools, and Councils in NSW Mid North Coast with quality locks, safes, and security systems"
            },
            {
                title: "Karratha Lock Service",
                link: "https://karrathalockservice.com/",
                featured_image: karrathaLocksmith,
                description: "Trusted Karratha Locksmith for Homes, Businesses, and Vehicles with 20 years of experience serving the Pilbara Region with security solutions, superior workmanship and swift service"
            },
            {
                title: "Bus 4x4",
                link: "https://www.bus4x4.com.au/",
                featured_image: bus4x4,
                description: "Bus 4×4 are experts in converting 2WD Toyota HiAce and Toyota Coasters into go-anywhere 4WDs, with professionally engineered AWD Conversion Kits under Second Stage Manufacturing."
            },
            {
                title: "Perfect Floors",
                link: "https://perfectfloors.com.au/",
                featured_image: perfectFloors,
                description: "Trusted Karratha Locksmith for Homes, Businesses, and Vehicles with 20 years of experience serving the Pilbara Region with security solutions, superior workmanship and swift service"
            },
            {
                title: "Fast Track Home Loans",
                link: "https://fthl.netstripes.au/",
                featured_image: fastTrackHomeLoans,
                description: "Helps Professionals, Families and Businesses build wealth through property. Our experts will structure your finances in maximising your borrowing and investments."
            },

        ]
    },
    {
        category: "shopify",
        project_list: [

        ]
    },
    {
        category: "react",
        project_list: [

        ]
    }
]

export const navigation = [
    {
        id: 0,
        title: "About",
        url: "#about"
    },
    {
        id: 1,
        title: "Skills",
        url: "#skills"
    },
    {
        id: 2,
        title: "Experience",
        url: "#experience"
    },
    {
        id: 3,
        title: "Projects",
        url: "#projects"
    },
]