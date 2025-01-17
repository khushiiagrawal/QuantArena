import React from "react";


const PolicyReview = () => {
  const cards = [
    {
      title: "Policy Validation",
      what: `To have an enterprise-wide standard process sets to be followed, increased transparency and understanding of the processes, good governance and regulation, defining and maintaining the policies for each of the areas and/or processes are very important. Given a target area to be regulated, after the policy objective, scope, statements, procedures, responsibilities, enforcements, exceptions etc. are defined, i.e. policy is developed, a head-to-toe validation of the entire policy is required to assess the policy’s applicability, effectiveness, enforceability, potential deficiencies & weaknesses and also the need for further clauses and sub-clauses to make the policy spill-proof. Also, please note that, it is a very common and severe misconception that development and validation of policies are completely subjective and does not include any mathematical assessments behind it.`,
      why: `Without assessing the policy’s viability, applicability, effectiveness to regulate the target process, enforceability and potential deficiencies & weaknesses, implementing a policy is equal to not having a policy. Assessment at the aforementioned degrees might result in many identified deficiencies and weaknesses in the policy, addition of clauses and sub-clauses in the policy, addition or removal of an entire portion of the policy and restriction on usage under certain cases or scenarios. Therefore, complete validation of a policy is equally important likewise developing it.`,
    },
    {
      title: "Cyclical Policy Review",
      what: `Due to changes in market dynamics and/or process/business strategy and/or dynamics, regime shifts, government policy changes, fiscal stimulus changes and many other factors, a policy, once implemented can not remain unchanged forever. Non-upgradation of the policy with such changing circumstances will make the policy inefficient, irrelevant, unenforceable and even inapplicable for many sub-areas/sub-processes. Cyclical policy review is your tool to keep assessing the policy for its effectiveness in a periodic manner.`,
      why: `A cyclical policy review opens up the door for assessing the need of updating the policy in a timely manner in order to maintain its efficacy. This totally prevents the risk of the policy or a significant part of it become inapplicable all of a sudden and therefore mitigating operational and regulatory risk. This also ensures not needing to completely redevelop an entire policy from scratch as the policy in place is getting updated in a timely manner in order to remain applicable, efficient, avoid unnecessary debates and consistent trust on the management and regulators of the process/business.`,
    },
  ];

  return (
    <div className="bg-[#D2D2D2] min-h-screen flex flex-col font-montserrat overflow-x-hidden">
      <div className="bg-[#9E6AED] px-4 py-4">
        <div className="text-medium font-montserrat text-white font-normal mt-20 px-12 text-left">
          Services {">"} Risk Management {">"} Policy Review
        </div>
        <h1 className="text-3xl font-montserrat text-white font-semibold mt-1 px-12 text-left">
          Policy Review
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
                <p
                  className="text-sm md:text-md text-gray-700 text-justify break-words"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {card.what}
                </p>
              </div>
              <div className="bg-[#EFEFEF] p-4 md:p-6 rounded-lg shadow-md break-words">
                <p
                  className="text-sm md:text-md text-gray-700 text-justify break-words"
                  style={{ whiteSpace: "pre-line" }}
                >
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

export default PolicyReview;