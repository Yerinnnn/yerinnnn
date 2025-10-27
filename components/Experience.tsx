import Link from "next/link";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {/* Timeline Item 1: 크래프톤 정글 */}
          <Link className="timeline-item" href="/experience/jungle">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="timeline-date">2025.05 - 2025.10</span>
              <span className="timeline-category">🎓 교육</span>
              <h3 className="timeline-title">크래프톤 정글</h3>
              <p className="timeline-description">
                5개월간 합숙하며 심도있는 몰입과 동료 학습을 경험
              </p>
            </div>
          </Link>

          {/* Timeline Item 2: KT 에이블스쿨 */}
          <Link className="timeline-item" href="/experience/kt-able">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="timeline-date">2024.02 - 2024.08</span>
              <span className="timeline-category">🎓 교육</span>
              <h3 className="timeline-title">KT 에이블스쿨 (AI 개발자 트랙)</h3>
              <p className="timeline-description">
                AI 기술 학습 및 실전형 AI 서비스 개발 역량 확보
              </p>
            </div>
          </Link>

          {/* Timeline Item 3: 경력 */}
          <Link className="timeline-item" href="/experience/career">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="timeline-date">2021.02 - 2023.05</span>
              <span className="timeline-category">👩🏻‍💻 경력</span>
              <h3 className="timeline-title">백엔드 개발자</h3>
              <p className="timeline-description">
                AWS 기반 서버 운영 및 성능 최적화, 모니터링 및 장애 대응
              </p>
            </div>
          </Link>

          {/* Timeline Item 4: LinkUs */}
          <Link className="timeline-item" href="/experience/linkus">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="timeline-date">2019.02 - 2019.06</span>
              <span className="timeline-category">💼 동아리</span>
              <h3 className="timeline-title">
                실무자 컨택 연합동아리 링커스 (LinkUs)
              </h3>
              <p className="timeline-description">
                IT 업계 실무자 인터뷰를 통해 개발자의 역할과 산업 현황 탐구
              </p>
            </div>
          </Link>

          {/* Timeline Item 5: CADI */}
          <Link className="timeline-item" href="/experience/cadi">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="timeline-date">2018.02 - 2018.10</span>
              <span className="timeline-category">💼 동아리</span>
              <h3 className="timeline-title">IT 연합동아리 CADI</h3>
              <p className="timeline-description">
                IT 개발 연합동아리 운영진 및 웹 개발팀 PM으로 활동
              </p>
            </div>
          </Link>

          {/* Timeline Item 6: SUNNY */}
          <Link className="timeline-item" href="/experience/sunny">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="timeline-date">2018.02 - 2018.08</span>
              <span className="timeline-category">❤️ 봉사활동</span>
              <h3 className="timeline-title">SK 대학생 자원봉사단 SUNNY</h3>
              <p className="timeline-description">
                세대 간 소통을 주제로 한 자원봉사 활동
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
