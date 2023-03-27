export const es = {
  content: {
    hello: {
      test: 'Hola',
    },
    headers: {
      a: 'Nosotros | {n} Servicios | {n} Proyectos | {n} Blog | {n} Contacto',
      car: '0 машин | {n} машина | {n} машины | {n} машин',
    },
    hero: {
      carrusel: {
        h2: 'LAS MEJORES SOLUCIONES EN',
        h1: 'SOFTWARE | HARDWARE | APPS MOVILES',
        router: 'Conoce Más',
      },
    },
  },
}

export const spanish = {
  content: {
    id: 1,
    lang: 'es',
    headers: [
      { name: 'Home', path: 'home' },
      { name: 'Nosotros', path: 'about' },
      { name: 'Servicios', path: 'service' },
      { name: 'Proyectos', path: 'projects' },
      // { name: 'Blog', path: 'blog' },
      { name: 'Contacto', path: 'contact' },
    ],
    hero: {
      carrusel: [
        {
          h1: 'SOFTWARE',
          class: 'a',
          h2: 'LAS MEJORES SOLUCIONES EN',
        },
        {
          h2: 'LAS MEJORES SOLUCIONES EN',
          h1: 'WEB3',
          class: 'a',
        },
        {
          h2: 'LAS MEJORES SOLUCIONES EN',
          h1: 'APPS MOVILES',
          class: 'apps',
        },
      ],
      button: {
        path: 'apps',
        name: 'Comenzar',
      },
    },
    //home
    service: {
      title: 'Nuestros Servicios',
      subtitle: 'Servicios Que Ofrecemos',
      text: `Mejora de la eficacia de tu trabajo gracias a la automatización de
      procesos, aumentando la productividad de tu empresa.`,
      backService: 'Todos Los Servicios',
      grid: [
        {
          id: 'grid-item-one',
          img: '/assets/icons/icon-development.svg',
          title: 'Desarrollo Web',
          path: 'web',
          content: `Tu sitio web es la primera presentación a tus potenciales
          clientes, por eso es importante un diseño web de impacto.`,
          buttonName: 'Conoce Más',
          buttonImg: '/assets/icons/arrow-lg-icon.svg',
        },
        {
          id: 'grid-item-two',
          img: '/assets/icons/icon-digital.svg',
          title: 'Marketing Digital',
          path: 'marketing',
          content: `Llega a tu público en el mejor momento con potentes
          automatizaciones.`,
          buttonName: 'Conoce Más',
          buttonImg: '/assets/icons/arrow-lg-icon.svg',
        },
        {
          id: 'grid-item-three',
          img: '/assets/icons/icon-apps.svg',
          title: 'Desarrollo de Apps',
          path: 'apps',
          content: `Creación de software simple que pueda ser usado en dispositivos
          móviles como tabletas y celulares.`,
          buttonName: 'Conoce Más',
          buttonImg: '/assets/icons/arrow-lg-icon.svg',
        },
        {
          id: 'grid-item-four',
          img: '/assets/icons/icon-seo.svg',
          title: 'Servicio Seo',
          path: 'seo',
          content: `Estrategias y técnicas de optimización en una página web para que
          aparezca orgánicamente en buscadores de Internet como Google,
          Yahoo o Youtube.`,
          buttonName: 'Conoce Más',
          buttonImg: '/assets/icons/arrow-lg-icon.svg',
        },
        {
          id: 'grid-item-five',
          img: '/assets/icons/icon-software.svg',
          title: 'Software Personalizado',
          path: 'software',
          content: `Creación de software a medida que se adapte al rubro de tu negocio o empresa con el fin de optimizar tu productividad.
          `,
          buttonName: 'Learn More',
          buttonImg: '/assets/icons/arrow-lg-icon.svg',
        },
        {
          id: 'grid-item-six',
          img: '/assets/icons/icon-blockchain.svg',
          title: 'Blockchain',
          path: 'blockchain',
          content: `
          Ingresa tu empresa o negocio al mundo de las aplicaciones desentralizadas, en donde podrán interactuar con la información y los servicios de manera más segura y privada, sin la necesidad de intermediarios o plataformas centralizadas.
          `,
          buttonName: 'Learn More',
          buttonImg: '/assets/icons/arrow-lg-icon.svg',
        },
      ],
    },
    //another section
    services: {
      howork: {
        title: '¿Cómo trabajamos?',
        text: 'El ámbito y las características de una aplicación, plataforma o software personalizado influyen en los plazos del proceso de desarrollo.',
        list: [
          {
            id: 'howork-one',
            title: 'Estrategia',
            text: 'Se establecen los objetivos de la aplicación y las medidas de éxito, se analiza el mercado y la competencia, se investiga las necesidades de tus clientes y determinarán a qué usuarios y casos de uso servirá la aplicación.',
          },
          {
            id: 'howork-two',
            title: 'Planeamiento',
            text: 'Se registra cada detalle obtenido durante las estrategías, para organizarlas acorde a su prioridad y los requisitos del cliente. Así se realizan los planes operativos para que  se pueda alcanzar los objetivos.',
          },
          {
            id: 'howork-three',
            title: 'Diseño',
            text: 'La apariencia, las características y la función de la aplicación móvil comienzan a tomar forma durante la fase de diseño. Los equipos trazarán la experiencia del usuario y crearán las interfaces de usuario y los estados de la aplicación en varias fidelidades.',
          },
          {
            id: 'howork-four',
            title: 'Implementación',
            text: 'Es el paso en el que los equipos establecen la arquitectura técnica y la pila tecnológica, incluyendo el front-end, el back-end y las API, fijan los hitos de desarrollo, determinan el ciclo de vida del desarrollo de la aplicación y codifican la aplicación.',
          },
          {
            id: 'howork-five',
            title: 'Pruebas',
            text: 'Una fase crucial del proceso de desarrollo de aplicaciones móviles. Esto asegura una aplicación segura, que funcione de la manera que los usuarios necesitan ycque  funcionará donde la implementen.',
          },
          {
            id: 'howork-six',
            title: 'Lanzamiento',
            text: 'Es la fase final del proceso, una vez implementada la aplicación, ofrecemos soporte a los clientes que la utilizan y un seguimiento y mantenimiento continuos para garantizar que la aplicación esté disponible y funcione como debe.',
          },
        ],
      },
      webdevelopment: {
        title: 'Desarrollo Web',
        phrase: 'Una web Para Ti',
        message:
          'Como sabe, en la era digital en la que vivimos, una presencia en línea efectiva es esencial para cualquier negocio exitoso. Una página web es una herramienta clave para lograr esto.',
        messageTwo:
          'Desarrollar una página web personalizada para su negocio puede ofrecer muchas ventajas. Una página web le permite tener una presencia en línea sólida y bien diseñada, que puede ser utilizada para atraer y retener a nuevos clientes. Además, una página web también puede ser utilizada para mejorar la eficiencia de sus operaciones empresariales, permitiendo que los usuarios realicen transacciones y accedan a la información de su empresa con mayor facilidad y rapidez.',
        messageThree:
          'Una página web también puede ayudarlo a destacarse de la competencia. Ofrecer una presencia en línea atractiva y fácil de usar puede ser un factor decisivo para atraer nuevos clientes y mantener a los existentes. Además, una página web bien diseñada puede mejorar la percepción de su empresa como una empresa innovadora y comprometida con la satisfacción del cliente. Por último, una página web puede ayudar a su empresa a expandirse a nuevos mercados. Con una página web, puede llegar a una audiencia global y llegar a nuevos clientes que de otra manera podrían estar fuera de su alcance.',
        bar: {
          title:
            'Desarrollamos una potente página web para que publiques lo que quieras, desde donde tu quieras.',
          list: [
            'Software que se adapta a tu emprendimiento, negocio o marca personal.',
            'Puedes personalizarlo como quieras.',
            'Brindamos asesoría personalizada que se adapta a ti.',
          ],
        },
        phraseTwo: 'Creamos lo que necesitas para despegar en internet',
        grid: [
          {
            id: 'wedevelopmente-one',
            number: '01.',
            title: 'Diseño profesional a medida',
            text: 'Diseñamos páginas web profesionales a medida para todo tipo de empresas y marcas.',
          },
          {
            id: 'wedevelopmente-two',
            number: '02.',
            title: 'Hosting para carga rápida',
            text: 'Nuestro equipo ofrece la mejor velocidad de carga del mercado para tu diseño web.',
          },
          {
            id: 'wedevelopmente-three',
            number: '03.',
            title: 'Diseño responsivo de tu web',
            text: 'Generamos diseños web que  se adaptan y se visualizan en todo tipo de dispositivos móviles.',
          },
          {
            id: 'wedevelopmente-four',
            number: '04.',
            title: 'Optimización para Google',
            text: 'Realizamos diseño web optimizado para impulsar tu marca hacia Google y otros buscadores.',
          },
        ],
      },
      seo: {
        title: 'Servicio SEO',
        phrase: 'Optimiza tu web ahora',
        message:
          'A través de la implementación de estrategias de SEO y SEM, podemos ayudarlo a mejorar el posicionamiento de su sitio web en los motores de búsqueda y aumentar la cantidad de tráfico orgánico que recibe.',
        messageTwo:
          'El SEO (optimización para motores de búsqueda) y SEM (marketing en motores de búsqueda) son herramientas poderosas que pueden ayudar a su sitio web a ser más visible y atraer a más visitantes. El SEO es una estrategia que implica la optimización de su sitio web para que sea fácilmente accesible y comprensible por los motores de búsqueda, lo que puede mejorar su posición en los resultados de búsqueda. Por otro lado, el SEM es una estrategia de marketing que implica el uso de anuncios pagados en los resultados de búsqueda para aumentar la visibilidad de su sitio web.',
        messageThree:
          'La implementación de estrategias de SEO y SEM puede ofrecer muchas ventajas a su negocio. Como aumentar el tráfico orgánico a su sitio web, lo que puede mejorar la exposición de su empresa a nuevos clientes potenciales. También puede mejorar la visibilidad de su sitio web en línea, lo que puede ayudarlo a destacarse de la competencia y mejorar su reputación en línea.',
        important: {
          title: '¿Por qué es importante el SEO?',
          list: [
            {
              id: 'important-one',
              img: '/assets/icons/services/bull-icon.svg',
              text: 'Optimizar tu contenido: Es decir, mejorar la experiencia tanto para el usuario que te lee como para los motores de búsqueda.',
            },
            {
              id: 'important-two',
              img: '/assets/icons/services/coin-icon.svg',
              text: `Llevar tráfico orgánico a tu sitio web: Lo que significa más visitas que pueden convertirse en clientes.
              `,
            },
            {
              id: 'important-three',
              img: '/assets/icons/services/like-icon.svg',
              text: 'Ganar autoridad: Porque puedes posicionarte como experto en tu industria y ganar la confianza tanto de Google como de las personas.',
            },
            {
              id: 'important-four',
              img: '/assets/icons/services/deliver-icon.svg',
              text: 'Captar leads: Atraer personas que no saben que existes y convertirlas en clientes.',
            },
          ],
        },
        strategy: {
          title: 'Estrategias',
          subtitle: 'Cómo Funciona',
          list: [
            {
              id: 'strategy-one',
              number: '01.',
              title: 'Factores técnicos',
              text: 'Son base fundamental para que los buscadores entiendan la jerarquía de tu sitio web, de qué se trata el contenido y con qué se relaciona. Google valorará estos esfuerzos y también tus usuarios. En los factores técnicos encuentras:',
              list: [
                'Velocidad de carga',
                'Mapa del sitio XML',
                'Semántica HTML',
              ],
            },
            {
              id: 'strategy-two',
              number: '02.',
              title: 'Contenido estratégico',
              text: 'Se trata de optimizar todo el contenido de tu sitio web para responder a las preguntas de las personas y para que Google considere darte visibilidad en los primeros resultados de búsqueda.Entre los factores a tener en cuenta están:',
              list: [
                'Búsqueda de palabras clave',
                'Optimización de metatítulos y metadescripciones',
                'Interlinking',
              ],
            },
            {
              id: 'strategy-three',
              number: '03.',
              title: 'Autoridad',
              text: 'El motor de búsqueda mide la popularidad de tu sitio web a través de la autoridad de dominio y de la autoridad de página. Esto hará que Google confíe en el contenido que generas y te posicione en lo más alto del top. Esto incluye:',
              list: [
                'Enlaces externos a tu sitio web',
                'Experiencia de usuario',
                'Optimización para dispositivos móviles',
              ],
            },
          ],
        },
      },
      apps: {
        title: 'Desarrollo de Aplicaciones Móviles',
        phrase: 'Desarrollo de Apps a tu medida',
        message:
          'En la era digital en la que vivimos, el uso de dispositivos móviles se ha vuelto cada vez más común, y las aplicaciones móviles han demostrado ser una herramienta eficaz para conectarse con los usuarios de manera más efectiva.',
        messageTwo:
          'Desarrollar una aplicación móvil para su negocio puede ofrecer numerosas ventajas. Una aplicación móvil le permite conectarse con sus clientes de una manera más personalizada y directa, lo que puede mejorar la satisfacción y lealtad del cliente. Además, una aplicación móvil también puede ayudar a mejorar la eficiencia de sus operaciones empresariales, permitiendo que los usuarios realicen transacciones y accedan a la información de su empresa con mayor facilidad y rapidez.',
        messageThree:
          'Una aplicación móvil también puede ayudarlo a destacarse de la competencia. Ofrecer una solución móvil atractiva y fácil de usar puede ser un factor decisivo para atraer nuevos clientes y mantener a los existentes. Además, una aplicación móvil bien diseñada puede mejorar la percepción de su empresa como una empresa innovadora y comprometida con la satisfacción del cliente. Por último, una aplicación móvil puede ayudar a su empresa a expandirse a nuevos mercados. Con una aplicación móvil, puede llegar a una audiencia global y llegar a nuevos clientes que de otra manera podrían estar fuera de su alcance.',
      },
      web3: {
        title: 'Tecnología Blockchain',
        phrase:
          'Soluciones y Servicios con tecnología Blockchain en tus Aplicaciones',
        message:
          'La tecnología blockchain ha revolucionado la forma en que se gestionan y protegen los datos en línea, y ahora puede ser aplicada a su empresa a través del desarrollo de una aplicación basada en blockchain.',
        messageTwo:
          'El desarrollo de una aplicación basada en blockchain para su negocio puede ofrecer muchas ventajas. En primer lugar, la tecnología blockchain ofrece una seguridad sin igual para los datos de su empresa, ya que los datos son almacenados y protegidos en una red descentralizada e inmutable. Esto significa que los datos de su empresa son protegidos contra hackeos y fraudes, y también se pueden verificar y rastrear con facilidad. Además, una aplicación basada en blockchain también puede mejorar la transparencia de sus operaciones comerciales. La tecnología blockchain permite la creación de registros públicos y transparentes de transacciones, lo que puede ayudar a aumentar la confianza de sus clientes y mejorar la imagen de su empresa.',
        messageThree:
          'Una aplicación basada en blockchain también puede ayudarlo a destacarse de la competencia. Ofrecer una solución innovadora y segura a sus clientes puede ser un factor decisivo para atraer nuevos clientes y mantener a los existentes. Además, una aplicación basada en blockchain puede mejorar la percepción de su empresa como una empresa innovadora y comprometida con la seguridad de los datos de sus clientes. En resumen, el desarrollo de una aplicación basada en blockchain para su negocio puede ofrecer muchas ventajas y oportunidades de crecimiento. Si desea conocer más detalles sobre cómo una aplicación basada en blockchain podría ayudar a su negocio, no dude en ponerse en contacto con nosotros para conversar sobre las soluciones que podemos ofrecerle.',
        subservice: [
          {
            id: 1,
            title: 'Consultoría en desarrollo de proyectos con Blockchain',
            text: 'Nos enfocamos en proporcionar información y conocimientos a las empresas y organizaciones sobre cómo la tecnología puede mejorar su modelo de negocio y ofrecer nuevas oportunidades de crecimiento. Además de poder ayudar a las empresas a comprender las diferentes soluciones de Blockchain disponibles y cómo pueden ser implementadas en su negocio. Y si tienen un negocio nuevo pero no saben cómo implementarla, de igual forma se le brinda los conocimientos necesarios para llevarla a producción.',
            img: '/assets/service/blockchain/consultor.jpg',
          },
          {
            id: 2,
            title: 'Aplicaciones con Blockchain',
            text: 'Ethereum es una plataforma de blockchain que permite la creación de contratos inteligentes y aplicaciones descentralizadas (dApps). Algunas de las aplicaciones más comunes de Ethereum son criptomonedas, contratos inteligentes, Finanzas descentralizadas (DeFi), juegos NFTs, identidad digital, Votación electrónica, comercios y más. En resumen, Ethereum ha sido fundamental para el desarrollo del ecosistema DeFi y ha permitido la creación de aplicaciones descentralizadas que están transformando la forma en que interactuamos y hacemos negocios en línea. De tal forma que nos encargaremos de crear tu futura aplicación con dicha tecnología.',
            img: '/assets/service/blockchain/creacion-app.jpg',
          },
        ],
      },
      software: {
        title: 'Desarrollo de Software Personalizado',
        phrase: 'Tu tienes la idea, Nosotros los recursos.',
        message:
          'Como sabe, cada empresa es única en su industria y enfrenta desafíos específicos que no siempre pueden ser resueltos por soluciones de software existentes en el mercado. Es por eso que considero que el desarrollo de software personalizado puede ser la solución ideal para su empresa.',
        messageTwo:
          'El desarrollo de software personalizado implica crear una solución única y específica para su negocio, adaptada a sus necesidades y requerimientos. Esto significa que su empresa puede tener una solución de software única que no solo mejora la eficiencia y la productividad, sino que también puede mejorar la experiencia del usuario y aumentar la satisfacción del cliente. Además, el software personalizado ofrece la flexibilidad necesaria para adaptarse a los cambios en su empresa y en la industria. Puede ser escalado y mejorado fácilmente, y puede ser actualizado regularmente para mantenerse al día con las nuevas tecnologías y tendencias del mercado.',
        messageThree:
          'También vale la pena destacar que el software personalizado puede ayudar a su empresa a ser más competitiva. Al tener una solución única, puede destacar de la competencia y ofrecer una ventaja única a sus clientes y usuarios.',
        subservice: [
          {
            id: 1,
            title: 'Sistema personalizado para tu negocio o empresa',
            text: 'El desarrollo de software personalizado puede ser la solución perfecta para las necesidades únicas de su empresa. Podemos mejorar significativamente la eficiencia y la productividad de su empresa, mejorar la experiencia del usuario y aumentar la satisfacción del cliente y de su mismo personal. Creamos sus inventarios, manejo de personal, finanzas, administración de tiendas virtuales y más.',
            img: '/assets/service/software/system.jpg',
          },
        ],
        grid: [
          {
            id: 'software-one',
            number: '01.',
            title: 'Diseño profesional a medida',
            text: 'Diseñamos tu sistema o aplicación a medida para todo tipo de empresas o negocio.',
          },
          {
            id: 'software-two',
            number: '02.',
            title: 'Desarrollo de objetivos',
            text: 'Nuestro equipo ofrece la mejor asesoría para aterrizar tus ideas y llevarlas a la realidad.',
          },
          {
            id: 'software-three',
            number: '03.',
            title: 'Diseño responsivo de tu web',
            text: 'Generamos diseños que se adaptan y se visualizan en todo tipo de dispositivos.',
          },
          {
            id: 'software-four',
            number: '04.',
            title: 'Actualización de tu Sistema',
            text: 'No importa si tu software ya está creado, si aún tienes ideas nuevas, podemos implementarlas.',
          },
          {
            id: 'software-five',
            number: '05.',
            title: 'Mantenimiento de Primera',
            text: 'Nuestro equipo estará al pendiente de cualquier problema tecnico pueda ocurrir en el futuro, y resolverla de inmediato.',
          },
        ],
      },
    },
    firstImage: {
      title: 'Tecnología del Futuro',
      subtitle: 'Nosotros = Soluciones Infinitas',
    },
    aboutUs: {
      title: 'Sobre Nosotros',
      year: 'Siempre',
      subtitle: 'Confiado Por Clientes En Todo El Mundo Desde',
      text: `Gallegos Corporation Nació con el objetivo de brindar soluciones
      tecnológicas en un mundo tecnologico.`,
      grid: [
        {
          id: 'row-second-one',
          img: '/assets/icons/about-us/field-icon.svg',
          title: 'Primero en el Campo',
          content: `Expertos en el campo de software, mantenimiento de hardware y
          estrategias de publicidad.`,
        },
        {
          id: 'row-second-two',
          img: '/assets/icons/about-us/reach-icon.svg',
          title: 'Fácil de Alcanzar',
          content: 'Estamos dispuestos a asesorar y concretar tus proyectos.',
        },
        {
          id: 'row-second-three',
          img: '/assets/icons/about-us/world-icon.svg',
          title: 'Servicios en Todo el mundo',
          content: `Trabajamos con clientes a nivel mundial en todos nuestros
          servicios.`,
        },
        {
          id: 'row-second-four',
          img: '/assets/icons/about-us/support-icon.svg',
          title: 'Soporte 24/7',
          content: `Atención a través de nuestros contactos oficiales, con información
          veraz, calidad de servicio y la protección de sus datos.`,
        },
      ],
      about: {
        header: 'Detalles de Nuestra Historia',
        title: 'Sobre Nosotros',
        subtitle: 'Quienes Somos',
        text: `Vivimos en un mundo donde la tecnología se está convirtiendo en una
        parte esencial de nuestra vida. Las empresas dependen de factores
        objetivos para crear nuevas soluciones para que las personas mejoren
        sus vidas, enfocándose en traer commodities y movilidad como un
        servicio. Gallegos Corporation trae las soluciones más completas que
        permiten a negocios y empresas crecer a gran escala con un servicio de
        primera.`,
      },
      vision: {
        title: 'Visión',
        textOne: ` Gallegos Corp. tiene como objetivo brindar una transformación digital
        insuperable al mundo de los negocios al trabajar con tecnologías de
        tendencia líderes.`,
        textTwo: `Lograr nuestro objetivo mediante la contratación de un equipo
        experimentado y talentoso en industrias clave, siguiendo las
        principales tecnologías de tendencia en todo el mundo y aprendiendo
        sobre ellas, y adoptando una metodología integral proporcionada por
        nuestro socio experimentado en Tokio.`,
      },
      mision: {
        title: 'Misión',
        textOne: `Tenemos la intención de estar a la altura de este mundo VUCA
        (volatilidad, incertidumbre, complejidad y ambigüedad) como una
        empresa de desarrollo de software en crecimiento.`,
        textTwo: `Nuestro equipo ha dedicado mucho tiempo a muchas disciplinas del
        proceso de desarrollo. Trabajar en estrecha colaboración con nuestros
        socios nos brinda la seguridad y la agilidad necesarias para entregar
        servicios y productos sobresalientes.`,
      },
    },
    whyChoose: {
      title: 'Porqué Elegirnos',
      work: 'Trabajar',
      subtitle: 'Porque Nuestros Clientes Eligen',
      subtitleTwo: `Con
      Nosotros`,
      text: 'Somos caracterizados por ofrecer la mejor experiencia de usuario con la mejor tecnología.',
      grid: [
        {
          id: 'row-second-one-why',
          number: '01.',
          title: 'Últimas Tecnologías',
          content: `Buscamos soluciones con la última tecnología del mercado para
          llevar tu proyecto a otro nivel.`,
        },
        {
          id: 'row-second-two-why',
          number: '02.',
          title: 'Soluciones Únicas',
          content: `Cada problema es tratado de manera única, así tu solucion también
          será única e innovadora.`,
        },
        {
          id: 'row-second-three-why',
          number: '03.',
          title: 'Estrategias poderosas',
          content: `Nos enfocamos en buscar la mejor estrategía para dar solución a tu
          problema.`,
        },
      ],
    },
    clients: {
      project: {
        title: 'Proyectos Terminados',
      },
      client: {
        title: 'Clientes Satisfechos',
      },
      job: {
        title: 'Trabajos Creados',
      },
      experience: {
        title: 'Años de Experiencia',
      },
    },
    briefCaseTitle: {
      title: 'Portafolio',
      subtitle: 'Nuestros Trabajos',
      button: 'Ver Más',
    },
    slider: {
      title: 'Más de 50 clientes alrededor del mundo confían en nosotros',
    },
    testimonial: {
      title: 'Testimonios',
      subtitle: 'Quienes Confían en Nosotros',
      grid: {
        cambioMas: {
          title: 'Cambio mas',
          category: 'Casa de Cambio',
          text: 'Un trabajo impecable e innovador y de la mejor calidad.',
        },
        TechymTel: {
          title: 'Techym Tel',
          category: 'Telecomunicaciones',
          text: 'Diseñaron toda nuestra web con la mejor calidad.',
        },
        coronel: {
          title: 'Coronel es de la Rumba',
          category: 'Orquesta musical',
          text: 'Me ayudaron a expadirme y generar confianza a mis clientes.',
        },
        corpoPerez: {
          title: 'Corporación Perez',
          category: 'Distribuidor de suministros',
          text: `Los servicios SEO nos ayudaron a generar mayor ventas y mayor
          expansión de mercado.`,
        },
        momentsBrand: {
          title: 'Moments and Brands',
          category: 'Estudio de Fotografía',
          text: 'Crearon un diseño funcional y estético en mi página web.',
        },
      },
    },
    projects: {
      title: 'Catálogo de proyectos',
      subtitle: 'Últimos proyectos desarrollados',
    },
    contact: {
      title: 'Contacto',
      init: 'Inicia Tu Proyecto',
      subtitle: `Nos pondremos en contacto con usted dentro de las 24 horas y su
      información se mantendrá privada.`,
      dangerMessage: '¡Rellena los Campos Correctamente!',
      form: {
        name: 'Nombre',
        email: 'Correo Electronico',
        file: 'Archivo de Desarrollo',
        business: 'Empresa',
        subject: 'Asunto',
        message: 'Comenta tu problema',
        send: 'Enviar',
        sent: 'Enviando',
      },
      congratulations: {
        message: '¡TU NUEVO PROYECTO ESTA EN CAMINO!',
        thank: '¡¡GRACIAS!!',
      },
      errorMessage: {
        message: '¡UPS! Algo Salió Mal',
        thank: 'Intenta de Nuevo',
      },
      serverError: {
        message: '¡No eres Tú, Somos nosotros!',
        advice: 'Contactanos por nuestros telefonos',
      },
    },
    contactView: {
      title: 'CONTÁCTANOS',
      subtitle: 'Ofrecemos la mejor experiencia',
      message: `Si está buscando un software o aplicación que se adapte perfectamente a sus necesidades, entonces nuestros servicios personalizado es la opción ideal para su empresa o negocio.
      `,
      messageTwo:
        'Nos enorgullece ser una empresa líder en el desarrollo de software personalizado. Nuestro equipo de expertos puede ayudarlo en todo el proceso, desde el análisis de sus necesidades hasta el diseño, desarrollo y mantenimiento de su software.',
    },
    footer: {
      contact: 'Información de Contacto',
      network: 'Nuestras Redes Sociales',
    },
    wsp: {
      text: 'Hola, Deseo cotizar un proyecto sobre',
    },
  },
}
