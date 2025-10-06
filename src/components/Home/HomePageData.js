import Reviewer1 from '../../assets/images/testimonial-images/review-1.svg';
import Reviewer2 from '../../assets/images/testimonial-images/review-2.svg';
import Reviewer3 from '../../assets/images/testimonial-images/review-3.svg';
import Reviewer4 from '../../assets/images/testimonial-images/review-4.svg';
import Reviewer5 from '../../assets/images/testimonial-images/review-5.svg';
import Reviewer6 from '../../assets/images/testimonial-images/review-6.svg';


import SafetyIcon from '../../assets/images/safety-first.svg';
import Dentistry from '../../assets/images/service-dentistry.svg';
import Judgement from '../../assets/images/no-judgment.svg';
import InsuranceIcon from '../../assets/images/insurance-icon.svg';


import PriceCheck from '../../assets/images/price-check.svg';
import PriceCross from '../../assets/images/price-cross.svg';

import Gallery1 from '../../assets/images/gallery-images/gallery-1.png';
import Gallery2 from '../../assets/images/gallery-images/gallery-2.png';
import Gallery3 from '../../assets/images/gallery-images/gallery-3.png';
import Gallery4 from '../../assets/images/gallery-images/gallery-4.png';



import Insta from '../../assets/images/insta.svg';
import Face from '../../assets/images/face-book.svg';
import Twitter from '../../assets/images/twitter.svg';
import Linked from '../../assets/images/linked-in.svg';


// Services icons
import DentalExams from '../../assets/images/services-icons/dental-exams.svg';
import OralCancer from '../../assets/images/services-icons/oral-cancer-screening.svg';
import DentalXray from '../../assets/images/services-icons/digital-xray.svg';
import Preventive from '../../assets/images/services-icons/preventative.svg';
import Restoratives from '../../assets/images/services-icons/restorative.svg';
import Endodontics from '../../assets/images/services-icons/endodontics.svg';
import Cosmetics from '../../assets/images/services-icons/cosmetics.svg';
import Surgery from '../../assets/images/services-icons/surgery.svg';
import Implants from '../../assets/images/services-icons/implants.svg';
import Dentures from '../../assets/images/services-icons/dentures.svg';
import Appliances from '../../assets/images/services-icons/appliances.svg';
import SoleaLaser from '../../assets/images/services-icons/solea-laser.svg';
import Orthodontics from '../../assets/images/services-icons/orthodontics.svg';
import Botox from '../../assets/images/services-icons/botox-treatments.svg';
import Fillers from '../../assets/images/services-icons/fillers.svg'
import TeethWhitening from '../../assets/images/services-icons/teeth-whitening.svg';

const ServicesData = [
    {
        id: 1,
        title: 'Dental Exams',
        description: 'If your teeth are stained or discolored, professional teeth whitening is a quick and effective way to restore a brighter smile. ',
        sub: true,
        subServices: [
            {
                singleSub: 'Adults',
            },
            {
                singleSub: 'Kids',
            },
        ],
        img: DentalExams
    },
    {
        id: 2,
        title: 'Oral Cancer Screenings',
        description: 'Regular oral cancer screenings help detect early signs of cancer or precancerous conditions, ensuring timely treatment and better outcomes for your oral health.',
        sub: false,
        img: OralCancer
    },
    {
        id: 3,
        title: 'Digital intraoral X-Rays',
        description: 'Digital intraoral X-rays provide clear, detailed images of your teeth and gums, allowing for accurate diagnosis and effective treatment with minimal radiation exposure.',
        sub: false,
        img: DentalXray
    },
    {
        id: 4,
        title: 'Digital Panoramic X-Rays',
        description: 'Digital panoramic X-rays capture a complete view of your entire mouth, including teeth, jaws, and surrounding structures, helping detect issues that may not be visible during a regular exam.',
        sub: false,
        img: DentalXray
    },
    {
        id: 5,
        title: 'Digital Cephalometric X-Rays',
        description: 'Digital cephalometric X-rays provide precise images of the head and jaw alignment, helping in orthodontic planning and assessing facial growth and structure.',
        sub: false,
        img: DentalXray
    },
    {
        id: 6,
        title: 'Conebean CBCT X-Rays',
        description: 'Cone Beam CBCT X-rays offer 3D imaging of your teeth, jaw, and facial structures, providing detailed insights for accurate diagnosis, implant planning, and complex dental treatments.',
        sub: false,
        img: DentalXray
    },
    {
        id: 7,
        title: 'Preventative',
        description: 'Preventative dental care focuses on maintaining healthy teeth and gums through regular checkups, cleanings, and early detection to prevent cavities and gum disease.',
        sub: true,
        subServices: [
            {
                singleSub: 'Teeth Cleanings',
            },
            {
                singleSub: 'Deep Cleaning(Scaling and root Planing)',
            },
            {
                singleSub: 'Preventative Maintenance Cleaning (Periodontal)',
            },
            {
                singleSub: 'Antibiotic/Local  chemotherapeutic Therapy',
            },
            {
                singleSub: 'Sealants',
            },
            {
                singleSub: 'Fluoride Treatments',
            },
        ],
        img: Preventive
    },
    {
        id: 8,
        title: 'Restorative',
        description: 'Restorative dental care focuses on repairing and restoring damaged or missing teeth, improving both the function and appearance of your smile.',
        sub: true,
        subServices: [
            {
                singleSub: 'Cosmetic composite Fillings',
            },
            {
                singleSub: 'Porcelain  Fillings',
            },
            {
                singleSub: 'Porcelain Veneers',
            },
            {
                singleSub: 'Bonding',
            },
            {
                singleSub: 'Same day Crowns',
            },
            {
                singleSub: 'Bridges',
            },
            {
                singleSub: 'Dental Implant Crowns',
            },
        ],
        img: Restoratives
    },
    {
        id: 9,
        title: 'Endodontics',
        description: 'Endodontics involves treating issues inside the tooth, such as infected or damaged pulp, through procedures like root canals to save natural teeth and relieve pain.',
        sub: true,
        subServices: [
            {
                singleSub: 'Root Canals',
            },
        ],
        img: Endodontics
    },
    {
        id: 10,
        title: 'Cosmetics',
        description: 'Cosmetic dentistry enhances the appearance of your teeth and smile through treatments like whitening, veneers, and bonding for a more confident, radiant look.',
        sub: true,
        subServices: [
            {
                singleSub: 'Personalized Smile make overs',
            },
            {
                singleSub: 'Facial Driven Cosmetics',
            },
        ],
        img: Cosmetics
    },
    {
        id: 11,
        title: 'Surgery',
        description: 'Oral surgery addresses complex dental issues through procedures like extractions, implants, and corrective treatments to restore function, health, and comfort.',
        sub: true,
        subServices: [
            {
                singleSub: 'Wisdom Teeth Removal under sedation',
            },
            {
                singleSub: 'Surgical Removal of Teeth',
            },
            {
                singleSub: 'Bone Grafting',
            },
            {
                singleSub: 'Sinus Lift Surgery',
            },
            {
                singleSub: 'Crown Lengthening Surgery',
            },
            {
                singleSub: 'Bone / Osseous surgery',
            },
            {
                singleSub: 'Gum Surgery',
            },
        ],
        img: Surgery
    },
    {
        id: 12,
        title: 'Implants',
        description: 'Dental implants are permanent tooth replacements that restore function and appearance, providing a strong foundation for natural-looking teeth.',
        sub: true,
        subServices: [
            {
                singleSub: 'Single implant',
            },
            {
                singleSub: 'Multiple Implants',
            },
            {
                singleSub: 'All on 4 or  X  Implants',
            },
        ],
        img: Implants
    },
    {
        id: 13,
        title: 'Dentures',
        description: 'Dentures are removable dental appliances that replace missing teeth, restoring your ability to eat, speak, and smile confidently.',
        sub: true,
        subServices: [
            {
                singleSub: 'complete dentures',
            },
            {
                singleSub: 'Partial dentures',
            },
            {
                singleSub: 'Implant Retained Removable dentures',
            },
            {
                singleSub: 'Implant Retained Fixed dentures',
            },
            {
                singleSub: 'Denture repairs',
            },
        ],
        img: Dentures
    },
    {
        id: 14,
        title: 'Appliances',
        description: 'Dental appliances are custom-made devices, such as mouthguards, retainers, or night guards, designed to protect, align, or support your teeth and jaw.',
        sub: true,
        subServices: [
            {
                singleSub: 'TMD  appliances',
            },
            {
                singleSub: 'Sleep Apnea Oral Appliance',
            },
            {
                singleSub: 'Bruxism Appliance',
            },
            {
                singleSub: 'Sport Guards',
            },
            {
                singleSub: 'Retainer',
            },
            {
                singleSub: 'Homeo block',
            },
        ],
        img: Appliances
    },
    {
        id: 15,
        title: 'SOLEA laser',
        description: 'The SOLEA laser provides precise, minimally invasive dental treatments with reduced pain, bleeding, and recovery time, enhancing patient comfort and care.',
        sub: true,
        subServices: [
            {
                singleSub: 'Anesthesia free fillings ',
            },
            {
                singleSub: 'Frenectomy ',
            },
            {
                singleSub: 'Depigmentation of the Gum Tissues',
            },
            {
                singleSub: 'Gummy smile',
            },
            {
                singleSub: 'Tightening of palate for snoring',
            },
        ],
        img: SoleaLaser
    },
    {
        id: 16,
        title: 'Orthodontics',
        description: 'Orthodontics focuses on correcting misaligned teeth and jaws using braces, aligners, and other devices to improve bite, function, and smile aesthetics.',
        sub: true,
        subServices: [
            {
                singleSub: 'Traditional Braces',
            },
            {
                singleSub: '6 Moth Smiles',
            },
            {
                singleSub: 'Clear aligners/Invisalign',
            },
        ],
        img: Orthodontics
    },
    {
        id: 17,
        title: 'Botox treatments',
        description: 'Botox treatments help reduce facial wrinkles and fine lines, providing a smoother, more youthful appearance and complementing overall cosmetic dental care.',
        sub: true,
        subServices: [
            {
                singleSub: 'TMD problems',
            },
            {
                singleSub: 'Migraines/ headaches',
            },
            {
                singleSub: 'Gummy smile',
            },
        ],
        img: Botox
    },
    {
        id: 18,
        title: 'Fillers',
        description: 'Dermal fillers restore volume and enhance facial contours, smoothing wrinkles and improving the overall appearance of your smile and facial aesthetics.',
        sub: true,
        subServices: [
            {
                singleSub: 'Cosmetic smile',
            },
        ],
        img: Fillers
    },
    {
        id: 19,
        title: 'Teeth Whitening',
        description: 'Teeth whitening is a safe and effective treatment that brightens discolored or stained teeth, giving you a more radiant and confident smile.',
        sub: true,
        subServices: [
            {
                singleSub: 'In Office Zoom laser whitening',
            },
            {
                singleSub: 'At home Whitening Kits',
            },
        ],
        img: TeethWhitening
    },
]



const TestimonialData = [
    {
        stars: ['' , '' , '' , '' , ''],
        content: "Best dental experience I’ve ever had! The staff was caring, professional, and made me feel completely at ease. I left the clinic feeling confident about my dental health.",
        img: Reviewer1,
        name: "David K",
        treatment: 'Veeners'
    },
    {
        stars: ['' , '' , '' , '' ],
        content: "Usually dread dentist visits, but here it was different. Quick, painless, and the doctor explained everything so clearly. I actually feel comfortable coming back for regular checkups",
        img: Reviewer2,
        name: "Sarah J",
        treatment: 'Crowns'
    },
    {
        stars: ['' , '' , '' , '' , ''],
        content: "The clinic is spotless, modern, and welcoming. I finally found a dentist I actually look forward to visiting. The entire atmosphere made the experience stress-free.",
        img: Reviewer3,
        name: "Miles H",
        treatment: 'Veeners'
    },
    {
        stars: ['' , '' , '' , '' ],
        content: "Scheduling was simple, and I was seen right on time. My teeth feel amazing after the cleaning! The hygienist was gentle but thorough, and I appreciated the attention to detail.",
        img: Reviewer4,
        name: "Jason More",
        treatment: 'Crowns'
    },
    {
        stars: ['' , '' , '' , '' , ''],
        content: "From start to finish, the entire team was fantastic. I left with a healthier smile and total peace of mind. They truly go above and beyond for their patients.",
        img: Reviewer5,
        name: "Jessica T",
        treatment: 'Crowns'
    },
]


const RedefinedDent = [
    {
        title: 'Safety first',
        description: 'We follow the highest standards of sterilization and care, keeping your health and safety our top priority.',
        img: SafetyIcon
    },
    {
        title: 'Full-Service Dentistry',
        description: 'From checkups to advanced treatments, we provide complete care for the whole family.',
        img: Dentistry
    },
    {
        title: 'No Judgment Ever',
        description: 'Whether it’s been months or years, we welcome you with compassion—never judgment.',
        img: Judgement
    },
    {
        title: 'Insurance accepted',
        description: 'We work with most major insurance plans to make dental care simple and affordable.',
        img: InsuranceIcon
    },
]

const FinancingList = [
    { 
        title: 'Cash, Check, or Credit Card', 
        content: 'We accept most major dental insurance plans to make your treatment more affordable. Our team will help verify coverage and maximize your benefits. ' 
    },
    { 
        title: 'CareCredit®', 
        content: 'CareCredit® allows you to pay for dental treatments with flexible monthly payment plans. It’s a convenient option for procedures not fully covered by insurance.' 
    },
    { 
        title: 'GreenSky®', 
        content: 'With GreenSky®, you can finance your dental care through simple, low-interest payment plans. It’s designed to fit your budget and make care more accessible.' 
    },
    { 
        title: 'Proceed Finance', 
        content: 'Proceed Finance offers longer-term financing with affordable payments for larger treatment plans. It helps make advanced dental care achievable without financial stress.'
    }
];


const Faqs = [
    { 
        title: 'How often should I visit the dentist?', 
        content: 'Most patients should visit the dentist every six months for a routine checkup and cleaning. However, if you have specific dental concerns or ongoing treatment, your dentist may recommend more frequent visits.' 
    },
    { 
        title: 'Do you accept dental insurance?', 
        content: 'Yes, we work with most major dental insurance providers. Our team can help verify your coverage and explain your benefits before your appointment' 
    },
    { 
        title: 'What should I do in a dental emergency?', 
        content: 'If you experience a dental emergency such as a severe toothache, broken tooth, or injury, call our office immediately. We prioritize emergency appointments to provide quick relief and treatment.' 
    },
    { 
        title: 'Do you treat children?', 
        content: 'Absolutely! We offer gentle and friendly dental care for children of all ages, making sure their visits are positive and stress-free.'
    },
    { 
        title: 'Are teeth whitening treatments safe?', 
        content: 'Yes, professional teeth whitening is safe and effective when performed by a dental professional. We use clinically approved whitening methods that protect your teeth and gums while giving you a brighter smile.'
    }
]


const PricingList = [
    {
        tile: 'Healthy Gums Plan',
        price: '$700',
        tageLine: 'Protect your gums and keep them healthy for life.',
        listOfContent: [
            {
                img: PriceCheck,
                text: '4 Gum Care Visits ($700 Value)'
            },
            {
                img: PriceCheck,
                text: 'Laser gum therapy – $400 Value'
            },
            {
                img: PriceCheck,
                text: '20% Off Dental Treatments'
            },
            {
                img: PriceCheck,
                text: '1 Emergency Visit per Year – Free'
            },
            {
                img: PriceCheck,
                text: 'Member Whitening Pricing'
            },
            {
                img: PriceCheck,
                text: 'Priority Scheduling for Members'
            },
            {
                img: PriceCross,
                text: 'Discount does not apply to specialty services such as veneers, bonding, orthodontics, implants.'
            },

        ]
    },
    {
        tile: 'Bright Smile Plan',
        price: '$350',
        tageLine: 'Over $850 in value for only $350 per year!',
        listOfContent: [
            {
                img: PriceCheck,
                text: '2 Cleaning + exams & X-rays ($350 Value)'
            },
            {
                img: PriceCheck,
                text: '20% Off Fillings, Crowns, Root Canals'
            },
            {
                img: PriceCheck,
                text: '1 Emergency Visit per Year – Free'
            },
            {
                img: PriceCheck,
                text: 'Priority Scheduling'
            },
            {
                img: PriceCheck,
                text: 'Fluoride Treatments'
            },
            {
                img: PriceCheck,
                text: 'Member Whitening Pricing'
            },
            {
                img: PriceCross,
                text: 'Discount does not apply to specialty services such as veneers, bonding, orthodontics, implants.'
            },

        ]
    },
    {
        tile: 'Healthy Gums Plan',
        price: '$700',
        tageLine: 'Protect your gums and keep them healthy for life.',
        listOfContent: [
            {
                img: PriceCheck,
                text: '4 Gum Care Visits ($700 Value)'
            },
            {
                img: PriceCheck,
                text: 'Laser gum therapy – $400 Value'
            },
            {
                img: PriceCheck,
                text: '20% Off Dental Treatments'
            },
            {
                img: PriceCheck,
                text: '1 Emergency Visit per Year – Free'
            },
            {
                img: PriceCheck,
                text: 'Member Whitening Pricing'
            },
            {
                img: PriceCheck,
                text: 'Priority Scheduling for Members'
            },
            {
                img: PriceCross,
                text: 'Discount does not apply to specialty services such as veneers, bonding, orthodontics, implants.'
            },

        ]
    },
    {
        tile: 'Bright Smile Plan',
        price: '$350',
        tageLine: 'Over $850 in value for only $350 per year!',
        listOfContent: [
            {
                img: PriceCheck,
                text: '2 Cleaning + exams & X-rays ($350 Value)'
            },
            {
                img: PriceCheck,
                text: '20% Off Fillings, Crowns, Root Canals'
            },
            {
                img: PriceCheck,
                text: '1 Emergency Visit per Year – Free'
            },
            {
                img: PriceCheck,
                text: 'Priority Scheduling'
            },
            {
                img: PriceCheck,
                text: 'Fluoride Treatments'
            },
            {
                img: PriceCheck,
                text: 'Member Whitening Pricing'
            },
            {
                img: PriceCross,
                text: 'Discount does not apply to specialty services such as veneers, bonding, orthodontics, implants.'
            },

        ]
    },
    {
        tile: 'Healthy Gums Plan',
        price: '$700',
        tageLine: 'Protect your gums and keep them healthy for life.',
        listOfContent: [
            {
                img: PriceCheck,
                text: '4 Gum Care Visits ($700 Value)'
            },
            {
                img: PriceCheck,
                text: 'Laser gum therapy – $400 Value'
            },
            {
                img: PriceCheck,
                text: '20% Off Dental Treatments'
            },
            {
                img: PriceCheck,
                text: '1 Emergency Visit per Year – Free'
            },
            {
                img: PriceCheck,
                text: 'Member Whitening Pricing'
            },
            {
                img: PriceCheck,
                text: 'Priority Scheduling for Members'
            },
            {
                img: PriceCross,
                text: 'Discount does not apply to specialty services such as veneers, bonding, orthodontics, implants.'
            },

        ]
    },
    {
        tile: 'Bright Smile Plan',
        price: '$350',
        tageLine: 'Over $850 in value for only $350 per year!',
        listOfContent: [
            {
                img: PriceCheck,
                text: '2 Cleaning + exams & X-rays ($350 Value)'
            },
            {
                img: PriceCheck,
                text: '20% Off Fillings, Crowns, Root Canals'
            },
            {
                img: PriceCheck,
                text: '1 Emergency Visit per Year – Free'
            },
            {
                img: PriceCheck,
                text: 'Priority Scheduling'
            },
            {
                img: PriceCheck,
                text: 'Fluoride Treatments'
            },
            {
                img: PriceCheck,
                text: 'Member Whitening Pricing'
            },
            {
                img: PriceCross,
                text: 'Discount does not apply to specialty services such as veneers, bonding, orthodontics, implants.'
            },

        ]
    },
    {
        tile: 'Healthy Gums Plan',
        price: '$700',
        tageLine: 'Protect your gums and keep them healthy for life.',
        listOfContent: [
            {
                img: PriceCheck,
                text: '4 Gum Care Visits ($700 Value)'
            },
            {
                img: PriceCheck,
                text: 'Laser gum therapy – $400 Value'
            },
            {
                img: PriceCheck,
                text: '20% Off Dental Treatments'
            },
            {
                img: PriceCheck,
                text: '1 Emergency Visit per Year – Free'
            },
            {
                img: PriceCheck,
                text: 'Member Whitening Pricing'
            },
            {
                img: PriceCheck,
                text: 'Priority Scheduling for Members'
            },
            {
                img: PriceCross,
                text: 'Discount does not apply to specialty services such as veneers, bonding, orthodontics, implants.'
            },

        ]
    },
    {
        tile: 'Bright Smile Plan',
        price: '$350',
        tageLine: 'Over $850 in value for only $350 per year!',
        listOfContent: [
            {
                img: PriceCheck,
                text: '2 Cleaning + exams & X-rays ($350 Value)'
            },
            {
                img: PriceCheck,
                text: '20% Off Fillings, Crowns, Root Canals'
            },
            {
                img: PriceCheck,
                text: '1 Emergency Visit per Year – Free'
            },
            {
                img: PriceCheck,
                text: 'Priority Scheduling'
            },
            {
                img: PriceCheck,
                text: 'Fluoride Treatments'
            },
            {
                img: PriceCheck,
                text: 'Member Whitening Pricing'
            },
            {
                img: PriceCross,
                text: 'Discount does not apply to specialty services such as veneers, bonding, orthodontics, implants.'
            },

        ]
    },
]



const GalleryList = [
    {
        img: Gallery1,
    },
    {
        img: Gallery2,
    },
    {
        img: Gallery3,
    },
    {
        img: Gallery4,
    },
    {
        img: Gallery1,
    },
    {
        img: Gallery2,
    },
    {
        img: Gallery3,
    },
    {
        img: Gallery4,
    },
]


const SocialMedia = [
    {
        name: 'Instagram',
        img: Insta,
        link: ''
    },
    {
        name: 'FaceBook',
        img: Face,
        link: ''
    },
    {
        name: 'Twitter',
        img: Twitter,
        link: ''
    },
    {
        name: 'Linked In',
        img: Linked,
        link: ''
    },
]

const homePageData = {
    ServicesData,
    TestimonialData,
    RedefinedDent,
    FinancingList,
    Faqs,
    PricingList,
    GalleryList,
    SocialMedia
}

export default homePageData