import "../styles/Introduction.css";

const Introduction = () => {
  return (
    <section id="introduction" className="introduction">
      <div className="container">
        <h1 className="title">What are PlutoBlocks?</h1>

        <div className="content">
          <div className="text-content">
            <p>
              PlutoBlocks make it easier for people to program drones using visual blocks,
              which is especially useful if you're not comfortable writing code from scratch.
            </p>
            <p>
              You can basically build flight paths, automate tasks, or even do drone tricks
              just by dragging and connecting different action blocks—each one maps to a
              specific drone command.
            </p>
          </div>

          <div className="image-container">
            <div className="image-placeholder">
              {/* Drone demo video for visual reference */}
              <video
                src="/drone_video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="drone-video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;