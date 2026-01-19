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
        title: "뜨거운 감자",
        type: "team",
        period: "2024.09 ~ 2024.12",
        summary: "나의 봉사활동 신청, 관리 앱",

        role: [
            "MyPage 담당 개발",
            "REST API를 이용한 나의 정보 표시",
            "앱 전체 UI 개발",
        ],

        techStack: [
            "Kotlin",
            "Android",
            "REST API",
        ],

        troubles: [
            //todo 
            {
                problem: "CSV 데이터 구조가 제각각이라 UI 렌더링이 깨짐",
                solution: "정규화 스키마를 정의하고 파싱 단계에서 통합",
                result: "데이터 품질과 UI 안정성 동시에 확보",
            },
        ],

        links: {
            github: "https://github.com/seyoung34/HotGamja",
            demo: ""
        },
    },

    {
        title: "COKCOK",
        type: "personal",
        period: "2025.03 ~ 2025.05",
        summary: "실시간 배드민턴 대회 운영 및 관리",

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
            github: "https://github.com/seyoung34/cokcok",
            demo: "https://cokcok-27bab.web.app/"
        },
    },

    {
        title: "Badboys",
        type: "personal",
        period: "2025.11 ~ 2025.12",
        summary: "배드민턴 라켓 아카이빙 사이트",

        role: [
            "다양한 필터 기능",

        ],

        techStack: [
            "TypeScript",
            "JavaScript",
            "Next.js",
            "React",
            "supabase"
        ],

        troubles: [
            //todo
            {
                problem: "문장 길이에 따라 유사도 결과가 왜곡됨",
                solution: "단어 벡터 평균 방식으로 문장 벡터 정규화",
                result: "검색 결과의 일관성 향상",
            },
        ],

        links: {
            github: "https://github.com/seyoung34/BadBoys",
            demo: "https://bad-boys-web.vercel.app/"
        },
    },

    {
        title: "Samchuck Smart Scuba",
        type: "personal",
        period: "2025.12 ~ 진행중",
        summary: "스쿠버 다이빙 센터 홈페이지 제작",

        role: [
            "Three.js를 이용한 몰입감 제공",

        ],

        techStack: [
            "TypeScript",
            "JavaScript",
            "Next.js",
            "React",
            "Three.js"
        ],

        troubles: [
            //todo
            {
                problem: "모바일 환경에서 드래그시 하단 검은 영역 노출",
                solution: "모바일 브라우저의 Overscroll (Bounce) 동작",
                result: "overscroll-behavior, dvh 등 학습",
            },
        ],

        links: {
            github: "https://github.com/seyoung34/BadBoys",
            demo: "https://bad-boys-web.vercel.app/"
        },
    },

    {
        title: "포트폴리오 웹사이트",
        type: "personal",
        period: "2026.01 ~ 진행중",
        summary: "스냅 스크롤과 인터랙티브 디자인 포트폴리오",

        role: [
            "전체 UI/UX 기획 및 디자인",
            "React + TypeScript 기반 구조 설계",
            "스크롤 스냅 로직 구현(임계값, 쿨다운)",
            "모바일/데스크톱 UX 분기 처리",
        ],

        techStack: [
            "React",
            "TypeScript",
            "Next.js",
            "Tailwindcss",
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
];
