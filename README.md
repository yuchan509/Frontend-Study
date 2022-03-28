# JavaScript & React
### JavaScript & React Study

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
- Source Tree 이용.

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

* git commit & push가 작동을 안할 때
  - 현재 다른 프로세스에서 git 프로세스가 동작하고 있어서 index.lock 파일에 의해서 뭔가 락이 걸린듯한 상황
    ``` git
    fatal: Unable to create 'repository/.git/index.lock': File exists. 
    If no other git process is currently running, this probably means a git process crashed in this repository earlier. 
    Make sure no other git process is running and remove the file manually to continue.

    ```

  - rm -f ./.git/index.lock 실행.(Lock 해제)


* git reset(Source Tree)
  - 돌리고 싶은 지점에서 오른쪽 우클릭 선택.
  - 이 커밋까지 현재 브랜치를 초기화 수행.
    - soft - 모든 로컬 변경사항 유지.
    - mixed - 작업 상태는 그대로 두지만 인덱스는 리셋.
    - hard - 모든 자업 상태 내 변경 사항 버림 --> 데이터 유실 방식 가능성 존재.
      - Error 발생 문제 있음
      
        ``` git
          hint: Updates were rejected because the tip of your current branch is behind
          hint: its remote counterpart. Integrate the remote changes (e.g.
          hint: 'git pull ...') before pushing again.
          hint: See the 'Note about fast-forwards' in 'git push --help' for details.
        ```
      - 강제 Push : git push -u origin +main(+ 강제 푸시 작업)

* git Data 복구 
  - git reflog : 유실된 commit을 찾은 후 해당 commit의 commitID를 기록.
  - git reset --hard {commitID}
    - E.g. git reset --hard HEAD@{number}



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
                http
                https://www.omdbapi.com/?apikey=7035c60c&s=frozen
                You didn't love when you had me.
                But now, you need me so badly.
                You can't be serious. (Ha-ha-ha)
                That's hilarious. (Ha-ha-ha-ha-ha)
                abbcccdddd
              `
    ```

  - 메소드
    메소드 | 문법 | 설명
    :--:|--|--
    test | `정규식.test(문자열) `| 일치 여부(Boolean) 반환
    match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array) 반환
    replace | `문자열.replace(정규식, 대체문자)`| 일치하는 문자를 대체


  - 플래그(옵션)
    플래그 | 옵션
    :--:|--
    g | 모든 문자 일치(global)
    i | 영어 대소문자를 구분 않고 일치(ignore case)
    m | 여러 줄 일치(multi line)

  - 패턴(표현)
    패턴 | 설명
    :--:|--
    ^ab | 줄(Line) 시작에 있는 ab와 일치
    ab$ | 줄(Line) 끝에 있는 ab와 일치
    . | 임의의 한 문자와 일치
    a&verbar;b  | a 또는 b와 일치
    ab? | b가 없거나 b와 일치
    {3} | 3개 연속 일치
    {3,} | 3개 이상 연속 일치
    {3,5} | 3개 이상 5개 이하(3~5개) 연속 일치
    [abc] | a 또는 b 또는 c
    [a-z] | a부터 z 사이의 문자 구간에 일치(영어 소문자)
    [A-Z] | A부터 Z 사이의 문자 구간에 일치(영어 대문자)
    [0-9] | 0부터 9 사이의 문자 구간에 일치(숫자)
    [가-힣] | 가부터 힣 사이의 문자 구간에 일치(한글)
    \w | 63개 문자(Word, 대소영문 52개 + 숫자 10개 + _)에 일치
    \b | 63개 문자에 일치하지 않는 문자 경계(Boundary)
    \d | 숫자(Digit)에 일치
    \s | 공백(Space, Tab 등)에 일치
    (?=) | 앞쪽 일치(Lookahead)
    (?<=) | 뒤쪽 일치(Lookbehind)



#### HTML 클래스 속성의 작명법
  - BEM(Block Element Modifier)
    - 요소__일부분 Underscore(Lodash) 기호로 요소의 일부분을 표시
    - 요소--상태 Hyphen(Dash) 기호로 요소의 상태를 표시