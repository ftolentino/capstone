export default function Controls({ controls }) {
  const {
    xRotation,
    yRotation,
    zRotation,
    xPosition,
    yPosition,
    zPosition,
    xScale,
    yScale,
    zScale,
    setXRotation,
    setYRotation,
    setZRotation,
    setXPosition,
    setYPosition,
    setZPosition,
    setXScale,
    setYScale,
    setZScale
  } = controls;
  return (
    <div className="controls">
      <h2>Selected Object: Cube</h2>
      <div className="controlGroup">
        <div className="control">
          <label>X Position</label>
          <input
            value={xPosition}
            onChange={(e) => setXPosition(e.target.value)}
            step={1 / 32}
            type="number"
          />
        </div>
        <div className="control">
          <label>Y Position</label>
          <input
            value={yPosition}
            onChange={(e) => setYPosition(e.target.value)}
            step={1 / 32}
            type="number"
          />
        </div>
        <div className="control">
          <label>Z Position</label>
          <input
            value={zPosition}
            onChange={(e) => setZPosition(e.target.value)}
            step={1 / 32}
            type="number"
          />
        </div>
      </div>
      <div className="controlGroup">
        <div className="control">
          <label>X Rotation</label>
          <input
            value={xRotation}
            onChange={(e) => setXRotation(e.target.value)}
            step={1 / 32}
            type="number"
          />
        </div>
        <div className="control">
          <label>Y Rotation</label>
          <input
            value={yRotation}
            onChange={(e) => setYRotation(e.target.value)}
            step={1 / 32}
            type="number"
          />
        </div>
        <div className="control">
          <label>Z Rotation</label>
          <input
            value={zRotation}
            onChange={(e) => setZRotation(e.target.value)}
            step={1 / 32}
            type="number"
          />
        </div>
      </div>
      <div className="controlGroup">
        <div className="control">
          <label>X Scale</label>
          <input
            value={xScale}
            onChange={(e) => setXScale(e.target.value)}
            step={1 / 32}
            type="number"
          />
        </div>
        <div className="control">
          <label>Y Scale</label>
          <input
            value={yScale}
            onChange={(e) => setYScale(e.target.value)}
            step={1 / 32}
            type="number"
          />
        </div>
        <div className="control">
          <label>Z Scale</label>
          <input
            value={zScale}
            onChange={(e) => setZScale(e.target.value)}
            step={1 / 32}
            type="number"
          />
        </div>
      </div>
    </div>
  );
}
