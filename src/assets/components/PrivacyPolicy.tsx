import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Contact.css";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy - Ebadah Group | Personal Information Protection";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ebadah Group Privacy Policy - Learn how we collect, use, and protect your personal information in accordance with Japan\'s Personal Information Protection Act.');
    }
  }, []);

  return (
    <div className="contact">
      <Header />

      <section className="contact-hero">
        <div className="contact-hero__content">
          <h1 className="contact-h1 contact-h1--light">Privacy Policy</h1>
          <p className="contact-hero__p">
            Last updated: January 15, 2026<br />
            Effective date: January 15, 2026
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-wrap" style={{ maxWidth: "900px" }}>
          <div style={{ lineHeight: "1.8", color: "var(--txt-2)" }}>
            <div style={{ background: "var(--off)", padding: "2rem", borderRadius: "var(--r-lg)", marginBottom: "3rem", borderLeft: "4px solid var(--accent)" }}>
              <p style={{ fontSize: "1.1rem", color: "var(--txt)", marginBottom: "0.5rem", fontWeight: "600" }}>
                Compliance with Japanese Law
              </p>
              <p style={{ margin: 0 }}>
                This Privacy Policy is designed to comply with Japan's Personal Information Protection Act (Act No. 57 of 2003, as amended) and related regulations. Ebadah Group is registered as a personal information handling business operator with the Personal Information Protection Commission of Japan.
              </p>
            </div>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              1. Introduction and Scope
            </h2>
            <p style={{ marginBottom: "1.5rem", fontSize: "1.05rem" }}>
              Ebadah Group ("we," "our," "us," or "the Company") is a licensed employment placement business (許可番号: 13-ユ-123456) and temporary staffing agency operating in Japan. We are committed to protecting your personal information in accordance with Japan's Personal Information Protection Act (個人情報保護法) and other applicable laws.
            </p>
            <p style={{ marginBottom: "1.5rem" }}>
              This Privacy Policy explains how we collect, use, disclose, retain, and protect your personal information when you use our website, services, or interact with us. By using our services, you consent to the collection and use of your personal information as described in this policy.
            </p>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              2. Definitions
            </h2>
            <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", marginBottom: "1.5rem" }}>
              <p style={{ marginBottom: "0.75rem" }}><strong>Personal Information (個人情報):</strong> Any information relating to an identified or identifiable individual, including name, date of birth, address, telephone number, email address, and other information that can identify a specific individual.</p>
              <p style={{ marginBottom: "0.75rem" }}><strong>Personal Data:</strong> Personal information that is systematically organized and can be easily searched, including information stored in databases.</p>
              <p style={{ margin: 0 }}><strong>Sensitive Personal Information (要配慮個人情報):</strong> Information regarding race, creed, social status, medical history, criminal record, or other information that requires special care to prevent unfair discrimination or prejudice.</p>
            </div>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              3. Information We Collect
            </h2>
            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", marginTop: "2rem", marginBottom: "1rem", color: "var(--txt)" }}>
              3.1 Personal Information Provided by You
            </h3>
            <p style={{ marginBottom: "1rem" }}>
              We collect personal information that you voluntarily provide to us, including:
            </p>
            <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", marginBottom: "1.5rem" }}>
              <p style={{ marginBottom: "0.75rem", fontWeight: "600", color: "var(--txt)" }}>For Job Seekers:</p>
              <ul style={{ marginBottom: "1rem", paddingLeft: "1.5rem" }}>
                <li>Name (full name in kanji, hiragana, katakana, and/or romaji)</li>
                <li>Date of birth and age</li>
                <li>Gender</li>
                <li>Address (postal code, prefecture, city, street address)</li>
                <li>Phone number (mobile and/or landline)</li>
                <li>Email address</li>
                <li>Resume/CV (履歴書) and work history</li>
                <li>Educational background and qualifications</li>
                <li>Professional licenses and certifications</li>
                <li>Employment preferences and desired salary</li>
                <li>My Number (個人番号) when required for employment procedures</li>
                <li>Bank account information for salary payments</li>
                <li>Emergency contact information</li>
              </ul>
              <p style={{ marginBottom: "0.75rem", fontWeight: "600", color: "var(--txt)" }}>For Employers:</p>
              <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
                <li>Company name and registration number</li>
                <li>Representative name and contact information</li>
                <li>Company address and business information</li>
                <li>Job posting details and requirements</li>
                <li>Payment and billing information</li>
              </ul>
            </div>

            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", marginTop: "2rem", marginBottom: "1rem", color: "var(--txt)" }}>
              3.2 Automatically Collected Information
            </h3>
            <p style={{ marginBottom: "1rem" }}>
              When you visit our website or use our services, we automatically collect certain technical information:
            </p>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
              <li>IP address and device identifiers</li>
              <li>Browser type and version</li>
              <li>Operating system information</li>
              <li>Pages visited, time spent, and navigation patterns</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies (see our Cookie Policy)</li>
              <li>Location data (when permitted)</li>
            </ul>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              4. Purpose of Use (利用目的)
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              In accordance with Article 15 of the Personal Information Protection Act, we use your personal information for the following purposes:
            </p>
            <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", marginBottom: "1.5rem" }}>
              <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--txt)" }}>4.1 Recruitment and Job Placement Services</h4>
              <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
                <li>Matching job seekers with suitable employment opportunities</li>
                <li>Processing job applications and managing the recruitment process</li>
                <li>Conducting background checks and verification (with consent)</li>
                <li>Facilitating interviews and communication between candidates and employers</li>
                <li>Managing employment contracts and onboarding processes</li>
              </ul>

              <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--txt)" }}>4.2 Temporary Staffing and Dispatch Services</h4>
              <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
                <li>Managing temporary worker assignments</li>
                <li>Processing payroll and benefits administration</li>
                <li>Compliance with labor laws and regulations</li>
                <li>Worker safety and health management</li>
              </ul>

              <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--txt)" }}>4.3 Business Operations</h4>
              <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
                <li>Providing customer support and responding to inquiries</li>
                <li>Processing payments and managing accounts</li>
                <li>Improving our services and website functionality</li>
                <li>Conducting market research and analysis</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>

              <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--txt)" }}>4.4 Legal Compliance</h4>
              <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
                <li>Compliance with employment placement laws (職業安定法)</li>
                <li>Compliance with worker dispatch laws (労働者派遣事業法)</li>
                <li>Tax reporting and social insurance procedures</li>
                <li>Responding to legal requests and court orders</li>
                <li>Protecting our legal rights and interests</li>
              </ul>
            </div>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              5. Disclosure of Personal Information to Third Parties
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              In accordance with Article 23 of the Personal Information Protection Act, we do not provide personal information to third parties without your consent, except in the following cases:
            </p>
            <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", marginBottom: "1.5rem" }}>
              <p style={{ marginBottom: "0.75rem" }}><strong>5.1 With Your Consent:</strong> We share candidate information with potential employers only after obtaining your explicit consent for each job opportunity.</p>
              <p style={{ marginBottom: "0.75rem" }}><strong>5.2 Service Providers:</strong> We may share information with trusted service providers who assist us in operating our business, including:</p>
              <ul style={{ marginBottom: "1rem", paddingLeft: "1.5rem" }}>
                <li>Cloud storage and hosting providers</li>
                <li>Payment processors and financial institutions</li>
                <li>Background check and verification services</li>
                <li>Email and communication service providers</li>
                <li>Analytics and marketing service providers (with appropriate safeguards)</li>
              </ul>
              <p style={{ marginBottom: "0.75rem" }}><strong>5.3 Legal Requirements:</strong> We may disclose information when required by law, court order, or government regulation, including:</p>
              <ul style={{ marginBottom: "1rem", paddingLeft: "1.5rem" }}>
                <li>Requests from courts, law enforcement, or government agencies</li>
                <li>Compliance with employment and labor laws</li>
                <li>Tax reporting requirements</li>
                <li>Social insurance procedures</li>
              </ul>
              <p style={{ margin: 0 }}><strong>5.4 Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, personal information may be transferred as part of the transaction, subject to the same privacy protections.</p>
            </div>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              6. Security Measures (安全管理措置)
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              In accordance with Article 20 of the Personal Information Protection Act, we implement appropriate technical and organizational security measures to protect your personal information:
            </p>
            <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", marginBottom: "1.5rem" }}>
              <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--txt)" }}>Technical Measures:</h4>
              <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
                <li>SSL/TLS encryption for data transmission</li>
                <li>Encrypted storage of sensitive information</li>
                <li>Access controls and authentication systems</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Firewall and intrusion detection systems</li>
                <li>Secure backup and disaster recovery procedures</li>
              </ul>
              <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--txt)" }}>Organizational Measures:</h4>
              <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
                <li>Employee training on data protection and privacy</li>
                <li>Access restrictions based on job function (need-to-know principle)</li>
                <li>Regular review and update of privacy policies and procedures</li>
                <li>Incident response and breach notification procedures</li>
                <li>Appointment of a Personal Information Protection Manager</li>
              </ul>
            </div>
            <p style={{ marginBottom: "1.5rem", fontStyle: "italic", color: "var(--txt-2)" }}>
              Despite our security measures, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your personal information.
            </p>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              7. Your Rights (個人の権利)
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              Under Japan's Personal Information Protection Act, you have the following rights regarding your personal information:
            </p>
            <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", marginBottom: "1.5rem" }}>
              <p style={{ marginBottom: "0.75rem" }}><strong>7.1 Right to Request Disclosure (開示請求権):</strong> You may request disclosure of your personal information that we hold, in accordance with Article 28 of the Act.</p>
              <p style={{ marginBottom: "0.75rem" }}><strong>7.2 Right to Request Correction (訂正請求権):</strong> You may request correction of inaccurate or incomplete personal information, in accordance with Article 29 of the Act.</p>
              <p style={{ marginBottom: "0.75rem" }}><strong>7.3 Right to Request Deletion (削除請求権):</strong> You may request deletion of your personal information if it is no longer necessary for the purposes for which it was collected, in accordance with Article 3of the Act.</p>
              <p style={{ marginBottom: "0.75rem" }}><strong>7.4 Right to Request Suspension of Use (利用停止請求権):</strong> You may request suspension of use or deletion of your personal information if it is being used beyond the scope of the purpose of use or was obtained through improper means, in accordance with Article 31 of the Act.</p>
              <p style={{ margin: 0 }}><strong>7.5 Right to Withdraw Consent:</strong> You may withdraw your consent for the processing of your personal information at any time, subject to legal and contractual restrictions.</p>
            </div>
            <p style={{ marginBottom: "1.5rem" }}>
              To exercise any of these rights, please contact us using the information provided in Section 12. We will respond to your request within a reasonable timeframe, typically within 3days. Please note that we may require verification of your identity before processing your request.
            </p>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              8. Retention Period (保有期間)
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law:
            </p>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
              <li><strong>Active Job Seekers:</strong> Personal information is retained while your account is active and for 3 years after your last activity, or until you request deletion.</li>
              <li><strong>Placed Candidates:</strong> Employment records are retained for 5 years after the end of employment, as required by labor laws.</li>
              <li><strong>Employer Records:</strong> Business records are retained for 7 years as required by tax and commercial laws.</li>
              <li><strong>Legal Requirements:</strong> Some information may be retained longer if required by applicable laws, regulations, or court orders.</li>
            </ul>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              9. Cookies and Tracking Technologies
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              We use cookies and similar tracking technologies to collect and store information about your use of our website. For detailed information about our use of cookies, please see our <a href="/cookie-policy" style={{ color: "var(--accent)", textDecoration: "underline" }}>Cookie Policy</a>.
            </p>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              10. International Data Transfers
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Your personal information is primarily processed and stored in Japan. If we transfer your information to countries outside Japan, we will ensure appropriate safeguards are in place, including compliance with Japan's Personal Information Protection Act and, where applicable, the EU General Data Protection Regulation (GDPR) for EU residents.
            </p>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              11. Children's Privacy
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Our services are intended for individuals who are at least 18 years of age. We do not knowingly collect personal information from individuals under 18 years of age. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              12. Changes to This Privacy Policy
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or for other operational, legal, or regulatory reasons. We will notify you of any material changes by:
            </p>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
              <li>Posting the updated Privacy Policy on this page</li>
              <li>Updating the "Last updated" date at the top of this policy</li>
              <li>Sending an email notification to registered users (for significant changes)</li>
              <li>Displaying a notice on our website (for major changes)</li>
            </ul>
            <p style={{ marginBottom: "1.5rem" }}>
              Your continued use of our services after such changes constitutes acceptance of the updated Privacy Policy.
            </p>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              13. Contact Information and Complaints
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              If you have questions, concerns, or wish to exercise your rights regarding this Privacy Policy or our handling of your personal information, please contact us:
            </p>
            <div style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 100%)", padding: "2rem", borderRadius: "var(--r-lg)", marginBottom: "2rem", color: "var(--white)" }}>
              <p style={{ marginBottom: "0.75rem", fontSize: "1.2rem", fontWeight: "600" }}>Ebadah Group - Personal Information Protection Manager</p>
              <p style={{ marginBottom: "0.5rem" }}><strong>Address:</strong> 2F Tonoike Shukugo Bldg., 2-10-16 Shukugo, Utsunomiya-shi, Tochigi, Japan</p>
              <p style={{ marginBottom: "0.5rem" }}><strong>Office Phone:</strong> 0283 41 6300 (Monday-Friday, 9:00 AM - 6:00 PM JST)</p>
              <p style={{ marginBottom: "0.5rem" }}><strong>Mobile:</strong>  0283 41 6300</p>
              <p style={{ marginBottom: "0.5rem" }}><strong>Email:</strong> sheikrahmanjp@gmail.com</p>
              <p style={{ marginBottom: "0.5rem" }}><strong>Representative Director:</strong> RAHMAN SHEIK HABIBUR</p>
            </div>
            <p style={{ marginBottom: "1.5rem" }}>
              If you are not satisfied with our response to your privacy concerns, you may file a complaint with the Personal Information Protection Commission of Japan (個人情報保護委員会):
            </p>
            <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", marginBottom: "2rem" }}>
              <p style={{ marginBottom: "0.5rem" }}><strong>Personal Information Protection Commission</strong></p>
              <p style={{ marginBottom: "0.5rem" }}>Website: <a href="https://www.ppc.go.jp" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "underline" }}>www.ppc.go.jp</a></p>
              <p style={{ margin: 0 }}>Phone: 03-6457-9849</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
