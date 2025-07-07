## 과제 개요

이번 수업에서 Bootstrap 5의 개념(CSS 프레임워크), 그리드 시스템(컨테이너, 행, 열), 기본 UI 컴포넌트(버튼, 폼, 네비게이션 바), 유틸리티 클래스(`text-center`, `d-flex`, `m-0`, `p-0`)를 배웠습니다. 이번 과제는 day08 클론코딩 미니프로젝트를 대비하여 Bootstrap 5 공식 웹사이트 또는 기타 신뢰할 수 있는 소스에서 제공하는 템플릿을 찾아 활용하여 **개인 소개 웹사이트**를 제작하는 것입니다. 기본 과제는 Bootstrap 템플릿을 사용하여 웹사이트를 제작하고, 도전 과제는 GitHub Pages를 통해 웹사이트를 배포하는 작업입니다.

## 기본 과제 요구사항

1. **Bootstrap 템플릿 선택 및 수정**
    - Bootstrap 5 공식 웹사이트(https://getbootstrap.com/docs/5.3/examples/) 또는 다른 신뢰할 수 있는 소스(예: Start Bootstrap, BootstrapMade)에서 개인 소개 웹사이트에 적합한 템플릿을 선택하세요.
    - 선택한 템플릿을 다운로드하고, 아래 요구사항을 충족하도록 수정하세요:
        - **HTML 구조**:
            - 시맨틱 태그(`<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`)를 포함.
            - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`를 `<head>`에 포함.
            - 페이지 제목(`<title>`)은 "My Portfolio"로 설정.
            - 최소 3개의 섹션: About Me, Projects, Contact.
        - **그리드 시스템**:
            - `container`, `row`, `col-*` 클래스를 사용하여 반응형 레이아웃 구현(예: 프로젝트 섹션에서 3열 카드 레이아웃).
            - 모바일, 태블릿, 데스크톱에서 적절히 동작하도록 조정.
        - **UI 컴포넌트**:
            - 네비게이션 바(`navbar`)를 포함, 최소 4개의 메뉴 항목(예: Home, About, Projects, Contact).
            - 프로젝트 섹션에 `card` 컴포넌트를 사용하여 최소 3개의 프로젝트 소개.
            - 연락처 섹션에 `form` 컴포넌트(최소 이름, 이메일 입력 필드와 제출 버튼 포함).
        - **유틸리티 클래스**:
            - `text-center`, `my-*`, `p-*`, `d-flex` 등을 사용하여 스타일링(예: 섹션 제목 중앙 정렬, 여백 조정).
            - 템플릿의 기본 스타일을 유지하되, 최소 3개의 유틸리티 클래스를 추가로 적용.
        - **콘텐츠**:
            - About Me: 자신을 소개하는 문단(50~100단어).
            - Projects: 최소 3개의 프로젝트 설명(각 30~50단어).
            - Contact: 이름과 이메일 입력 폼, 제출 버튼 포함.
2. **파일 구조**
    - 프로젝트 폴더를 구성하세요:
        
        ```
        portfolio/
        ├── index.html
        ├── css/
        │   ├── bootstrap.min.css (또는 CDN 사용)
        │   ├── custom.css (선택 사항, 추가 스타일)
        ├── js/
        │   ├── bootstrap.bundle.min.js (또는 CDN 사용)
        
        ```
        

## 도전 과제 (선택)

기본 과제를 완료한 학생들은 GitHub Pages를 통해 웹사이트를 배포하세요.

1. **GitHub Pages 배포**
    - **저장소 생성**:
        - GitHub에서 새로운 **공개** 저장소(`project-name.github.io`)를 생성하세요. 저장소 이름은 `project-name.github.io` 형식이어야 합니다.
        - 기본 과제의 `index.html` 및 관련 파일을 이 저장소에 업로드하세요.
    
    - **Git 작업**:
        - 로컬에서 `project-name.github.io` 저장소로 파일을 커밋하고 푸시:
            
            ```bash
            git init
            git add .
            git commit -m "Initial commit: Add portfolio for GitHub Pages"
            git remote add origin [remote-git-repository-url]
            git push origin -u main
            ```
            
    - **GitHub Pages 설정**:
        - GitHub 저장소의 **Settings** 탭으로 이동.
        - 좌측 메뉴에서 **Pages**를 선택.
        - **Deploy from a branch**를 선택하고, **Branch**를 `main`으로 설정.
        - 배포 완료 후(몇 분 소요될 수 있음), **Pages** 화면에서 배포된 URL(예: `https://project-name.github.io`)을 확인.
    - **확인**:
        - 배포된 URL에 접속하여 웹사이트가 정상적으로 표시되는지 확인.
    - **제출물 추가**:
        - GitHub Pages URL(예: `https://project-name.github.io`)을 제출.
        - 커밋 히스토리 스크린샷(최소 1개의 커밋 포함).

## 주의사항

- **Bootstrap 템플릿**: 공식 Bootstrap 사이트 또는 신뢰할 수 있는 소스에서 템플릿을 선택하고, 출처를 기록하세요(예: Notion 제출 시 템플릿 URL 기재).
- **CDN 사용**: Bootstrap 5 CSS와 JS를 CDN(`https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/`)으로 연결하거나, 다운로드한 파일을 사용하세요.
- **그리드 시스템**: `container`, `row`, `col-*`를 활용하여 반응형 레이아웃을 유지하세요.
- **유틸리티 클래스**: 최소 3개의 유틸리티 클래스를 추가로 적용하여 템플릿을 커스터마이징하세요.
- **GitHub Pages**: 도전 과제에서 저장소 이름(`project-name.github.io`)을 정확히 설정하고, 배포 후 URL이 작동하는지 확인하세요.
- **테스트**: 로컬에서 `index.html`을 브라우저로 열어 Bootstrap 컴포넌트와 반응형 동작을 확인하고, 도전 과제 수행 시 GitHub Pages URL로 접속하여 확인하세요.