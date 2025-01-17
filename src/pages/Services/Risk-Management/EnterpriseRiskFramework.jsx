import React from "react";


const EnterpriseRiskFramework = () => {
  const cards = [
    {
      title: "Development",
      what: `A business/process, depending on the domain,can be prone to many risk areas such as strategic risk, model risk, financial risk (such as credit risk,market risk,liquidity risk), operational risk, liquidity risk, human resource risk, compliance risk, reputational risk, project risk etc. As such, for the process/business to run smoothly and efficiently, it is mandatory to first identify all the related risk areas, defining the target problems (within an area) that needs to be monitored, set governance policies and implement set of metrics and/or models (as necessary) to keep assessing them on an ongoing basis.`,
      why: `Development of governance policies and setting of processes (e.g. model development and validation etc.) to monitor and manage different risk areasis the key to an efficient process management, risk management practices, sustainable business/process, good governance practices that enhances transparency & trust and long-term success. This streamlines the entire process by means of identification and management of the potential areas that induces any kind of risk to the business/process and/or individuals related to it. This ensures avoiding a sudden shock arose byadverse results due to a process failure which is not so obscure if the same is not monitored.`,
    },
    {
      title: "Maintenance",
      what: `Governance policies and the implemented processes (e.g. metrics and/or models etc.) to risk manage certain processes/areas need monitoring on an ongoing basis due to the ongoing changes in market dynamics and/or process/business strategy and/or dynamics, regime shifts, government policy changes, fiscal stimulus changes and many other factors. Having out of date processes for risk management is as good as not having a process. As such, the policies and processes, once implemented, need to be monitored on an ongoing basis and updated as necessary.`,
      why: `The rationale behind the maintenance is similar to why they were developed. Maintenance is the control for your policies and processesto prevent from becoming outdated and avoids the risk of failure of the underlying areas/processes.`,
    },
  ];

  return (
    <div className="bg-[#D2D2D2] min-h-screen flex flex-col font-montserrat overflow-x-hidden">
      <div className="bg-[#9E6AED] px-4 py-4">
        <div className="text-medium font-montserrat text-white font-normal mt-20 px-12 text-left">
          Services {">"} Risk Management {">"} Enterprise Risk Framework
        </div>
        <h1 className="text-3xl font-montserrat text-white font-semibold mt-1 px-12 text-left">
          Enterprise Risk Framework
        </h1>
      </div>
      <div className="flex-1">
        <div className="grid grid-cols-3 gap-4 px-2 md:px-6 lg:px-16 py-6">
          {/* Column Headings */}
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
          {/* Card Content */}
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

export default EnterpriseRiskFramework;
