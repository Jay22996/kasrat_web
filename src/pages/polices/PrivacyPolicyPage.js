import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


const PrivacyPolicyPage = () => {
    const { data } = useContext(AuthContext);
    const home = data?.data?.data;
  return (
    <div className="privacy-policy" style={{margin:"40px"}}>
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy outlines the practices and procedures regarding the collection, use, and disclosure of personal information when you use our App operated by Alaknanda Infoplus.
      </p>
      
      <h4>Information Collection and Use</h4>
      <p>
        We collect various types of information for different purposes to provide and improve our services. This may include personally identifiable information such as name, email address, phone number, and non-personal information such as usage data, device information, and cookies.
      </p>
      
      <h4>Use of Data</h4>
      <p>
        We use the collected data for various purposes, including:
      </p>
      <ul>
        <li>Providing and maintaining the App</li>
        <li>Notifying you about changes to our services</li>
        <li>Offering customer care and support</li>
        <li>Conducting analysis to improve our services</li>
        <li>Sending promotional communications (only with your consent)</li>
      </ul>
      
      <h4>Data Sharing and Disclosure</h4>
      <p>
        We may share your information with third-party service providers to facilitate our services and perform services on our behalf. We do not sell or trade your personal information to third parties for marketing purposes.
      </p>
      
      <h3>Data Security</h3>
      <p>
        We prioritize the security of your data and implement various security measures to protect it against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure.
      </p>
      
      <h4>Your Rights</h4>
      <p>
        You have the right to access, correct, update, or delete your personal information. You can also object to the processing of your personal information, request a restriction on processing, or request the transfer of your data.
      </p>
      
      <h4>Changes to This Privacy Policy</h4>
      <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>
      
      <h4>Contact Us</h4>
      <p>
        If you have any questions about this Privacy Policy or want to exercise your rights regarding your personal data, please contact us at <a href={`mailto:${home?.footer_email}`}>{home?.footer_email}</a>
      </p>
    </div>
  );
}

export default PrivacyPolicyPage;
