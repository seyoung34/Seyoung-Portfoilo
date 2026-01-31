export type ProjectType = "personal" | "team";

export type Trouble = {
    problem: string;
    cause: string;
    solution: string;
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
        summary: "봉사활동 신청, 관리 앱",

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

            {
                problem: "문자열 주소로는 지도 마커 생성 불가",
                cause: "마커 생성을 위해서는 위도, 경도에 대한 좌표값이 필요",
                solution: "카카오 로컬 API를 이용하여 좌표 변환 후, 비동기 마커 ",
            },
            {
                problem: "리사이클러뷰에서 무한스크롤 중복 호출",
                cause: "갱신이 되는 동안 또 데이터를 호출",
                solution: "현재와 이전 아이템 수를 비교하는 조건 추가"
            }
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
            "Firestore 기반 참가자 정보 실시간 조회",
            "StreamBuilder를 이용한 팀 구성, 경기 리스트, 경기 상황 실시간 조회",
            "Base-Admin-User 분리 구조로 유지 보수성과 재사용성 증가",
            "운영자/사용자 권한 분리 UI 설계",
            "Firebase Hosting을 이용하여 URL 접속만으로 사용 "
        ],

        techStack: [
            "Flutter",
            "Firebase",
            "Firestore",
            "StreamBuilder",
        ],

        troubles: [
            {
                problem: "운영자가 점수나 입장을 갱신한 뒤 사용자 화면에 반영되기까지 딜레이가 생김. 사용자 간 데이터 불일치",
                cause: "setState를 통한 강제 새로고침은 너무 느리고 비효율적이었고, 지속적인 loadMatches() 호출은 비용이 크고 성능 저하를 유발",
                solution: "Firestore의 snapshots() + StreamBuilder를 활용하여 실시간 데이터 구독 구조로 전환",
            },
            {
                problem: "관리자 페이지를 따로 만들어 운영하기엔 운영자 입장에서 불편",
                cause: "비밀번호 입력을 통해 운영자 여부를 분기하고 각 페이지를 base -> admin / user 구조로 분리",
                solution: "공통 기능은 Base에, 분기된 로직은 각각에서 override하는 방식으로 유지보수성 확보"
            },
            {
                problem: "안드로이드 마켓에 배포시 사용자의 접근성이 떨어짐",
                cause: "Firebase Hosting을 이용하여 URL로 접근 가능",
                solution: "참가자들이 언제 어디서든 자유롭게 대회 상황 확인 "
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
        summary: "배드민턴 라켓 아카이빙, 검색 사이트",

        role: [
            "필터링, 키워드 검색 기능",
            "라켓 데이터 CRUD",
            "동일 라켓의 여러 Variant 등록, 이미지 관리",
            "크롤링한 데이터를 csv/json 형식으로 업로드",
            "admin 페이지를 통해 데이터 관리"
        ],

        techStack: [
            "TypeScript",
            "Next.js",
            "React",
            "supabase"
        ],

        troubles: [
            {
                problem: "크롤링한 데이터를 DB에 바로 넣을 수 없음",
                cause: "Raw 데이터, 정규화 데이터, UI용 데이터 등 단계적으로 타입 명시, 변환",
                solution: "모든 데이터 흐름에 명확한 타입 정의"
            },
            {
                problem: "DB에 값이 있는데 값을 인식하지 못함",
                cause: "DB컬럼과 TS타입의 불일치",
                solution: "컬럼명과 타입이름을 매핑하는 유틸 함수, 명시적 변환과 유효성 검증하는 유틸 함수 도입",
            },
            {
                problem: "같은 이름의 라켓이여도 상세 스펙이 다른 모델 존재",
                cause: "라켓 데이터를 포함한 전체적인 데이터베이스 구조 고민",
                solution: "variant등을 포함한 관계형 데이터베이스",
            },
            {
                problem: "이전 프로젝트에서 UI/UX에 대한 아쉬움",
                cause: "사용자 입장에서의 고민",
                solution: "tailwind, shadcn, radix, animation 등 시각적 경험적 완성도 높힘",
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
            "Three.js를 이용하여 스크롤 기반 다이빙 경험 UX",
            "스프라이트 이미지를 이용한 애니메이션",
        ],

        techStack: [
            "TypeScript",
            "Next.js",
            "React",
            "Three.js"
        ],

        troubles: [

            {
                problem: "모바일 환경에서 드래그시 하단 검은 영역 노출",
                cause: "overscroll-behavior, dvh 등 학습",
                solution: "모바일 브라우저의 Overscroll (Bounce) 동작",
            },
            {
                problem: "three.js 요소들이 움직일 때 튐 발생",
                cause: "목표값을 바로 적용하면 시각적으로 부자연스러움",
                solution: "S커브 보간 유틸 함수 적용",
            },
        ],

        links: {
            github: "https://github.com/seyoung34/SamcheokSmartScuba",
            demo: "https://samcheok-smart-scuba.vercel.app/"
        },
    },

    {
        title: "포트폴리오 웹사이트",
        type: "personal",
        period: "2026.01 ~ 진행중",
        summary: "스냅 스크롤과 인터랙티브 디자인 포트폴리오",

        role: [
            "전체 UI/UX 기획 및 디자인",
            "스크롤 스냅 로직 구현",
            "모바일/데스크톱 UX 분기 처리",
        ],

        techStack: [
            "React",
            "TypeScript",
            "Next.js",
            "TailwindCss",
        ],

        troubles: [
            {
                problem: "모달의 상태를 Project에서 Home으로 올려야함",
                cause: "Dispatch + SetStateAction 방법을 고민",
                solution: "상태 관리의 책임을 한 곳에서 관리하기 위해 일반 함수 방식으로 Home에서 관리",
            },
            {
                problem: "화면에 보일 때 마다 애니메이션이 작동하기를 원함",
                cause: "IntersectionObserver에 대한 학습",
                solution: "useInView 커스텀 훅 ",
            },
        ],

        links: {
            github: "https://github.com/seyoung34/Seyoung-Portfoilo",
            demo: "https://seyoung-portfoilo.vercel.app/",
        },
    },
];
