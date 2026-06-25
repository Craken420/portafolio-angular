import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-curriculum',
  imports: [CommonModule],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css'
})
export class CurriculumComponent {
  sections = [
    {
      icon: '🧭',
      title: 'Perfil Profesional',
      type: 'paragraph',
      content:
        'Líder técnico con 7+ años de experiencia en desarrollo e integración de soluciones empresariales. Especializado en migraciones tecnológicas, arquitecturas híbridas on-premise/cloud, aplicaciones serverless, biometría y modernización de sistemas legacy. Capaz de estabilizar entornos críticos, liderar equipos multidisciplinarios y construir soluciones robustas en AWS y SAP.',
    },
    {
      icon: '🏆',
      title: 'Logros Relevantes',
      type: 'list',
      items: [
        '🔁 Migración completa de ERP Intelisis v3500 a v5000 y transición a SAP Business Application Studio, integrando CPIs y entornos híbridos.',
        '🧩 Arquitectura serverless multiruntime (Python + Node.js) con AWS Lambda, SAM CLI y API Gateway.',
        '🧠 Refactorización de SQL que redujo tiempos de consulta de horas a segundos.',
        '✋ Migración de sistema biométrico de C# con WebSocket a Node.js con librería nativa.',
        '🧰 Estabilización de apps en IIS y optimización de recursos y servicios externos.',
        '🚀 Ascenso a Líder Técnico liderando equipo de 6 personas en migración cloud.',
      ]
    },
    {
      icon: '📌',
      title: 'Proyectos Clave',
      type: 'projects',
      projects: [
        { title: 'Control de Huellas (.blop)', description: 'Reingeniería de solución C# a stack moderno (AWS + Node + Python + Vue + Postgres).' },
        { title: 'Infraestructura Biométrica', description: 'Gestión e integración de dispositivos en apps Windows/Web con soporte multi-dispositivo.' },
        { title: 'SAP-AWS Integration', description: 'Consumo de APIs SAP + CPIs + SQL/Postgres desde AWS vía Lambda.' },
        { title: 'Unificación de entornos Git', description: 'Consolidación y estabilización de entornos críticos en IIS.' },
      ]
    },
    {
      icon: '👥',
      title: 'Liderazgo y Gestión',
      type: 'list',
      items: [
        'Coordinación de equipos técnicos (hasta 6 personas).',
        'Estrategias de migración a la nube y modernización tecnológica.',
        'Organización de repositorios y control de versiones.',
      ]
    },
    {
      icon: '🌱',
      title: 'Soft Skills',
      type: 'list',
      items: [
        'Resolución de problemas complejos.',
        'Liderazgo técnico y mentoring.',
        'Comunicación inter-áreas y trato con proveedores.',
        'Trabajo bajo presión.',
        'Aprendizaje acelerado: "No lo sé, pero lo puedo aprender. No lo domino, pero lo puedo dominar."',
      ]
    },
    {
      icon: '🌐',
      title: 'Idiomas',
      type: 'list',
      items: [
        'Español: Nativo',
        'Inglés: Intermedio – Lectura técnica fluida, comunicación funcional.'
      ]
    },
    {
      icon: '💻',
      title: 'Contribuciones a la Comunidad',
      type: 'list',
      items: [
        'Proyectos y prácticas en GitHub.',
        'Participación y soluciones en Stack Overflow.'
      ]
    }
  ];

  skills = [
    [
      { name: 'Python (avanzado)', icon: 'fab fa-python' },
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'C# (experto)', icon: 'fas fa-code' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'SQL Server, PostgreSQL', icon: 'fas fa-database' },
    ],
    [
      { name: 'Vue.js', icon: 'fab fa-vuejs' },
      { name: 'Angular', icon: 'fab fa-angular' },
      { name: 'Delphi (migración)', icon: 'fas fa-retweet' },
      { name: 'FastAPI', icon: 'fas fa-rocket' },
      { name: 'Windows Forms, Web Forms', icon: 'fas fa-window-restore' },
    ],
    [
      { name: 'AWS Lambda, SAM CLI, API Gateway, Docker', icon: 'fab fa-aws' },
      { name: 'SAP HANA Cloud, SAP Business Application Studio, CPIs', icon: 'fas fa-cloud' },
      { name: 'IIS (migración, seguridad, tuning)', icon: 'fas fa-server' },
      { name: 'Git, CI/CD pipelines, serverless', icon: 'fab fa-git-alt' },
      { name: 'Biometría: U.are.U 4500/5300', icon: 'fas fa-fingerprint' },
    ]
  ];
}
