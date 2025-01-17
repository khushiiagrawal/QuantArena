import React from 'react';


const EnterpricePolicy = () => {
    const cards = [
        {
            title: "Governance and Compliance Policies",
            what: `Governance policies focus on the systems and processes that ensure an organization is managed responsibly and efficiently. These policies establish a clear structure for decision-making, accountability, and ethical behaviour at all levels. On the other hand, compliance policies are designed to ensure that an organization adheres to all applicable laws, regulations, and internal standards. They aim to prevent violations, reduce risks, and promote a culture of lawful and ethical behaviour.`,
            why: `Governance and compliance policies form the backbone of a well-managed, ethical, and law-abiding organization. They set the tone for corporate behaviour and ensure that all business activities are conducted responsibly and transparently. They provide legal protection by minimizing the risk of fines, lawsuits, and regulatory actions. They also ensure consistent and fair processes throughout the organization. They help in building trust with stakeholders by demonstrating ethical and lawful behaviour.`,
            ex: `- Corporate Governance Policy\n- Code of Conduct and Ethics Policy\n- Conflict of Interest Policy\n- Whistleblower Protection Policy\n- Anti-Corruption and Bribery Policy\n- Records Retention Policy\n- Regulatory Compliance Policy\n- Legal and Contract Management Policy Intellectual Property Policy`,
        },
        {
            title: "Human Resources (HR) Policies",
            what: `Human resources (HR) policies are formal guidelines, rules, and procedures established by an organization to manage and regulate employee-related activities and ensure consistency, fairness, and compliance with legal requirements. These policies serve as a framework for addressing workplace practices, employee behaviour, compensation, development, and relations between employees and the organization.`,
            why: `HR policies are essential tools that guide how an organization manages its workforce, ensuring operational efficiency, compliance, and a transparent & positive workplace culture. They standardize decision-making and treatment of employees, reduce the risk of non-compliance with labour laws, build morale by fostering a supportive environment, minimize workplace disputes through clear guidelines; etc.\n`,
            ex: `- Employee Handbook and Code of Conduct\n- Equal Employment Opportunity (EEO) Policy\n- Workplace Harassment and Anti-Discrimination Policy\n- Recruitment and Hiring Policy\n- Compensation and Benefits Policy\n- Remote Work/Telecommuting Policy\n- Leave and Time Off Policy\n- Performance Management Policy\n- Employee Termination and Exit Policy Workplace Health and Safety Policy`,
        },
        {
            title: "Information Technology (IT) Policies",
            what: `Information technology (IT) policies are set of guidelines and procedures that govern the use, management, and security of an organization’s IT infrastructure, systems, and data. These policies outline the expectations, responsibilities, and acceptable use of IT resources by employees, contractors, and other stakeholders within the organization`,
            why: `IT policies are essential for organizations to manage their technology assets responsibly, protect sensitive information, and ensure compliance with legal and regulatory frameworks. By implementing and enforcing comprehensive IT policies, organizations can create a secure and efficient technology environment.`,
            ex: `- Acceptable Use Policy (AUP)\n- Information Security Policy\n- Cybersecurity Policy\n- Data Privacy and Protection Policy\n- Bring Your Own Device (BYOD) Policy\n- Cloud Computing Usage Policy\n- Password Management Policy\n- Software and Hardware Procurement Policy\n- Incident Response and Recovery Policy IT Change Management Policy`,
        },
        {
            title:`Data and Analytics Policies`,
            what:`Data and analytics policies are guidelines and procedures that govern the collection, management, use,analysis and protection of data within an organization. They ensure that data is handled in a way that aligns with legal, regulatory, and ethical standards while maximizing its value for decision-making and business operations.`,
            why:`Data and analytics policies are essential for organizations to manage their data assets responsibly, ensure compliance, and leverage data effectively for strategic advantage. These policies ensure reliable data for decision-making while protecting sensitive information and builds trust with stakeholders. They also streamline data management and analytics processes.`,
            ex:`- Data Governance Policy\n- Data Procurement Policy\n- Data Privacy and Confidentiality Policy\n- Data Quality and Integrity Policy\n- Data Retention and Archival Policy\n- Data Sharing and Usage Policy\n- Artificial Intelligence and Machine Learning Policy Open Data Usage Policy`,
        },
        {
            title:`Financial Policies`,
            what:`Financial policies are the guidelines and rules that govern the financial planning, management, and decision-making processeswithin an organization. Financial policies address various aspects of budgeting, expenditure, revenue generation, risk management, and financial reporting.They help in maintaining financial stability, accountability, and integrity.`,
            why:`Financial policies are essential for maintaining an organization's financial health and integrity. Implementing sound financial policies helps in managing organization’s financial resources,maintaining transparency achieve their financial goalsresponsibly and sustainably.`,
            ex:`- Budgeting and Financial Planning Policy\n- Expense Reimbursement Policy\n- Procurement and Purchasing Policy\n- Vendor and Supplier Management Policy\n- Fraud Detection and Prevention Policy\n- Accounts Payable and Receivable Policy\n- Investment and Asset Management Policy Internal Auditing and Controls Policy`,


        },
        {
            title:`Operational Policies`,
            what:`Operational policies are guidelines and procedures that govern the day-to-day activities and processes within an organization. These policies ensure that all operations are conducted according to established standards, promoting productivity, quality, and compliance with organizational goals and regulatory requirements.`,
            why:`Operational policies provide the necessary structure and guidelines for managing an organization’s day-to-day activities. They promote consistency, efficiency and compliance. They help an organization identify, assess and mitigate its potential operational risks, reducing disruptions and losses and enhance operational performance.`,
            ex:`- Business Continuity and Disaster Recovery Policy\n- Supply Chain Management Policy\n- Facility and Asset Management Policy\n- Quality Assurance and Quality Control Policy\\n- Environmental Sustainability Policy\n- Enterprise Risk Management Policy Customer Service and Support Policy`,


        },
        {
            title:`Legal and Regulatory Policies`,
            what:`Legal and regulatory policies areguidelines and procedures that ensure an organization’s activities comply with applicable laws, regulations, and standards. They help the organization in mitigating legal risks, ensure ethical conduct, and maintain good standing with government authorities and regulatory bodies.`,
            why:`Legal and regulatory policies are crucial for ensuring that an organization operates within the boundaries of the law and adheres to regulatory requirements. They reduce the likelihood of legal issues, fines, and penalties, assist in compliance and avoids confusion or mistakes in meeting legal requirements.`,
            ex:`- Export Control and Trade Compliance Policy\n- Anti-Money Laundering (AML) Policy\n- Non-Disclosure Agreement (NDA) Policy\n- Litigation Management Policy Licensing and Intellectual Property Policy`,


        },
        {
            title:`Marketing and Communications Policies`,
            what:`Marketing and communications policies are a set a guidelines and procedures that govern the organization’s marketing strategies, public relations, and internal and external communications. They help ensure that all marketing and communications activities are aligned with the organization’s values, goals, and legal requirements.`,
            why:`Marketing and communications policies provide the necessary framework to ensure that all marketing and communications activities are aligned with the organization's mission, values, and legal requirements. They help maintain consistency, protect the brand's reputation, and foster ethical, transparent communication with customers and stakeholders.`,
            ex:`- Social Media Usage Policy\n- Advertising and Branding Policy\n- Customer Privacy Policy\n- Public Relations and Media Policy\n- Email Marketing and Communications Policy Content Management Policy`,


        },
        
    ];

    return (
        <div>
            <div className="bg-[#D2D2D2] min-h-screen flex flex-col w-auto font-montserrat">
                <div className="bg-[#9E6AED] px-4 py-4">
                    <div className="text-medium font-montserrat text-white font-normal mt-20 px-12 text-left">Services {">"} Analytics {">"} Enterprise Policy Development</div>
                    <h1 className="text-3xl font-montserrat text-white font-semibold mt-1 px-12 text-left">Enterprise Policy Development</h1>
                </div>
                <div className="flex-1 overflow-x-auto">
                <div className="min-w-full flex md:grid md:grid-cols-4 gap-8 px-4 sm:px-8 lg:px-16 py-6">
                        {/* Column Headings */}
                        <React.Fragment>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex justify-center items-center text-center">
                                <h3 className="text-xl text-black font-semibold">Types of Policies</h3>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex justify-center items-center text-center">
                                <h3 className="text-xl text-black font-bold">What are these?</h3>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex justify-center items-center text-center">
                                <h3 className="text-xl text-black font-bold">Why are these important?</h3>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex justify-center items-center text-center">
                                <h3 className="text-xl text-black font-bold">Example of Policies</h3>
                            </div>
                        </React.Fragment>
                        {/* Card Content */}
                        {cards.map((card, index) => (
                            <React.Fragment key={index}>
                                <div className="bg-[#EFEFEF] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <h2 className="text-xl text-black font-semibold mb-4 text-center">{card.title}</h2>
                                </div>
                                <div className="bg-[#EFEFEF] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <p className="text-gray-700 text-md p-2 text-justify text-center" style={{ whiteSpace: 'pre-line' }}>{card.what}</p>
                                </div>
                                <div className="bg-[#EFEFEF] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <p className="text-gray-700 text-md p-2 text-justify text-center" style={{ whiteSpace: 'pre-line' }}>{card.why}</p>
                                </div>
                                <div className="bg-[#EFEFEF] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <p className="text-gray-700 text-md p-2 text-justify text-center" style={{ whiteSpace: 'pre-line' }}>{card.ex}</p>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
         
        </div>
    );
};

export default EnterpricePolicy;
