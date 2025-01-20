import './App.css'

import { Navbar, About, Skills, Experience, Education, Footer } from './components';

function App() {
  const data = {
    about: "",

    skills: [
      "AWS CERTIFIED CLOUD PRACTITIONER CLF",
      "Desarrollo Backend y Frontend: Python, React, JavaScript y Node.js",
      "Automatización de Pruebas: Selenium, Cypress, Playwright, Postman",
      "Pruebas de API: Uso de Postman para validación y pruebas de servicios web",
      "Bases de Datos: PostgreSQL, SQL",
      "Ejecución de pruebas funcionales y no funcionales.",
      "Metodologías Ágiles: Scrum y Kanban",
      "CI/CD: Integración y automatización de procesos",
      "Control de Versiones: Git, GitHub",
      "Autonomía para trabajar",
      "Herramientas de reportes y seguimiento"
    ],

    experience: [
      {
        company: "Auction",
        position: "QA Manual - QA Automation",
        period: "Feb 2023 - Abr 2023",
        description: "Como profesional en Quality Assurance (QA), participé en el desarrollo de software en roles de QA Manual y Automatizado. Realicé la revisión de requisitos, el diseño de casos de prueba y pruebas de funcionalidad y usabilidad."
      },
      {
        company: "Expensify | Freelancer",
        position: "QA Manual - QA Automation",
        period: "Jun 2023 - Dic- 2023",
        description: "Profesional en Control de Calidad (Quality Assurance - QA) con experiencia en pruebas de software, automatización, resolución de errores y garantía de calidad. Trabajé junto a equipos de desarrollo para asegurar que el software cumpliera con los requisitos y estándares, optimizando tanto la eficiencia como la seguridad del producto. Estos resultados pueden observarse en proyectos públicos como el repositorio de Expensify, disponible en GitHub."
      },
      {
        company: "Remotasks",
        position: "QA Engineer Intern",
        period: "2023",
        description: "Durante una pasantía, ejecuté pruebas manuales, documenté casos de prueba y reporté errores en Jira. Colaboré con el equipo de desarrollo en un entorno Agile."
      }
    ],

    education: [
      {
        title: "AWS Certified Cloud Practitioner",
        description: "Conocimientos fundamentales sobre servicios e infraestructura de AWS",
        certifications: ["AWS: Cloud Computing"],
        certifications: ["NÚMERO DE VALIDACIÓN: b342c73aa8144761a58bd29b114de5b6"],
      },
      {
        title: "Free Range Testers / Udemy",
        certifications: ["Postman", "Selenium", "Cypress", "Playwright", "Python/Django", "React", "PostgreSQL"]
      },
      {
        title: "Academia Platzi",
        certifications: ["AWS: Cloud Computing", "FastAPI", "Python", "Backend Architecture"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900"> {/* Base dark background */}
      {/* Side gradient backgrounds */}
      <div className="fixed inset-0 flex justify-center">
        <div className="max-w-6xl w-full h-full relative">
          {/* Left side gradient */}
          <div className="absolute left-0 top-0 h-full w-[50vw] transform -translate-x-full bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900/90" />
          {/* Right side gradient */}
          <div className="absolute right-0 top-0 h-full w-[50vw] transform translate-x-full bg-gradient-to-l from-gray-900 via-gray-900 to-gray-900/90" />
          {/* Main content background */}
          <div className="absolute inset-0 bg-[#0a0a0a]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col min-h-screen">
        {/* Navbar wrapper */}
        <div className="w-full bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-gray-800">
          <Navbar />
        </div>

        {/* Main content */}
        <div className="flex-grow">
          <main className="max-w-6xl mx-auto px-4 py-8 w-full">
            <About content={data.about} />
            <Skills skills={data.skills} />
            <Experience experiences={data.experience} />
            <Education items={data.education} />
          </main>
        </div>

        <Footer />
      </div>

      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-pink-500/5" />
      </div>
    </div>
  );
};

export default App;
