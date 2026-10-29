export default function App() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            MV
          </span>
          <div>
            <p className="eyebrow">MIDI VISUALIZER</p>
            <h1>Untitled project</h1>
          </div>
        </div>
        <button className="export-button" type="button" disabled>
          Export MP4
        </button>
      </header>

      <section className="workspace" aria-label="Project workspace">
        <aside className="tracks-panel">
          <div className="section-heading">
            <h2>Tracks</h2>
            <button type="button" className="add-track" disabled>
              + Add track
            </button>
          </div>
          <div className="empty-state">
            <span className="empty-icon" aria-hidden="true">
              +
            </span>
            <p>No tracks yet</p>
            <span>Add a track to start building your visualization.</span>
          </div>
        </aside>

        <section className="preview-panel" aria-label="Preview">
          <div className="preview-toolbar">
            <div>
              <p className="eyebrow">PREVIEW</p>
              <h2>Your visualizer workspace</h2>
            </div>
            <span className="status-pill">Scaffold ready</span>
          </div>
          <div className="preview-canvas">
            <div className="canvas-grid" aria-hidden="true" />
            <div className="canvas-message">
              <div className="waveform" aria-hidden="true">
                {[
                  18, 30, 22, 42, 26, 54, 35, 25, 45, 28, 38, 19, 32, 48, 24,
                ].map((height, index) => (
                  <span key={index} style={{ height: `${height}px` }} />
                ))}
              </div>
              <p>Bring your music to life</p>
              <span>Your render preview will appear here.</span>
            </div>
          </div>
          <div className="preview-footer">
            <span>Audio preview</span>
            <button type="button" disabled aria-label="Play audio preview">
              ▶
            </button>
            <div className="seek-track" aria-hidden="true">
              <span />
            </div>
            <span className="timecode">00:00</span>
            <button type="button" className="render-button" disabled>
              Render preview
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}
