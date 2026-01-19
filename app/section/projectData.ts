export type ProjectType = "personal" | "team";

export type Trouble = {
    problem: string;
    solution: string;
    result: string;
};

export type Project = {
    title: string;
    type: ProjectType;
    period: string;
    summary: string;

    role: string[];
    techStack: string[];

    troubles: Trouble[];

    links: {
        github?: string;
        demo?: string;
    };
};

export const projects: Project[] = [
    {
        title: "인터랙티브 포트폴리오 웹사이트",
        type: "personal",
        period: "2025.03 ~ 진행중",
        summary: "PC 스냅 스크롤과 모바일 자연 스크롤을 분기한 포트폴리오",

        role: [
            "전체 UI/UX 기획 및 디자인",
            "React + TypeScript 기반 구조 설계",
            "스크롤 스냅 로직 구현(임계값, 쿨다운)",
            "모바일/데스크톱 UX 분기 처리",
        ],

        techStack: [
            "React",
            "TypeScript",
            "Vite",
            "styled-components",
            "IntersectionObserver",
        ],

        troubles: [
            {
                problem: "모바일 환경에서 스크롤 스냅 UX가 오히려 불편함",
                solution: "pointer: coarse 및 viewport 기준으로 스냅 로직 비활성화",
                result: "모바일 사용자의 자연스러운 콘텐츠 소비 흐름 확보",
            },
            {
                problem: "아코디언 높이를 render 중 ref로 측정하면서 ESLint 에러 발생",
                solution: "useLayoutEffect에서 DOM 높이를 측정하고 state로 관리",
                result: "React 규칙을 지키면서 부드러운 height 애니메이션 구현",
            },
        ],

        links: {
            github: "https://github.com/yourname/portfolio",
            demo: "https://yourname.vercel.app",
        },
    },

    {
        title: "배드민턴 대회 운영 시스템 (COKCOK)",
        type: "team",
        period: "2024.09 ~ 2025.02",
        summary: "리그전 및 토너먼트 운영을 위한 실시간 대회 관리 서비스",

        role: [
            "프론트엔드 핵심 기능 개발",
            "경기/팀/참가자 데이터 모델링",
            "Firestore 기반 실시간 데이터 연동",
            "운영자/사용자 권한 분리 UI 설계",
        ],

        techStack: [
            "Flutter",
            "Dart",
            "Firebase",
            "Firestore",
            "StreamBuilder",
        ],

        troubles: [
            {
                problem: "경기 데이터가 많아질수록 Firestore 조회 속도 저하",
                solution: "초기 로딩과 사용자 액션 로딩을 분리하고 Stream 구독 최소화",
                result: "체감 로딩 속도 개선 및 불필요한 네트워크 요청 감소",
            },
        ],

        links: {
            github: "https://github.com/yourname/cokcok",
        },
    },

    {
        title: "뜨거운 감자 | 봉사활동 확인 신청 앱",
        type: "team",
        period: "2024.12",
        summary: "CSV 기반 데이터를 시각적으로 비교하는 웹 애플리케이션",

        role: [
            "CSV 데이터 파싱 및 정규화",
            "비교 UI 및 필터링 기능 구현",
            "GitHub Pages 배포 환경 구성",
        ],

        techStack: [
            "React",
            "JavaScript",
            "CSV Parser",
            "GitHub Pages",
        ],

        troubles: [
            {
                problem: "CSV 데이터 구조가 제각각이라 UI 렌더링이 깨짐",
                solution: "정규화 스키마를 정의하고 파싱 단계에서 통합",
                result: "데이터 품질과 UI 안정성 동시에 확보",
            },
        ],

        links: {
            github: "https://github.com/yourname/tech-compare",
            demo: "https://yourname.github.io/tech-compare",
        },
    },

    {
        title: "Badboys | 배드민턴 라켓 아카이빙 사이트",
        type: "personal",
        period: "2025.01",
        summary: "임베딩 기반 유사도 검색을 구현한 Node.js CLI 프로젝트",

        role: [
            "벡터 데이터 구조 설계",
            "코사인 유사도 계산 로직 구현",
            "CLI 명령어(add/search/delete) 설계",
        ],

        techStack: [
            "Node.js",
            "JavaScript",
            "Cosine Similarity",
            "CLI",
        ],

        troubles: [
            {
                problem: "문장 길이에 따라 유사도 결과가 왜곡됨",
                solution: "단어 벡터 평균 방식으로 문장 벡터 정규화",
                result: "검색 결과의 일관성 향상",
            },
        ],

        links: {
            github: "https://github.com/yourname/vector-db-cli",
        },
    },
];
