function App() {
  return (
      <div className="app">
          <header className="header">
              <span>ISSUES</span>
          </header>
          <main className="contents">
              <nav className="gnb">
                  <div className="tab-buttons">
                      <button>Labels</button>
                      <button>Milestones</button>
                  </div>
                  <button className="new-btn">New Label</button>
              </nav>

              <section className="row-wrap">
                  <div className="row-count">
                      <span>8 labels</span>
                  </div>
                  <div className="row-list">
                      <div className="row-item">
                          <div className="subject">
                              <span>bug</span>
                          </div>
                          <div className="desc">
                              <span>description</span>
                          </div>
                          <div className="buttons">
                              <button>Edit</button>
                              <button>Delete</button>
                          </div>
                      </div>
                      <div className="row-item">
                          <div className="subject">
                              <span>bug</span>
                          </div>
                          <div className="desc">
                              <span>description</span>
                          </div>
                          <div className="buttons">
                              <button>Edit</button>
                              <button>Delete</button>
                          </div>
                      </div>
                      <div className="row-item">
                          <div className="subject">
                              <span>bug</span>
                          </div>
                          <div className="desc">
                              <span>description</span>
                          </div>
                          <div className="buttons">
                              <button>Edit</button>
                              <button>Delete</button>
                          </div>
                      </div>
                  </div>
              </section>
          </main>
      </div>
  );
}

export default App;
