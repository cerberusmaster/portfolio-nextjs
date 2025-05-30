import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Robert",
  lastName: "Lee",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar2.png",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Chinese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/cerberusmaster",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:robert19960318@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software engineer</>,
  subline: (
    <>
      Welcome to my digital space. I'm a passionate software engineer dedicated to transforming complex challenges into elegant, efficient solutions. With expertise in modern programming languages and a commitment to continuous learning, I thrive on building scalable applications that make a real impact.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a full-stack developer with a passion for transforming complex challenges
        into simple, elegant design solutions. Her work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "GOC - Game On the Chain",
        timeframe: "07/2023 - 07/2024",
        role: "Full Stack Developer",
        website: "https://goc.productions",
        achievements: [
          <>
            Designed architecture and infrastructure, developed back-end APIs with documents, REST APIs, WebSocket
            services, and Front-End UI/UX
          </>,
          <>
            Developed casino roulette game for web and mobile based on React, React Native, React Toolkit, React query, Tailwind
            CSS, and ThreeJs, developed scenes, interactions with animations, Game scenario
          </>,
          <>
            Implement real time user interaction (controlling game objects in web game) from WebGL to Unreal Engine via WebSocket
          </>,
          <>
            Implemented synchronization within Aximmetry Sequencer, so all devices are moving accordingly Streaming
            on RTMP with HLS, Flowplayer, Wowza, AntMedia/Twitch, AWS Kinesis, keep latency less than 3 seconds
          </>,
          <>
            Collision Detect System with Unreal Engine 5, Eztrack System
          </>,
          <>
            Built payment system with Paypal, Stripe and Cryptocurrency web3 integration.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Master Anesthesia",
        timeframe: "01/2022 - 12/2024",
        website: "https://masteranesthesia.com",
        role: "Full Stack Developer",
        achievements: [
          <>
          Optimized interaction with firebase firestore and realtimedb and speed up loading contents from 15min in a few seconds
Implemented firebase authentication with social providers email/password, google, apple, facebook and anonymous
Enhanced code quality by transfering javascript to typescript and adding test codes
            Developed casual Web Games and Landing pages with Three JS, PhaserJS, and Pixijs
          </>,
          <>
            Build UI/UX with React Native Reanimated, Gesture handler, React Native Paper, Lottie and Framer
          </>,
          <>
            Enhanced app's performance with implementing React principles with Redux toolkit, React query
          </>,
          <>
            Integrating with Strapi, defined Schema, relations, REST API, UI/UX and developed middleware, router, layouts,
            pages, and components, assured high performance, optimized functionalities based on Nextjs, React, Bootstrap
          </>,
        ],
        images: [],
      },
      {
        company: "Lahoma",
        timeframe: "01/2022 - 06/2023",
        website: "https://lahoma.com",
        role: "Full Stack Developer",
        achievements: [
          <>
            Designed serverless back-end architecture based on AWS Lambda, S3, DynamoDB, EC2, API gateway,
            WebSocket, CloudFront, EC2/Unreal Engine 5
          </>,
          <>
            Using Unreal Engine 5, I’ve built WebSocket Server that manages all requests and rendering responses and
            also composes virtual homes by users’ specific requirements, including colors, size, and positions etc.
          </>,
          <>
            Built web app with React and Three Js that communicating with server and interacting with users
            Implemented UI interactions to
              Camera - rotating, moving, zoom in/out
              Customize Environments - light, skybox, shadow
              Customize Furnitures - texture, color, resize, movement, rotating
              Home style - Modern, Classic etc.
          </>,
          <>
            Built AR Model Generator and High VFX Renderer with AI that helps designers to export AR models with
            several 3D formatted files (gldb, glb, obj, fbx) and High quality rendered images
          </>,
          <>
            Implemented integration between AWS Lambda, S3, EC2, API gateway, WebSocket and Unreal Engine
            5, 3D Max, Houdini, V-Ray renderer
          </>,
          <>
            Developed 3DMax scripts, Houdini scripts with python that optimize modeler’s activities
          </>,
        ],
        images: [],
      },
      {
        company: "Winking Studios",
        timeframe: "02/2018 - 10/2022",
        website: "https://www.winkingworks.com/",
        role: "Game Developer",
        achievements: [
<>
Unity3D: Skilled in creating games and interactive applications using Unity's robust toolset. I have worked with Unity's powerful scripting API to implement gameplay mechanics, AI, animation systems, and physics.
</>,
<>
Unreal Engine: Proficient in utilizing Unreal Engine's advanced features such as the Blueprint Visual Scripting system, C++, and the engine’s high-end rendering capabilities. I’ve created visually stunning and performance-optimized games and simulations, leveraging Unreal's advanced material editor, particle system, and cinematic tools.
</>,
<>
WebGL & Three.js: Expertise in developing interactive 3D applications and games for the web, using WebGL for rendering and Three.js for JavaScript-based 3D graphics. I have crafted browser-based games and interactive content that function across various browsers with an emphasis on performance, cross-platform compatibility, and immersive user experiences.
</>,
<>
Key Responsibilities:
<br/>
<ul>Game Design and Development:</ul> Conceptualized, prototyped, and implemented gameplay mechanics, character systems, AI behaviors, and interactive 3D environments.
<br/>
<ul>Cross-Platform Deployment:</ul> Delivered games for a range of platforms, from desktop to mobile and web-based applications, ensuring smooth performance and consistent user experiences.
<br/>
<ul>Graphics & Visuals:</ul> Leveraged the powerful rendering capabilities of Unity3D, Unreal Engine, WebGL, and Three.js to create high-quality visuals, from realistic 3D environments to stylized graphics that match the vision of the game.
<br/>
<ul>Optimization & Performance:</ul> Ensured optimal performance across devices by profiling and optimizing assets, code, and scene rendering, particularly important for mobile and web platforms where resource constraints are more prominent.

</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "ZheJiang University Of Technology",
        description: <>Studied software engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Web & Mobile app Development",
        description: <>Skilled in building scalable, responsive, and high-performance web applications using modern frameworks and technologies.</>,
        stack: ["React", "Vue", "React Native", "Expo", "iOS", "Android"]
      },
      {
        title: "WebGL Development",
        description: <>Expertise in creating interactive 3D graphics for web applications using WebGL, enhancing user experiences with high-performance rendering.</>,
        stack: ["Threejs", "Unity3D", "Cocos2d", "Unreal Engine", "3Ds Max", "3DS Maya"]
      },
      {
        title: "Clouding Computing Services & Third-party platforms",
        description: <>Knowledge of cloud platforms like AWS, Azure, or Google Cloud for scalable app hosting, deployment, and management.</>,
        stack: ["AWS", "GCP", "Firebase", "Azure", "RevenueCat", "Stripe"]
      },
    ],
  },
};

const blog = {
  label: "Work",
  title: "Contribution in projects...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = { 
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/ScreenShot Tool -20250211203501.png",
      alt: "image",
      orientation: "horizontal",
      title: "Virtual Home Designer",
      url: "https://web-gl-threejs-virtual-designer.vercel.app",
      git: "https://github.com/cerberusmaster/Virtual-Designer-UE",
      company: "lahoma",
      stack: ["WebGL", "React", "Threejs", "UE5", "Mobx", "WebSocket", "AWS Lambda"]
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
