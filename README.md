# Javascript
### Javascript Study

### Setting
- npm run dev

#### NVM
- nvm ls
- nvm install Major.Minor.Patch
- nvm uninstall Major.Minor.Patch
- nvm use Major.Minor.Patch
- nvm --version
- nvm --help

#### NPM

- npm init -y

- npm install -D xxx : 개발용 의존성 패키지 설치. (개발할 때만 도움을 받는 용도)<br>
  ex) npm install parcel-bundler -D (npm install -D parcel-bundler)

- npm install : 일반 의존성 패키지 설치. (개발 이후 웹 브라우저에서도 도움을 받아야할 용도)<br>
  ex) npm install lodash


package.json 추가 사항.

"dev" : "parcel index.html" <br>
"build" : "parcel build index.html : 사용자가 웹브라우저에서 보기 위한 방식.
npm run build 실행시 dist 폴더 생성됨 -> '난독화' 되어 자동 작성됨.



#### 유의적 버전(Semantic Versioning, SemVer)

^Major.Minor.Patch
E.g :12.14.1

- ^ : Major 버전 안에서 가장 최신 버전으로 업데이트 가능. <br>
- npm info lodash : lodash 정보 확인. <br>
- npm install lodash@4.17.20 <br>
- npm update lodash 

- Major : 기존 버전과 호환되지 않는 새로운 버전. <br>
- Minor : 기존 버전과 호환되는 새로운 기능이 추가된 버전. <br>
- Patch : 기존 버전과 호환되는 버그 및 오타 등이 수정된 버전.


#### NPM 프로젝트의 버전 관리(.gitignore)
- version 관리가 필요하지 않는 폴더는 삭제.
e.g) .cache, dist, node_modules 

.gitignore 파일을 만들어 올리지 않을 항목을 저장.

- git init
- git status
- git add . : 버전 추적.
- git status : 변경 사항 추적 확인.
- git commit -m 'Project'
- git log
- remote add origin https://github.com/yuchan509/Javacript.git
- git push origin master

* git commit message 수정 
  - git log
  - git rebase -i HEAD~(변경할 Commit Message 수)
  - i : insert mode, esc : command mode
  - pick -> reword 수정.
  - commit message 수정.
  - :wq + enter (if -> e45: 'readonly' option is set (add ! to override) 발생할 경우 :w! + enter(강제 수정))
  - git rebase --abort(도중에 rebase 중지하고자 할 경우)
  - git push -f origin 현재 브랜치.
#### ECMA Scriptm (ES)


#### 정규표현식(Regular Expression, RegExp)
  - 역할
    - 문자 검색(search)
    - 문자 대체(replace)
    - 문자 추출(extract)

  - Test site
    - https://regexr.com/

  - 정규식 생성
    ```js

    // 생성자
    new RegExp('표현', '옵션')
    new RegExp('[a-z]', 'gi')

    // 리터럴
    /표현/옵션
    /[a-z]/gi
    
    ```
  - 예제 문자
    ```js
    let str = ` 
                Hello 
                010-1234-5678
                uchan@kt.com
                https://www.omdbapi.com/?apikey=7035c60c&s=frozen
                You didn't love when you had me.
                But now, you need me so badly.
                You can't be serious. (Ha-ha-ha)
                That's hilarious. (Ha-ha-ha-ha-ha)
              `
    ```

#### 메소드
메소드 | 문법 | 설명
:--:|--|--
test | `정규식.test(문자열) `| 일치 여부(Boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array) 반환
replace | `문자열.replace(정규식, 대체문자)`| 일치하는 문자를 대체


#### 플래그(옵션)
플래그 | 옵션
:--:|--
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분 않고 일치(ignore case)
m | 여러 줄 일치(multi line)

#### 패턴(표현)
패턴 | 설명
:--:|--
^ab | 줄(Line) 시작에 있는 ab와 일치
ab$ | 줄(Line) 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b  | a 또는 b와 일치
ab? | b가 없거나 b와 일치