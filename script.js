// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const toggleIcon = document.querySelector('.toggle-icon');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
toggleIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggleIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// Language translations
const translations = {
    es: {
        // Perfil
        'location': '📍 Brasil - PR - Araucaria',
        'contact_title': 'Contacto',
        'skills_title': 'Stack Técnico',
        'backend': 'Backend',
        'databases': 'Bases de Datos',
        'devops': 'DevOps y Herramientas',
        'ia': 'IA y Automatización',
        'languages_title': 'Idiomas',
        'spanish': 'Español',
        'portuguese': 'Portugués',
        'english': 'Inglés',
        'native': 'Nativo',
        'bilingual': 'Bilingüe',
        'technical': 'Técnico',
        'education_title': 'Formación',
        'education_degree': 'Técnico Superior en Informática',
        'education_institution': 'UPTJAA · 2015-2017',
        'profile_title': 'Perfil Profesional',
        'profile_text': 'Desarrollador backend con enfoque en buenas prácticas, código limpio y documentación clara. Capacidad autodidacta demostrada en proyectos personales que integran tecnologías modernas como AI Agents, Model Context Protocol (MCP) y automatización con Git. Especializado en identificar y corregir errores de código, implementar nuevas funcionalidades y documentar cambios de forma estructurada. Disponibilidad inmediata para trabajar.',
        'experience_title': 'Experiencia Profesional',
        
        // Chess Player
        'chess_title': 'Chess Player',
        'chess_org': 'Federación Venezolana de Ajedrez · Comité Olímpico Venezolano',
        'chess_date': 'ene. 2009',
        'chess_location': 'Caracas, Venezuela · Presencial',
        'chess_skills': 'Estrategia · Cálculo · Tácticas · Creatividad · Psicología',
        
        // Multicolor
        'multicolor_title': 'Auxiliar - Multicolor Têxtil LTDA',
        'multicolor_date': 'oct. 2023 - jul. 2025 · 1 año 10 meses · Rio do Sul, Brasil · Presencial',
        
        // ABAE Investigador
        'abae_investigador_title': 'Investigador (Jornada completa)',
        'abae_investigador_org': 'ABAE - Agencia Bolivariana para Actividades Espaciales',
        'abae_investigador_date': 'ene. 2021 - may. 2022 · 1 año 5 meses',
        'abae_investigador_location': 'Miranda La Carlota, Caracas, Venezuela · Presencia',
        'abae_investigador_desc': 'Área de investigación desarrollando y manteniendo scripts para procesamiento de datos del sistema satelital y consultas en bases de datos. También configuraba un motor de simulación existente. Aprendí a trabajar con código legacy, documentación técnica y flujos de trabajo en el entorno científico y tecnológico.',
        'abae_investigador_skills': 'Python · PostgreSQL · JavaScript · Git',
        
        // ABAE Pasante
        'abae_pasante_title': 'Pasante en Gestión de Bases de Datos',
        'abae_pasante_org': 'ABAE - Agencia Bolivariana para Actividades Espaciales · Contrato de prácticas',
        'abae_pasante_date': 'jul. 2020 - dic. 2020 · 6 meses',
        'abae_pasante_location': 'Miranda La Carlota, Caracas, Venezuela · Presencial',
        'abae_pasante_desc': 'Administración y mantenimiento de bases de datos. Desarrollo de scripts y automatización de tareas utilizando Python de forma complementaria.',
        'abae_pasante_skills': 'PostgreSQL · Python · Bases de datos',
        
        // Orinoco Dev
        'orinoco_title': 'Developer frontend junior - ORINOCO DEV',
        'orinoco_date': 'Jornada completa · feb. 2016 - abr. 2019 · 2 años 3 meses · Anzoategui, Venezuela · Híbrido',
        'orinoco_desc': 'Desarrollador Frontend Junior con enfoque en crear interfaces web funcionales y atractivas. Manejo de HTML, CSS, JavaScript y frameworks modernos para transformar diseños en experiencias digitales.',
        'orinoco_skills': 'JavaScript · HTML5 · CSS',
        
        // Especialización
        'specialization_title': 'Especialización Técnica',
        'spec1_title': '🤖 IA y Automatización',
        'spec1_desc': 'Implementación de AI Agents, Skills Agents y Model Context Protocol (MCP) para optimizar flujos de trabajo backend.',
        'spec2_title': '📄 Documentación Inteligente',
        'spec2_desc': 'Creación de LLMs.txt y agents.md para facilitar onboarding y mantenimiento de proyectos.',
        'spec3_title': '🐙 Git Avanzado',
        'spec3_desc': 'Manejo profesional de Git desde terminal, resolución de conflictos y automatización con GitHub Actions.',
        'spec4_title': '🧪 Testing y Calidad',
        'spec4_desc': 'Pruebas unitarias con PyTest, depuración sistemática y cobertura de código.',
        
        // Proyectos
        'projects_title': 'Proyectos Destacados',
        'project1_title': 'Galería Multimedia con Sistema de Tags',
        'project1_tech': 'Node.js · Express · MongoDB · JavaScript',
        'project1_desc': 'Plataforma tipo galería con buscador en tiempo real y sistema de clasificación por tags. Implementa subida/descarga de imágenes y persistencia en base de datos. Arquitectura MVC y documentación con agents.md.',
        'project2_title': 'Simulador de Combates Pokémon',
        'project2_tech': 'Python · FastAPI · PokeAPI · PyTest',
        'project2_desc': 'Cliente API que consume PokeAPI para calcular efectividades de combate, probabilidades de victoria y sinergias entre habilidades. Incluye tests unitarios con PyTest y documentación LLMs.txt.',
        'project3_title': 'Visualizador Interactivo Matrix',
        'project3_tech': 'Python · Tkinter · Event Loop',
        'project3_desc': 'Simulación de lluvia Matrix en tiempo real, demostrando manejo de event loops, animaciones y optimización de rendimiento en Python.',
        'project4_title': 'Element Warriors: Juego de Combate .io',
        'project4_tech': 'JavaScript · HTML5 Canvas · Node.js · Socket.io · MongoDB',
        'project4_desc': 'Juego multijugador .io en tiempo real con recolección de gemas y habilidades dinámicas que cambian según la clase y el elemento. En desarrollo activo: motor propio para edición de mapas y sistema de bots enemigos con inteligencia basada en regresión lineal, permitiendo partidas competitivas con comportamientos adaptativos. Implementa complejas mecánicas de combate, sinergias entre elementos, sistema de progresión y eventos en vivo. Arquitectura cliente-servidor con WebSockets para una experiencia escalable y fluida.',
        
        // Buenas Prácticas
        'practices_title': 'Buenas Prácticas y Metodologías',
        'practice1': 'Patrones MVC y Arquitectura Limpia',
        'practice2': 'Diseño de APIs RESTful',
        'practice3': 'Pruebas Unitarias (PyTest, Jest)',
        'practice4': 'Documentación clara y mantenible',
        'practice5': 'Control de versiones con Git CLI',
        'practice6': 'Comunicación asíncrona en remoto',
        'practice7': 'Integración de IA en flujos backend',
        'practice8': 'Code review y refactoring',
        
        // WhatsApp
        'whatsapp_text': '¿Interesado?'
    },
    
    pt: {
        // Perfil
        'location': '📍 Brasil - PR - Araucaria',
        'contact_title': 'Contato',
        'skills_title': 'Stack Técnico',
        'backend': 'Backend',
        'databases': 'Bancos de Dados',
        'devops': 'DevOps e Ferramentas',
        'ia': 'IA e Automação',
        'languages_title': 'Idiomas',
        'spanish': 'Espanhol',
        'portuguese': 'Português',
        'english': 'Inglês',
        'native': 'Nativo',
        'bilingual': 'Bilíngue',
        'technical': 'Técnico',
        'education_title': 'Formação',
        'education_degree': 'Técnico Superior em Informática',
        'education_institution': 'UPTJAA · 2015-2017',
        'profile_title': 'Perfil Profissional',
        'profile_text': 'Desenvolvedor backend com foco em boas práticas, código limpo e documentação clara. Capacidade autodidata demonstrada em projetos pessoais que integram tecnologias modernas como AI Agents, Model Context Protocol (MCP) e automação com Git. Especializado em identificar e corrigir erros de código, implementar novas funcionalidades e documentar mudanças de forma estruturada. Disponibilidade imediata para trabalhar.',
        'experience_title': 'Experiência Profissional',
        
        // Chess Player
        'chess_title': 'Chess Player',
        'chess_org': 'Federação Venezuelana de Xadrez · Comitê Olímpico Venezuelano',
        'chess_date': 'jan. 2009',
        'chess_location': 'Caracas, Venezuela · Presencial',
        'chess_skills': 'Estratégia · Cálculo · Táticas · Criatividade · Psicologia',
        
        // Multicolor
        'multicolor_title': 'Auxiliar - Multicolor Têxtil LTDA',
        'multicolor_date': 'out. 2023 - jul. 2025 · 1 ano 10 meses · Rio do Sul, Brasil · Presencial',
        
        // ABAE Investigador
        'abae_investigador_title': 'Pesquisador (Período integral)',
        'abae_investigador_org': 'ABAE - Agência Bolivariana para Atividades Espaciais',
        'abae_investigador_date': 'jan. 2021 - mai. 2022 · 1 ano 5 meses',
        'abae_investigador_location': 'Miranda La Carlota, Caracas, Venezuela · Presencial',
        'abae_investigador_desc': 'Área de pesquisa desenvolvendo e mantendo scripts para processamento de dados do sistema satelital e consultas em bancos de dados. Também configurava um motor de simulação existente. Aprendi a trabalhar com código legado, documentação técnica e fluxos de trabalho no ambiente científico e tecnológico.',
        'abae_investigador_skills': 'Python · PostgreSQL · JavaScript · Git',
        
        // ABAE Pasante
        'abae_pasante_title': 'Estagiário em Gestão de Bancos de Dados',
        'abae_pasante_org': 'ABAE - Agência Bolivariana para Atividades Espaciais · Contrato de estágio',
        'abae_pasante_date': 'jul. 2020 - dez. 2020 · 6 meses',
        'abae_pasante_location': 'Miranda La Carlota, Caracas, Venezuela · Presencial',
        'abae_pasante_desc': 'Administração e manutenção de bancos de dados. Desenvolvimento de scripts e automação de tarefas utilizando Python de forma complementar.',
        'abae_pasante_skills': 'PostgreSQL · Python · Bancos de dados',
        
        // Orinoco Dev
        'orinoco_title': 'Developer frontend junior - ORINOCO DEV',
        'orinoco_date': 'Período integral · fev. 2016 - abr. 2019 · 2 anos 3 meses · Anzoategui, Venezuela · Híbrido',
        'orinoco_desc': 'Desenvolvedor Frontend Junior com foco em criar interfaces web funcionais e atrativas. Domínio de HTML, CSS, JavaScript e frameworks modernos para transformar designs em experiências digitais.',
        'orinoco_skills': 'JavaScript · HTML5 · CSS',
        
        // Especialização
        'specialization_title': 'Especialização Técnica',
        'spec1_title': '🤖 IA e Automação',
        'spec1_desc': 'Implementação de AI Agents, Skills Agents e Model Context Protocol (MCP) para otimizar fluxos de trabalho backend.',
        'spec2_title': '📄 Documentação Inteligente',
        'spec2_desc': 'Criação de LLMs.txt e agents.md para facilitar onboarding e manutenção de projetos.',
        'spec3_title': '🐙 Git Avançado',
        'spec3_desc': 'Manejo profissional de Git desde o terminal, resolução de conflitos e automação com GitHub Actions.',
        'spec4_title': '🧪 Testes e Qualidade',
        'spec4_desc': 'Testes unitários com PyTest, depuração sistemática e cobertura de código.',
        
        // Projetos
        'projects_title': 'Projetos Destacados',
        'project1_title': 'Galeria Multimídia com Sistema de Tags',
        'project1_tech': 'Node.js · Express · MongoDB · JavaScript',
        'project1_desc': 'Plataforma tipo galeria com buscador em tempo real e sistema de classificação por tags. Implementa upload/download de imagens e persistência em banco de dados. Arquitetura MVC e documentação com agents.md.',
        'project2_title': 'Simulador de Batalhas Pokémon',
        'project2_tech': 'Python · FastAPI · PokeAPI · PyTest',
        'project2_desc': 'Cliente API que consome PokeAPI para calcular efetividades de batalha, probabilidades de vitória e sinergias entre habilidades. Inclui testes unitários com PyTest e documentação LLMs.txt.',
        'project3_title': 'Visualizador Interativo Matrix',
        'project3_tech': 'Python · Tkinter · Event Loop',
        'project3_desc': 'Simulação da chuva Matrix em tempo real, demonstrando manejo de event loops, animações e otimização de performance em Python.',
        'project4_title': 'Element Warriors: Jogo de Combate .io',
        'project4_tech': 'JavaScript · HTML5 Canvas · Node.js · Socket.io · MongoDB',
        'project4_desc': 'Jogo multijogador .io em tempo real com coleta de gemas e habilidades dinâmicas que mudam conforme a classe e o elemento. Em desenvolvimento ativo: motor próprio para edição de mapas e sistema de bots inimigos com inteligência baseada em regressão linear, permitindo partidas competitivas com comportamentos adaptativos. Implementa complexas mecânicas de combate, sinergias entre elementos, sistema de progressão e eventos ao vivo. Arquitetura cliente-servidor com WebSockets para uma experiência escalável e fluida.',
        
        // Boas Práticas
        'practices_title': 'Boas Práticas e Metodologias',
        'practice1': 'Padrões MVC e Arquitetura Limpa',
        'practice2': 'Design de APIs RESTful',
        'practice3': 'Testes Unitários (PyTest, Jest)',
        'practice4': 'Documentação clara e mantenível',
        'practice5': 'Controle de versão com Git CLI',
        'practice6': 'Comunicação assíncrona remota',
        'practice7': 'Integração de IA em fluxos backend',
        'practice8': 'Code review e refatoração',
        
        // WhatsApp
        'whatsapp_text': 'Interessado?'
    },
    
    en: {
        // Perfil
        'location': '📍 Brazil - PR - Araucaria',
        'contact_title': 'Contact',
        'skills_title': 'Tech Stack',
        'backend': 'Backend',
        'databases': 'Databases',
        'devops': 'DevOps & Tools',
        'ia': 'AI & Automation',
        'languages_title': 'Languages',
        'spanish': 'Spanish',
        'portuguese': 'Portuguese',
        'english': 'English',
        'native': 'Native',
        'bilingual': 'Bilingual',
        'technical': 'Technical',
        'education_title': 'Education',
        'education_degree': 'Higher Technical Degree in Computer Science',
        'education_institution': 'UPTJAA · 2015-2017',
        'profile_title': 'Professional Profile',
        'profile_text': 'Backend developer focused on best practices, clean code, and clear documentation. Self-taught ability demonstrated in personal projects integrating modern technologies such as AI Agents, Model Context Protocol (MCP), and Git automation. Specialized in identifying and fixing code errors, implementing new features, and documenting changes in a structured way. Immediate availability to work.',
        'experience_title': 'Professional Experience',
        
        // Chess Player
        'chess_title': 'Chess Player',
        'chess_org': 'Venezuelan Chess Federation · Venezuelan Olympic Committee',
        'chess_date': 'Jan. 2009',
        'chess_location': 'Caracas, Venezuela · On-site',
        'chess_skills': 'Strategy · Calculation · Tactics · Creativity · Psychology',
        
        // Multicolor
        'multicolor_title': 'Assistant - Multicolor Têxtil LTDA',
        'multicolor_date': 'Oct 2023 - Jul 2025 · 1 year 10 months · Rio do Sul, Brazil · On-site',
        
        // ABAE Researcher
        'abae_investigador_title': 'Researcher (Full-time)',
        'abae_investigador_org': 'ABAE - Bolivarian Agency for Space Activities',
        'abae_investigador_date': 'Jan 2021 - May 2022 · 1 year 5 months',
        'abae_investigador_location': 'Miranda La Carlota, Caracas, Venezuela · On-site',
        'abae_investigador_desc': 'Research area developing and maintaining scripts for satellite system data processing and database queries. Also configured an existing simulation engine. Learned to work with legacy code, technical documentation, and workflows in a scientific and technological environment.',
        'abae_investigador_skills': 'Python · PostgreSQL · JavaScript · Git',
        
        // ABAE Intern
        'abae_pasante_title': 'Database Management Intern',
        'abae_pasante_org': 'ABAE - Bolivarian Agency for Space Activities · Internship',
        'abae_pasante_date': 'Jul 2020 - Dec 2020 · 6 months',
        'abae_pasante_location': 'Miranda La Carlota, Caracas, Venezuela · On-site',
        'abae_pasante_desc': 'Database administration and maintenance. Script development and task automation using Python.',
        'abae_pasante_skills': 'PostgreSQL · Python · Databases',
        
        // Orinoco Dev
        'orinoco_title': 'Frontend Developer Junior - ORINOCO DEV',
        'orinoco_date': 'Full-time · Feb 2016 - Apr 2019 · 2 years 3 months · Anzoategui, Venezuela · Hybrid',
        'orinoco_desc': 'Junior Frontend Developer focused on creating functional and attractive web interfaces. Proficient in HTML, CSS, JavaScript and modern frameworks to transform designs into digital experiences.',
        'orinoco_skills': 'JavaScript · HTML5 · CSS',
        
        // Specialization
        'specialization_title': 'Technical Specialization',
        'spec1_title': '🤖 AI & Automation',
        'spec1_desc': 'Implementation of AI Agents, Skills Agents, and Model Context Protocol (MCP) to optimize backend workflows.',
        'spec2_title': '📄 Intelligent Documentation',
        'spec2_desc': 'Creation of LLMs.txt and agents.md to facilitate project onboarding and maintenance.',
        'spec3_title': '🐙 Advanced Git',
        'spec3_desc': 'Professional Git CLI usage, conflict resolution, and GitHub Actions automation.',
        'spec4_title': '🧪 Testing & Quality',
        'spec4_desc': 'Unit testing with PyTest, systematic debugging, and code coverage.',
        
        // Projects
        'projects_title': 'Featured Projects',
        'project1_title': 'Media Gallery with Tagging System',
        'project1_tech': 'Node.js · Express · MongoDB · JavaScript',
        'project1_desc': 'Gallery-like platform with real-time search and tag classification system. Implements image upload/download and database persistence. MVC architecture and agents.md documentation.',
        'project2_title': 'Pokémon Battle Simulator',
        'project2_tech': 'Python · FastAPI · PokeAPI · PyTest',
        'project2_desc': 'API client consuming PokeAPI to calculate battle effectiveness, win probabilities, and skill synergies. Includes unit tests with PyTest and LLMs.txt documentation.',
        'project3_title': 'Matrix Interactive Visualizer',
        'project3_tech': 'Python · Tkinter · Event Loop',
        'project3_desc': 'Real-time Matrix rain simulation, demonstrating event loop handling, animations, and performance optimization in Python.',
        'project4_title': 'Element Warriors: .io Combat Game',
        'project4_tech': 'JavaScript · HTML5 Canvas · Node.js · Socket.io · MongoDB',
        'project4_desc': 'Real-time multiplayer .io game with gem collection and dynamic abilities that change based on class and element. In active development: custom map editor and enemy bot system with linear regression AI, enabling competitive matches with adaptive behaviors. Implements complex combat mechanics, elemental synergies, progression system, and live events. Client-server architecture with WebSockets for scalable and smooth experience.',
        
        // Best Practices
        'practices_title': 'Best Practices & Methodologies',
        'practice1': 'MVC Patterns & Clean Architecture',
        'practice2': 'RESTful API Design',
        'practice3': 'Unit Testing (PyTest, Jest)',
        'practice4': 'Clear and maintainable documentation',
        'practice5': 'Git CLI version control',
        'practice6': 'Asynchronous remote communication',
        'practice7': 'AI integration in backend workflows',
        'practice8': 'Code review and refactoring',
        
        // WhatsApp
        'whatsapp_text': 'Interested?'
    }
};

// Translation function
function translatePage(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    localStorage.setItem('preferred-language', lang);

    const t = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.innerHTML = t[key];
        }
    });
}

// Initialize language
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferred-language') || 'es';
    translatePage(savedLang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            translatePage(this.dataset.lang);
        });
    });
});

// WhatsApp button
const whatsappBtn = document.getElementById('whatsappButton');
const notification = document.getElementById('whatsappNotification');

if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
        notification.style.display = 'none';
        
        const feedback = document.createElement('div');
        feedback.textContent = 'Redirigiendo a WhatsApp...';
        feedback.style.position = 'fixed';
        feedback.style.bottom = '100px';
        feedback.style.right = '30px';
        feedback.style.backgroundColor = '#25D366';
        feedback.style.color = 'white';
        feedback.style.padding = '1rem';
        feedback.style.borderRadius = '8px';
        feedback.style.zIndex = '1001';
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.remove();
        }, 2000);
    });
}

// Print date
const printDateElement = document.getElementById('printDate');
if (printDateElement) {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    printDateElement.textContent = today.toLocaleDateString('es-ES', options);
}
