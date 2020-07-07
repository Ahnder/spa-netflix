This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### 커밋 업데이트 목록

- 네비게이션 설정 <br />
- yarn add react-icons <br />
- react-icons/fi 사용 <br />
- 네비게이션 메뉴를 좌우로 나누어 왼쪽은 라우터설정, 오른쪽은 검색과 아이콘 설정 <br />
- 로고(src/static/image/Netflix_Logo.png)를 네비게이션 좌측에 설정 <br />
- styled-components를 사용하여 네비게이션의 CSS 설정 <br />

# :open_book: Netflix-Clone SPA Project

[![React-v16.13.1](https://img.shields.io/badge/React-v16.12.0-61DAFB.svg?logo=react)](https://reactjs.org/)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-007ACC.svg)](https://code.visualstudio.com/)

- Main 페이지에서는 `메인영화 소개 화면`과 `영화리스트(NetfilxOriginal, Trending)`를 볼 수 있다. <br />
- Genres 페이지에서는 카테고리로 구분 된 `장르 별 영화`를 볼 수 있다. <br />
- MyList 페이지에서는 영화정보화면에서 ADD MYLIST 버튼을 누른 영화들을 확인 할 수 있다. <br />

## :clock3: Project Period

2020.07.06 ~

## :hammer: Installation

```javascript
yarn add
```

## :bell: Usage

```javascript
yarn start
```

If you enter `yarn start` or `npm run start`, your browser open `http://localhost:3000`.

## :mag_right: Directory Structure

```
└── src
    ├── components
    ├── containers
    ├── modules
    ├── lib
    ├── pages
    └── static
```

- 컴포넌트의 경우 `Atomic Design`을 간소화시켜 (`components`, `containers` / `PascalCase`)
- `modules`에는 `redux` 정의 (`redux-thunk`, `redux-saga`)
- `pages`는 라우팅이 되는 가장 최상위 컴포넌트를 정의(`kebab-case`)

## :penguin: Preview

#### 1-1. 홈 목록 페이지

## :mag: Thchnical Skills

- 메인 라이브러리: React
- 메인 언어 및 문법: Javascript ES6+, JSX
- 상태 관리: redux, redux-thunk, redux-saga
- 서버: webpack-dev-server
- UI Library: Ant Design
- 기타: git, Babel, eslint, prettier, lodash, sessionStorage

## :pray: Contributing

Please PR.

## :trident: Collaboraters

안현우([Ahnder](https://github.com/Ahnder))

## :eyes: See also

My Development Blog:

## :copyright: License

[MIT](LICENSE)
