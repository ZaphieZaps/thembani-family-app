import React from 'react';
// The import for './App.css' has been removed as it was causing a resolution error.
// All necessary styles are currently handled inline within this component.

function App() {
  const styles = {
    app: {
      fontFamily: 'Inter, sans-serif', // Using 'Inter' as recommended
      textAlign: 'center',
      minHeight: '100vh',
      backgroundColor: '#f9f9f9',
      color: '#333',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '8px', // Added rounded corners to the main app container
    },
    header: {
      padding: '2rem 1rem 1rem',
      backgroundColor: '#fffbe6',
      borderRadius: '8px 8px 0 0', // Rounded top corners for the header
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    },
    title: {
      fontSize: '2.5rem',
      margin: 0,
      color: '#5e3c58',
      fontWeight: 'bold', // Made title bold for emphasis
    },
    subtitle: {
      fontSize: '1.2rem',
      marginTop: '0.5rem',
      color: '#7d6b7d',
    },
    main: {
      padding: '2rem',
      flexGrow: 1,
      backgroundColor: '#ffffff', // White background for main content area
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', // Subtle shadow
      margin: '1rem', // Added some margin around the main content to separate it
      borderRadius: '8px', // Rounded corners for the main content area
    },
    footer: {
      backgroundColor: '#eee',
      padding: '1rem',
      fontSize: '0.9rem',
      color: '#777',
      borderRadius: '0 0 8px 8px', // Rounded bottom corners for the footer
      boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.05)', // Subtle shadow for the footer
    },
  };

  return (
    // The main container for the application.
    // This div uses flexbox to arrange header, main, and footer vertically
    // and ensures the app takes at least the full viewport height.
    <div className="App" style={styles.app}>
      {/* Header section: Contains the family name and a subtitle */}
      <header style={styles.header}>
        <h1 style={styles.title}>Thembani Family</h1>
        <p style={styles.subtitle}>Our legacy. Our roots. Our stories.</p>
      </header>

      {/* Main content section: Placeholder for future family content */}
      <main style={styles.main}>
        <section>
          <p>Welcome to our family hub — a space to celebrate our memories, preserve our history, and stay connected across generations.</p>
          {/* You can add more sections here for:
              - Photo galleries
              - Family tree
              - Important dates
              - Blog/news updates
              - Contact forms
          */}
        </section>
      </main>

      {/* Footer section: Displays copyright information */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Thembani Family • All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;

