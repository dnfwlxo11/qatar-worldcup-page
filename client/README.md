# Daein's file structure and code convention

## 1. File Structure Convention
#### public
	favicon, index.html 과 같은 공통자산을 저장하는 곳
	assets 폴더에는 이미지, json 파일과 같이 공통으로 사용하는 자산들을 모아둔다.

	활용 예시)
		public
		└── assets
			└── person_img.png
#### components
	공통 컴포넌트 들을 저장하는 곳 (pagination, nav 등)

	활용 예시)
		components
		├── pagination.js
		└── navbar.js
#### pages
	페이지 단위로 폴더를 구성하며 폴더의 이름은 역할에 해당하는 이름을 부여한 후 "Page"를 붙인다.
	메인 페이지의 파일명은 "index.js" 이름을 가지며 나머지 요소들은 역할에 맞는 이름을 부여한다.
	
	활용 예시)
		src
		├── pages
		│	└── MainPage
		│		├── index.js
		│		└── register.js
		├── App.css
		├── App.js
		├── App.test.js
		├── index.css
		├── index.js
		├── logo.svg
		├── reportWebVitals.js
		└── setupTests.js

## 2. Code Convention
#### Naming Convention
	1. 기본 명명 규칙
	"PscalCase"를 기본으로 생성한다.

	2. 페이지 저장 폴더명
	페이지를 담아두는 역할을 하는 폴더는 "(Role)Page" 와 같이 역할과 Page를 붙여 생성한다.

	3. 페이지 파일명
	페이지를 담당하는 파일은 "index.js" 으로 생성한다.

	4. 페이지 부가요소 파일명
	페이지를 구성하는 상세요소들의 이름은 "(Role).js" 와 같이 역할에 해당하는 이름을 붙여준다.

	5. 컴포넌트 파일명
	컴포넌트 폴더의 파일명은 어느 페이지에도 종속되지 않도록 "Button.js" 와 같이 요소에 해당하는
	이름을 붙여준다.
#### Code Convention
	1. 코드 작성
	문장의 끝에는 반드시 ';'(세미콜론)을 붙인다. 
	
	2. 문자열 특수문자
	모든 문자열을 감싸는 특수문자는 ''(따옴표)로 통일한다.
	(단 따옴표로 감싸진 내부의 문자열은 ""(쌍따옴표)로 감싼다)
	
	3. 함수 명명 규칙
	모든 함수명은 "lowerCamelCase"를 기본으로 작성한다.
	(이벤트와 관련된 함수명은 "onChange(Role)" 과 같이 이벤트 타입을 붙여 작성한다)
	
	4. 변수 명명 규칙
	모든 함수명은 "lowerCamelCase"를 기본으로 작성한다.

	5. 띄어쓰기 규칙
		5-1. 함수의 이름과 중괄호 사이에는 한 칸을 띄운다.
		예시) function onClickEvent() {}

		5-2. 값을 넣는 코드의 equal은 띄어쓰기 한다.
		예시) let a = 1;

		5-3. 비교 하는 코드의 equal, and 등의 코드는 붙인다.
		예시) a==1, a&&b

	6. 들여쓰기 규칙
	모든 들여쓰기는 공백 4칸에 맞춘다.
	(tap = space * 4)