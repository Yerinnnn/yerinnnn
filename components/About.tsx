export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">저를 소개합니다</p>

        <div className="about-content">
          <div className="about-text">
            <h3>👩‍💻 Who am I?</h3>
            <p className="about-intro">
              안녕하세요! 책임감 있는 개발자 <strong>신예린</strong>입니다.
            </p>
            <ul className="about-list">
              <li>
                새로운 것을 공부하고, 도전하는 것을 즐겨요! 대외활동, AI
                부트캠프, 합숙 부트캠프 등에 참가했어요.
              </li>
              <li>
                백엔드 개발 실무 경험을 통해, 사용자 경험을 최우선으로 생각하게
                되었어요.
              </li>
              <li>
                최근에는 인프라, DevOps에 궁금증이 생겨, 인프라, DevOps 역할을
                맡아 프로젝트를 진행했어요. 안정적이고 확장 가능한 서비스를
                설계하는 것의 중요성을 배울 수 있었어요.
              </li>
            </ul>
          </div>

          <div className="about-skills">
            <h3>🛠 Tech Stack</h3>

            <div className="skill-category">
              <h4>Main Skills</h4>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
