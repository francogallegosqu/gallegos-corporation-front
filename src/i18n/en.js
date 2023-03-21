export const en = {
  content: {
    hello: {
      test: 'Hello',
    },
    headers: {
      a: 'About Us | {n} Services | {n} Projects | {n} Blog | {n} Contact',
      car: '0 машин | {n} машина | {n} машины | {n} машин',
    },
    hero: {
      carrusel: {
        h2: 'THE BEST SOLUTIONS IN',
        h1: 'SOFTWARE | HARDWARE | APPS MOVILES',
        router: 'View More',
      },
    },
  },
}

export const english = {
  content: {
    id: 2,
    lang: 'en',
    headers: [
      { name: 'Home', path: 'home' },
      { name: 'About', path: 'about' },
      { name: 'Service', path: 'service' },
      { name: 'Project', path: 'project' },
      { name: 'Blog', path: 'blog' },
      { name: 'Contact', path: 'contact' },
    ],
    hero: {
      carrusel: [
        {
          h1: 'SOFTWARE',
          h2: 'THE BEST SOLUTIONS IN',
          router: 'Start',
        },
        {
          h2: 'THE BEST SOLUTIONS IN',
          h1: 'WEB3',
          router: 'Start',
        },
        {
          h2: 'THE BEST SOLUTIONS IN',
          h1: 'APPS MOVILES',
          router: 'Start',
        },
      ],
    },
    //home
    service: {
      title: 'Our Services',
      subtitle: 'Services We Offer',
      text: `Improving the efficiency of your work thanks to the automation of
      processes, increasing the productivity of your company.`,
      backService: 'All Services',
      grid: [
        {
          id: 'grid-item-one',
          img: '/assets/icons/icon-development.svg',
          title: 'Web Development',
          path: 'web',
          content: `Your website is the first presentation to your potential
          customers, that is why an impact web design is important.`,
          buttonName: 'Learn More',
          buttonImg: '@/assets/icons/arrow-lg-icon.svg',
        },
        {
          id: 'grid-item-two',
          img: '/assets/icons/icon-digital.svg',
          title: 'Digital Marketing',
          path: 'marketing',
          content: `Reach your audience at the best time with powerful
          automations.`,
          buttonName: 'Learn More',
          buttonImg: '@/assets/icons/arrow-lg-icon.svg',
        },
        {
          id: 'grid-item-three',
          img: '/assets/icons/icon-apps.svg',
          title: 'App Development',
          path: 'apps',
          content: `Creating simple software that can be used on devices
          Mobile phones such as tablets and cell phones.`,
          buttonName: 'Learn More',
          buttonImg: '@/assets/icons/arrow-lg-icon.svg',
        },
        {
          id: 'grid-item-four',
          img: '/assets/icons/icon-seo.svg',
          title: 'Seo Services',
          path: 'seo',
          content: `Strategies and optimization techniques in a web page so that it
          appear organically on Internet search engines like Google,
          Yahoo or Youtube.`,
          buttonName: 'Learn More',
          buttonImg: '@/assets/icons/arrow-lg-icon.svg',
        },
      ],
    },
    //another section
    services: {
      webdevelopment: {
        title: 'Web Development',
        phrase: 'A website for you',
        message:
          'Improvement of the efficiency of your work thanks to the automation of processes, increasing the productivity of your company.',
        bar: {
          title:
            'We develop a powerful website for you to publish what you want, from wherever you want.',
          list: [
            'Software that adapts to your entrepreneurship, business or personal brand.',
            'You can customize it however you want.',
            'We provide personalized advice that adapts to you.',
          ],
        },
        phraseTwo: 'We create what you need to take off on the internet',
        grid: [
          {
            id: 'wedevelopmente-one',
            number: '01.',
            title: 'Custom professional web design',
            text: 'We design professional web pages tailored for all types of companies and brands.',
          },
          {
            id: 'wedevelopmente-two',
            number: '02.',
            title: 'Hosting for fast loading',
            text: 'Our team offers the best loading speed on the market for your web design.',
          },
          {
            id: 'wedevelopmente-three',
            number: '03.',
            title: 'Diseño responsive de tu web',
            text: 'We generate web designs that adapt and are displayed on all types of mobile devices.',
          },
          {
            id: 'wedevelopmente-four',
            number: '04.',
            title: 'Optimization for Google',
            text: 'We carry out optimized web design to boost your brand towards Google and other search engines.',
          },
        ],
      },
      seo: {
        title: 'SEO service',
        phrase: 'Optimize your website now',
        message:
          'It consists of persuading search engines like Google, Bing and Yahoo, to recommend your content to their users as the best solution to their problems.',
        important: {
          title: 'Why is SEO important?',
          list: [
            {
              id: 'important-one',
              img: '/assets/icons/services/bull-icon.svg',
              text: 'Optimize your content: That is, improve the experience for both the user who reads you and the search engines.',
            },
            {
              id: 'important-two',
              img: '/assets/icons/services/coin-icon.svg',
              text: `Drive organic traffic to your website: Which means more visits that can become customers.
              `,
            },
            {
              id: 'important-three',
              img: '/assets/icons/services/like-icon.svg',
              text: 'Gain authority: Because you can position yourself as an expert in your industry and gain the trust of both Google and people.',
            },
            {
              id: 'important-four',
              img: '/assets/icons/services/deliver-icon.svg',
              text: `Capture leads: Attract people who don't know you exist and convert them into customers.
              `,
            },
          ],
        },
        strategy: {
          title: 'Strategies',
          subtitle: 'How does it work',
          list: [
            {
              id: 'strategy-one',
              number: '01.',
              title: 'technical factors',
              text: 'They are a fundamental basis for search engines to understand the hierarchy of your website, what the content is about and what it is related to. Google will appreciate these efforts and so will your users. In the technical factors you find:',
              list: ['charging speed', 'XML sitemap', 'HTML Semantics'],
            },
            {
              id: 'strategy-two',
              number: '02.',
              title: 'strategic content',
              text: `It is about optimizing all the content on your website to answer people's questions and so that Google considers giving you visibility in the first search results. Among the factors to take into account are:
              `,
              list: [
                'keyword search',
                'Optimization of meta titles and meta descriptions',
                'Interlinking',
              ],
            },
            {
              id: 'strategy-three',
              number: '03.',
              title: 'Authority',
              text: 'The search engine measures the popularity of your website through domain authority and page authority. This will make Google trust the content you generate and position you at the top of the top. This includes:',
              list: [
                'External links to your website',
                'user experience',
                'Optimization for mobile devices',
              ],
            },
          ],
        },
      },
      apps: {
        title: 'Mobile application development',
        phrase: 'Development of Apps to suit you',
        message:
          'It covers all the processes of creating and launching a mobile application, or specific, as it refers to the coding and implementation of the application.',
      },
    },
    firstImage: {
      title: 'Future Technology',
      subtitle: 'We = Infinite Solutions',
    },
    aboutUs: {
      title: 'About Us',
      year: 'Always',
      subtitle: 'Trusted By Clients Worldwide Since',
      text: `Gallegos Corporation was born with the objective of providing solutions
      technologies in a technological world.`,
      grid: [
        {
          id: 'row-second-one',
          img: '/assets/icons/about-us/field-icon.svg',
          title: 'First in the Field',
          content: `Experts in the field of software, hardware maintenance and
          advertising strategies.`,
        },
        {
          id: 'row-second-two',
          img: '/assets/icons/about-us/reach-icon.svg',
          title: 'Easy to Reach',
          content: 'We are willing to advise and specify your projects.',
        },
        {
          id: 'row-second-three',
          img: '/assets/icons/about-us/world-icon.svg',
          title: 'Services Worldwide',
          content: `We work with clients globally on all of our
          services.`,
        },
        {
          id: 'row-second-four',
          img: '/assets/icons/about-us/world-icon.svg',
          title: '24/7 Support',
          content: `Attention through our official contacts, with information
          truthful, quality of service and the protection of your data.`,
        },
      ],
      about: {
        header: 'Details of Our History',
        title: 'About Us',
        subtitle: 'Who we are',
        text: `We live in a world where technology is becoming a
        essential part of our life. Businesses depend on factors
        goals to create new solutions for people to improve
        their lives, focusing on bringing commodities and mobility as a
        service. Gallegos Corporation brings the most complete solutions that
        allow businesses and companies to grow on a large scale with a service of
        first.`,
      },
      vision: {
        title: 'Vision',
        textOne: ` Gallegos Corp. aims to bring digital transformation
        unsurpassed to the business world when working with technologies of
        leading trend.`,
        textTwo: `Achieving our goal by hiring a team
        experienced and talented in key industries, following the
        top trending technologies around the world and learning
        about them, and adopting a comprehensive methodology provided by
        our experienced partner in Tokyo.`,
      },
      mision: {
        title: 'Mission',
        textOne: `We intend to live up to this VUCA world
        (volatility, uncertainty, complexity and ambiguity) as a
        growing software development company.`,
        textTwo: `Our team has spent a lot of time in many disciplines of the
        development process. Work closely with our
        partners provides us with the security and agility necessary to deliver
        outstanding services and products.`,
      },
    },
    whyChoose: {
      title: 'Why Choose Us',
      work: 'to Work',
      subtitle: 'Why Our Clients Choose',
      subtitleTwo: `With
      Us`,
      text: 'We are characterized by offering the best user experience with the best technology.',
      grid: [
        {
          id: 'row-second-one-why',
          number: '01.',
          title: 'Latest Technologies',
          content: `We look for solutions with the latest technology on the market to
          take your project to another level.`,
        },
        {
          id: 'row-second-two-why',
          number: '02.',
          title: 'Unique Solutions',
          content: `Each problem is treated in a unique way, so is your solution
          It will be unique and innovative.`,
        },
        {
          id: 'row-second-three-why',
          number: '03.',
          title: 'Powerful Strategies',
          content: `We focus on finding the best strategy to solve your
          problem.`,
        },
      ],
    },
    clients: {
      project: {
        title: 'Completed Projects',
      },
      client: {
        title: 'Satisfied Customers',
      },
      job: {
        title: 'Jobs Created',
      },
      experience: {
        title: 'Years of Experience',
      },
    },
    briefCaseTitle: {
      title: 'Portfolio',
      subtitle: 'Our Work',
      button: 'See More',
    },
    slider: {
      title: 'More than 50 clients around the world trust us',
    },
    testimonial: {
      title: 'Testimonials',
      subtitle: 'Who trust us',
      grid: {
        cambioMas: {
          title: 'Cambio mas',
          category: 'Exchange house',
          text: 'An impeccable and innovative work of the best quality.',
        },
        TechymTel: {
          title: 'Techym Tel',
          category: 'Telecommunications',
          text: 'They designed our entire website with the best quality.',
        },
        coronel: {
          title: 'Coronel es de la Rumba',
          category: 'music orchestra',
          text: 'They helped me expand and build trust with my clients.',
        },
        corpoPerez: {
          title: 'Corporación Perez',
          category: 'supply dealer',
          text: `SEO services helped us generate more sales and more
          market expansion.`,
        },
        momentsBrand: {
          title: 'Moments and Brands',
          category: 'Photography studio',
          text: 'They created a functional and aesthetic design on my website.',
        },
      },
    },
    contact: {
      title: 'Contact',
      init: 'Start Your Project',
      subtitle: `We will contact you within 24 hours and your
      information will be kept private.`,
      dangerMessage: 'Fill in the Fields Correctly!',
      form: {
        name: 'Name',
        email: 'Email',
        file: 'Development File',
        business: 'Company',
        subject: 'Subject',
        message: 'Comment your problem',
        send: 'Send',
        sent: 'Sending',
      },
      congratulations: {
        message: 'YOUR NEW PROJECT IS ON THE WAY!',
        thank: 'THANK YOU!!',
      },
      errorMessage: {
        message: 'Oops! Something went wrong',
        thank: 'Try Again',
      },
      serverError: {
        message: `It's not you, 
        it's us!`,
        advice: 'Contact us by phone',
      },
    },
    footer: {
      contact: 'Contact Information',
      network: 'Our Social Networks',
    },
  },
}
