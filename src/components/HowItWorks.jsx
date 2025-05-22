
import { useState } from "react"
import "../styles/HowItWorks.css"

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    {
      id: 1,
      title: "Select Your Blocks",
      description: "Browse through the available PlutoBlocks and select the ones you need for your drone program.",
      icon: "🔍",
    },
    {
      id: 2,
      title: "Arrange in Sequence",
      description: "Drag and drop blocks in the order you want them to execute. The sequence flows from top to bottom.",
      icon: "🔄",
    },
    {
      id: 3,
      title: "Configure Parameters",
      description: "Set specific values for each block, such as flight duration, height, or rotation angle.",
      icon: "⚙️",
    },
    {
      id: 4,
      title: "Connect to Drone",
      description: "Establish a connection between your device and the Pluto drone using Bluetooth or Wi-Fi.",
      icon: "📡",
    },
    {
      id: 5,
      title: "Execute Program",
      description: "Run your program and watch as your drone performs the actions you've programmed in sequence.",
      icon: "▶️",
    },
  ]

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="title">How It Works</h2>

        <div className="steps-container">
          <div className="steps-navigation">
            {steps.map((step) => (
              <button
                key={step.id}
                className={`step-button ${activeStep === step.id ? "active" : ""}`}
                onClick={() => setActiveStep(step.id)}
              >
                <span className="step-icon">{step.icon}</span>
                <span className="step-number">Step {step.id}</span>
              </button>
            ))}
          </div>

          <div className="step-content">
            {steps.map((step) => (
              <div key={step.id} className={`step-details ${activeStep === step.id ? "active" : ""}`}>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <div className="step-visualization">
                  <div className="visualization-placeholder">
                    {/* Step-specific visualization */}
                    <div className={`step-animation step-${step.id}`}>
                      <div className="animation-element"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
