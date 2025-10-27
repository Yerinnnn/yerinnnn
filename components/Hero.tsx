export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            안녕하세요 👋
            <br />
            <span className="gradient-text">책임감 있는 개발자</span>
            <br />
            <span className="name-text">신예린</span>입니다
          </h1>
          <p className="hero-description">
            사용자 경험을 최우선으로 생각하며,
            <br />
            안정적이고 확장 가능한 서비스를 만드는 것을 추구합니다.
          </p>
          <div className="hero-contact-info">
            <a href="tel:+821040348342" className="hero-contact-item">
              <span className="contact-icon-small">📱</span>
              <span>010-4034-8342</span>
            </a>
            <a
              href="mailto:shinyerin0216@gmail.com"
              className="hero-contact-item"
            >
              <span className="contact-icon-small">✉️</span>
              <span>shinyerin0216@gmail.com</span>
            </a>
            <a
              href="https://github.com/Yerinnnn"
              target="_blank"
              className="hero-contact-item"
            >
              <span className="contact-icon-small">💼</span>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/yerinnnn"
              target="_blank"
              className="hero-contact-item"
            >
              <span className="contact-icon-small">🔗</span>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://velog.io/@yerinnnn/posts"
              target="_blank"
              className="hero-contact-item"
            >
              <span className="contact-icon-small">✍️</span>
              <span>Tech Blog</span>
            </a>
          </div>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              프로젝트 보기
            </a>
            <a href="#experience" className="btn btn-secondary">
              경력 보기
            </a>
          </div>
        </div>
        <div className="hero-illustration">
          <div className="floating-card card-1">💻</div>
          <div className="floating-card card-2">🚀</div>
          <div className="floating-card card-3">⚡</div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
}
