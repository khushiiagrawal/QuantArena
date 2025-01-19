
const fontStyle = {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
};

export const TermsAndConditions = () => {
    return (
        <div id="terms-and-conditions">
            <div
                className="relative h-32 flex items-center mt-8 justify-center md:mr-10"
                style={{ backgroundColor: '#9E6AED' }}
            >
                {/* Large Background Text */}
                <h1
                    className="absolute text-[10px] sm:text-[30px] md:text-[60px] lg:text-[105px] font-extrabold uppercase text-white opacity-10"
                    style={{ ...fontStyle, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                >
                    TERMS AND CONDITIONS
                </h1>

                {/* Foreground Text */}
                <h2 className="absolute top-0 font-montserrat left-4 m-12 text-xl md:text-3xl font-semibold uppercase text-white">
                    Terms and Conditions
                </h2>
            </div>
            <div>
                <h3 className="text-gray-900 mt-6 font-montserrat text-center text-xl px-14">
                    Welcome to QuantArena Analytics and Risk Management Private Limited (hereinafter ‘QuantArena’) having CIN: ****.
                </h3>
                <h2 className="text-gray-900 mt-6 font-montserrat text-2xl font-bold px-14">Terms and Conditions</h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    These Terms and Conditions govern your access and use of our website, products, and services. By using our services, you accept and agree to comply with the below terms. Any otherwise terms are entertained only if entered into the same through legally binding agreements.
                </p>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    Your use of our services signifies your acceptance of these terms and any policies referenced herein.
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    <li>You affirm that you have the legal capacity to enter into a binding agreement.</li>
                    <li>By continuing to use our services after updates to these terms, you acknowledge and accept the changes.</li>
                </ul>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">2. Scope of Services</h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    QuantArena provides various analytics and risk management related services (as mentioned under the pages within Services section of this website) tailored to clients’ specific needs.
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    <li>Deliverables are based on the information provided by the client and agreed upon in advance.</li>
                    <li>Services do not constitute any kind of advisory service unless such an agreement has been entered into. Clients are solely responsible for decisions made based on the deliverables.</li>
                </ul>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">3. User Responsibilities</h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    To ensure effective service delivery, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    <li>Provide accurate, complete, and timely information as requested.</li>
                    <li>Acknowledge that failure to provide required data may impact the quality of deliverables.</li>
                    <li>Acknowledge that delay in providing required data may result in delay in deliverables.</li>
                    <li>Use our services solely for lawful purposes and not in ways that could harm our business reputation.</li>
                    <li>The users of the QAPMS portal are obligated to provide accurate information at the time of requesting access and are responsible for the confidentiality of their login credentials.</li>
                </ul>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">4. Confidentiality and Data Privacy</h2>
                <ul className="list-disc list-inside text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    <li>All client data, including proprietary information shared with us, will be treated as confidential.</li>
                    <li>We adhere to strict data protection standards as outlined in our [Privacy Policy].</li>
                    <li>In cases where third-party tools or software are used, their respective privacy policies will apply, and clients will be informed in advance.</li>
                </ul>

                

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">5. Intellectual Property Rights
                </h2>
                <ul className="list-disc list-inside text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    <li>Any patented (by QuantArena) process including but not limited to methodology, algorithm, modeling process etc. if leveraged by QuantArena for providing any deliverable to a client, in such a case the client undertakes that they are granted a limited, non-transferable license to use such deliverables for internal purposes only.</li>
                    <li>Unauthorized use, reproduction, or distribution (internally and/or externally) of QuantArena’s intellectual property is strictly prohibited and may result in legal action.</li>
                </ul>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">6. Restrictions on Reselling or Reproducing</h2>
                
                <ul className="list-disc list-inside text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    <li>Any project delivered by QuantArena are to be used for the client’s internal or external affairs only.</li>
                    <li>Reselling or reproduction of QuantArena’s work to any third party is strictly prohibited and will result in legal action.</li>
                </ul>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">7. Payment Terms and Refund Policy</h2>
                
                <ul className="list-disc list-inside text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    <li>Payment is due as per the terms outlined in the service/vendor agreement or invoice</li>
                    <li>Payments must be made only via the approved methods listed in our invoices.</li>
                    <li>Refunds are not guaranteed once the project has commenced unless otherwise mentioned in the vendor agreement.</li>
                </ul>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">8. Service Delivery and Timelines</h2>
                
                <ul className="list-disc list-inside text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    <li>We aim to meet all agreed timelines for deliverables. Timelines mentioned in the vendor agreement will be followed strictly.</li>
                    <li>Any delay, if anticipated, will be communicated promptly well in advance and a revised timeline will be finalized only if the client approves the same.</li>
                </ul>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">9. Third-Party Tools and Services</h2>
                
                <ul className="list-disc list-inside text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    <li>Some services may involve the use of third-party tools or software.</li>
                    <li>While we ensure compliance with third-party terms, we do not take responsibility for inaccuracies or delays caused by external systems.</li>
                </ul>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">10. Limitation of Liability</h2>
                
                <ul className="list-disc list-inside text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    <li>We are not liable for any loss of money, data, or indirect damages resulting from the use of our services.</li>
                    <li>Any liability for damages occurring during the duration of availing the service shall be as per the vendor agreement.</li>
                </ul>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">11. Termination and Suspension of Services</h2>
                
                <ul className="list-disc list-inside text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                   
                    <li>We reserve the right to suspend or terminate services if:
                        <ul className="list-disc list-inside ml-5">
                            <li>The client breaches these Terms</li>
                            <li>Payment obligations are not fulfilled</li>
                            <li>Your actions harm or threaten our operations or reputation</li>
                        </ul>
                    </li>
                    <li>Upon termination, any outstanding payments shall remain due.</li>
                </ul>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">12. Force Majeure</h2>
                
                <ul className="list-disc list-inside text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    <li>We shall not be held liable for delays or failure to perform due to circumstances beyond our control, such as natural disasters, political or technical disruptions and/or unforeseeable emergency situations.</li>
                </ul>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">13. Dispute Resolution</h2>
                
                <ul className="list-disc list-inside text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    <li>Any disputes will first be attempted to be resolved through discussion between the client and QuantArena</li>
                    <li>If a resolution cannot be reached, disputes shall be referred for conciliation.</li>
                    <li>If a resolution cannot be reached, disputes shall be referred to arbitration as per the laws of the land.</li>
                </ul>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">14. Warranties and Disclaimers</h2>
                
                <ul className="list-disc list-inside text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    <li>Services are provided “as is” without any warranties, express or implied, including but not limited to warranties of merchantability or fitness for a particular purpose.</li>
                    <li>We do not guarantee uninterrupted or error-free access to our website or services.</li>
                </ul>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">15. Contact Information</h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                If you have any questions, concerns, or feedback about these Terms of our services, please contact us at:
                </p>

                <ul className="list-disc list-inside text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    <li><b>Email:</b> connect@quantarena.co.in
                    </li>
                    <li><b>Phone:</b> 7758871196</li>
                    <li><b>Address:</b> Office no. A-15, Memories, Sr. no. 90/1/1, Mohammedwadi, Pune- 411028 (Maharashtra)</li>
                </ul>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">16. Entire Agreement</h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                These Terms represent the entire agreement between you and QuantArena regarding the use of QuantArena’s services and overrides all other agreements in place.
                </p>





            </div>
        </div>



    );
};

export const PrivacyPolicy = () => {
    return (

        <div id="privacy">

            <div
                className="relative h-32 flex items-center mt-8 justify-center md:mr-10"
                style={{ backgroundColor: '#9E6AED' }}
            >
                {/* Large Background Text */}
                <h1
                    className="absolute text-[20px] sm:text-[30px] md:text-[50px] lg:text-[154px] font-extrabold uppercase text-white opacity-10"
                    style={{ ...fontStyle, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                >
                    PRIVACY POLICY
                </h1>

                {/* Foreground Text */}
                <h2 className="absolute top-0 font-montserrat left-4 m-12 text-xl md:text-3xl font-semibold uppercase text-white">
                    Privacy Policy
                </h2>

                
                
            </div>
            
            <div>
            <h2 className="text-gray-900 mt-6 font-montserrat text-2xl font-bold px-14">Privacy Policy</h2>
            <h3 className="text-gray-900 mt-6 font-montserrat text-xl px-14">
            Effective Date: January 17, 2025<br/>
            At QuantArena, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services related to analytics and risk management. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please refrain from using our services.
                </h3>
                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">1. Information We Collect
                </h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                We may collect the following types of information:
                </p>
                <h2 className="text-gray-900 font-montserrat font-bold px-14">a. Personal Information
                </h2>
                <ul className="list-disc list-inside text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Company name</li>
                </ul>
                <h2 className="text-gray-900 font-montserrat font-bold px-14">b. Business and Risk Data
                </h2>
                <ul className="list-disc list-inside text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    <li>Business-related data required for risk assessments or data analysis, as necessary.</li>
                    <li>Financial and operational data, as provided by you or authorized third parties, as necessary.</li>
                    <li>Data related to compliance, risks, and any metrics, as necessary.</li>
                    <li>Any data that are required for execution of the project.</li>
                </ul>
                <h2 className="text-gray-900 font-montserrat font-bold px-14">c. Third-Party Information
                </h2>
                <ul className="list-disc list-inside text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    <li>Data from publicly available sources or third parties authorized by you to share information.</li>
                </ul>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">2. How We Use Your Information
                </h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                We use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    <li>To provide, operate, and improve our analytics and risk management services.</li>
                    <li>To communicate with you, including sending updates, reports, and notifications.</li>
                    <li>To comply with legal obligations and industry regulations.</li>
                    <li>To enhance user experience on our website.</li>
                    <li>To analyze and evaluate risks and generate insights tailored to your business.</li>
                </ul>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">3. How We Share Your Information
                </h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                We do not sell your personal information. However, we may share your information under the following circumstances:

                </p>
                <h2 className="text-gray-900 font-montserrat font-bold px-14">Legal Obligations</h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">We may disclose your information when required to do so by law or in response to valid requests by public authorities.</p>
                
                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">4. Data Security</h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                We implement appropriate technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission or storage system can be guaranteed to be 100% secure. Please notify us immediately if you believe your information has been compromised.

                </p>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">5. Your Rights

                </h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                    <li><b>Access:</b> Request access to the personal information we hold about you.</li>
                    <li><b>Correction:</b> Request corrections to your information only if it is inaccurate or incomplete.</li>
                    <li><b>Restriction:</b> Request that we limit the processing of your information.</li>
                    <li><b>Data Portability:</b> Request a copy of your information in a structured, electronic format.</li>
                    <li><b>Objection:</b> Object to the processing of your information for certain purposes.</li>
                    
                </ul>
                <p className="text-gray-700 font-montserrat text-lg  mb-4 px-14">To exercise these rights, please contact us at connect@quantarena.co.in</p>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">6. Data Retention</h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.
                </p>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">7. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                We use cookies and similar technologies to enhance your experience on our website. You can manage your cookie preferences through your browser settings.
                </p>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">8. Updates to This Privacy Policy</h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective Date". We encourage you to review this Privacy Policy periodically.
                </p>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">9. Contact Us</h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                If you have any questions or concerns about this Privacy Policy or how your information is handled, please contact us at connect@quantarena.co.in.
                
                </p>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">Thank you for trusting QuantArena with your analytics and risk management needs.</p>


            </div>
        </div>




    );
};

export function LegalDisclaimer() {
    return (

        <div id="legal">

            <div
                className="relative h-32 flex items-center mt-8 justify-center md:mr-10"
                style={{ backgroundColor: '#9E6AED' }}
            >
                {/* Large Background Text */}
                <h1
                    className="absolute text-[20px] sm:text-[30px] md:text-[50px] lg:text-[140px] font-extrabold uppercase text-white opacity-10"
                    style={{ ...fontStyle, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                >
                    LEGAL DISCLAIMER
                </h1>

                {/* Foreground Text */}
                <h2 className="absolute top-0 font-montserrat left-4 m-12 text-xl md:text-3xl font-semibold uppercase text-white">
                    Legal Disclaimer
                </h2>
            </div>
            <div className="py-3">
                
                <h2 className="text-gray-900 mt-6 font-montserrat text-2xl font-bold px-14">Legal Disclaimer</h2>
                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">1. General Information Only</h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                The content on this website is provided for informational purposes only and does not constitute professional advice or legal advice. While we strive to ensure that the information is accurate, up-to-date and to the best of our knowledge, QuantArena makes no representations, warranties, or guarantees, express or implied, about the completeness, accuracy, reliability, suitability of the information, products or services featured on this website
                </p>
                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">2. No Professional Relationship</h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                Your use of this website does not establish a client, consultant, partner or advisory relationship between you and QuantArena. To obtain QuantArena’s services, please contact us directly for a formal agreement.
                </p>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">3. Risk Acknowledgment</h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                Any analytics service that includes prediction of any nature, inherently possesses uncertainty. Decisions based on the information provided on this website or through our services are made at your own risk. QuantArena is not responsible for any loss, damage or consequences arising from the use or reliance on our services or website content.
                </p>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">4. Limitation of Liability</h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                QuantArena, its employees, agents, and affiliates shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from your access to or use of this website or its content.
                </p>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">5. Third-Party Links</h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                This website may include links to third-party websites for your convenience. QuantArena does not endorse, guarantee or take responsibility for the content, services or privacy practices of those websites.
                </p>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">6. Intellectual Property</h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                All contents including the logo, texts on this website and the QAPMS portal are property of QuantArena unless otherwise stated. Unauthorized reproduction, distribution, or use of this content is strictly prohibited.
                </p>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">7. Changes to this Disclaimer</h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                QuantArena reserves the right to modify or update this disclaimer at any time without prior notice. Please review this page periodically for changes.
                </p>

                <h2 className="text-gray-900 mt-6 font-montserrat text-xl font-bold px-14">8. Governing Law</h2>
                <p className="text-gray-700 mt-2 font-montserrat text-lg text-justify mb-4 px-14">
                This disclaimer is governed by and construed in accordance with the laws of the land and any disputes shall be subject to the exclusive jurisdiction of the courts of the land.
                </p>
                <p className="text-gray-700 font-montserrat text-lg text-justify py-2 px-14">
                If you have any questions regarding this disclaimer or require further information, please contact us at connect@quantarena.co.in.
                </p>
                
            </div>
        </div>

    );
};

const PolicyPage = () => {
    return (
        <div className="bg-gray-200 w-screen min-h-screen">
            <header className="bg-[#E6DBF6] text-white w-full h-80 text-center py-4">
                <h1 className="text-7xl mt-36 text-gray-900 font-kufam font-bold">POLICY</h1>
            </header>
            <main className=" mx-auto">
                <TermsAndConditions />
                <PrivacyPolicy />
                <LegalDisclaimer />

            </main>
        </div>
    );
};

export default PolicyPage;
