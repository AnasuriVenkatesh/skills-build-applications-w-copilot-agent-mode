import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-7">
          <p className="text-uppercase fw-semibold text-primary">OctoFit Tracker</p>
          <h1 className="display-4 fw-bold mb-3">Modern fitness tracking for teams and individuals</h1>
          <p className="lead text-muted mb-4">
            Log workouts, manage challenges, and keep every teammate moving toward their next milestone.
          </p>
          <div className="d-flex gap-3">
            <a className="btn btn-primary btn-lg" href="#features">Explore features</a>
            <a className="btn btn-outline-secondary btn-lg" href="#api">View API health</a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold">What you can do</h2>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item px-0">Track daily activity and workouts</li>
                <li className="list-group-item px-0">Build team challenges and leaderboards</li>
                <li className="list-group-item px-0">Stay motivated with personalized recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section id="features" className="row mt-5 g-4">
        <div className="col-md-4">
          <div className="p-4 border rounded-4 h-100">
            <h3 className="h5 fw-semibold">Activity logs</h3>
            <p className="text-muted mb-0">Capture live workout stats and share progress with your team.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 border rounded-4 h-100">
            <h3 className="h5 fw-semibold">Leaderboards</h3>
            <p className="text-muted mb-0">Turn healthy competition into momentum with real-time rankings.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 border rounded-4 h-100">
            <h3 className="h5 fw-semibold">Personalized plans</h3>
            <p className="text-muted mb-0">Recommend the next best workout based on goals and recent activity.</p>
          </div>
        </div>
      </section>

      <section id="api" className="mt-5">
        <p className="text-muted">Backend health endpoint: /api/health</p>
      </section>
    </main>
  )
}

export default App
