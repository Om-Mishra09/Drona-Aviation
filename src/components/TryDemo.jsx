import { useState, useEffect } from "react"
import "../styles/TryDemo.css"

const TryDemo = ({ selectedBlock }) => {
  const [output, setOutput] = useState("")
  const [isExecuting, setIsExecuting] = useState(false)
  const [parameters, setParameters] = useState({})

  useEffect(() => {
    if (selectedBlock) {
      // Reset output and set default parameters based on selected block
      setOutput("")

      const defaultParams = {}
      if (selectedBlock.name === "Take Off") {
        defaultParams.height = 1.5
      } else if (selectedBlock.name === "Move Forward") {
        defaultParams.distance = 2
      } else if (selectedBlock.name === "Rotate") {
        defaultParams.angle = 90
      } else if (selectedBlock.name === "Flip") {
        defaultParams.direction = "forward"
      } else if (selectedBlock.name === "Hover") {
        defaultParams.duration = 3
      }

      setParameters(defaultParams)
    }
  }, [selectedBlock])

  const handleParameterChange = (param, value) => {
    setParameters({
      ...parameters,
      [param]: value,
    })
  }

  const executeBlock = () => {
    if (!selectedBlock) return

    setIsExecuting(true)
    setOutput("")

    // Simulate drone execution with output messages
    const messages = []

    setTimeout(() => {
      messages.push("Initializing drone connection...")
      setOutput(messages.join("\n"))
    }, 500)

    setTimeout(() => {
      messages.push("Connection established.")
      setOutput(messages.join("\n"))
    }, 1000)

    setTimeout(() => {
      messages.push(`Executing command: ${getExecutionCode()}`)
      setOutput(messages.join("\n"))
    }, 1500)

    setTimeout(() => {
      if (selectedBlock.name === "Take Off") {
        messages.push(`Drone taking off to height: ${parameters.height}m`)
      } else if (selectedBlock.name === "Land") {
        messages.push("Drone landing safely")
      } else if (selectedBlock.name === "Move Forward") {
        messages.push(`Drone moving forward: ${parameters.distance}m`)
      } else if (selectedBlock.name === "Rotate") {
        messages.push(`Drone rotating: ${parameters.angle}°`)
      } else if (selectedBlock.name === "Flip") {
        messages.push(`Drone performing ${parameters.direction} flip`)
      } else if (selectedBlock.name === "Hover") {
        messages.push(`Drone hovering for ${parameters.duration} seconds`)
      }
      setOutput(messages.join("\n"))
    }, 2000)

    setTimeout(() => {
      messages.push("Command executed successfully.")
      setOutput(messages.join("\n"))
      setIsExecuting(false)
    }, 3000)
  }

  const getExecutionCode = () => {
    if (!selectedBlock) return ""

    switch (selectedBlock.name) {
      case "Take Off":
        return `drone.takeOff(${parameters.height});`
      case "Land":
        return "drone.land();"
      case "Move Forward":
        return `drone.moveForward(${parameters.distance});`
      case "Rotate":
        return `drone.rotate(${parameters.angle});`
      case "Flip":
        return `drone.flip("${parameters.direction}");`
      case "Hover":
        return `drone.hover(${parameters.duration});`
      default:
        return ""
    }
  }

  return (
    <section id="try-demo" className="try-demo">
      <div className="container">
        <h2 className="title">Try Demo Block</h2>

        <div className="demo-container">
          <div className="block-selector">
            <h3>Selected Block</h3>
            {selectedBlock ? (
              <div className="selected-block" style={{ "--block-color": selectedBlock.color }}>
                <h4>{selectedBlock.name}</h4>
                <p>{selectedBlock.description}</p>

                <div className="parameters">
                  {selectedBlock.name === "Take Off" && (
                    <div className="parameter">
                      <label>Height (meters):</label>
                      <input
                        type="number"
                        min="0.5"
                        max="10"
                        step="0.5"
                        value={parameters.height || 1.5}
                        onChange={(e) => handleParameterChange("height", Number.parseFloat(e.target.value))}
                      />
                    </div>
                  )}

                  {selectedBlock.name === "Move Forward" && (
                    <div className="parameter">
                      <label>Distance (meters):</label>
                      <input
                        type="number"
                        min="0.5"
                        max="10"
                        step="0.5"
                        value={parameters.distance || 2}
                        onChange={(e) => handleParameterChange("distance", Number.parseFloat(e.target.value))}
                      />
                    </div>
                  )}

                  {selectedBlock.name === "Rotate" && (
                    <div className="parameter">
                      <label>Angle (degrees):</label>
                      <input
                        type="number"
                        min="-360"
                        max="360"
                        step="15"
                        value={parameters.angle || 90}
                        onChange={(e) => handleParameterChange("angle", Number.parseInt(e.target.value))}
                      />
                    </div>
                  )}

                  {selectedBlock.name === "Flip" && (
                    <div className="parameter">
                      <label>Direction:</label>
                      <select
                        value={parameters.direction || "forward"}
                        onChange={(e) => handleParameterChange("direction", e.target.value)}
                      >
                        <option value="forward">Forward</option>
                        <option value="backward">Backward</option>
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                      </select>
                    </div>
                  )}

                  {selectedBlock.name === "Hover" && (
                    <div className="parameter">
                      <label>Duration (seconds):</label>
                      <input
                        type="number"
                        min="1"
                        max="30"
                        step="1"
                        value={parameters.duration || 3}
                        onChange={(e) => handleParameterChange("duration", Number.parseInt(e.target.value))}
                      />
                    </div>
                  )}
                </div>

                <button className="execute-button" onClick={executeBlock} disabled={isExecuting}>
                  {isExecuting ? "Executing..." : "Execute Block"}
                </button>
              </div>
            ) : (
              <div className="no-block-selected">
                <p>No block selected. Please select a block from the Example Blocks section above.</p>
              </div>
            )}
          </div>

          <div className="output-console">
            <h3>Console Output</h3>
            <div className="console">
              <pre>{output || "Output will appear here when you execute a block."}</pre>
            </div>
          </div>
        </div>

        <div className="drone-visualization">
          <div className="drone-container">
            <div className="drone-model">
              <div className="drone-body"></div>
              <div className="propeller propeller-1"></div>
              <div className="propeller propeller-2"></div>
              <div className="propeller propeller-3"></div>
              <div className="propeller propeller-4"></div>
            </div>
            <div className="shadow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TryDemo
