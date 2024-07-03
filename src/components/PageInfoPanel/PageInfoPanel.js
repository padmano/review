import React from "react";

function PageInfoPanel() {
  return (
    <div class="about-text go-to">
      <h3 class="title-heading dark-color">About me</h3>
      <h6 class="theme-color lead">
      I am an experienced data engineer with a background in Full-Stack development and DevOps as well, with keen interest to explore newer avenues.
      </h6>
      <p>
        As a <mark>passionate data engineer</mark>, I have learnt a lot about data systems and how to work with them to add value. I have designed and developed
        scalable big data processing pipelines using distributed computing
        systems like Spark. 
        
        I have created ETL workflows to extract data
        from different sources, transform it into a standardized format and load
        it into data warehouse for further analysis. 
        
        I have built the state-of-the art data module for a banking client to ingest offers for customers in real time as well as in batches. 

      </p>
      <p>
        I am a creative, detail oriented and versatile person. I am a great team
        player and well organised with proven skills in project management and
        team leadership.
      </p>
      <div class="row about-list">
        <div class="col-md-6">
          <div class="media">
            <label>Employee ID</label>
            <p>30867</p>
          </div>
          <div class="media">
            <label>Email</label>
            <p>padmanabhan.m@thoughtworks.com</p>
          </div>
          <div class="media">
            <label>Working Office</label>
            <p>Chennai</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="media">
            <label>Role</label>
            <p>Data Engineer, Sr. Consultant</p>
          </div>
          <div class="media">
            <label>Project</label>
            <p>
              IDFC HPE (Hyper Personalisation Engine)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageInfoPanel;
