import React from "react";
import { feedbackTrends } from "../../constants/feedbackTrends";

function FeedBackTrends({ data = feedbackTrends }) {
  return (
    <div id="feedback-trends">
      {data.map((eachTrend) => {
        return (
          <>
            <div className="each-feedback-trend row">
              <h4 className="mt-5 mb-2 dark-color"><u>{eachTrend.title}</u></h4>
              <div className="feedback-trend-images-wrapper col-12 row">
                {eachTrend.feedbackImages.map((eachImg) => {
                  return <div className="each-feedback-img col-12">
                    <img src={eachImg} alt="img" style={{width: '100%'}}/>
                  </div>;
                })}
              </div>
              <hr />    
            </div>
          </>
        );
      })}
    </div>
  );
}

export default FeedBackTrends;
