import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const TermsOfService = () => {

    const { data } = useContext(AuthContext);
    const home = data?.data?.data;
    // console.log(home);
  return (
    <div className="terms-container" style={{margin:"40px"}}>
      <h1>Terms of Service</h1>

      <p><strong>Introduction:</strong></p>
      <p>Welcome to our App operated by Alaknanda Infoplus.</p>
      <p>These Terms of Service govern your use of the App. By accessing or using the App, you agree to be bound by these Terms. If you disagree with any part of the Terms, please do not use the App.</p>
      <p>Your access to and use of the App is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the App.</p>
      <p>By accessing or using the App, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the App.</p>
      <p>Please read these Terms carefully before accessing or using our App.</p>

      <p><strong>User Agreement:</strong></p>
      <p>To use this app, users must be actively engaged as members of the gym where this application is utilized, and their membership plan must be ongoing. Users who do not meet these eligibility criteria will not be able to access or use the App's functionalities.</p>
      <p>By accessing or using the App, users confirm that they are engaged members of the gym associated with the App and that their membership plan is active. They agree to comply with the Terms of Service, including eligibility requirements, and understand that failure to meet these criteria prohibits them from using the App.</p>

      <p><strong>Account Creation and Usage:</strong></p>
      <p><strong>Account Creation Procedures and Requirements:</strong></p>
      <ul>
        <li>Users are required to create an account to access the full features of this app.</li>
        <li>The account creation process involves entering a valid email address and completing a verification step to confirm the email's authenticity.</li>
        <li>After email verification, users need to complete a membership form. This form includes mandatory fields such as name, mobile number, age, gender, weight, height, and the preferred membership plan duration.</li>
      </ul>
      <p><strong>Responsibilities Regarding Account Security and Confidentiality:</strong></p>
      <ul>
        <li>Users are responsible for maintaining the confidentiality of their account credentials.</li>
        <li>Users should not disclose their account information to others or allow third-party access to their account.</li>
        <li>It is the user's responsibility to promptly notify us of any unauthorized use or security breach of their account.</li>
      </ul>

      <p><strong>User Conduct:</strong></p>
      <p><strong>Guidelines for User Behavior and Prohibited Activities:</strong></p>
      <ul>
        <li>Users of this app are expected to conduct themselves in a respectful and lawful manner.</li>
        <li>Prohibited activities include but are not limited to:Posting or sharing offensive, abusive, or inappropriate content.</li>
        <li>Attempting to access unauthorized areas of the App or interfere with its operations.</li>
        <li>Engaging in fraudulent activities or violating the rights of others.</li>
        <li>Spamming, phishing, or distributing malware.</li>
      </ul>
      <p><strong>Compliance with Laws and Regulations:</strong></p>
      <p>Users must comply with all applicable laws, regulations, and industry standards while using the App. Alaknanda Infoplus reserves the right to investigate and take appropriate action against any user violating these guidelines or engaging in unlawful activities.</p>

      <p><strong>Intellectual Property Rights:</strong></p>
      <p><strong>Ownership of Content and Intellectual Property:</strong></p>
      <p>All content and materials provided within this app, including but not limited to text, graphics, logos, images, videos, and software, are the intellectual property of Alaknanda Infoplus and respective gym.</p>
      <p>Users acknowledge and agree that all rights, title, and interest in the App and its content belong to this app only.</p>
      <p><strong>Permissions for Use of App Content and User-Generated Content:</strong></p>
      <p>Users are granted a limited, non-exclusive, and non-transferable license to access and use the content provided within the App for personal, non-commercial purposes.</p>
      <p>Users may generate and submit content ("User-Generated Content") within the App. By doing so, users grant a worldwide, royalty-free, and perpetual license to use, reproduce, modify, adapt, publish, translate, distribute, and display such User-Generated Content within the App and for promotional purposes related to the App.</p>

      <p><strong>Data Privacy and Collection:</strong></p>
      <p><strong>Information About Data Collection Practices:</strong></p>
      <p>This app collects certain information from users during their interaction with the App, including but not limited to personal information such as name, email address, phone number, age, gender, weight, height, and usage data.</p>
      <p>The collected information is used to provide and improve the services offered by the App, personalize user experiences, and ensure app functionality.</p>
      <p><strong>User Consent to Data Collection and Usage:</strong></p>
      <p>By using the App, users consent to the collection, processing, and storage of their personal information as outlined in the App's Privacy Policy.</p>
      <p>Users acknowledge and agree that the collected data may be used for various purposes, including but not limited to account management, service improvement, and communication with users.</p>
      <p><strong>Privacy Policy Link or Details:</strong></p>
      <p>Users are encouraged to review the complete Privacy Policy of this app for comprehensive details regarding data collection practices, usage, storage, and user rights. The Privacy Policy link can be found Privacy Policy or accessed within the App settings.</p>

      <p><strong>Disclaimers and Limitations:</strong></p>
      <p><strong>Disclaimer of warranties and limitations of Disclaimer of Warranties:</strong></p>
      <p>This app is provided "as is" without any warranties, express or implied. Alaknanda Infoplus does not warrant that the App will be error-free, secure, or meet users' requirements. Use of the App is at users' own risk.</p>
      <p><strong>Limitations of Liability:</strong></p>
      <p>Alaknanda Infoplus shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the App. Alaknanda Infoplus shall not be liable for any loss of data, profits, or any other intangible losses resulting from the use of the App.</p>
      <p><strong>Disclaimers Regarding App's Functionalities or Services:</strong></p>
      <p>Any description of the App's functionalities or services, including features, capabilities, or outcomes, is for informational purposes only. Actual performance or results may vary, and Alaknanda Infoplus does not guarantee specific results or outcomes from using the App.</p>

      <p><strong>Termination and Suspension:</strong></p>
      <p><strong>Conditions for Account Termination or Suspension:</strong></p>
      <p>Alaknanda Infoplus reserves the right to terminate or suspend users' accounts at its sole discretion for reasons including, but not limited to, violation of the Terms of Service, suspected fraudulent activities, or non-compliance with applicable laws. Users may also request the termination of their account by contacting Alaknanda Infoplus through the designated channels.</p>
      <p><strong>User Obligations Upon Termination:</strong></p>
      <p>Upon termination of their account, users agree to discontinue the use of the App and its services. Users acknowledge that upon termination, Alaknanda Infoplus may delete or deactivate their account and all related information, and Alaknanda Infoplus shall not be liable for any loss of data or information upon termination.</p>

      <p><strong>Changes to Terms of Service:</strong></p>
      <p><strong>Notification Process for Updates or Changes to the Terms:</strong></p>
      <p>Alaknanda Infoplus reserves the right to modify, update, or change the terms of service at any time. Users will be notified of changes through a prominent notice within the App or via email to the address associated with their account.</p>
      <p><strong>Users' Responsibility to Review and Accept Updated Terms:</strong></p>
      <p>Users are responsible for regularly reviewing the terms of service for any updates or changes. Continued use of the App after changes to the terms indicates users' acceptance of the modified terms.</p>

      <p><strong>Contact Information:</strong></p>
      <p>For any inquiries, support, or questions regarding this app, users can contact us through the following channels:</p>
      <ul>
        <li>Email: <a href={`mailto:${home?.footer_email}`}> {home?.footer_email}</a></li>
        <li>Phone: <a style={{textDecoration:"none",color:"#674CAE"}} href={`tel:${home?.footer_com}`}>{home?.footer_com}</a></li>
      </ul>
      <p>Our support team is available to assist you during Business Hours. Please feel free to reach out to us for any assistance or clarification regarding the App.</p>
    </div>
  );
}

export default TermsOfService;
