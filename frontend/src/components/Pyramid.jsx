import React from "react";

const Pyramid = () => {
  return (
    <div style={{ marginTop: "50px", textAlign: "center" }}>
      <style>{`
        .pyramid {
          position: relative;
          width: 200px;
          margin: 0 auto;
        }
        .level {
          width: 0;
          height: 0;
          border-left: 100px solid transparent;
          border-right: 100px solid transparent;
          border-bottom: 50px solid #6c757d;
          position: absolute;
          left: 0;
        }
        .level-0 { top: 200px; border-bottom-color: #343a40; }
        .level-1 { top: 150px; border-bottom-color: #495057; }
        .level-2 { top: 100px; border-bottom-color: #6c757d; }
        .level-3 { top: 50px; border-bottom-color: #adb5bd; }
        .level-4 { top: 0; border-bottom-color: #dee2e6; }
        .label {
          position: absolute;
          width: 100%;
          text-align: center;
          color: white;
          font-size: 12px;
          font-weight: bold;
          top: 10px;
        }
        .level-0 .label { top: -40px; }
        .level-1 .label { top: -40px; }
        .level-2 .label { top: -40px; }
        .level-3 .label { top: -40px; }
        .level-4 .label { top: -40px; color: #000; }
      `}</style>

      <div className="pyramid">
        <div className="level level-0">
          <div className="label">Level 0 – Physical production process</div>
        </div>
        <div className="level level-1">
          <div className="label">Level 1 – Physical sensors</div>
        </div>
        <div className="level level-2">
          <div className="label">Level 2 – Monitoring & PLCs</div>
        </div>
        <div className="level level-3">
          <div className="label">Level 3 – MES</div>
        </div>
        <div className="level level-4">
          <div className="label">Level 4 – ERP/CRM</div>
        </div>
      </div>
    </div>
  );
};

export default Pyramid;
