import React from "react";


const ModelReview = () => {
  const cards = [
    {
      title: "Model Validation",
      what: `Businesses/Processes are heavily reliant on statistical models everyday for strategizing, planning, implementing and risk managing each of their processes. Model validation is a risk management process that validates all the aspects like assumptions behind the model, input data quality & consistency, model estimation, model output quality, efficiency of the model outputs to address the target problem that the model is solving. A thorough testing is done on each aspect of the modelling process, the model and the outputs including benchmarking the model against several other challenger models.`,
      why: `Ever seen a company employing a person just because they have a good resume? No, right? Model development is having that good resume and model validation resembles the screening processes and interviews undertaken before actually providing that person with an offer letter. Model validation is a risk management process that ensures that the suggested model by developer is actually fit for solving the target problem and also identifies model deficiencies, weaknesses to be addressed in order to increased reliability of the model output and also cases in which the model can not be used.`,
    },
    {
      title: "Cyclical Model Review",
      what: `A model, once developed, can not keep performing forever because the market and business dynamics change, many factors loose importance while many other factors gain importance (considering both included or non-included model variables). As such a periodic review of the model is mandatory in order to keep tracking the model performance and its inferential capabilities (if applicable). Based on the risk rating of the model, the period for review may vary from annual to semi-annual and even quarterly.`,
      why: `Due to the changes in business and market dynamics, the ongoing influx data that the model is applied on may change many characteristics compared to the model training data. Cyclical model review is your tool to assess the ongoing applicability of the model for its generalization ability on the incoming data. Cyclical model review also enables a periodic check on the model’s applicability to efficiently solve the target problem by means of assessing the model performance and its inferential capabilities (if applicable).`,
    },
    {
      title: "Model Revalidation",
      what: `Due to the changes in business and market dynamics, the ongoing influx data that the model is applied on may change many characteristics compared to the model training data. In a real-life scenario, many of the factors loose importance while many other new factors become important. In fact, in some cases two or more factors may start to show significant correlation which was not a case earlier. To solve such changing circumstances, many a times a recalibration of the model may work, while many a times the model may need a complete redevelopment.`,
      why: `Due to such changing circumstances, the model might exhibit potential deficiencies, weaknesses and might even need a recalibration or a complete redevelopment. Based on the cycle, post the model is recalibrated or redeveloped, a complete validation of the model is required to assess each aspects of the modling process and the model.`
    },
  ];

  return (
    <div className="bg-[#D2D2D2] min-h-screen flex flex-col font-montserrat overflow-x-hidden">
      <div className="bg-[#9E6AED] px-4 py-4">
        <div className="text-medium font-montserrat text-white font-normal mt-20 px-12 text-left">
          Services {">"} Risk Management {">"} Model Review
        </div>
        <h1 className="text-3xl font-montserrat text-white font-semibold mt-1 px-12 text-left">
          Model Review
        </h1>
      </div>
      <div className="flex-1">
        <div className="grid grid-cols-3 gap-4 px-2 md:px-6 lg:px-16 py-6">
          <React.Fragment>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <h3 className="text-base md:text-xl text-black font-semibold break-words">
                Service Particulars
              </h3>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <h3 className="text-base md:text-xl text-black font-bold break-words">
                What is it?
              </h3>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <h3 className="text-base md:text-xl text-black font-bold break-words">
                Why is it important?
              </h3>
            </div>
          </React.Fragment>
          {cards.map((card, index) => (
            <React.Fragment key={index}>
              <div className="bg-[#EFEFEF] p-4 md:p-6 rounded-lg shadow-md break-words">
                <h2 className="text-base md:text-xl text-black font-semibold mb-4 text-center break-words">
                  {card.title}
                </h2>
              </div>
              <div className="bg-[#EFEFEF] p-4 md:p-6 rounded-lg shadow-md break-words">
                <p className="text-sm md:text-md text-gray-700 text-justify break-words" style={{ whiteSpace: "pre-line" }}>
                  {card.what}
                </p>
              </div>
              <div className="bg-[#EFEFEF] p-4 md:p-6 rounded-lg shadow-md break-words">
                <p className="text-sm md:text-md text-gray-700 text-justify break-words" style={{ whiteSpace: "pre-line" }}>
                  {card.why}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelReview;
