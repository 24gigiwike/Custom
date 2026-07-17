export default function Footer() {
  const featuresLinks = [
    { name: 'Templates', href: '#templates' },
    { name: 'AI Mockup Studio', href: '#mockups' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Changelog', href: '#changelog' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Integrations (Future)', href: '#integrations' },
    { name: 'Request a Feature', href: '#request' },
  ];

  const documentationLinks = [
    { name: 'Help Center', href: '#help' },
    { name: 'Tutorials', href: '#tutorials' },
    { name: 'Blog', href: '#blog' },
    { name: 'Community', href: '#community' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'System Status', href: '#status' },
  ];

  const aboutLinks = [
    { name: 'About Custom', href: '#about' },
    { name: 'About BroadBrand', href: '#about-bb' },
    { name: 'Careers (Future)', href: '#careers' },
    { name: 'Contact', href: '#contact' },
    { name: 'Press Kit', href: '#press' },
    { name: 'Partners', href: '#partners' },
    { name: 'Affiliates (Future)', href: '#affiliates' },
  ];

  const privacyLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'Refund Policy', href: '#refund' },
    { name: 'Acceptable Use Policy', href: '#use-policy' },
    { name: 'Licensing', href: '#licensing' },
  ];

  const domainsLinks = [
    { name: 'Domains', href: '#domains' },
    { name: 'Hosting Plans', href: '#hosting' },
    { name: 'SSL Certificates', href: '#ssl' },
    { name: 'Deployment Guide', href: '#deploy' },
    { name: 'Transfer Domain', href: '#transfer' },
  ];

  return (
    <footer id="footer" className="relative w-full bg-white pt-16 pb-24 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-6 sm:gap-x-8">
          
          {/* Column 1 (Leftmost): Powered by BroadBrand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col gap-3">
            <span id="footer-brand" className="text-sm font-semibold text-slate-800 tracking-wider uppercase">
              Powered by
            </span>
            <span id="footer-brand-name" className="text-base font-bold text-slate-600">
              BroadBrand
            </span>
          </div>

          {/* Column 2: Features & Domains (stacked below Features) */}
          <div className="flex flex-col gap-12">
            {/* Features Link Group */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                {featuresLinks[0].name}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {featuresLinks.slice(1).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs text-slate-600 hover:text-teal-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Domains Link Group (positioned below Features in the same visual vertical track) */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                {domainsLinks[0].name}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {domainsLinks.slice(1).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs text-slate-600 hover:text-teal-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Documentation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Documentation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {documentationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-600 hover:text-teal-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: About Custom */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
              {aboutLinks[0].name}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {aboutLinks.slice(1).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-600 hover:text-teal-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Privacy Policy */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
              {privacyLinks[0].name}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {privacyLinks.slice(1).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-600 hover:text-teal-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-16 border-t border-slate-100" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 relative">
          
          {/* Copyright notice & description (Bottom Left) */}
          <div className="max-w-xl flex flex-col gap-3">
            <p id="copyright-text" className="text-xs text-slate-500 leading-relaxed">
              © 2026 Custom by BroadBrand. All rights reserved. Built to help businesses, creators & brands build a better digital presence.
            </p>
          </div>

          {/* Version, Country indicator and Massive Cropped Custom Wordmark (Bottom Right) */}
          <div className="flex flex-col items-start lg:items-end gap-2 relative min-h-[140px]">
            
            {/* Metadata info */}
            <div className="text-xs text-slate-400 font-medium flex flex-col items-start lg:items-end gap-1 mb-2">
              <span id="app-version">Version 1.0.0</span>
              <span id="country-badge" className="inline-flex items-center gap-1.5 text-slate-500">
                Made in Nigeria <span className="text-base leading-none">🇳🇬</span>
              </span>
            </div>

            {/* Giant Absolutely Positioned Logo showing through bottom right border */}
            <div className="absolute right-[-40px] bottom-[-90px] w-[350px] sm:w-[450px] h-auto select-none pointer-events-none">
              <img
                id="footer-massive-logo"
                src="https://res.cloudinary.com/dtkluxukm/image/upload/v1784208065/custom-transparent_fanqbk.png"
                alt="Custom Logo Watermark"
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
