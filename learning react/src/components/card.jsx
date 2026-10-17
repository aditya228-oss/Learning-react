function card(props) {
  console.log(props)
  return <div className="card">
    
    <h1>Hello World for {props.user}</h1>
    <p>age is {props.age}</p>
  </div>
}

export default card