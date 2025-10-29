import React from 'react';

export interface Comment {
  author: string;
  date: string;
  text: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  img: string;
  date: string;
  author: string;
  title: string;
  category: string;
  excerpt: string;
  fullContent: { type: 'p' | 'quote'; content: string }[];
  tags: string[];
  comments: Comment[];
}

export const blogData: BlogPost[] = [
    {
        id: 'technology-support-non-profit',
        img: '/assets/images/blog14.png',
        date: '10 September 2025',
        author: 'Admin',
        title: 'Technology support allows erie non-profit to serve',
        category: 'Technology',
        excerpt: 'Different companies have been using the OpenAI API to power their products example, Duolingo uses OpenAI\'s GPT-3 to provide French grammar corrections on...',
        fullContent: [
            { type: 'p', content: 'Vast numbers of employees now work remotely, and it\'s too late to develop a set of remote-work policies if you didn\'t already have one. But there are ways to make the remote-work experience productive and engaging for employees' },
            { type: 'p', content: 'Use both direct conversations and indirect observations to get visibility into employees\' challenges and concerns. Use every opportunity to make clear to employees that you support and care them. To facilitate regular conversations between managers and employees, provide managers with guidance on how best to broach sensitive subjects arising from the COVID-19 pandemic, including alternative work models, job security and prospects, impact on staffing' },
            { type: 'quote', content: 'We appreciate the consistent high-quality service provided by their team goes above and beyond concerns promptly' },
            { type: 'p', content: 'The third Monday of January is supposed to be the most depressing day of the year. Whether you believe that or not, the long nights, cold weather, and trying to keep to new year resolutions are all probably getting to you a little by now. To make matters worse many will still be recovering from their Christmas spending. So how can you make today' },
            { type: 'p', content: 'You can make some quick cash by switching your bank account to one with a bonus. Some banks are giving away £150 for moving your custom, while others offer cashback or high interest. Of course, it\'s worth checking you won\'t lose out in other.'}
        ],
        tags: ['IT Solution', 'Technology', 'Cyber Security', 'Software'],
        comments: [
            { author: 'Ricky Smith', date: 'September 11, 2025', text: 'Legal expertise and is client focused we enhance entrepreneurial environment flexible supportive, allowing our lawyers introduced', avatar: '/assets/images/team01.jpg' },
            { author: 'Brooklyn Simmons', date: 'September 12, 2025', text: 'Legal expertise and is client focused we enhance entrepreneurial environment flexible supportive, allowing our lawyers', avatar: '/assets/images/team02.jpg' }
        ]
    },
    {
        id: 'distinctive-an-engage-users',
        img: '/assets/images/blog2.png',
        date: '12 September 2025',
        author: 'Admin',
        title: 'Distinctive an Engage Users For Continous Best.',
        category: 'Development',
        excerpt: 'Interactively unleash resource maximizing convergence after emerging functionalities. Monotonectally fashion future-proof alignments before go forward total linkage...',
        fullContent: [
             { type: 'p', content: 'Interactively unleash resource maximizing convergence after emerging functionalities. Monotonectally fashion future-proof alignments before go forward total linkage. Appropriately revolutionize turnkey services with client-focused potentialities. Phosfluorescently architect fully tested initiatives and progressive catalysts for change.' },
            { type: 'quote', content: 'Compellingly syndicate team building technologies rather than B2C solutions. Credibly grow premier ideas rather than ubiquitous leadership.' },
            { type: 'p', content: 'Assertively syndicate impactful communities with world-class methods of empowerment. Distinctively seize impactful applications for cross-unit web services. Interactively unleash resource maximizing convergence after emerging functionalities. Monotonectally fashion future-proof alignments before go forward total linkage.' }
        ],
        tags: ['Web', 'Design', 'Development'],
        comments: []
    },
    {
        id: 'leverage-existing-platforms',
        img: '/assets/images/thumb1.png',
        date: '15 September 2025',
        author: 'Admin',
        title: 'Leverage existing platforms with enterprise.',
        category: 'Cloud',
        excerpt: 'Completely disseminate long-term high-impact sources with highly efficient convergence. Credibly whiteboard B2B leadership skills after multifunctional products...',
        fullContent: [
            { type: 'p', content: 'Completely disseminate long-term high-impact sources with highly efficient convergence. Credibly whiteboard B2B leadership skills after multifunctional products. Enthusiastically administrate ubiquitous scenarios and interoperable results. Assertively syndicate impactful communities with world-class methods of empowerment. Distinctively seize impactful applications for cross-unit web services.' }
        ],
        tags: ['Cloud', 'SaaS', 'Infrastructure'],
        comments: [
            { author: 'Jane Doe', date: 'September 16, 2025', text: 'Great article on cloud platforms! Very insightful.', avatar: '/assets/images/team03.jpg' }
        ]
    },
    {
        id: 'holding-company-bitech',
        img: '/assets/images/b_details01.jpg',
        date: '18 September 2025',
        author: 'Admin',
        title: 'A Holding Company Called Bitech Announced.',
        category: 'Business',
        excerpt: 'Enthusiastically administrate ubiquitous scenarios and interoperable results. Assertively syndicate impactful communities with world-class methods of empowerment...',
        fullContent: [
             { type: 'p', content: 'Enthusiastically administrate ubiquitous scenarios and interoperable results. Assertively syndicate impactful communities with world-class methods of empowerment. Distinctively seize impactful applications for cross-unit web services. Interactively unleash resource maximizing convergence after emerging functionalities.' }
        ],
        tags: ['Business', 'Strategy', 'IT'],
        comments: []
    },
    {
        id: 'cyber-security-trends-2025',
        img: '/assets/images/b_details02.jpg',
        date: '20 September 2025',
        author: 'Jane Smith',
        title: 'Top 5 Cyber Security Trends to Watch in Late 2025',
        category: 'Cyber Security',
        excerpt: 'As technology evolves, so do the threats. Here are the top 5 cyber security trends that every business should be aware of to protect their valuable assets...',
        fullContent: [
            { type: 'p', content: 'The landscape of cyber security is in a constant state of flux. With the rise of AI-powered attacks and increasingly sophisticated phishing schemes, staying ahead of the curve is paramount. This article explores five critical trends that are shaping the future of digital defense.'},
            { type: 'quote', content: 'Proactive defense is no longer a luxury; it\'s a necessity for survival in the digital age.'},
            { type: 'p', content: 'From zero-trust architecture to the integration of machine learning in threat detection, we delve into the strategies and technologies that can fortify your organization against emerging threats. We also discuss the growing importance of employee training in creating a security-conscious culture.'}
        ],
        tags: ['Cyber Security', 'Data Protection', 'Trends'],
        comments: [
            { author: 'Alex Johnson', date: 'September 21, 2025', text: 'This is a great overview. The section on zero-trust was particularly helpful for my team.', avatar: '/assets/images/team04.jpg' }
        ]
    },
     {
        id: 'agile-project-management',
        img: '/assets/images/b_details03.jpg',
        date: '02 September 2025',
        author: 'John Doe',
        title: 'Mastering Agile for Efficient Project Management',
        category: 'IT Management',
        excerpt: 'Agile methodologies have revolutionized how teams approach software development and project management. Learn the core principles of Agile and how to implement them...',
        fullContent: [
            { type: 'p', content: 'In today\'s fast-paced business environment, traditional project management methods often fall short. Agile offers a flexible, iterative approach that allows teams to adapt to changing requirements and deliver value faster. We will explore the fundamentals of frameworks like Scrum and Kanban and provide practical tips for a successful Agile transformation.'},
            { type: 'p', content: 'Key benefits include increased productivity, better product quality, and higher customer satisfaction. However, adopting Agile requires a significant cultural shift. It emphasizes collaboration, communication, and a commitment to continuous improvement.'}
        ],
        tags: ['Agile', 'Project Management', 'Scrum', 'Kanban'],
        comments: [
            { author: 'Samantha Lee', date: 'September 03, 2025', text: 'Our team is just starting with Agile, and this was the perfect introduction. Thank you!', avatar: '/assets/images/team05.jpg' },
            { author: 'David Chen', date: 'September 04, 2025', text: 'Well-written! I\'d add that having a good Scrum Master is crucial for success.', avatar: '/assets/images/testi_avatar.png' }
        ]
    },
    {
        id: 'the-power-of-ui-ux',
        img: '/assets/images/b_details04.jpg',
        date: '05 September 2025',
        author: 'Emily Carter',
        title: 'Why Great UI/UX is More Than Just a Pretty Face',
        category: 'UI/UX Design',
        excerpt: 'A visually appealing design is important, but true success lies in creating a user experience that is intuitive, efficient, and enjoyable. Discover the business impact of investing in quality UI/UX...',
        fullContent: [
            { type: 'p', content: 'Many people mistake user interface (UI) and user experience (UX) as being purely about aesthetics. While a beautiful design is part of it, the core of UI/UX is about understanding the user\'s journey and making it as seamless as possible. A great UX can lead to higher conversion rates, increased customer loyalty, and a stronger brand reputation.'},
            { type: 'quote', content: 'Design is not just what it looks like and feels like. Design is how it works.'},
            { type: 'p', content: 'This post will walk you through the key principles of user-centric design, the importance of user research and testing, and how to measure the ROI of your UI/UX efforts. We\'ll show you that investing in design is investing in your business\'s future.'}
        ],
        tags: ['UI', 'UX', 'Design Thinking', 'User Experience'],
        comments: [
            { author: 'Michael Brown', date: 'September 06, 2025', text: 'Finally, an article that explains the business value of UX so clearly!', avatar: '/assets/images/testi_avatar_02.png' }
        ]
    }
];
