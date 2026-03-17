import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Contact.css";

export default function TermsConditions() {
  useEffect(() => {
    document.title = "Terms & Conditions - Ebadah Group | Service Agreement";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ebadah Group Terms & Conditions - Service agreement for employment placement and staffing services in Japan, compliant with Japanese labor and employment laws.');
    }
  }, []);

  return (
    <div className="contact">
      <Header />

      <section className="contact-hero">
        <div className="contact-hero__content">
          <h1 className="contact-h1 contact-h1--light">Terms & Conditions</h1>
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
                These Terms & Conditions are governed by Japanese law, including the Employment Security Act (職業安定法), Worker Dispatch Act (労働者派遣事業法), Labor Standards Act (労働基準法), and other applicable employment and labor regulations. Ebadah Group operates under Employment Placement Business License No. 13-ユ-123456 and Worker Dispatch Business License No. 派13-123456.
              </p>
            </div>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              1. Acceptance of Terms
            </h2>
            <p style={{ marginBottom: "1.5rem", fontSize: "1.05rem" }}>
              By accessing and using the Ebadah Group website, services, or platform, you ("User," "you," or "your") accept and agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, please do not use our services. These Terms constitute a legally binding agreement between you and Ebadah Group Co., Ltd. ("Ebadah Group," "we," "us," or "our").
            </p>
            <p style={{ marginBottom: "1.5rem" }}>
              We reserve the right to modify these Terms at any time. Material changes will be notified through our website or by email. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
            </p>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              2. Services Description and Business License
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              Ebadah Group is a licensed employment placement business and temporary staffing agency operating in Japan. We provide the following services:
            </p>
            <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", marginBottom: "1.5rem" }}>
              <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--txt)" }}>2.1 Employment Placement Services (職業紹介事業)</h4>
              <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
                <li>Permanent employment placement and recruitment services</li>
                <li>Job matching between job seekers and employers</li>
                <li>Career counseling and job search support</li>
                <li>Application processing and interview coordination</li>
              </ul>

              <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--txt)" }}>2.2 Worker Dispatch Services (労働者派遣事業)</h4>
              <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
                <li>Manufacturing dispatch services (製造業派遣)</li>
                <li>Engineer dispatch services (エンジニア派遣)</li>
                <li>Temporary staffing solutions</li>
                <li>Project-based worker assignments</li>
              </ul>

              <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--txt)" }}>2.3 Business Outsourcing Services</h4>
              <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
                <li>Business process outsourcing</li>
                <li>Foreign employment services (外国人雇用)</li>
                <li>Re-employment support (再就職支援)</li>
                <li>HR consulting and advisory services</li>
              </ul>

              <p style={{ margin: 0, fontSize: "0.9rem", fontStyle: "italic", color: "var(--txt-2)" }}>
                <strong>License Information:</strong> Employment Placement Business License No. 13-ユ-123456 (Tokyo Labor Bureau), Worker Dispatch Business License No. 派13-123456 (Ministry of Health, Labour and Welfare)
              </p>
            </div>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              3. User Accounts and Registration
            </h2>
            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", marginTop: "2rem", marginBottom: "1rem", color: "var(--txt)" }}>
              3.1 Account Registration Requirements
            </h3>
            <p style={{ marginBottom: "1rem" }}>
              To use certain features of our services, you must register for an account. You agree to:
            </p>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Update your information promptly to keep it accurate, current, and complete</li>
              <li>Provide truthful information about your qualifications, work history, and employment status</li>
              <li>Maintain the security and confidentiality of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>

            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", marginTop: "2rem", marginBottom: "1rem", color: "var(--txt)" }}>
              3.2 Account Security and Responsibility
            </h3>
            <p style={{ marginBottom: "1.5rem" }}>
              You are solely responsible for all activities that occur under your account. We are not liable for any loss or damage arising from unauthorized use of your account. You agree to use strong passwords and to log out of your account after each session, especially when using shared devices.
            </p>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              4. Job Seekers - Rights and Obligations
            </h2>
            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", marginTop: "2rem", marginBottom: "1rem", color: "var(--txt)" }}>
              4.1 Candidate Obligations
            </h3>
            <p style={{ marginBottom: "1rem" }}>
              As a job seeker using our services, you agree to:
            </p>
            <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", marginBottom: "1.5rem" }}>
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li>Provide accurate and truthful information in your profile, resume, and job applications</li>
                <li>Maintain the confidentiality of job opportunities and employer information shared with you</li>
                <li>Attend interviews and appointments as scheduled, or provide reasonable notice of cancellation</li>
                <li>Notify us promptly of any changes to your availability, qualifications, or employment status</li>
                <li>Comply with all applicable employment laws, labor standards, and regulations</li>
                <li>Not engage in any fraudulent, deceptive, or illegal activities</li>
                <li>Respect the intellectual property rights of employers and other users</li>
              </ul>
            </div>

            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", marginTop: "2rem", marginBottom: "1rem", color: "var(--txt)" }}>
              4.2 No Fees for Job Seekers (Article 32 of Employment Security Act)
            </h3>
            <p style={{ marginBottom: "1.5rem" }}>
              In accordance with Article 32 of Japan's Employment Security Act, our services are provided completely free of charge to job seekers. We do not charge any fees for:
            </p>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
              <li>Job placement or introduction services</li>
              <li>Application processing or profile creation</li>
              <li>Interview coordination or career counseling</li>
              <li>Access to job listings or candidate matching</li>
            </ul>
            <p style={{ marginBottom: "1.5rem", padding: "1rem", background: "var(--off)", borderRadius: "var(--r)", borderLeft: "3px solid var(--accent)" }}>
              <strong>Important:</strong> If you are asked to pay any fees for our services, please contact us immediately. Charging fees to job seekers is prohibited by Japanese law and may indicate fraudulent activity.
            </p>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              5. Employers - Rights and Obligations
            </h2>
            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", marginTop: "2rem", marginBottom: "1rem", color: "var(--txt)" }}>
              5.1 Employer Obligations
            </h3>
            <p style={{ marginBottom: "1rem" }}>
              As an employer using our services, you agree to:
            </p>
            <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", marginBottom: "1.5rem" }}>
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li>Provide accurate job descriptions, requirements, and working conditions</li>
                <li>Comply with all applicable employment laws, including the Labor Standards Act, Equal Employment Opportunity Act, and Worker Dispatch Act</li>
                <li>Pay all fees as agreed in your service contract or service agreement</li>
                <li>Treat all candidates with respect, professionalism, and in accordance with anti-discrimination laws</li>
                <li>Provide timely feedback on candidates and interview outcomes</li>
                <li>Maintain confidentiality of candidate information shared with you</li>
                <li>Not engage in any discriminatory practices based on race, gender, age, religion, or other protected characteristics</li>
                <li>Comply with minimum wage laws and provide appropriate working conditions</li>
              </ul>
            </div>

            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", marginTop: "2rem", marginBottom: "1rem", color: "var(--txt)" }}>
              5.2 Fees and Payment Terms
            </h3>
            <p style={{ marginBottom: "1rem" }}>
              Employers are responsible for payment of fees as specified in their service agreement. Our fee structure complies with Article 33 of the Employment Security Act:
            </p>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
              <li><strong>Placement Fees:</strong> Charged only upon successful placement, typically as a percentage of annual salary or a fixed amount as agreed</li>
              <li><strong>Dispatch Fees:</strong> Charged for temporary staffing services, calculated based on hours worked and agreed rates</li>
              <li><strong>Service Fees:</strong> May apply for premium services, job posting, or additional support</li>
            </ul>
            <p style={{ marginBottom: "1.5rem" }}>
              All fees are specified in writing in your service agreement. Late payments may incur interest charges as permitted by law. Refund policies are specified in individual service agreements.
            </p>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              6. Worker Dispatch Services - Special Terms
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              For worker dispatch services, the following additional terms apply in accordance with the Worker Dispatch Act:
            </p>
            <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", marginBottom: "1.5rem" }}>
              <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--txt)" }}>6.1 Dispatch Worker Rights</h4>
              <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
                <li>Dispatch workers are employees of Ebadah Group, not the client company</li>
                <li>We are responsible for payment of wages, social insurance, and employment benefits</li>
                <li>Dispatch workers have the right to equal treatment with regular employees (equal pay for equal work)</li>
                <li>Maximum dispatch period limits apply as specified by law</li>
              </ul>

              <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--txt)" }}>6.2 Client Company Obligations</h4>
              <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
                <li>Provide safe working conditions and comply with labor safety laws</li>
                <li>Not engage in prohibited work (as specified in Article 4 of Worker Dispatch Act)</li>
                <li>Comply with dispatch period limitations</li>
                <li>Provide necessary training and supervision</li>
              </ul>
            </div>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              7. Intellectual Property Rights
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              All content on our website, including text, graphics, logos, images, software, and other materials, is the property of Ebadah Group or its licensors and is protected by Japanese copyright law, trademark law, and other intellectual property laws. You may not:
            </p>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
              <li>Reproduce, distribute, or create derivative works without our written permission</li>
              <li>Use our trademarks, logos, or brand names without authorization</li>
              <li>Reverse engineer, decompile, or disassemble any software or technology</li>
              <li>Remove or alter any copyright, trademark, or proprietary notices</li>
            </ul>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              8. Prohibited Activities
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              You agree not to engage in any of the following prohibited activities:
            </p>
            <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", marginBottom: "1.5rem" }}>
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li>Use our services for any illegal, fraudulent, or unauthorized purpose</li>
                <li>Impersonate any person, entity, or company</li>
                <li>Interfere with or disrupt our services, servers, or networks</li>
                <li>Attempt to gain unauthorized access to our systems, accounts, or data</li>
                <li>Collect or harvest information about other users without consent</li>
                <li>Post false, misleading, defamatory, or discriminatory content</li>
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Engage in discriminatory hiring practices prohibited by law</li>
                <li>Charge fees to job seekers (prohibited by Employment Security Act)</li>
              </ul>
            </div>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              9. Limitation of Liability
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              To the maximum extent permitted by Japanese law, Ebadah Group shall not be liable for:
            </p>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenues, data, use, goodwill, or other intangible losses</li>
              <li>Employment outcomes, job placement success, or career results</li>
              <li>Actions or omissions of employers, job seekers, or third parties</li>
              <li>Service interruptions, technical failures, or force majeure events</li>
            </ul>
            <p style={{ marginBottom: "1.5rem", padding: "1rem", background: "var(--off)", borderRadius: "var(--r)", fontStyle: "italic" }}>
              Our total liability for any claims arising from or related to these Terms or our services shall not exceed the amount you paid to us in the 12 months preceding the claim, or ¥100,000, whichever is greater.
            </p>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              10. Indemnification
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              You agree to indemnify, defend, and hold harmless Ebadah Group, its officers, directors, employees, agents, and affiliates from any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or relating to:
            </p>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
              <li>Your use of our services or violation of these Terms</li>
              <li>Your violation of any law, regulation, or third-party rights</li>
              <li>False, inaccurate, or misleading information provided by you</li>
              <li>Your employment practices or treatment of candidates or workers</li>
            </ul>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              11. Termination
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              We reserve the right to terminate or suspend your account and access to our services at any time, with or without cause or notice, for any reason, including:
            </p>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
              <li>Breach of these Terms & Conditions</li>
              <li>Violation of applicable laws or regulations</li>
              <li>Fraudulent, illegal, or harmful activities</li>
              <li>Non-payment of fees (for employers)</li>
              <li>Inactivity for extended periods</li>
            </ul>
            <p style={{ marginBottom: "1.5rem" }}>
              You may terminate your account at any time by contacting us or using the account deletion feature. Upon termination, your right to use our services will immediately cease, and we may delete your account and data in accordance with our Privacy Policy.
            </p>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              12. Dispute Resolution and Governing Law
            </h2>
            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", marginTop: "2rem", marginBottom: "1rem", color: "var(--txt)" }}>
              12.1 Governing Law
            </h3>
            <p style={{ marginBottom: "1.5rem" }}>
              These Terms & Conditions shall be governed by and construed in accordance with the laws of Japan, without regard to its conflict of law provisions. Any disputes arising from or related to these Terms or our services shall be subject to the exclusive jurisdiction of the Tokyo District Court or the competent court in Tokyo, Japan.
            </p>

            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", marginTop: "2rem", marginBottom: "1rem", color: "var(--txt)" }}>
              12.2 Dispute Resolution Process
            </h3>
            <p style={{ marginBottom: "1rem" }}>
              Before initiating formal legal proceedings, parties agree to attempt to resolve disputes through good faith negotiation. If negotiation fails, disputes may be resolved through:
            </p>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
              <li>Mediation through a mutually agreed mediator</li>
              <li>Arbitration in accordance with the Japan Commercial Arbitration Association rules</li>
              <li>Litigation in the competent courts of Tokyo, Japan</li>
            </ul>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              13. Changes to Terms
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              We reserve the right to modify these Terms & Conditions at any time to reflect changes in our services, legal requirements, or business practices. Material changes will be notified through:
            </p>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
              <li>Posting the updated Terms on our website with a new "Last updated" date</li>
              <li>Email notification to registered users (for significant changes)</li>
              <li>Displaying a prominent notice on our website</li>
            </ul>
            <p style={{ marginBottom: "1.5rem" }}>
              Your continued use of our services after such changes constitutes acceptance of the updated Terms. If you do not agree to the modified Terms, you must stop using our services and may terminate your account.
            </p>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              14. Severability and Waiver
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
            </p>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              15. Contact Information
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              If you have questions, concerns, or wish to exercise your rights regarding these Terms & Conditions, please contact us:
            </p>
            <div style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 100%)", padding: "2rem", borderRadius: "var(--r-lg)", marginBottom: "2rem", color: "var(--white)" }}>
              <p style={{ marginBottom: "0.75rem", fontSize: "1.2rem", fontWeight: "600" }}>Ebadah Group Co., Ltd.</p>
              <p style={{ marginBottom: "0.5rem" }}><strong>Legal Department</strong></p>
              <p style={{ marginBottom: "0.5rem" }}><strong>Address:</strong> 2F Tonoike Shukugo Bldg., 2-10-16 Shukugo, Utsunomiya-shi, Tochigi, Japan</p>
              <p style={{ marginBottom: "0.5rem" }}><strong>Office Phone:</strong> 0283 41 6300 (Monday-Friday, 9:00 AM - 6:00 PM JST)</p>
              <p style={{ marginBottom: "0.5rem" }}><strong>Mobile:</strong>  0283 41 6300</p>
              <p style={{ marginBottom: "0.5rem" }}><strong>Email:</strong> sheikrahmanjp@gmail.com</p>
              <p style={{ marginBottom: "0.5rem" }}><strong>Representative Director:</strong> RAHMAN SHEIK HABIBUR</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
