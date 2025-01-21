// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'emmron', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['emmron/my-project1', 'emmron/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: []
    },
  },
  seo: {
    title: 'Emmett Hoolahan - Software Developer',
    description: 'Full Stack Developer with over 8 years of experience delivering scalable, high-performance applications',
    imageURL: '',
  },
  social: {
    linkedin: 'emmett-hoolahan',
    email: 'emmetthoolahan@gmail.com',
    github: 'emmron',
    website: '',
    phone: '0405 864 506',
  },
  resume: {
    fileUrl: '/EmmettHoolahanCV-PlanCare.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'Django',
    'PostgreSQL',
    'Git',
    'Docker',
    'AWS',
    'REST APIs',
    'GraphQL',
    'HTML/CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Ordinary Agency',
      position: 'Web Developer',
      from: 'Dec 2022',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Roobix',
      position: 'Full Stack Web Developer',
      from: 'Jan 2022',
      to: 'Sept 2022',
      companyLink: '',
    },
    {
      company: 'PerthWeb',
      position: 'Web Developer',
      from: 'Sept 2020',
      to: 'Dec 2021',
      companyLink: '',
    },
    {
      company: 'PWD (Perth Web Design)',
      position: 'Web Developer / Native App Developer',
      from: 'Feb 2018',
      to: 'Aug 2019',
      companyLink: '',
    },
    {
      company: 'Airefrig Australia',
      position: 'IT Help Desk / Web Developer',
      from: 'Feb 2015',
      to: 'Aug 2016',
      companyLink: '',
    }
  ],
  educations: [
    {
      institution: 'Edith Cowan University',
      degree: 'Bachelor\'s Degree in Computer Science',
      from: '',
      to: '',
    }
  ],
  certifications: [],
  publications: [],
  blog: {
    source: 'dev',
    username: '', // Empty to hide blog section
    limit: 2,
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
