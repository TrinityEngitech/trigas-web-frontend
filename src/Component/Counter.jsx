// css
import "../assets/css/Counter.css";

import { useEffect } from "react";

function Counter() {
  useEffect(() => {
    function counter(id, start, end, duration) {
      let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
          current += increment;
          if (obj) obj.textContent = current; // Check if obj exists
          if (current === end) {
            clearInterval(timer);
          }
        }, step);
    }

    // Call the counter function after the component is mounted
    counter("count1", 1, 25, 4000);
    counter("count2", 3, 100, 4000);
    counter("count3", 3, 500, 4000);
    counter("count4", 3, 500, 4000);
    counter("count5", -100, 0, 4000);
  }, []); // Empty array to run this effect only once on mount

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />

      <section className="counter-wrapper">
        <div className="counter-inner">
          <div className="container-fulid">
            <div className="row g-0">
              <div className="col-lg-2 col-md-4 col-sm-6 col-12 text-center" id="counter">
                <div className=" count">
                  <span id="count1">25</span>+
                </div>
                <div>Years Experiences</div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-12 text-center" id="counter">
                <div className=" count">
                  <span id="count2">100</span>+
                </div>
                <div>Trained Staff</div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-12 text-center" id="counter">
                <div className=" count">
                  <span id="count3">500</span>+
                </div>
                <div>Complate Project</div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-12 text-center" id="counter">
                <div className=" count">
                  <span id="count4">500</span>+
                </div>
                <div>Client Statifaction</div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Counter;
