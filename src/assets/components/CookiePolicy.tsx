import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Contact.css";

export default function CookiePolicy() {
  useEffect(() => {
    document.title = "Cookie Policy - Ebada Group | Cookie Usage Information";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ebada Group Cookie Policy - Learn about how we use cookies and tracking technologies on our website, compliant with Japanese privacy regulations.');
    }
  }, []);

  return (
    <div className="contact">
      <Header />

      <section className="contact-hero">
        <div className="contact-hero__content">
          <h1 className="contact-h1 contact-h1--light">Cookie Policy</h1>
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
                Compliance with Japanese Privacy Law
              </p>
              <p style={{ margin: 0 }}>
                This Cookie Policy explains how Ebada Group uses cookies and similar tracking technologies on our website, in compliance with Japan's Personal Information Protection Act (個人情報保護法) and related regulations. This policy should be read in conjunction with our <Link to="/privacy-policy" style={{ color: "var(--accent)", textDecoration: "underline" }}>Privacy Policy</Link>.
              </p>
            </div>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              1. What Are Cookies?
            </h2>
            <p style={{ marginBottom: "1.5rem", fontSize: "1.05rem" }}>
              Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies allow a website to recognize your device and store some information about your preferences, past actions, or login status.
            </p>
            <p style={{ marginBottom: "1.5rem" }}>
              Cookies can be "session cookies" (temporary, deleted when you close your browser) or "persistent cookies" (remain on your device for a set period or until you delete them). We use both types of cookies to provide and improve our services.
            </p>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              2. How We Use Cookies
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Ebada Group uses cookies and similar tracking technologies to enhance your experience on our website, provide personalized services, and analyze website usage. We use cookies for the following purposes:
            </p>

            <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", marginBottom: "2rem" }}>
              <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", marginTop: "0", marginBottom: "1rem", color: "var(--txt)" }}>
                2.1 Essential Cookies (必須クッキー)
              </h3>
              <p style={{ marginBottom: "1rem" }}>
                These cookies are strictly necessary for the website to function properly and cannot be disabled. They enable core functionality such as:
              </p>
              <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
                <li>Session management and user authentication</li>
                <li>Security and fraud prevention</li>
                <li>Load balancing and website performance</li>
                <li>Remembering your login status</li>
                <li>Maintaining shopping cart or application status</li>
              </ul>
              <p style={{ margin: 0, fontSize: "0.9rem", fontStyle: "italic", color: "var(--txt-2)" }}>
                <strong>Legal Basis:</strong> These cookies are necessary for the performance of a contract (providing our services) and cannot be opted out of.
              </p>
            </div>

            <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", marginBottom: "2rem" }}>
              <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", marginTop: "0", marginBottom: "1rem", color: "var(--txt)" }}>
                2.2 Functional Cookies (機能性クッキー)
              </h3>
              <p style={{ marginBottom: "1rem" }}>
                These cookies allow the website to remember choices you make and provide enhanced, personalized features:
              </p>
              <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
                <li>Language and region preferences (日本語/English)</li>
                <li>Job search filters and saved searches</li>
                <li>Display preferences and accessibility settings</li>
                <li>Form data and application progress</li>
                <li>User interface customization</li>
              </ul>
              <p style={{ margin: 0, fontSize: "0.9rem", fontStyle: "italic", color: "var(--txt-2)" }}>
                <strong>Legal Basis:</strong> These cookies are based on your consent. You can disable them, but this may affect website functionality.
              </p>
            </div>

            <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", marginBottom: "2rem" }}>
              <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", marginTop: "0", marginBottom: "1rem", color: "var(--txt)" }}>
                2.3 Analytics Cookies (分析クッキー)
              </h3>
              <p style={{ marginBottom: "1rem" }}>
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously:
              </p>
              <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
                <li>Page views and navigation patterns</li>
                <li>Time spent on pages and bounce rates</li>
                <li>Error messages and performance issues</li>
                <li>Traffic sources and user demographics (anonymized)</li>
                <li>Popular content and feature usage</li>
              </ul>
              <p style={{ margin: 0, fontSize: "0.9rem", fontStyle: "italic", color: "var(--txt-2)" }}>
                <strong>Third-Party Services:</strong> We use Google Analytics (with IP anonymization) to analyze website usage. Data is processed in accordance with Google's privacy policy.
              </p>
            </div>

            <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", marginBottom: "2rem" }}>
              <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", marginTop: "0", marginBottom: "1rem", color: "var(--txt)" }}>
                2.4 Marketing and Advertising Cookies (マーケティングクッキー)
              </h3>
              <p style={{ marginBottom: "1rem" }}>
                These cookies are used to track visitors across websites to display relevant advertisements and measure campaign effectiveness:
              </p>
              <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
                <li>Tracking user behavior for advertising purposes</li>
                <li>Retargeting campaigns and personalized ads</li>
                <li>Social media integration and sharing</li>
                <li>Conversion tracking and campaign measurement</li>
              </ul>
              <p style={{ margin: 0, fontSize: "0.9rem", fontStyle: "italic", color: "var(--txt-2)" }}>
                <strong>Legal Basis:</strong> These cookies require your explicit consent. You can opt out at any time through our cookie settings or browser preferences.
              </p>
            </div>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              3. Types of Cookies We Use
            </h2>
            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", marginTop: "2rem", marginBottom: "1rem", color: "var(--txt)" }}>
              3.1 First-Party Cookies
            </h3>
            <p style={{ marginBottom: "1.5rem" }}>
              First-party cookies are set directly by our website domain (ebadagroup.com). These cookies are used to:
            </p>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
              <li>Maintain your session and login status</li>
              <li>Remember your preferences and settings</li>
              <li>Store application progress and form data</li>
              <li>Provide personalized content and recommendations</li>
            </ul>

            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", marginTop: "2rem", marginBottom: "1rem", color: "var(--txt)" }}>
              3.2 Third-Party Cookies
            </h3>
            <p style={{ marginBottom: "1rem" }}>
              Third-party cookies are set by domains other than ebadagroup.com. We use third-party cookies from the following service providers:
            </p>
            <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", marginBottom: "1.5rem" }}>
              <p style={{ marginBottom: "0.75rem", fontWeight: "600", color: "var(--txt)" }}>Google Analytics</p>
              <p style={{ marginBottom: "1rem", fontSize: "0.95rem" }}>
                Used for website analytics and performance measurement. Google Analytics uses cookies to collect information about how visitors use our website. We use IP anonymization to protect your privacy.
              </p>
              <p style={{ marginBottom: "0.75rem", fontWeight: "600", color: "var(--txt)" }}>Social Media Platforms</p>
              <p style={{ marginBottom: "1rem", fontSize: "0.95rem" }}>
                Cookies from LinkedIn, Facebook, Twitter, and other social media platforms may be used for social sharing features and social media integration.
              </p>
              <p style={{ marginBottom: "0.75rem", fontWeight: "600", color: "var(--txt)" }}>Advertising Networks</p>
              <p style={{ margin: 0, fontSize: "0.95rem" }}>
                We may use advertising networks that place cookies to deliver targeted advertisements and measure ad effectiveness.
              </p>
            </div>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              4. Cookie Retention Periods
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              Different cookies have different retention periods:
            </p>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
              <li><strong>Session Cookies:</strong> Deleted when you close your browser (typically within 24 hours)</li>
              <li><strong>Authentication Cookies:</strong> Retained for 30 days or until you log out</li>
              <li><strong>Preference Cookies:</strong> Retained for up to 1 year</li>
              <li><strong>Analytics Cookies:</strong> Retained for up to 2 years</li>
              <li><strong>Marketing Cookies:</strong> Retained for up to 1 year or until you opt out</li>
            </ul>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              5. Managing Your Cookie Preferences
            </h2>
            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", marginTop: "2rem", marginBottom: "1rem", color: "var(--txt)" }}>
              5.1 Cookie Consent Banner
            </h3>
            <p style={{ marginBottom: "1.5rem" }}>
              When you first visit our website, you will be presented with a cookie consent banner. You can choose to:
            </p>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
              <li>Customize your cookie preferences by category</li>
            </ul>
            <p style={{ marginBottom: "1.5rem" }}>
              You can change your cookie preferences at any time by clicking the "Cookie Settings" link in the footer of our website or by contacting us.
            </p>

            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", marginTop: "2rem", marginBottom: "1rem", color: "var(--txt)" }}>
              5.2 Browser Settings
            </h3>
            <p style={{ marginBottom: "1rem" }}>
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <div style={{ background: "var(--off)", padding: "1.5rem", borderRadius: "var(--r)", marginBottom: "1.5rem" }}>
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li>Block all cookies</li>
                <li>Block only third-party cookies</li>
                <li>Delete existing cookies</li>
                <li>Set preferences for specific websites</li>
                <li>Receive notifications when cookies are set</li>
              </ul>
            </div>
            <p style={{ marginBottom: "1.5rem" }}>
              Please note that blocking or deleting cookies may impact your ability to use certain features of our website. Essential cookies cannot be disabled as they are necessary for the website to function.
            </p>
            <p style={{ marginBottom: "1.5rem", padding: "1rem", background: "var(--off)", borderRadius: "var(--r)", borderLeft: "3px solid var(--accent)" }}>
              <strong>Browser-Specific Instructions:</strong>
            </p>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
              <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
            </ul>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              6. Do Not Track (DNT) Signals
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no industry standard for how DNT signals should be interpreted. Our website does not currently respond to DNT signals, but we respect your cookie preferences as set through our cookie consent mechanism.
            </p>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              7. Mobile Applications
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              If you use our mobile applications, we may use similar tracking technologies (such as device identifiers and mobile analytics) to provide and improve our services. You can manage these preferences through your device settings or our app settings.
            </p>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              8. Updates to This Cookie Policy
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              We may update this Cookie Policy from time to time to reflect changes in our practices, legal requirements, or for other operational, legal, or regulatory reasons. We will notify you of any material changes by:
            </p>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
              <li>Posting the updated Cookie Policy on this page</li>
              <li>Updating the "Last updated" date at the top of this policy</li>
              <li>Displaying a notice on our website (for major changes)</li>
              <li>Sending an email notification to registered users (for significant changes)</li>
            </ul>
            <p style={{ marginBottom: "1.5rem" }}>
              Your continued use of our website after such changes constitutes acceptance of the updated Cookie Policy.
            </p>

            <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.75rem", marginTop: "3rem", marginBottom: "1.25rem", color: "var(--txt)", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem" }}>
              9. Contact Us
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              If you have questions about our use of cookies, this Cookie Policy, or wish to exercise your rights regarding cookies, please contact us:
            </p>
            <div style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 100%)", padding: "2rem", borderRadius: "var(--r-lg)", marginBottom: "2rem", color: "var(--white)" }}>
              <p style={{ marginBottom: "0.75rem", fontSize: "1.2rem", fontWeight: "600" }}>Ebada Group - Privacy & Data Protection</p>
              <p style={{ marginBottom: "0.5rem" }}><strong>Address:</strong> 2-5-1 Marunouchi, Chiyoda-ku, Tokyo 100-0005, Japan</p>
              <p style={{ marginBottom: "0.5rem" }}><strong>Phone:</strong> 03-1234-5678 (Monday-Friday, 9:00 AM - 6:00 PM JST)</p>
              <p style={{ marginBottom: "0.5rem" }}><strong>Email:</strong> privacy@ebadagroup.com</p>
              <p style={{ marginBottom: "0.5rem" }}><strong>Fax:</strong> 03-1234-5679</p>
              <p style={{ margin: 0 }}><strong>Cookie Settings:</strong> You can manage your cookie preferences at any time through our website footer or by contacting us.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
