export function HomepageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://chtz-tech.dev/#organization",
        name: "CHTZ-Tech",
        url: "https://chtz-tech.dev",
        logo: "https://chtz-tech.dev/logo.svg",
        description:
          "Custom software development studio specializing in web applications, AI integration, and Web3 infrastructure.",
        email: "hello@chtz-tech.dev",
        sameAs: [
          "https://github.com/chtz-tech",
          "https://linkedin.com/company/chtz-tech",
        ],
        knowsAbout: [
          "Custom Software Development",
          "Web Application Development",
          "AI Integration",
          "Web3 Development",
          "Blockchain Development",
          "Next.js",
          "React",
          "TypeScript",
          "Solidity",
          "Node.js",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Software Development Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Web Application Development",
                description:
                  "Production-grade web applications built with Next.js, React, and TypeScript.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Development & Integration",
                description:
                  "LLM-powered features, AI automation, and machine learning integration.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Web3 & Blockchain Development",
                description:
                  "Smart contracts, DeFi protocols, and decentralized application development.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Fullstack Product Development",
                description:
                  "End-to-end product development from architecture to deployment.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Enterprise Software Solutions",
                description:
                  "Custom enterprise platforms, admin dashboards, and internal tools.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://chtz-tech.dev/#webpage",
        url: "https://chtz-tech.dev",
        name: "CHTZ-Tech — Custom Software Development Studio",
        description:
          "Senior engineers building production-grade web apps, AI integrations, and Web3 infrastructure.",
        isPartOf: { "@id": "https://chtz-tech.dev/#website" },
        inLanguage: "en",
      },
      {
        "@type": "WebSite",
        "@id": "https://chtz-tech.dev/#website",
        url: "https://chtz-tech.dev",
        name: "CHTZ-Tech",
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does custom software development cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A typical MVP starts at $20K–$40K. Enterprise projects range from $50K–$200K+. We provide detailed estimates after a free discovery call.",
            },
          },
          {
            "@type": "Question",
            name: "How long does MVP development take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "4–8 weeks for a focused MVP. Complex AI or Web3 products may take 8–12 weeks. We ship fast without cutting corners.",
            },
          },
          {
            "@type": "Question",
            name: "What technologies do you use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Next.js, React, TypeScript, Node.js, PostgreSQL for web. Python, LangChain for AI. Solidity, Hardhat for Web3.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work with startups or enterprises?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Both. We help startups build MVPs and enterprises build custom tools, AI integrations, and blockchain infrastructure.",
            },
          },
          {
            "@type": "Question",
            name: "What is your development process?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Discovery (1 week) → Architecture (1 week) → Development in 2-week sprints → Launch with monitoring. CI/CD and automated testing from day one.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://chtz-tech.dev",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
