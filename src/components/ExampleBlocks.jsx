import { useState } from "react"
import "../styles/ExampleBlocks.css"

const ExampleBlocks = ({ onBlockSelect }) => {
  const [hoveredBlock, setHoveredBlock] = useState(null)

  const blocks = [
    {
      id: 1,
      name: "Take Off",
      description: "Commands the drone to take off and hover at a specific height.",
      code: "drone.takeOff(height);",
      color: "#4CAF50",
    },
    {
      id: 2,
      name: "Land",
      description: "Commands the drone to land safely from its current position.",
      code: "drone.land();",
      color: "#F44336",
    },
    {
      id: 3,
      name: "Move Forward",
      description: "Moves the drone forward by a specified distance.",
      code: "drone.moveForward(distance);",
      color: "#2196F3",
    },
    {
      id: 4,
      name: "Rotate",
      description: "Rotates the drone by a specified angle in degrees.",
      code: "drone.rotate(angle);",
      color: "#FF9800",
    },
    {
      id: 5,
      name: "Flip",
      description: "Performs a flip in the specified direction.",
      code: "drone.flip(direction);",
      color: "#9C27B0",
    },
    {
      id: 6,
      name: "Hover",
      description: "Makes the drone hover in place for a specified duration.",
      code: "drone.hover(duration);",
      color: "#00BCD4",
    },
  ]

  const handleBlockClick = (block) => {
    onBlockSelect(block)
  }

  return (
    <section id="example-blocks" className="example-blocks">
      <div className="container">
        <h2 className="title">Example Blocks</h2>
        <p className="subtitle">Explore these common PlutoBlocks to get started with drone programming</p>

        <div className="blocks-grid">
          {blocks.map((block) => (
            <div
              key={block.id}
              className={`block-card ${hoveredBlock === block.id ? "hovered" : ""}`}
              style={{ "--block-color": block.color }}
              onMouseEnter={() => setHoveredBlock(block.id)}
              onMouseLeave={() => setHoveredBlock(null)}
              onClick={() => handleBlockClick(block)}
            >
              <div className="block-header">
                <h3 className="block-name">{block.name}</h3>
              </div>
              <div className="block-content">
                <p className="block-description">{block.description}</p>
                <div className="code-example">
                  <code>{block.code}</code>
                </div>
              </div>
              <button className="try-button">Try This Block</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExampleBlocks
