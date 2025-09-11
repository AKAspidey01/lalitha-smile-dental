import RoutineDental from '../../assets/images/services-icons/dental-checkup.svg';
import TeethCleaning from '../../assets/images/services-icons/teeth-cleaning.svg';
import DentalXRay from '../../assets/images/services-icons/dental-x-ray.svg';
import Flouride from '../../assets/images/services-icons/flouride-treatment.svg';
import SealantsTeeth from '../../assets/images/services-icons/sealants-cavity.svg';
import ToothFillings from '../../assets/images/services-icons/tooth-fillings.svg';
import DentalImplants from '../../assets/images/services-icons/dental-implants.svg';
import DentalCrowns from '../../assets/images/services-icons/dental-crowns.svg';

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
import Linked from '../../assets/images/linked-in.svg'


const ServicesData = [
    {
        title: 'Routine Dental Checkups',
        description: 'Regular visits help detect issues early, maintain oral health, and keep your smile strong for years to come.',
        img: RoutineDental
    },
    {
        title: 'Professional Teeth Cleaning',
        description: 'Thorough cleanings remove plaque, tartar, and stains, leaving your teeth fresh, polished, and healthier.',
        img: TeethCleaning
    },
    {
        title: 'Digital X-Rays & Imaging',
        description: 'Safe, precise imaging provides a clear view of your teeth and gums for accurate diagnosis and treatment planning.',
        img: DentalXRay
    },
    {
        title: 'Fluoride Treatment',
        description: 'A quick and effective way to strengthen enamel, prevent decay, and protect teeth against cavities.',
        img: Flouride
    },
    {
        title: 'Sealants for Cavity Prevention',
        description: 'Protective coatings applied to back teeth help block bacteria and food particles, reducing cavity risk.',
        img: SealantsTeeth
    },
    {
        title: 'Tooth-Colored Fillings',
        description: 'Natural-looking restorations blend seamlessly with your smile while repairing damage from cavities.',
        img: ToothFillings
    },
    {
        title: 'Dental Crowns & Bridges',
        description: 'Custom crowns and bridges restore function, beauty, and confidence by replacing or protecting damaged teeth.',
        img: DentalCrowns
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