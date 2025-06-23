//props는 컴포넌트 간의 정보교류방법, 
// 1. 단방향 흐름 반드시 위에서 아래로 전달
// 2. 읽기 전용 - 직접적으로 변경하지 않음

const SubApp=()=>{
  return (
    <div>
      <Layout>
        <h1>홈페이지</h1>
        <p>
          content
        </p>
      </Layout>
    </div>
  )
}

function Layout({children}){
  return (
    <div className="container">
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  )
}

export default SubApp;