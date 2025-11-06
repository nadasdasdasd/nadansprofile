import Header from "./components/Header"

function App() {
  return (
    <div>
      <h1>Personal Profile</h1>
      <Header/>
     <section id="about" style={{ marginTop: '100vh', padding: 20, border: '1px solid #ccc' }}>
        <h2>About</h2>
        <p>Hi, I'm a frontend developer specializing in React and TanStack Router.</p>
      </section>

      <section id="work" style={{ marginTop: '100vh', padding: 20, border: '1px solid #ccc' }}>
        <h2>Work Experience</h2>
        <ul>
          <li>Frontend Developer(2020 Present)</li>
        </ul>
      </section>

      <section id="contact" style={{ marginTop: '100vh', padding: 20, border: '1px solid #ccc' }}>
        <h2>Contact</h2>
        <p>Email: nisrinaseptiana026@gmail.com</p>
        <p>GitHub: https://github.com/nadasdasdasd</p>
      </section>

      <section id="education" style={{ marginTop: '100vh', padding: 20, border: '1px solid #ccc' }}>
        <h2>Education</h2>
        <ul>
          <li>B.S. Computer Science, Bina Nusantara University (2020-2025)</li>
        </ul>
      </section>
      <footer>
        <p>© 2025 Nada Nisrina Septiana</p>
      </footer>
    </div>
  )
}

export default App
