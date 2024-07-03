import React from "react";
import "./FeedbackSection.css";

function FeedbackSection({ title = "Feedback", data = [], cardHeight = 350 }) {
  return (
    <section class="home-testimonial">
      <div class="container-fluid">
        <div class="row d-flex justify-content-center testimonial-pos">
          <div class="col-md-12 d-flex justify-content-center">
            <h2>{title}</h2>
          </div>
        </div>
        <section class="home-testimonial-bottom">
          <div class="container testimonial-inner">
            <div class="row d-flex justify-content-center">
              {data.map((iFeedback) => {
                const { name, role, feedback, image } = iFeedback;
                return (
                  <div class="col-md-6 style-3 mt-2 mb-2 feedback-card">
                    <div class="tour-item ">
                      <div class="tour-desc bg-white" style={{ height: cardHeight }}>
                        <div class="tour-text color-grey-3 text-center">
                          &ldquo;{feedback}&rdquo;
                        </div>
                        <div>
                          <div class="d-flex justify-content-center pt-2 pb-2">
                            {image && (
                              <img class="tm-people" src={require(`../../assets/img/${image}`)} alt="img" />
                            )}
                          </div>
                          <div class="link-name d-flex justify-content-center">
                            {name}
                          </div>
                          <div class="link-position d-flex justify-content-center">
                            {role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default FeedbackSection;
