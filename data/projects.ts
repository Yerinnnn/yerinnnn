import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "hoit",
    title: "Hoit",
    period: "2025.08 - 2025.09",
    description: "AWS 기반 인프라 구축 및 FastAPI 백엔드 개발",
    icon: "🚀",
    tags: ["AWS", "FastAPI", "PostgreSQL", "Terraform"],
    link: "/projects/hoit"
  },
  {
    id: "pintos",
    title: "Pintos",
    period: "2025.07 - 2025.08",
    description: "교육용 운영체제 pintos의 thread, system call, virtual memory 구현",
    icon: "💡",
    tags: ["C", "OS"],
    link: "/projects/pintos"
  },
  {
    id: "safety",
    title: "근로자를 위한 실시간 안전 모니터링 시스템",
    period: "2024.07 - 2024.08",
    description: "YOLO 기반 실시간 안전 감지 및 바이탈 모니터링 파이프라인 구축",
    icon: "⚡",
    tags: ["Python", "YOLO", "Elasticsearch", "AWS S3"],
    link: "/projects/safety"
  }
];
