import React, { useState, CSSProperties } from "react";
import {  PropagateLoader } from "react-spinners";




const Loading = () => {

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#fc5185");
    return (
      <div className="max-w-7xl mx-auto min-h-screen flex justify-center items-center">
        <div className="sweet-loading">
          <button onClick={() => setLoading(!loading)}></button>
          <input
            onChange={(input) => setColor(input.target.value)}
           
          />

            <PropagateLoader
            color={color}
            loading={loading}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    );
};

export default Loading;