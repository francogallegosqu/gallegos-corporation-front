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
      { name: 'Proyectos', path: 'project' },
      { name: 'Blog', path: 'blog' },
      { name: 'Contacto', path: 'contact' },
    ],
    hero: {
      carrusel: [
        {
          h1: 'SOFTWARE',
          h2: 'LAS MEJORES SOLUCIONES EN',
          router: 'Comenzar',
        },
        {
          h2: 'LAS MEJORES SOLUCIONES EN',
          h1: 'WEB3',
          router: 'Comenzar',
        },
        {
          h2: 'LAS MEJORES SOLUCIONES EN',
          h1: 'APPS MOVILES',
          router: 'Comenzar',
        },
      ],
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
          buttonImg: '@/assets/icons/arrow-lg-icon.svg',
        },
        {
          id: 'grid-item-three',
          img: '/assets/icons/icon-apps.svg',
          title: 'Desarrollo de Apps',
          path: 'apps',
          content: `Creación de software simple que pueda ser usado en dispositivos
          móviles como tabletas y celulares.`,
          buttonName: 'Conoce Más',
          buttonImg: '@/assets/icons/arrow-lg-icon.svg',
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
          buttonImg: '@/assets/icons/arrow-lg-icon.svg',
        },
      ],
    },
    //another section
    services: {
      howork: {
        title: '¿Cómo trabajamos?',
        text: 'El ámbito y las características de una aplicación influyen en los plazos del proceso de desarrollo de aplicaciones móviles.',
        list: [
          {
            id: 'howork-one',
            title: 'Estrategia',
            text: 'Se establecen los objetivos de la aplicación y las medidas de éxito, se analiza el mercado y la competencia, se investiga las necesidades de tus clientes y determinarán a qué usuarios y casos de uso servirá la aplicación',
          },
          {
            id: 'howork-two',
            title: 'Estrategia',
            text: 'Se establecen los objetivos de la aplicación y las medidas de éxito, se analiza el mercado y la competencia, se investiga las necesidades de tus clientes y determinarán a qué usuarios y casos de uso servirá la aplicación',
          },
          {
            id: 'howork-three',
            title: 'Estrategia',
            text: 'Se establecen los objetivos de la aplicación y las medidas de éxito, se analiza el mercado y la competencia, se investiga las necesidades de tus clientes y determinarán a qué usuarios y casos de uso servirá la aplicación',
          },
        ],
      },
      webdevelopment: {
        title: 'Desarrollo Web',
        phrase: 'Una web Para Ti',
        message:
          'Mejora de la eficacia de tu trabajo gracias a la automatización de procesos, aumentando la productividad de tu empresa.',
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
            title: 'Diseño responsive de tu web',
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
          'Consiste en persuadir a los motores de búsqueda como Google, Bing y Yahoo, para que recomienden tu contenido a sus usuarios como la mejor solución a sus problemas.',
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
          'Abarca todos los procesos de creación y lanzamiento de una aplicación móvil, o específica, ya que se refiere a la codificación y la implementación de la aplicación.',
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
          img: '/assets/icons/about-us/world-icon.svg',
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
    footer: {
      contact: 'Información de Contacto',
      network: 'Nuestras Redes Sociales',
    },
  },
}
