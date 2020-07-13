import React from 'react';
import { Link } from 'react-router';
function Dashboard() {
  return (
    <article>
      <section className="text-section">
        <h1>Dashboard</h1>
        <p>Welcome, you are logged in!</p>
        <div>
          <div>
            <Link to="/listuser" className="btn btn--login btn--nav">
              List User
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Dashboard;
