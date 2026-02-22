// ============================================
// CONFIGURACIÓN DE TRADUCCIÓN INTELIGENTE
// ============================================

const translations = {
    es: {
        // Perfil
        'location': '📍 Brasil ( PR - Araucaria)',
        'profile_title': 'Perfil Profesional',
        'profile_text': 'Desarrollador backend con enfoque en buenas prácticas, código limpio y documentación clara. Capacidad autodidacta demostrada en proyectos personales que integran tecnologías modernas como AI Agents, Model Context Protocol (MCP) y automatización con Git. Especializado en identificar y corregir errores de código, implementar nuevas funcionalidades y documentar cambios de forma estructurada. Disponibilidad inmediata para trabajar en horario España (GMT+1) desde Brasil.',
        
        // Contacto
        'contact_title': 'Contacto',
        
        // Skills
        'skills_title': 'Stack Técnico',
        'backend': 'Backend',
        'databases': 'Bases de Datos',
        'devops': 'DevOps y Herramientas',
        'ia': 'IA y Automatización',
        
        // Idiomas
        'languages_title': 'Idiomas',
        'spanish': 'Español',
        'portuguese': 'Portugués',
        'english': 'Inglés',
        'native': 'Nativo',
        'bilingual': 'Bilingüe',
        'technical': 'Técnico',
        
        // Educación
        'education_title': 'Formación',
        'education_degree': 'Técnico Superior en Informática',
        'education_institution': 'UPTJAA · 2015-2017',
        
        // NUEVO: Experiencia
        'experience_title': 'Experiencia Profesional',
        
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
        'whatsapp_text': '¿Interesado?',
    },
    
    pt: {
        // Perfil
        'location': '📍 Brasil ( PR - Araucaria)',
        'profile_title': 'Perfil Profissional',
        'profile_text': 'Desenvolvedor backend com foco em boas práticas, código limpo e documentação clara. Capacidade autodidata demonstrada em projetos pessoais que integram tecnologias modernas como AI Agents, Model Context Protocol (MCP) e automação com Git. Especializado em identificar e corrigir erros de código, implementar novas funcionalidades e documentar mudanças de forma estruturada. Disponibilidade imediata para trabalhar no horário da Espanha (GMT+1) desde o Brasil.',
        
        // Contacto
        'contact_title': 'Contato',
        
        // Skills
        'skills_title': 'Stack Técnico',
        'backend': 'Backend',
        'databases': 'Bancos de Dados',
        'devops': 'DevOps e Ferramentas',
        'ia': 'IA e Automação',
        
        // Idiomas
        'languages_title': 'Idiomas',
        'spanish': 'Espanhol',
        'portuguese': 'Português',
        'english': 'Inglês',
        'native': 'Nativo',
        'bilingual': 'Bilíngue',
        'technical': 'Técnico',
        
        // Educação
        'education_title': 'Formação',
        'education_degree': 'Técnico Superior em Informática',
        'education_institution': 'UPTJAA · 2015-2017',
        
        // NUEVO: Experiência
        'experience_title': 'Experiência Profissional',
        
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
        'project4_desc': 'Jogo multijogador .io em tempo real com coleta de gemas e habilidades dinâmicas que mudam conforme a classe e o elemento. Em desenvolvimento ativo: motor próprio para edição de mapas e sistema de bots inimigos com inteligência baseada em regressão linear, permitindo partidas competitivas com comportamentos adaptativos. Implementa mecânicas complexas de combate, sinergias entre elementos, sistema de progressão e eventos ao vivo. Arquitetura cliente-servidor com WebSockets para uma experiência escalável e fluida.',
        
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
        'whatsapp_text': 'Interessado?',
    },
    
    en: {
        // Perfil
        'location': '📍 Brazil ( PR - Araucaria)',
        'profile_title': 'Professional Profile',
        'profile_text': 'Backend developer focused on best practices, clean code, and clear documentation. Self-taught ability demonstrated in personal projects integrating modern technologies such as AI Agents, Model Context Protocol (MCP), and Git automation. Specialized in identifying and fixing code errors, implementing new features, and documenting changes in a structured way. Immediate availability to work in Spain timezone (GMT+1) from Brazil.',
        
        // Contacto
        'contact_title': 'Contact',
        
        // Skills
        'skills_title': 'Tech Stack',
        'backend': 'Backend',
        'databases': 'Databases',
        'devops': 'DevOps & Tools',
        'ia': 'AI & Automation',
        
        // Idiomas
        'languages_title': 'Languages',
        'spanish': 'Spanish',
        'portuguese': 'Portuguese',
        'english': 'English',
        'native': 'Native',
        'bilingual': 'Bilingual',
        'technical': 'Technical',
        
        // Educación
        'education_title': 'Education',
        'education_degree': 'Higher Technical Degree in Computer Science',
        'education_institution': 'UPTJAA · 2015-2017',
        
        // NEW: Experience
        'experience_title': 'Work Experience',
        
        // Especialización
        'specialization_title': 'Technical Specialization',
        'spec1_title': '🤖 AI & Automation',
        'spec1_desc': 'Implementation of AI Agents, Skills Agents, and Model Context Protocol (MCP) to optimize backend workflows.',
        'spec2_title': '📄 Intelligent Documentation',
        'spec2_desc': 'Creation of LLMs.txt and agents.md to facilitate project onboarding and maintenance.',
        'spec3_title': '🐙 Advanced Git',
        'spec3_desc': 'Professional Git CLI usage, conflict resolution, and GitHub Actions automation.',
        'spec4_title': '🧪 Testing & Quality',
        'spec4_desc': 'Unit testing with PyTest, systematic debugging, and code coverage.',
        
        // Proyectos
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
        'project4_desc': 'Real-time .io multiplayer game featuring gem collection and dynamic skills that change according to class and element. In active development: custom map editor and enemy bot system with intelligence based on linear regression, enabling competitive matches with adaptive behaviors. Implements complex combat mechanics, elemental synergies, progression system, and live events. Client-server architecture with WebSockets for a scalable and smooth experience.',
        
        // Buenas Prácticas
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
        'whatsapp_text': 'Interested?',
    }
};

// ============================================
// FUNCIÓN DE TRADUCCIÓN INTELIGENTE
// ============================================

function translatePage(lang) {
    // Actualizar botones activos
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // Guardar preferencia
    localStorage.setItem('preferred-language', lang);

    // Obtener traducciones
    const t = translations[lang];

    // Traducir elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = t[key];
            } else {
                element.innerHTML = t[key];
            }
        }
    });

    // Traducir placeholders específicos
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            element.placeholder = t[key];
        }
    });

    // Actualizar texto del botón WhatsApp
    const whatsappText = document.querySelector('.whatsapp-text');
    if (whatsappText) {
        whatsappText.textContent = t['whatsapp_text'];
    }
}

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Detectar idioma guardado o usar español por defecto
    const savedLang = localStorage.getItem('preferred-language') || 'es';
    
    // Aplicar traducción inicial
    translatePage(savedLang);
    
    // Event listeners para botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            translatePage(lang);
        });
    });
});

// ============================================
// RESTO DEL CÓDIGO EXISTENTE (theme toggle, whatsapp, etc)
// ============================================

// Theme Toggle con localStorage
const themeToggle = document.querySelector('.theme-toggle');
const toggleIcon = document.querySelector('.toggle-icon');
const html = document.documentElement;

// Verificar tema guardado
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

// Contador falso de WhatsApp
const whatsappBtn = document.getElementById('whatsappButton');
const notification = document.getElementById('whatsappNotification');

whatsappBtn.addEventListener('click', () => {
    notification.style.display = 'none';
    
    const feedback = document.createElement('div');
    feedback.textContent = '¡Redirigiendo a WhatsApp...';
    feedback.style.position = 'fixed';
    feedback.style.bottom = '100px';
    feedback.style.right = '30px';
    feedback.style.backgroundColor = 'var(--whatsapp-color)';
    feedback.style.color = 'white';
    feedback.style.padding = '1rem';
    feedback.style.borderRadius = '8px';
    feedback.style.zIndex = '1001';
    feedback.style.animation = 'fadeIn 0.3s';
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.remove();
    }, 2000);
});

// Animación de entrada
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Actualizar fecha en footer de impresión
const printDateElement = document.getElementById('printDate');
if (printDateElement) {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    printDateElement.textContent = today.toLocaleDateString('es-ES', options);
}
