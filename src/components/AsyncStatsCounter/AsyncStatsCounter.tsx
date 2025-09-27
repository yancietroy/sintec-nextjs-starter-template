// Example of React 19 Server Component with async data fetching
async function fetchStats() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    projects: 150,
    clients: 89,
    experience: 50,
    awards: 25
  };
}

export default async function AsyncStatsCounter() {
  const stats = await fetchStats();

  return (
    <section className="fact-area" style={{ backgroundColor: '#f8f9fa', padding: '60px 0' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-fact text-center">
              <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#2c3e50' }}>
                {stats.projects}+
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#7f8c8d' }}>Projects Completed</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-fact text-center">
              <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#2c3e50' }}>
                {stats.clients}+
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#7f8c8d' }}>Happy Clients</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-fact text-center">
              <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#2c3e50' }}>
                {stats.experience}+
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#7f8c8d' }}>Years Experience</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-fact text-center">
              <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#2c3e50' }}>
                {stats.awards}+
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#7f8c8d' }}>Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}