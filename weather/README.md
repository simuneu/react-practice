### header
로고를 클릭하면 홈화면으로 이동 select로 지역 선택가능

### body_left
날씨 로고와 온도, 시간, 위치를 알려줌
클릭시 시간대 별 날씨와 온도를 알 수 있음

### body_right
온도, 습도, 강수량, 풍속 등 하루의 요약 날씨를 볼 수 있음

### footer
일주일별 날씨 요약을 확인할 수 있음. 
가로스크롤을 하면 지난 날 날씨는 볼 수 없지만 
오늘로부터 이주일 이내의 예상 날씨는 볼 수 있음.



# 날씨 앱

### 프로젝트 명
> WeatherView - React기반 날씨 예보 앱

### 목적
- 사용자가 원하는 도시의 현재 날씨 및 주간 예보를 직관적일고 시각적으로 확인할 수 잇는 앱 제공
React의 상태관리, 컴포넌트 분할, API통신 등을 확보하기 위한 교육용 실습 프로젝트

### 기능 요약
위치선택 : 드롭다운에서 도시 선택 시 날씨 정보 갱신
현재 날씨 표시 : 온도, 날씨 아이콘, 시간, 도시명 표시
날씨 상세 정보 : 체감 온도, 기압, 습고, 풍속 표시
주간 예보 : 6일치 최고/최저 온도 및 날씨 아이콘 표시
반응형 UI : PC, 모바일에서도 보기 좋게 표시
날씨API연동 : OpenWeatherMap API

### 요구 시능 상세
1. 위치 선택 가능
  기능명 : 도시 위치 선택
  설명 : 드롭다운을 통해 도시선택 시 날씨 정보가 도시 정보로 갱신됨

2. 현재 날씨 카드
  표시 항목 : 현재 온도, 날씨 아이콘, 현재 시간, 도시명
  시각 포맷 : 오전/오후 hh:mm(ex. 1:15pm)
  데이터 갱신 : location변경 시 자동 갱신
  온도 단위 기본 : 섭씨

3. 날씨 상세 정보 카드
  항목 구성 : 체감온도, 기압(mmHg), 습도(%), 풍속(mph)
  기압 설명 : 775mmHg-normal 텍스트 표시
계산식 : 체감온도는 API에서 제공값 사용 또는 계산

4. 주간 예보 카드(6일)
  표시 항목 : 요일, 날짜, 날씨 아이콘, 최고/최저 기온
  구성 방식 : 배열 기반 반복 랜더링(map function)
  아이콘 로직 : 날씨 상태에 따라 자동 매핑
  시간 : 06.25 형식으로 월, 일 표시

5. 반응형 디자인
  기준 : 최소 375px - 최대1280px환경 대응

6. UI설계 기준(디자인 시스템)
  색상 : 파랑-보라 그라디언트 배경+투명 글래스 카드
  폰트  : sans-serif, Bold 강조, Light보조
  아이콘 : 날씨 상태에 따라 조건부 렌더링 (svg, png)
  애니메이션 : (선택) 날씨 상태에 따른 subtitle효과 적용

7. 기술 스택
  프론트 : react
  상태관리 : react useState, useEffect, Context
  API통신 : axios
  디자인 : Tailwind CSS, styled-components
  시간처리 : dayjs
  날씨 API : OpenWeatherMap
