import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'khuzaima8855.za@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Khuzaima Akram, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/khuzaimaakram',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Khuzaima01' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/khuzaima-akram/' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Laravel',
            icon: '/logo/laravel.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Detends Toit',
        slug: 'detends-toit',
        liveUrl: 'https://detends-toit.com/',
        year: 2025,
        description: `
            A modern, visually engaging portfolio site for Détends‑Toit — a service that brings premium spa and wellness experiences directly to your home in Martinique. The platform was built to beautifully showcase services, provide clear booking information, and elevate the brand’s online presence with a clean and responsive UI.

            Key Features:

            <ul> <li>🌿 Service Showcase: Elegant presentation of at‑home spa treatments and packages</li> <li>🗓️ Booking Info & Contact: Intuitive sections for appointment requests and inquiries</li> <li>📱 Fully Responsive: Optimal viewing experience on all devices</li> <li>⚡ Fast & Smooth: Performance‑optimized Next.js frontend with static rendering</li> <li>🎨 Clean Aesthetic: Modern design tailored to wellness and comfort themes</li> </ul>

            Technical Highlights:

            <ul> <li>Built with **Next.js** for fast page loads and SEO friendliness</li> <li>Reusable UI components crafted with **shadcn + Tailwind CSS**</li> <li>Interactive elements and smooth transitions for enhanced UX</li> <li>Optimized layout ensuring accessibility and mobile usability</li> </ul>
      `,
        role: `
            Frontend Developer — Led the frontend build from concept to deployment:

            <ul> <li>🎨 Designed and developed all UI components using **Tailwind CSS & shadcn** for consistent branding</li> <li>📱 Ensured fully responsive layouts with a focus on mobile and tablet users</li> <li>⚡ Tuned performance through optimized data fetching and static rendering in **Next.js**</li> <li>💡 Created smooth, user‑friendly interactive UI elements (transitions, navigation, content blocks)</li> <li>🚀 Deployed the site with a CI/CD pipeline to **Vercel** for scalable hosting</li> </ul>
      `,
        techStack: [
            'React.js',
            'Tailwind CSS',
            'shadcn',
            'Swiper.js',
            'React Hook Form',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/detends-toit.webp',
        longThumbnail: '/projects/long/detends-toit.webp',
        images: [
            '/projects/images/detends-toit-1.png',
            '/projects/images/detends-toit-2.png',
            '/projects/images/detends-toit-3.png',
            '/projects/images/detends-toit-4.png',
            '/projects/images/detends-toit-5.png',
            '/projects/images/detends-toit-6.png',
            '/projects/images/detends-toit-7.png',
        ],
    },
    {
        title: 'Web Motions',
        slug: 'web-motions',
        techStack: [
            'React',
            'Redux',
            'Tailwind CSS',
            'Framer Motion',
            'debouncing',
            'Api Integration',
        ],
        thumbnail: '/projects/thumbnail/web-motions.png',
        longThumbnail: '/projects/long/web-motions.jpg',
        images: [
            '/projects/images/web-motions-1.png',
            '/projects/images/web-motions-2.png',
            '/projects/images/web-motions-3.png',
            '/projects/images/web-motions-4.png',
            '/projects/images/web-motions-5.png',
            '/projects/images/web-motions-6.png',
            '/projects/images/web-motions-7.png',
        ],
        liveUrl: '',
        year: 2025,
        description: `Web Motions is a modern, conversion-focused studio website designed to showcase services, process, and real-world work through a clean layout and engaging interactions. The project emphasizes performance, responsive design, and clear user flows to guide visitors toward key actions such as starting a project or exploring services.`,
        role: `As the sole frontend developer, I:<br/>
        - Designed and developed the entire frontend independently using React and Tailwind CSS.<br/>
        - Implemented a fully responsive, mobile-first layout optimized for speed and usability across devices.<br/>
        - Built smooth UI interactions and section transitions to enhance engagement and visual flow.<br/>
        - Structured clear, conversion-oriented user journeys to drive actions such as project inquiries and service exploration.`,
    },
    {
        title: 'Knipklok',
        slug: 'knipklok',
        techStack: ['Laravel'],
        thumbnail: '/projects/thumbnail/knipklok.png',
        longThumbnail: '/projects/long/knipklok.png',
        images: [
            '/projects/images/knipklok-1.png',
            '/projects/images/knipklok-2.png',
            '/projects/images/knipklok-3.png',
            '/projects/images/knipklok-4.png',
            '/projects/images/knipklok-5.png',
            '/projects/images/knipklok-6.png',
            '/projects/images/knipklok-7.png',
        ],
        liveUrl: 'https://knipklok.nl/',
        year: 2026,
        description: `Knipklok is an online barber appointment platform that connects customers with local barbers and hairstylists across the Netherlands and Belgium. Users can search for nearby barbers, book treatments at their preferred time, receive reminders, and manage appointments — helping salons streamline bookings and reduce administrative friction.`,
        role: `As the backend developer, I:<br/>
        - Built and maintained the entire backend API using Laravel and Eloquent ORM.<br/>
        - Designed and implemented database models and relationships to support salons, services, availability, and bookings.<br/>
        - Developed secure authentication, appointment reservation logic, and SMS/email reminder integration.<br/>
        - Optimized performance and ensured data integrity across user sessions, booking flows, and time slot availability checks.<br/>
        - Worked with frontend and mobile app teams to deliver seamless booking experiences and real-time updates for users and barbers.`,
    },
    {
        title: 'Pakistan Mobiles',
        slug: 'pakistan-mobiles',
        techStack: [
            'HTML',
            'CSS & SCSS',
            'Javascript',
            'Bootstrap',
            'jQuery',
            'PHP',
            'MySQL',
            'Laravel',
        ],
        thumbnail: '/projects/thumbnail/pak-mobiles.png',
        longThumbnail: '/projects/long/pakistan-mobiles.png',
        images: [
            '/projects/images/pak-mobiles-1.png',
            '/projects/images/pak-mobiles-2.png',
            '/projects/images/pak-mobiles-3.png',
            '/projects/images/pak-mobiles-4.png',
        ],
        liveUrl: 'https://pakistanmobilespk.com/',
        year: 2023,
        description: `PakistanMobilesPK is a full-featured e-commerce platform for mobile phones and accessories, serving customers across Pakistan. The platform enables users to browse products by brand and category, place orders online, and receive doorstep delivery, with a strong focus on usability, performance, and a smooth shopping experience.`,
        role: `As a full-stack developer, I:<br/>
- Designed and developed both the frontend and backend of the platform using Laravel, Blade, JavaScript, and modern UI practices.<br/>
- Built core e-commerce functionality including product listings, category management, shopping cart, and order processing.<br/>
- Designed and optimized database schemas for products, customers, and orders to ensure data integrity and scalability.<br/>
- Implemented secure authentication, checkout flows, and order lifecycle management from placement to delivery.<br/>
- Ensured a responsive, user-friendly interface while maintaining backend performance and reliable API communication.`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Backend Engineer',
        company: 'AutoData Dubai',
        duration: '2024 - Present',
    },
    {
        title: 'Full Stack Developer',
        company: 'DealRevs (AutoData Product)',
        duration: '2024 - Present',
    },
    {
        title: 'Full Stack Developer',
        company: 'Vtechnocrat',
        duration: '2024 - Present',
    },
    {
        title: 'Full Stack Developer',
        company: 'Ultima Byte',
        duration: 'Jan 2022 - Sept 2023',
    },
];
