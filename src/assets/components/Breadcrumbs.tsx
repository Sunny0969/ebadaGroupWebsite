import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on homepage
  if (location.pathname === '/') {
    return null;
  }

  const getBreadcrumbName = (path: string) => {
    // Map common paths to readable names
    const pathMap: Record<string, string> = {
      'about': 'About Us',
      'overview': 'Company Overview',
      'ceo': 'CEO Message',
      'philosophy': 'Philosophy',
      'history': 'History',
      'locations': 'Branch Locations',
      'services': 'Services',
      'manufacturing': 'Manufacturing Dispatch',
      'recruitment': 'Recruitment',
      'outsourcing': 'Business Outsourcing',
      'engineer': 'Engineer Dispatch',
      'foreign': 'Foreign Employment',
      'reemployment': 'Re-employment Support',
      'job-seekers': 'For Job Seekers',
      'listings': 'Job Listings',
      'how-to-apply': 'How to Apply',
      'resources': 'Career Resources',
      'register': 'Register',
      'employers': 'For Employers',
      'post-job': 'Post a Job',
      'portal': 'Client Portal',
      'sustainability': 'Sustainability',
      'policy': 'Policy',
      'environment': 'Environment',
      'social': 'Social',
      'governance': 'Governance',
      'sdgs': 'SDGs',
      'news': 'News & Events',
      'events': 'Events Calendar',
      'careers': 'Careers',
      'join': 'Join Our Team',
      'blog': 'Recruitment Blog',
      'process': 'Application Process',
      'contact': 'Contact Us',
      'faq': 'FAQ',
      'support': 'Support',
      'privacy-policy': 'Privacy Policy',
      'terms-conditions': 'Terms & Conditions',
      'cookie-policy': 'Cookie Policy'
    };

    return pathMap[path] || path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
  };

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to="/" className="breadcrumbs__link">Home</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const displayName = getBreadcrumbName(name);

          return (
            <li key={routeTo} className="breadcrumbs__item">
              <span className="breadcrumbs__separator" aria-hidden="true">/</span>
              {isLast ? (
                <span className="breadcrumbs__current" aria-current="page">
                  {displayName}
                </span>
              ) : (
                <Link to={routeTo} className="breadcrumbs__link">
                  {displayName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
