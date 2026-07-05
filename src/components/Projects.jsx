import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: 'Hunted.in',
    tagline: 'Online Clothing E-Commerce Platform',
    description: 'A full-featured online clothing website with product browsing, filtering, and a seamless shopping experience. Built with modern web technologies and responsive design.',
    tags: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'E-Commerce'],
    icon: '👕',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.08))',
    features: ['Product Catalog', 'Filter & Search', 'Responsive Design', 'User Interface'],
    status: 'Completed',
  },
  {
    id: 2,
    name: 'Nexus',
    tagline: 'Online Business Analysis Platform',
    description: 'A comprehensive business analysis web application providing data-driven insights, analytics dashboards, and intelligent reporting for business intelligence needs.',
    tags: ['Python', 'Power BI', 'Data Analysis', 'Dashboard', 'AI'],
    icon: '📊',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(99, 102, 241, 0.08))',
    features: ['Analytics Dashboard', 'Data Visualization', 'Business Reports', 'AI Insights'],
    status: 'Completed',
  },
  {
    id: 3,
    name: 'Global Superstore BI Dashboard',
    tagline: 'Business Intelligence Dashboard — Power BI',
    description: 'An interactive Power BI dashboard built on the Global Superstore dataset, delivering end-to-end business intelligence insights including sales trends, regional performance, profit analysis, and KPI tracking across product categories.',
    tags: ['Power BI', 'Data Analytics', 'Business Intelligence', 'Data Visualization'],
    icon: '🌍',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(16, 185, 129, 0.08))',
    features: ['Sales Trend Analysis', 'Regional Performance', 'Profit & KPI Tracking', 'Interactive Filters'],
    status: 'Completed',
  },
];

function ProjectCard({ project, index }) {
  return (
    <div
      className="project-card"
      style={{
        '--card-color': project.color,
        '--card-gradient': project.gradient,
        animationDelay: `${index * 0.2}s`,
      }}
    >
      {/* Top Bar */}
      <div className="project-card-top">
        <div className="project-icon" style={{ background: project.gradient, borderColor: `${project.color}30` }}>
          <span>{project.icon}</span>
        </div>
        <div className="project-status">
          <span className="status-dot-green" />
          {project.status}
        </div>
      </div>

      {/* Content */}
      <div className="project-content">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-tagline" style={{ color: project.color }}>{project.tagline}</p>
        <p className="project-desc">{project.description}</p>
      </div>

      {/* Features */}
      <div className="project-features">
        {project.features.map((f, i) => (
          <span key={i} className="project-feature">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {f}
          </span>
        ))}
      </div>

      {/* Tags */}
      <div className="project-tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="project-tag" style={{ borderColor: `${project.color}25`, color: project.color }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Hover Glow */}
      <div className="project-glow" style={{ background: `radial-gradient(circle at 50% 100%, ${project.color}15, transparent 70%)` }} />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world solutions built with passion and precision — from e-commerce platforms to data intelligence tools.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Extra Activities */}
        <div className="extra-activities">
          <h3 className="extra-title">
            <span className="gradient-text">Extra Curricular</span> Activities
          </h3>
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-icon">🤖</div>
              <div className="activity-content">
                <h4>Arduino Radar Project</h4>
                <p>Science Exhibition Participant — Built an Arduino-based radar system demonstrating real-time object detection.</p>
                <div className="activity-meta">
                  <span>RVS College of Arts & Science</span>
                  <span className="activity-year">2025</span>
                </div>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-icon">🤟</div>
              <div className="activity-content">
                <h4>SignSpeak AI Project</h4>
                <p>YII '2026 Participant — Developed an AI-powered sign language recognition system to bridge communication gaps.</p>
                <div className="activity-meta">
                  <span>RVS College of Arts & Science</span>
                  <span className="activity-year">2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
