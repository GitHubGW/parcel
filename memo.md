## Parcel

- Parcel은 scss, js, ts, json, image 등 다양한 파일들을 변환해주는 웹 어플리케이션 번들러이다.
- 웹 어플리케이션 번들러에는 대표적으로 Webpack, Rollup, Parcel등이 있다.
- https://ko.parceljs.org/getting_started.html

#### Parcel 설치

```javascript
npm install -g parcel-bundler
yarn global add parcel-bundler
```

#### package.json scripts

- 아래 명령어들을 package.json에 scripts부분에 추가해서 실행할 수 있다.
- 터미널에 parcel index.html을 실행해서 parcel이 index.html을 컴파일 하도록 할 수 있다.
- parcel은 기본적으로 Hot reloading(핫 리로딩)을 가지고 있어 파일이 변경되면 자동으로 코드를 수정해서 반영한다.

```javascript
// parcel을 이용해서 index.html을 변환한다.
parcel index.html
parcel index.html --open

// rimraf 모듈을 이용해서 dist폴더를 삭제하고 다시 생성 후, parcel을 이용해서 index.html을 변환한다.
rimraf dist && parcel index.html
parcel build --no-minify index.html --public-url ./ --out-dir build
```

#### PostCSS

- PostCSS는 자바스크립트 플러그인을 사용하여 CSS를 변환시키는 도구이다.
- .postcssrc는 PostCSS에 대한 설정 파일이다.
- plugins에 autoprefixer등 다양한 플러그인들을 추가해 사용할 수 있다.
- PostCSS와 autoprefixer의 버전 충돌 문제가 있기 때문에 autoprefixer는 10버전이 아닌 9버전을 설치하도록 한다.
- npm i autoprefixer@9

```javascript
{
  "modules": false,
  "plugins": {
    "autoprefixer": true
  }
}
```

#### typography.js

```javascript
// typography를 사용하면 typography에서 지정한 옵션들을 CSS 전역 스타일로 사용할 수 있다.
// 즉, 자바스크립트로 CSS 전역 스타일을 설정하는 것이다.
// typography를 사용하기 위해 패키지를 설치 후 import해온다.
import Typography from "typography";

// new Typography({})를 통해 Typography를 생성하고 안에 옵션들을 설정한다.
// baseFontSize를 통해 CSS 기본 폰트 사이즈를 설정하고, baseLineHeight를 통해 기본 line-height를 설정한다.
// googleFonts를 설정하게 되면 설정한 폰트들을 자동으로 다운로드 받아서 가져와준다.
// headerFontFamily와 bodyFontFamily를 통해 font-family를 설정할 수 있다.
const typography = new Typography({
  baseFontSize: "40px",
  baseLineHeight: 2,
  googleFonts: [
    { name: "Montserrat", styles: ["700"] },
    { name: "Open Sans", styles: ["400"] },
  ],
  headerFontFamily: ["Montserrat", "Helvetica Neue", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
});

// 위에서 설정한 typography변수를 가져와 injectStyles()메서드를 통해 설정한 내용들을 가져와 CSS 전역 스타일로 지정한다.
typography.injectStyles();

export default typography;
```
