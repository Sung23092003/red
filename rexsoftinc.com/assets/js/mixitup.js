document.addEventListener('DOMContentLoaded', function () {
  const mainTabLinks = document.querySelectorAll('.case-study__links a[role="tab"]');
  const subTabContainer = document.querySelector('.tabpanels');
  const allTabLink = document.querySelector('.case-study__links a[href="portfolio.html"]:not([data-index])');
  const caseStudyGrid = document.querySelector('.case-study__grid.all-tab-grid');
  const topSection = document.querySelector('.section-general-top');
  const mapSection = document.querySelector('.map');

  // Tạo section mới để render portfolio
  const newContentSection = document.createElement('section');
  newContentSection.classList.add('section', 'section--portfolio', 'block-portfolio');
  newContentSection.style.cssText = 'padding-top: 0px;';

  // Gắn section mới ngay sau case-study
  const caseStudySection = document.querySelector('.case-study');
  if (caseStudySection) {
    caseStudySection.insertAdjacentElement('afterend', newContentSection);
  }

  const portfolioData = [
    // node.js
    { name: "Jet.UA", subtitle: "Electric scooter rental app for the largest company on the Ukrainian market", image: "assets/ksu/jet_ua.webp", link: "../e-commerce-node.html", services: ["UX/UI Design", "Front-End Development", "Back-End Development", "Support &amp; Maintenance"], category: "Technologies", subCategory: "Node.JS" },
    { name: "Imover crm", subtitle: "CRM for moving business.", image: "assets/ksu/imover-main-min.webp", link: "../crm-for-moving-company.html", services: ["UX/UI Design", "Front-End Development", "Back-End Development", "Support & Maintenance"], category: "Technologies", subCategory: "Node.JS" },
    { name: "C24", subtitle: "Electric scooter rental service", image: "assets/ksu/c24-main3-_1_-min_1.webp", link: "../iot-app-example.html", services: ["UX/UI Design", "Front-End Development", "Back-End Development", "Support & Maintenance"], category: "Technologies", subCategory: "Node.JS" },
    { name: "Quantum Listing", subtitle: "QuantumListing is the new crowd-sourced real estate listing platform for commercial real estate agents, owners, and tenants.", image: "assets/ksu/ql-main-min-6499a45f65abe.webp", link: "../real-estate-app-example.html", services: ["UX/UI Design", "Front-End Development", "Back-End Development", "Support & Maintenance"], category: "Technologies", subCategory: "Node.JS" },
    { name: "Tap App Security", subtitle: "Crisis management communication system.", image: "assets/ksu/tapapp-portfolio-main-img-min-64996a704cde8.webp", link: "../security-software-example.html", services: ["UX/UI Design", "Front-End Development", "Back-End Development", "Support & Maintenance"], category: "Technologies", subCategory: "Node.JS" },
    { name: "E-GREE", subtitle: "mobile application", image: "assets/ksu/e-gree-main-min-1-64996714b568f.webp", link: "../react-native-mobile-app-example.html", services: ["UX/UI Design", "Front-End Development", "Back-End Development", "Support & Maintenance"], category: "Technologies", subCategory: "Node.JS" },
    { name: "Players iQ", subtitle: "Athlete training app", image: "assets/ksu/players-iq-main-min-64996be1597d9.webp", link: "../athlete-training-app-example.html", services: ["UX/UI Design", "Front-End Development", "Back-End Development", "Support & Maintenance"], category: "Technologies", subCategory: "Node.JS" },
    { name: "AllsWell", subtitle: "Senior care app", image: "assets/ksu/allwell-main-1-1-64999cfd259c6.webp", link: "../senior-care-app-example.html", services: ["UX/UI Design", "Front-End Development", "Back-End Development", "Support & Maintenance"], category: "Technologies", subCategory: "Node.JS" },
    { name: "WeCare4®", subtitle: "Comprehensive web application for caregivers", image: "assets/ksu/wecare-main-min-649abbd560a1c.webp", link: "../react-js-app-example.html", services: ["UX/UI Design", "Front-End Development", "Back-End Development", "Support & Maintenance"], category: "Technologies", subCategory: "Node.JS" },
    { name: "B2B Avtolider", subtitle: "Developing a Comprehensive Auto Parts Website and B2B Portal for Enhanced Efficiency and Engagement", image: "assets/img/portfolio/Avto.png", link: "../avtolider-b2b.html", services: ["UX/UI Design", "Front-End Development", "Back-End Development", "Support & Maintenance"], category: "Technologies", subCategory: "Node.JS" },
    { name: "Plan.Net", subtitle: "Revolutionizing Social Media Management: Comprehensive Web Application Development", image: "assets/img/portfolio/Plannet.png", link: "../plannet-social-media-web-app.html", services: ["UX/UI Design", "Front-End Development", "Back-End Development", "Support & Maintenance"], category: "Technologies", subCategory: "Node.JS" },
    //end: node.js
    // php
    { name: "Imover crm", subtitle: "CRM for moving business.", image: "assets/ksu/imover-main-min.webp", link: "../crm-for-moving-company.html", services: ["UX/UI Design", "Front-End Development", "Back-End Development", "Support & Maintenance"], category: "Technologies", subCategory: "PHP" },
    { name: "Zumic", subtitle: "Ticket seller", image: "assets/ksu/zumic-main-min.webp", link: "../concert-ticket-website-example.html", services: ["UX/UI Design", "Front-End Development", "Back-End Development", "Support & Maintenance"], category: "Technologies", subCategory: "PHP" },
    { name: "Ultraziz", subtitle: "UltraZIZ sells quality personal protective equipment (PPE) for workers and companies in Ukraine", image: "assets/ksu/ultraziz-main_1.webp", link: "../e-commerce-store-ultraziz.html", services: ["UX/UI Design", "Front-End Development", "Back-End Development", "Support & Maintenance"], category: "Technologies", subCategory: "PHP" },
    { name: "Tap App Security", subtitle: "Crisis management communication system.", image: "assets/ksu/tapapp-portfolio-main-img-min-64996a704cde8.webp", link: "../security-software-example.html", services: ["UX/UI Design", "Front-End Development", "Back-End Development", "Support & Maintenance"], category: "Technologies", subCategory: "PHP" },
    // end: php
    // lavarel
    { name: "Imover crm", subtitle: "CRM for moving business.", image: "assets/ksu/imover-main-min.webp", link: "../crm-for-moving-company.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Technologies", subCategory: "Laravel" }, 
    { name: "Zumic", subtitle: "Ticket seller", image: "assets/ksu/zumic-main-min.webp", link: "../concert-ticket-website-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Technologies", subCategory: "Laravel" }, 
    { name: "Ultraziz", subtitle: "UltraZIZ sells quality personal protective equipment (PPE) for workers and companies in Ukraine", image: "assets/ksu/ultraziz-main_1.webp", link: "../e-commerce-store-ultraziz.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Technologies", subCategory: "Laravel" }, 
    { name: "Tap App Security", subtitle: "Crisis management communication system.", image: "assets/ksu/tapapp-portfolio-main-img-min-64996a704cde8.webp", link: "../security-software-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Technologies", subCategory: "Laravel" },
    // end: lavarel
    // react
    { name: "Imover crm", subtitle: "CRM for moving business.", image: "assets/ksu/imover-main-min.webp", link: "../crm-for-moving-company.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Technologies", subCategory: "React.JS" }, 
    { name: "B2B Avtolider", subtitle: "Developing a Comprehensive Auto Parts Website and B2B Portal for Enhanced Efficiency and Engagement", image: "assets/img/portfolio/Avto.png", link: "../avtolider-b2b.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Technologies", subCategory: "React.JS" }, 
    { name: "Plan.Net", subtitle: "Revolutionizing Social Media Management: Comprehensive Web Application Development", image: "assets/img/portfolio/Plannet.png", link: "../plannet-social-media-web-app.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Technologies", subCategory: "React.JS" },
    // end: react
    // react native
    { name: "Jet.UA", subtitle: "Electric scooter rental app for the largest company on the Ukrainian market", image: "assets/ksu/jet_ua.webp", link: "../electric-scooter-rental-app.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Technologies", subCategory: "React Native" }, 
    { name: "E-GREE", subtitle: "mobile application", image: "assets/ksu/e-gree-main-min-1-64996714b568f.webp", link: "../react-native-mobile-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Technologies", subCategory: "React Native" }, 
    { name: "Players iQ", subtitle: "Athlete training app", image: "assets/ksu/players-iq-main-min-64996be1597d9.webp", link: "../athlete-training-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Technologies", subCategory: "React Native" }, 
    { name: "AllsWell", subtitle: "Senior care app", image: "assets/ksu/allwell-main-1-1-64999cfd259c6.webp", link: "../senior-care-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Technologies", subCategory: "React Native" }, 
    { name: "WeCare4®", subtitle: "Comprehensive web application for caregivers", image: "assets/ksu/wecare-main-min-649abbd560a1c.webp", link: "../react-js-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Technologies", subCategory: "React Native" },
    // end: react native
    // flutter
    { name: "C24", subtitle: "Electric scooter rental service", image: "assets/ksu/c24-main3-_1_-min_1.webp", link: "../iot-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Technologies", subCategory: "Flutter" }, 
    { name: "Tap App Security", subtitle: "Crisis management communication system.", image: "assets/ksu/tapapp-portfolio-main-img-min-64996a704cde8.webp", link: "../security-software-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Technologies", subCategory: "Flutter" },
    // end: flutter
    // Aws
    { name: "Jet.UA", subtitle: "Electric scooter rental app for the largest company on the Ukrainian market", image: "assets/ksu/jet_ua.webp", link: "../electric-scooter-rental-app.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Technologies", subCategory: "AWS" }, 
    { name: "Imover crm", subtitle: "CRM for moving business.", image: "assets/ksu/imover-main-min.webp", link: "../crm-for-moving-company.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Technologies", subCategory: "AWS" },
    // end: Aws
    // web application
    { name: "Imover crm", subtitle: "CRM for moving business.", image: "assets/ksu/imover-main-min.webp", link: "../crm-for-moving-company.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Web applications" }, 
    { name: "Quantum Listing", subtitle: "QuantumListing is the new crowd-sourced real estate listing platform for commercial real estate agents, owners, and tenants.", image: "assets/ksu/ql-main-min-6499a45f65abe.webp", link: "../real-estate-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Web applications" }, 
    { name: "Zumic", subtitle: "Ticket seller", image: "assets/ksu/zumic-main-min.webp", link: "../concert-ticket-website-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Web applications" }, 
    { name: "Fantero", subtitle: "Digital content marketplace for freelancers.", image: "assets/img/portfolio/fantero.png", link: "../fantero.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Web applications" },
    { name: "Communications Match", subtitle: "Search engine that connects companies with communications professionals", image: "assets/ksu/match_main-min.webp", link: "../communication-match.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Web applications" }, 
    { name: "Ultraziz", subtitle: "UltraZIZ sells quality personal protective equipment (PPE) for workers and companies in Ukraine", image: "assets/ksu/ultraziz-main_1.webp", link: "../e-commerce-store-ultraziz.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Web applications" }, 
    { name: "Cosmonova", subtitle: "Professional stars registration.", image: "assets/img/portfolio/cosmonova.png", link: "../cosmonova.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Web applications" }, 
    { name: "Amo-ECOMMERCE", subtitle: "Omnichannel e-commerce store that sells car spare parts.", image: "assets/ksu/AMO_main-min.webp", link: "../amo.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Web applications" }, 
    { name: "WeCare4®", subtitle: "Comprehensive web application for caregivers", image: "assets/ksu/wecare-main-min-649abbd560a1c.webp", link: "../react-js-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Web applications" }, 
    { name: "B2B Avtolider", subtitle: "Developing a Comprehensive Auto Parts Website and B2B Portal for Enhanced Efficiency and Engagement", image: "assets/img/portfolio/Avto.png", link: "../avtolider-b2b.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Web applications" }, 
    { name: "Plan.Net", subtitle: "Revolutionizing Social Media Management: Comprehensive Web Application Development", image: "assets/img/portfolio/Plannet.png", link: "../plannet-social-media-web-app.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Web applications" },
    // end: web application
    // Mobile applications
    { name: "Jet.UA", subtitle: "Electric scooter rental app for the largest company on the Ukrainian market", image: "assets/ksu/jet_ua.webp", link: "../electric-scooter-rental-app.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Mobile applications" }, 
    { name: "C24", subtitle: "Electric scooter rental service", image: "assets/ksu/c24-main3-_1_-min_1.webp", link: "../iot-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Mobile applications" }, 
    { name: "Compass VR", subtitle: "360 video and Virtual Reality application for mobile devices and VR headsets.", image: "assets/img/portfolio/compass.png", link: "../compass.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Mobile applications" }, 
    { name: "Tap App Security", subtitle: "Crisis management communication system.", image: "assets/ksu/tapapp-portfolio-main-img-min-64996a704cde8.webp", link: "../security-software-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Mobile applications" }, 
    { name: "E-GREE", subtitle: "mobile application", image: "assets/ksu/e-gree-main-min-1-64996714b568f.webp", link: "../react-native-mobile-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Mobile applications" }, 
    { name: "Players iQ", subtitle: "Athlete training app", image: "assets/ksu/players-iq-main-min-64996be1597d9.webp", link: "../athlete-training-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Mobile applications" }, 
    { name: "AllsWell", subtitle: "Senior care app", image: "assets/ksu/allwell-main-1-1-64999cfd259c6.webp", link: "../senior-care-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Mobile applications" },
    // end: Mobile applications
    // IOS
    { name: "Jet.UA", subtitle: "Electric scooter rental app for the largest company on the Ukrainian market", image: "assets/ksu/jet_ua.webp", link: "../electric-scooter-rental-app.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "iOS" }, 
    { name: "C24", subtitle: "Electric scooter rental service", image: "assets/ksu/c24-main3-_1_-min_1.webp", link: "../iot-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "iOS" }, 
    { name: "Tap App Security", subtitle: "Crisis management communication system.", image: "assets/ksu/tapapp-portfolio-main-img-min-64996a704cde8.webp", link: "../security-software-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "iOS" }, 
    { name: "E-GREE", subtitle: "mobile application", image: "assets/ksu/e-gree-main-min-1-64996714b568f.webp", link: "../react-native-mobile-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "iOS" }, 
    { name: "Players iQ", subtitle: "Athlete training app", image: "assets/ksu/players-iq-main-min-64996be1597d9.webp", link: "../athlete-training-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "iOS" }, 
    { name: "AllsWell", subtitle: "Senior care app", image: "assets/ksu/allwell-main-1-1-64999cfd259c6.webp", link: "../senior-care-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "iOS" },
    // end: IOS
    // android
    { name: "Jet.UA", subtitle: "Electric scooter rental app for the largest company on the Ukrainian market", image: "assets/ksu/jet_ua.webp", link: "../electric-scooter-rental-app.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Android" },
    { name: "C24", subtitle: "Electric scooter rental service", image: "assets/ksu/c24-main3-_1_-min_1.webp", link: "../iot-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Android" },
    { name: "Compass VR", subtitle: "360 video and Virtual Reality application for mobile devices and VR headsets.", image: "assets/img/portfolio/compass.png", link: "../compass.html", services: ["UX/UI Design","Front-End Development","Front-End Development","Front-End Development"], category: "Platforms", subCategory: "Android" },
    { name: "Tap App Security", subtitle: "Crisis management communication system.", image: "assets/ksu/tapapp-portfolio-main-img-min-64996a704cde8.webp", link: "../security-software-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Android" },
    { name: "E-GREE", subtitle: "mobile application", image: "assets/ksu/e-gree-main-min-1-64996714b568f.webp", link: "../react-native-mobile-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Android" },
    { name: "Players iQ", subtitle: "Athlete training app", image: "assets/ksu/players-iq-main-min-64996be1597d9.webp", link: "../athlete-training-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Android" },
    { name: "AllsWell", subtitle: "Senior care app", image: "assets/ksu/allwell-main-1-1-64999cfd259c6.webp", link: "../senior-care-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "Android" },
    // end: android
    // PWA
    { name: "Tap App Security", subtitle: "Crisis management communication system.", image: "assets/ksu/tapapp-portfolio-main-img-min-64996a704cde8.webp", link: "../security-software-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Platforms", subCategory: "PWA" },
    // end: PWA
    // Business Tool
    { name: "Imover crm", subtitle: "CRM for moving business.", image: "assets/ksu/imover-main-min.webp", link: "../crm-for-moving-company.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Product Type", subCategory: "Business Tool" },
    { name: "Quantum Listing", subtitle: "QuantumListing is the new crowd-sourced real estate listing platform for commercial real estate agents, owners, and tenants.", image: "assets/ksu/ql-main-min-6499a45f65abe.webp", link: "../real-estate-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Product Type", subCategory: "Business Tool" },
    { name: "Communications Match", subtitle: "Search engine that connects companies with communications professionals", image: "assets/ksu/match_main-min.webp", link: "../communication-match.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Product Type", subCategory: "Business Tool" },
    { name: "Tap App Security", subtitle: "Crisis management communication system.", image: "assets/ksu/tapapp-portfolio-main-img-min-64996a704cde8.webp", link: "../security-software-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Product Type", subCategory: "Business Tool" },
    { name: "Players iQ", subtitle: "Athlete training app", image: "assets/ksu/players-iq-main-min-64996be1597d9.webp", link: "../athlete-training-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Product Type", subCategory: "Business Tool" },
    { name: "WeCare4®", subtitle: "Comprehensive web application for caregivers", image: "assets/ksu/wecare-main-min-649abbd560a1c.webp", link: "../react-js-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Product Type", subCategory: "Business Tool" },
    // end: Business Tool
    // Saas
    { name: "Compass VR", subtitle: "360 video and Virtual Reality application for mobile devices and VR headsets.", image: "assets/img/portfolio/compass.png", link: "../compass.html", services: ["UX/UI Design","Front-End Development","Front-End Development","Front-End Development"], category: "Product Type", subCategory: "Saas" },
    { name: "Tap App Security", subtitle: "Crisis management communication system.", image: "assets/ksu/tapapp-portfolio-main-img-min-64996a704cde8.webp", link: "../security-software-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Product Type", subCategory: "Saas" },
    { name: "E-GREE", subtitle: "mobile application", image: "assets/ksu/e-gree-main-min-1-64996714b568f.webp", link: "../react-native-mobile-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Product Type", subCategory: "Saas" },
    { name: "AllsWell", subtitle: "Senior care app", image: "assets/ksu/allwell-main-1-1-64999cfd259c6.webp", link: "../senior-care-app-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Product Type", subCategory: "Saas" },
    // end: Saas
    // CRM
    { name: "Imover crm", subtitle: "CRM for moving business.", image: "assets/ksu/imover-main-min.webp", link: "../crm-for-moving-company.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Product Type", subCategory: "CRM" },
    // end: CRM
    // ERP
    { name: "Imover crm", subtitle: "CRM for moving business.", image: "assets/ksu/imover-main-min.webp", link: "../crm-for-moving-company.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Product Type", subCategory: "ERP" },
    // end: ERP
    // Marketplace / e-commerce
    { name: "Zumic", subtitle: "Ticket seller", image: "assets/ksu/zumic-main-min.webp", link: "../concert-ticket-website-example.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Product Type", subCategory: "Marketplace / e-commerce" },
    { name: "Fantero", subtitle: "Digital content marketplace for freelancers.", image: "assets/img/portfolio/fantero.png", link: "../fantero.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Product Type", subCategory: "Marketplace / e-commerce" },
    { name: "Ultraziz", subtitle: "UltraZIZ sells quality personal protective equipment (PPE) for workers and companies in Ukraine", image: "assets/ksu/ultraziz-main_1.webp", link: "../e-commerce-store-ultraziz.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Product Type", subCategory: "Marketplace / e-commerce" },
    { name: "Cosmonova", subtitle: "Professional stars registration.", image: "assets/img/portfolio/cosmonova.png", link: "../cosmonova.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Product Type", subCategory: "Marketplace / e-commerce" },
    { name: "Amo-ECOMMERCE", subtitle: "Omnichannel e-commerce store that sells car spare parts.", image: "assets/ksu/AMO_main-min.webp", link: "../amo.html", services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"], category: "Product Type", subCategory: "Marketplace / e-commerce" },
    // end: Marketplace / e-commerce
    // PaaS
    {
    name: "Jet.UA",
    subtitle: "Electric scooter rental app for the largest company on the Ukrainian market",
    image: "assets/ksu/jet_ua.webp",
    link: "../electric-scooter-rental-app.html",
    services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"],
    category: "Product Type",
    subCategory: "PaaS"
  },
  {
    name: "C24",
    subtitle: "Electric scooter rental service",
    image: "assets/ksu/c24-main3-_1_-min_1.webp",
    link: "../iot-app-example.html",
    services: ["UX/UI Design","Front-End Development","Back-End Development","Support & Maintenance"],
    category: "Product Type",
    subCategory: "PaaS"
  }
    // end: PaaS
  ];

  
// Hàm render dữ liệu vào section mới
  function renderPortfolioItems(items) {
    newContentSection.innerHTML = '';

    if (items.length > 0) {
      const gridWrapper = `
        <div class="container">
          <div class="col-lg-12">
            <div class="case-study__grid all-tab-grid">
              <div class="grid" id="new-category-fillter"></div>
            </div>
          </div>
        </div>
      `;
      newContentSection.innerHTML = gridWrapper;

      const gridContainer = newContentSection.querySelector('.grid');

      items.forEach(item => {
        const itemHtml = `
          <div class="grid-item">
            <img class="case-grid__img" src="${item.image}" alt="${item.name}">
            <div class="overlay">
              <span class="category">${item.name}</span>
              <a class="category__subtitle" href="${item.link}">Explore now</a>
            </div>
            <!-- Link riêng cho mobile -->
            <a class="mobile-explore" href="${item.link}">Explore now</a>
          </div>
        `;
        gridContainer.innerHTML += itemHtml;
      });
    }
  }

  // Sự kiện tab chính
  mainTabLinks.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      const tabIndex = this.getAttribute('data-index');
      
      mainTabLinks.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.style.display = 'none';
        panel.classList.remove('active');
      });

      if (tabIndex) {
        document.querySelector(`.tab-panel[data-index="${tabIndex}"]`).style.display = 'flex';
      }
    });
  });

  // Sự kiện sub-tab
  document.querySelectorAll('.sub-tab').forEach(subTab => {
    subTab.addEventListener('click', function (e) {
      e.preventDefault();
      const subCategory = this.textContent.trim();

      // Ẩn section cũ
      topSection.style.display = 'none';
      mapSection.style.display = 'none';
      if (caseStudyGrid) {
        caseStudyGrid.style.display = 'none';
      }

      // Lọc và render vào section mới
      const filteredItems = portfolioData.filter(item => item.subCategory === subCategory);
      renderPortfolioItems(filteredItems);

      document.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Tab "All"
  allTabLink.addEventListener('click', function(e) {
    e.preventDefault();
    topSection.style.display = 'block';
    mapSection.style.display = 'block';
    if (caseStudyGrid) {
      caseStudyGrid.style.display = 'grid';
    }
    newContentSection.innerHTML = '';

    mainTabLinks.forEach(t => t.classList.remove('active'));
    this.classList.add('active');

    document.querySelectorAll('.tab-panel').forEach(panel => {
      panel.style.display = 'none';
    });
  });

  //Render toàn bộ items ngay khi load
  renderPortfolioItems(portfolioData);
});