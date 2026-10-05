export default function Hero() {
  return (
    <section id="top" className="hero-section container reveal fade-in">
      <div className="hero-copy">
        <p className="eyebrow">Premium AI access</p>
        <h1>
          <span className="google-word">Google Pro</span>
          <span className="access-word">ACCESS</span>
        </h1>
        <p className="hero-subtitle">Premium access. Affordable price.</p>
      </div>

      <div className="hero-badges">
        <div className="badge-card glow-card">
          <span className="badge-icon">⚡</span>
          <span>Affordable</span>
        </div>
        <div className="badge-card glow-card">
          <span className="badge-icon">⚙</span>
          <span>Fast</span>
        </div>
        <div className="badge-card glow-card">
          <span className="badge-icon">✓</span>
          <span>Easy</span>
        </div>
      </div>

      <div className="device-scene">
        <div className="device phone">
          <div className="phone-screen">
            <div className="phone-topbar">
              <span>9:41</span>
              <span>◉</span>
            </div>
            <div className="phone-header">Good morning</div>
            <div className="phone-subtitle">How can I help you today?</div>
            <div className="query-box">Ask anything</div>
            <div className="mini-grid">
              <span>Write</span>
              <span>Calculate</span>
              <span>Code</span>
              <span>Analyze</span>
              <span>Create</span>
              <span>Plan</span>
            </div>
          </div>
        </div>

        <div className="device laptop">
          <div className="laptop-screen">
            <div className="side-menu">
              <span className="active">Home</span>
              <span>Chat</span>
              <span>Explore</span>
              <span>Workspace</span>
              <span>Library</span>
              <span>Settings</span>
            </div>
            <div className="laptop-content">
              <div className="laptop-title">Good morning</div>
              <div className="laptop-subtitle">How can I help you today?</div>
              <div className="search-box">Ask anything</div>
              <div className="action-grid">
                <span>Write</span>
                <span>Calculate</span>
                <span>Code</span>
                <span>Analyze</span>
                <span>Create</span>
                <span>Plan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="floating-icons">
          <span className="float-icon app one">M</span>
          <span className="float-icon app two">✦</span>
          <span className="float-icon app three">G</span>
          <span className="float-icon app four">◫</span>
          <span className="float-icon app five">◎</span>
          <span className="float-icon app six">✦</span>
        </div>
      </div>
    </section>
  );
}
