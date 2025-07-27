const containerReact = document.getElementById('app-react')
const root = ReactDOM.createRoot(containerReact)

const Header = () => (
  <div>
    <h1>Learn React JS</h1>
  </div>
)

const ItemBlog = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  )
}

root.render(
  <>
    <Header />
    <ItemBlog title="ini h1" desc="ini paragrafh" />
    <ItemBlog title="ini h1 kedua" desc="ini paragrafh 2" />
  </>
)