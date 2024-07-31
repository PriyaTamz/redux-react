function Header(props) {
  return <p>{props.data}</p>
}


function Price(props) {
  return <h1>{props.data}</h1>
}

function Items1() {
  return (
    <ul>
      <p className="bi bi-check">Single User</p>
      <p className="bi bi-check">50GB Storage</p>
      <p className="bi bi-check">Unlimited Public Projects</p>
      <p className="bi bi-x">Community Access</p>
      <p className="bi bi-x">Unlimited Private Projects</p>
      <p className="bi bi-x">Dedicated Phone Support</p>
      <p className="bi bi-x">Free Subdomain</p>
      <p className="bi bi-x">Monthly Status Reports</p>
    </ul>
  )
}

function Items2() {
  return (
    <ul>
      <p className="bi bi-check">5 Users</p>
      <p className="bi bi-check">50GB Storage</p>
      <p className="bi bi-check">Unlimited Public Projects</p>
      <p className="bi bi-check">Community Access</p>
      <p className="bi bi-check">Unlimited Private Projects</p>
      <p className="bi bi-check">Dedicated Phone Support</p>
      <p className="bi bi-check">Free Subdomain</p>
      <p className="bi bi-x">Monthly Status Reports</p>
    </ul>
  )
}

function Items3() {
  return (
    <ul>
      <p className="bi bi-check">Unlimited Users</p>
      <p className="bi bi-check">50GB Storage</p>
      <p className="bi bi-check">Unlimited Public Projects</p>
      <p className="bi bi-check">Community Access</p>
      <p className="bi bi-check">Unlimited Private Projects</p>
      <p className="bi bi-check">Dedicated Phone Support</p>
      <p className="bi bi-check">Free Subdomain</p>
      <p className="bi bi-check">Monthly Status Reports</p>
    </ul>
  )
}

function Subscription() {

  const preheading = ["FREE", "PLUS", "PRO"];
  const headingData = ["$0/month", "$9/month", "$49/month"];

  return (
    <div>
      <div className="main">
        <div className="row">
          <div className="col-md-4">
            <div className="card" style={{ width: '18rem' }}>
              <div className="top">
                <Header
                  data={preheading[0]}
                />
              </div>
              <div className="head">
                <Price
                  data={headingData[0]}
                />
              </div>
              <div className="item">
                <Items1 />
              </div>

              <button type="button" class="btn btn-primary" style={{padding: '10px'}}>Button</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{ width: '18rem' }}>
              <div className="top">
                <Header
                  data={preheading[1]}
                />
              </div>
              <div className="head">
                <Price
                  data={headingData[1]}
                />
              </div>
              <div className="item">
                <Items2 />
              </div>

              <button type="button" class="btn btn-primary" style={{padding: '10px'}}>Button</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{ width: '18rem' }}>
              <div className="top">
                <Header
                  data={preheading[2]}
                />
              </div>
              <div className="head">
                <Price
                  data={headingData[2]}
                />
              </div>
              <div className="item">
                <Items3 />
              </div>

              <button type="button" class="btn btn-primary" style={{padding: '10px'}}>Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

function App() {
  return (
    <div>
      <Subscription />
    </div>
  )
}

export default App;