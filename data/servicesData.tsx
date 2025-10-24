import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string[];
  approach: string;
  keyBenefits: string[];
  icon: React.ReactNode;
  image: string;
}

const iconStyle = {width: "60px", height: "60px"};

const icons = [
  <svg key="web-dev" style={iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" /></svg>,
  <svg key="ui-ux" style={iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z" /></svg>,
  <svg key="it-mgmt" style={iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M11 2C15.97 2 20 6.03 20 11C20 15.97 15.97 20 11 20C6.03 20 2 15.97 2 11C2 6.03 6.03 2 11 2ZM11 4C7.13 4 4 7.13 4 11C4 14.87 7.13 18 11 18C14.87 18 18 14.87 18 11C18 7.13 14.87 4 11 4ZM10.5 6V10.5H6V11.5H10.5V16H11.5V11.5H16V10.5H11.5V6H10.5Z" /></svg>,
  <svg key="data-sec" style={iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M12,3L1,9L12,15L23,9L12,3M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" /></svg>,
  <svg key="biz-reform" style={iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19M7,7V9H9V7H7M11,7V9H13V7H11M15,7V9H17V7H15M7,11V13H9V11H7M11,11V13H13V11H11M15,11V13H17V11H15M7,15V17H9V15H7M11,15V17H13V15H11M15,15V17H17V15H15Z" /></svg>,
  <svg key="infra-mgmt" style={iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M22.7,19L13.6,9.9C14.5,8.6 15,7.1 15,5.5C15,2.5 12.5,0 9.5,0S4,2.5 4,5.5C4,8.5 6.5,11 9.5,11C11.1,11 12.6,10.5 13.9,9.6L23,18.7L22.7,19M9.5,9C7.6,9 6,7.4 6,5.5S7.6,2 9.5,2S13,3.6 13,5.5S11.4,9 9.5,9Z" /></svg>,
];

export const servicesData: Service[] = [
    { 
        id: 'web-development',
        title: 'Web Development', 
        description: 'Quickly pursue granular interfaces with cross-platform.',
        longDescription: [
            'Globally foster emerging imperatives through extensible intellectual capital. Collaboratively pursue resource-leveling sources and leverage others with client-based partnerships.',
            'Credibly grow premier ideas rather than ubiquitous leadership. Compellingly syndicate team building technologies rather than B2C solutions. Objectively foster leading-edge processes and an expanded array of niche markets.'
        ],
        approach: 'Monotonectally disseminate principle-centered process improvements and sticky catalysts for change. Holistically revolutionize.',
        keyBenefits: ['User-Centric Design', 'Scalable Architecture', 'Robust Security'],
        icon: icons[0],
        image: '/assets/images/about_img_02.png',
    },
    { 
        id: 'ui-ux-design',
        title: 'UI/UX Design', 
        description: 'Compellingly actualize multifunctional potentialities.',
        longDescription: [
            'Proactively whiteboard B2B leadership skills after multifunctional products. Enthusiastically administrate ubiquitous scenarios and interoperable results.',
            'Assertively syndicate impactful communities with world-class methods of empowerment. Distinctively seize impactful applications for cross-unit web services.'
        ],
        approach: 'Objectively foster leading-edge processes for schemas. Dramatically enable progressive schemas via clicks-and-mortar.',
        keyBenefits: ['Intuitive Interfaces', 'Engaging User Experience', 'Brand Consistency'],
        icon: icons[1],
        image: '/assets/images/about_img_03.png',
    },
    { 
        id: 'it-management',
        title: 'IT Management', 
        description: 'Dramatically enable progressive schemas via clicks-and-mortar.',
        longDescription: [
            'Interactively unleash resource maximizing convergence after emerging functionalities. Monotonectally fashion future-proof alignments before go forward total linkage.',
            'Appropriately revolutionize turnkey services with client-focused potentialities. Phosfluorescently architect fully tested initiatives and progressive catalysts for change.'
        ],
        approach: 'Completely disseminate long-term high-impact sources with highly efficient convergence. Credibly whiteboard B2B leadership skills after multifunctional products.',
        keyBenefits: ['Streamlined Operations', 'Cost Efficiency', 'Proactive Maintenance'],
        icon: icons[2],
        image: '/assets/images/p_1.png',
    },
    { 
        id: 'data-security',
        title: 'Data Security', 
        description: 'Credibly grow premier ideas rather than ubiquitous leadership.',
        longDescription: [
            'Enthusiastically administrate ubiquitous scenarios and interoperable results. Assertively syndicate impactful communities with world-class methods of empowerment.',
            'Distinctively seize impactful applications for cross-unit web services. Interactively unleash resource maximizing convergence after emerging functionalities.'
        ],
        approach: 'Monotonectally fashion future-proof alignments before go forward total linkage. Appropriately revolutionize turnkey services with client-focused potentialities.',
        keyBenefits: ['Threat Prevention', 'Data Encryption', 'Compliance Assurance'],
        icon: icons[3],
        image: '/assets/images/p_3.png',
    },
    { 
        id: 'business-reform',
        title: 'Business Reform', 
        description: 'Objectively foster leading-edge processes for schemas.',
        longDescription: [
            'Phosfluorescently architect fully tested initiatives and progressive catalysts for change. Completely disseminate long-term high-impact sources with highly efficient convergence.',
            'Credibly whiteboard B2B leadership skills after multifunctional products. Enthusiastically administrate ubiquitous scenarios and interoperable results.'
        ],
        approach: 'Assertively syndicate impactful communities with world-class methods of empowerment. Distinctively seize impactful applications for cross-unit web services.',
        keyBenefits: ['Process Optimization', 'Increased Agility', 'Strategic Growth'],
        icon: icons[4],
        image: '/assets/images/p_details.png',
    },
    { 
        id: 'infra-management',
        title: 'Infra Management', 
        description: 'Monotonectally disseminate principle-centered process.',
        longDescription: [
            'Interactively unleash resource maximizing convergence after emerging functionalities. Monotonectally fashion future-proof alignments before go forward total linkage.',
            'Appropriately revolutionize turnkey services with client-focused potentialities. Phosfluorescently architect fully tested initiatives and progressive catalysts for change.'
        ],
        approach: 'Completely disseminate long-term high-impact sources with highly efficient convergence. Credibly whiteboard B2B leadership skills after multifunctional products.',
        keyBenefits: ['High Availability', 'Performance Monitoring', 'Disaster Recovery'],
        icon: icons[5],
        image: '/assets/images/bdrc-bg.jpg',
    },
];
