import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.title}>Thembani Family</h1>
        <p style={styles.subtitle}>Our legacy. Our roots. Our stories.</p>
      </header>

      <main style={styles.main}>
        <section>
          <p>Welcome to our family hub — a space to celebrate our memories, preserve our history, and stay connected across generations.</p>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Thembani Family • All rights reserved</p>
      </footer>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    padding: '2rem 1rem 1rem',
    backgroundColor: '#fffbe6',
  },
  title: {
    fontSize: '2.5rem',
    margin: 0,
    color: '#5e3c58',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginTop: '0.5rem',
    color: '#7d6b7d',
  },
  main: {
    padding: '2rem',
    flexGrow: 1,
  },
  footer: {
    backgroundColor: '#eee',
    padding: '1rem',
    fontSize: '0.9rem',
    color: '#777',
  },
};

export default App;

