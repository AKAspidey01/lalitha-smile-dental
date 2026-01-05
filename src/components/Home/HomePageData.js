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
import TwitterBlack from '../../assets/images/twitter-black.svg';
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


// Services Images
import DentalExamsImg from '../../assets/images/services-images/dental-exams.png';
import OralCancerImg from '../../assets/images/services-images/oral-cancer.png';
import IntraOralImg from '../../assets/images/services-images/digital-intraoral.png';
import PanoramicImg from '../../assets/images/services-images/digital-panoramic.png';
import CephalometricImmg from '../../assets/images/services-images/digital-cephalometric.png';
import ConeBeamImg from '../../assets/images/services-images/cone-beam.png';
import PreventativeImg from '../../assets/images/services-images/precentative.png';
import RestorativeImg from '../../assets/images/services-images/restoratives.png';
import EndodonticsImg from '../../assets/images/services-images/endodontics.png';
import CosmeticsImg from '../../assets/images/services-images/cosmetics.png';
import SurgeryImg from '../../assets/images/services-images/surgery.png';
import ImplantsImg from '../../assets/images/services-images/implants.png';
import DenturesImg from '../../assets/images/services-images/dentures.png';
import AppliancesImg from '../../assets/images/services-images/appliances.png';
import SoleaLaserImg from '../../assets/images/services-images/solea-laser.png';
import OrthodonticsImg from '../../assets/images/services-images/orthodontics.png';
import BotoxImg from '../../assets/images/services-images/botox.png';
import FillersImg from '../../assets/images/services-images/fillers.png';
import TeethWhiteImg from '../../assets/images/services-images/teeth-whitening.png';


// Sub Service Images
import DentalExamAdult from '../../assets/images/services-images/subservices/dental-exams-adults.png';
import DentalExamKid from '../../assets/images/services-images/subservices/dental-exams-kids.png';







const ServicesData = [
    {
        id: 1,
        title: 'Dental Exams',
        description: 'Regular dental exams help detect early signs of oral health problems and maintain a bright, healthy smile.',
        sub: true,
        subServices: [
            { singleSub: 'Adults' },
            { singleSub: 'Kids' }
        ],
        img: DentalExams,
        singleServiceData: {
            serviceImg: DentalExamsImg,
            para: "Routine dental exams are vital for maintaining good oral health. During these visits, your dentist carefully checks for cavities, gum disease, oral cancer, and other potential problems. Regular checkups ensure that any issue is caught early, preventing more serious complications and maintaining a confident, healthy smile.",
            whyServicePoints: [
                { point: "Identify cavities, gum disease, and other oral health issues early" },
                { point: "Ensure long-term dental health through consistent preventive care" },
                { point: "Receive professional cleanings that remove plaque and tartar" },
                { point: "Get personalized recommendations to improve at-home oral hygiene" }
            ],
            subServicesContent: [
                {
                    subServiceImg: DentalExamAdult,
                    subserviceHead: "1. Adults",
                    subServicePara: "Adult dental exams focus on preventive and restorative care to maintain overall oral health. Your dentist checks for tooth decay, gum disease, and signs of oral cancer, and provides personalized guidance to maintain strong teeth and gums. Regular visits help prevent costly treatments and ensure long-term dental wellness."
                },
                {
                    subServiceImg: DentalExamKid,
                    subserviceHead: "2. Kids",
                    subServicePara: "Pediatric dental exams help children develop good oral hygiene habits early on. Dentists gently examine growing teeth, check alignment, and provide fluoride treatments or sealants when needed. These visits make dentistry a positive experience for kids and help protect their developing smiles."
                }
            ],
            benefitsofChoosing: [
                { points: "Early detection of dental issues before they become serious" },
                { points: "Personalized oral health plans for every stage of life" },
                { points: "Improved confidence with a healthy, bright smile" },
                { points: "Saves time and money by preventing major dental problems" },
                { points: "Comfortable and stress-free checkups for the whole family" }
            ]
        }
    },
    {
        id: 2,
        title: 'Oral Cancer Screenings',
        description: 'Regular oral cancer screenings help detect early signs of cancer or precancerous conditions, ensuring timely treatment and better outcomes for your oral health.',
        sub: false,
        img: OralCancer,
        singleServiceData: {
            serviceImg: OralCancerImg,
            para: "Oral cancer screenings are an essential preventive measure designed to identify early signs of cancer or abnormal tissue in the mouth, tongue, and throat. These quick, painless examinations help detect potential problems before they become serious, improving the chances of successful treatment and long-term oral health.",
            whyServicePoints: [
                { point: "Detect early signs of oral cancer or precancerous lesions" },
                { point: "Increase the likelihood of effective and less invasive treatment" },
                { point: "Screening is quick, comfortable, and part of routine dental exams" },
                { point: "Helps monitor your oral tissues for any unusual changes" }
            ],
            benefitsofChoosing: [
                { points: "Improved early detection and timely medical intervention" },
                { points: "Enhanced peace of mind with regular professional monitoring" },
                { points: "Supports overall health by addressing risks linked to lifestyle habits" },
                { points: "Non-invasive, painless, and efficient preventive care" }
            ]
        }
    },
    {
        id: 3,
        title: 'Digital Intraoral X-Rays',
        description: 'Digital intraoral X-rays provide clear, detailed images of your teeth and gums, allowing for accurate diagnosis and effective treatment with minimal radiation exposure.',
        sub: false,
        img: DentalXray,
        singleServiceData: {
            serviceImg: IntraOralImg,
            para: "Digital intraoral X-rays are an advanced diagnostic tool that captures high-resolution images of your teeth, gums, and jawbone. These images help dentists detect cavities, infections, bone loss, and other hidden dental problems that may not be visible during a visual examination. The process is quick, comfortable, and uses significantly less radiation than traditional X-rays.",
            whyServicePoints: [
                { point: "Provides detailed, high-quality images for accurate diagnosis" },
                { point: "Uses minimal radiation for safer imaging" },
                { point: "Helps detect cavities, infections, and bone loss early" },
                { point: "Enables precise treatment planning and monitoring" }
            ],
            benefitsofChoosing: [
                { points: "Safer and faster than traditional film-based X-rays" },
                { points: "Instant image viewing for quicker diagnosis and treatment" },
                { points: "Enhanced comfort with smaller, digital sensors" },
                { points: "Environmentally friendly with no chemical film processing" }
            ]
        }
    },
    {
        id: 4,
        title: 'Digital Panoramic X-Rays',
        description: 'Digital panoramic X-rays capture a complete view of your entire mouth, including teeth, jaws, and surrounding structures, helping detect issues that may not be visible during a regular exam.',
        sub: false,
        img: DentalXray,
        singleServiceData: {
            serviceImg: PanoramicImg,
            para: "Digital panoramic X-rays provide a comprehensive, high-resolution image of your entire mouth in a single scan. This includes your teeth, jawbones, sinuses, and surrounding structures. It helps dentists identify impacted teeth, jaw disorders, bone abnormalities, and other dental issues that might not be visible during a standard examination. The process is quick, safe, and non-invasive.",
            whyServicePoints: [
                { point: "Covers the entire mouth, including jaws and surrounding structures" },
                { point: "Helps detect impacted teeth, bone loss, and jaw joint issues" },
                { point: "Ideal for treatment planning in orthodontics and implant dentistry" },
                { point: "Quick, comfortable, and uses low radiation exposure" }
            ],
            benefitsofChoosing: [
                { points: "Comprehensive overview of oral structures in one image" },
                { points: "Improved accuracy in diagnosis and treatment planning" },
                { points: "Safe imaging technology with reduced radiation levels" },
                { points: "Non-invasive and comfortable for all age groups" }
            ]
        }
    },
    {
        id: 5,
        title: 'Digital Cephalometric X-Rays',
        description: 'Digital cephalometric X-rays provide precise images of the head and jaw alignment, helping in orthodontic planning and assessing facial growth and structure.',
        sub: false,
        img: DentalXray,
        singleServiceData: {
            serviceImg: CephalometricImmg,
            para: "Digital cephalometric X-rays are specialized radiographs that capture the side view of the head, showing the relationship between teeth, jaw, and facial structure. They are essential for orthodontic treatment planning, helping dentists and orthodontists assess bite alignment, facial symmetry, and jaw positioning. The process is fast, comfortable, and utilizes minimal radiation for safe imaging.",
            whyServicePoints: [
                { point: "Provides a detailed side-view of the head and jaw structure" },
                { point: "Crucial for orthodontic planning and assessing facial growth" },
                { point: "Helps evaluate bite alignment and skeletal relationships" },
                { point: "Quick, safe, and highly accurate digital imaging" }
            ],
            benefitsofChoosing: [
                { points: "Improves precision in orthodontic and corrective treatments" },
                { points: "Non-invasive and comfortable imaging experience" },
                { points: "Reduces radiation exposure compared to traditional methods" },
                { points: "Enables accurate tracking of facial growth and treatment progress" }
            ]
        }
    },
    {
        id: 6,
        title: 'Cone Beam CBCT X-Rays',
        description: 'Cone Beam CBCT X-rays offer 3D imaging of your teeth, jaw, and facial structures, providing detailed insights for accurate diagnosis, implant planning, and complex dental treatments.',
        sub: false,
        img: DentalXray,
        singleServiceData: {
            serviceImg: ConeBeamImg,
            para: "Cone Beam Computed Tomography (CBCT) X-rays provide highly detailed 3D images of your teeth, jawbone, and surrounding structures. This advanced technology allows dentists to view anatomical details that traditional 2D X-rays cannot capture, making it essential for implant placement, orthodontic evaluation, and complex dental surgeries. The scan is quick, precise, and involves minimal radiation exposure.",
            whyServicePoints: [
                { point: "Captures 3D images of teeth, jawbone, nerves, and sinuses" },
                { point: "Crucial for implant planning and complex dental procedures" },
                { point: "Offers higher accuracy in diagnosis and treatment assessment" },
                { point: "Quick, comfortable, and uses low-dose radiation" }
            ],
            benefitsofChoosing: [
                { points: "Provides comprehensive 3D visualization for precise treatment" },
                { points: "Improves safety and accuracy in surgical planning" },
                { points: "Minimizes risks by identifying vital structures before procedures" },
                { points: "Fast and comfortable scanning experience with minimal radiation" }
            ]
        }
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
                singleSub: 'Antibiotic/Local chemotherapeutic Therapy',
            },
            {
                singleSub: 'Sealants',
            },
            {
                singleSub: 'Fluoride Treatments',
            },
        ],
        img: Preventive,
        singleServiceData: {
            serviceImg: PreventativeImg,
            para: "Preventative dentistry is the foundation of lifelong oral health. By focusing on early detection, professional cleanings, and protective treatments, we help you avoid serious dental issues and maintain a confident, healthy smile. Our goal is simple: keep your teeth and gums strong so you can enjoy the benefits of good oral health for years to come.",
            whyServicePoints: [
                { point: "Prevents cavities, gum disease, and enamel wear before they become severe." },
                { point: "Saves time, money, and discomfort by reducing the need for major procedures." },
                { point: "Supports overall well-being—oral health is closely linked to heart and systemic health." },
                { point: "Promotes confidence with a naturally clean, bright smile." },
            ],
            subServicesContent: [
                {
                    subserviceHead: "1. Teeth Cleanings",
                    subServicePara: "Regular cleanings remove plaque and tartar buildup that brushing and flossing alone cannot eliminate. This helps prevent cavities, gum disease, and bad breath."
                },
                {
                    subserviceHead: "2. Deep Cleaning (Scaling & Root Planing)",
                    subServicePara: "For patients showing signs of gum disease, this treatment thoroughly cleans below the gumline, removing bacteria and smoothing root surfaces to promote healing."
                },
                {
                    subserviceHead: "3. Preventative Maintenance Cleaning (Periodontal)",
                    subServicePara: "A specialized cleaning designed for patients with a history of gum disease. It maintains gum health and prevents further progression."
                },
                {
                    subserviceHead: "4. Antibiotic/Local Chemotherapeutic Therapy",
                    subServicePara: "Targeted treatments that reduce harmful bacteria in the gums. These therapies work alongside cleanings to fight infection and support gum healing."
                },
                {
                    subserviceHead: "5. Sealants",
                    subServicePara: "Thin, protective coatings applied to the chewing surfaces of back teeth, especially in children and teens, to shield them from cavities."
                },
                {
                    subserviceHead: "6. Fluoride Treatments",
                    subServicePara: "Fluoride strengthens tooth enamel, making it more resistant to decay. This quick, painless treatment is beneficial for both children and adults."
                },
            ],
            benefitsofChoosing: [
                { points: "Early detection of dental issues before they worsen" },
                { points: "Long-term savings on dental expenses" },
                { points: "Fresher breath and improved oral hygiene" },
                { points: "Peace of mind with a healthier, brighter smile" },
                { points: "Reduced risk of tooth loss and gum disease" },
            ]
        }
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
                singleSub: 'Porcelain  Fillings',
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
        img: Restoratives,
        singleServiceData: {
            serviceImg: RestorativeImg,
            para: "Restorative dentistry is key to a healthy, fully functional smile. Whether you have decayed, chipped, or missing teeth, our treatments are designed to rebuild your structure and aesthetics. We focus on durable, natural-looking results so you can speak, eat, and smile with renewed confidence.",
            whyServicePoints: [
                { point: "Restores comfortable, effective chewing and speech." },
                { point: "Prevents further damage, decay, and shifting of teeth." },
                { point: "Eliminates pain and sensitivity caused by decay or damage." },
                { point: "Enhances the natural appearance and confidence of your smile." },
            ],
            subServicesContent: [
                {
                    subserviceHead: "1. Cosmetic Composite Fillings",
                    subServicePara: "Tooth-colored resin bonded directly to the tooth to repair small to medium cavities or minor damage with highly aesthetic results."
                },
                {
                    subserviceHead: "2. Porcelain Fillings (Inlays/Onlays)",
                    subServicePara: "Custom-made, durable ceramic restorations for larger decay or damage that is too big for a filling but too small for a full crown."
                },
                {
                    subserviceHead: "3. Porcelain Veneers",
                    subServicePara: "Thin, custom-made shells bonded to the front surface of teeth to correct discoloration, gaps, chips, or minor misalignment for a dramatic smile transformation."
                },
                {
                    subserviceHead: "4. Bonding",
                    subServicePara: "A quick, single-visit procedure using composite resin to repair chips, cracks, and gaps or to reshape teeth for a seamless fix."
                },
                {
                    subserviceHead: "5. Same Day Crowns",
                    subServicePara: "A custom-made ceramic cap that covers and protects a damaged, weakened, or heavily filled tooth, completed in a single dental visit."
                },
                {
                    subserviceHead: "6. Bridges",
                    subServicePara: "A fixed appliance that uses crowns on adjacent teeth to 'bridge' the gap created by one or more missing teeth."
                },
                {
                    subserviceHead: "7. Dental Implant Crowns",
                    subServicePara: "A natural-looking, permanent crown attached to a dental implant, which replaces both the root and the visible part of a missing tooth."
                },
            ],
            benefitsofChoosing: [
                { points: "Enjoy eating and speaking with full comfort and function." },
                { points: "Permanent, aesthetically pleasing solutions for damaged teeth." },
                { points: "Prevents jawbone deterioration (with implants)." },
                { points: "Significantly improved smile appearance and self-esteem." },
                { points: "Durable treatments designed for long-term oral health." },
            ]
        }
    },
    {
        id: 9,
        title: "Endodontics",
        description: "Endodontics involves treating issues inside the tooth, such as infected or damaged pulp, through procedures like root canals to save natural teeth and relieve pain.",
        sub: true,
        subServices: [
            {
                singleSub: "Root Canals"
            }
        ],
        img: Endodontics,
        singleServiceData: {
            serviceImg: EndodonticsImg,
            para: "Endodontic treatment is essential when the soft tissue inside your tooth (the pulp) becomes inflamed or infected, often due to deep decay, repeated dental procedures, cracks, or trauma. Our expert team focuses on relieving pain, eliminating infection, and saving your natural tooth, which is always the best option for maintaining oral function and aesthetics.",
            whyServicePoints: [
                { point: "Saves your natural tooth from extraction." },
                { point: "Relieves severe tooth pain caused by infection." },
                { point: "Prevents the spread of infection to other teeth and the jawbone." },
                { point: "Maintains the natural alignment and function of your bite." }
            ],
            subServicesContent: [
                {
                    subserviceHead: "Root Canals",
                    subServicePara: "A root canal is a procedure to remove the infected or damaged pulp from the inner chamber of the tooth. After the infected material is removed, the chamber is thoroughly cleaned, disinfected, filled, and sealed. This treatment effectively eliminates the infection and preserves the tooth's structure, often concluding with a crown to restore its full strength and appearance."
                }
            ],
            benefitsofChoosing: [
                { points: "Preservation of your natural tooth structure." },
                { points: "Highly effective and long-lasting solution for tooth infection." },
                { points: "Immediate relief from persistent toothache and sensitivity." },
                { points: "Improved overall oral and systemic health." },
                { points: "A more aesthetic outcome than a tooth extraction and replacement." }
            ]
        }
    },
    {
        id: 10,
        title: 'Cosmetics',
        description: 'Cosmetic dentistry enhances the appearance of your teeth and smile through treatments like whitening, veneers, and bonding for a more confident, radiant look.',
        sub: true,
        subServices: [
            {
                singleSub: 'Personalized Smile make overs'
            },
            {
                singleSub: 'Facial Driven Cosmetics'
            }
        ],
        img: Cosmetics,
        singleServiceData: {
            serviceImg: CosmeticsImg,
            para: "Cosmetic dentistry is focused on improving the aesthetics of your smile, addressing issues like discoloration, chips, gaps, and misaligned teeth. We offer a range of personalized treatments to create a harmonious and confident smile that complements your unique facial features and enhances your overall appearance.",
            whyServicePoints: [
                { point: "Corrects discoloration and stubborn stains on teeth." },
                { point: "Repairs chips, cracks, and uneven tooth shapes." },
                { point: "Closes unwanted gaps and spaces between teeth." },
                { point: "Boosts self-esteem and professional confidence." }
            ],
            subServicesContent: [
                {
                    subserviceHead: "Personalized Smile Makeovers",
                    subServicePara: "A smile makeover is a comprehensive plan involving one or more cosmetic procedures (like veneers, whitening, or bonding) to improve the overall aesthetics of your smile. We meticulously design a treatment plan based on your facial structure, gum line, lip position, and personal goals to achieve your ideal, beautiful smile."
                },
                {
                    subserviceHead: "Facial Driven Cosmetics",
                    subServicePara: "This approach focuses on creating a smile that is in perfect harmony with your entire face. We analyze your facial features, bone structure, and overall profile to ensure the size, shape, and color of your teeth and smile line naturally complement your unique appearance, resulting in the most balanced and attractive outcome."
                }
            ],
            benefitsofChoosing: [
                { points: "Achieve a brighter, more youthful-looking smile." },
                { points: "Improved confidence in social and professional settings." },
                { points: "Long-lasting results with proper care and maintenance." },
                { points: "Customized treatment plans tailored to your specific needs." },
                { points: "Correction of multiple aesthetic imperfections simultaneously." }
            ]
        }
    },
    {
        id: 11,
        title: 'Surgery',
        description: 'Oral surgery addresses complex dental issues through procedures like extractions, implants, and corrective treatments to restore function, health, and comfort.',
        sub: true,
        subServices: [
            {
                singleSub: 'Wisdom Teeth Removal under sedation'
            },
            {
                singleSub: 'Surgical Removal of Teeth'
            },
            {
                singleSub: 'Bone Grafting'
            },
            {
                singleSub: 'Sinus Lift Surgery'
            },
            {
                singleSub: 'Crown Lengthening Surgery'
            },
            {
                singleSub: 'Bone / Osseous surgery'
            },
            {
                singleSub: 'Gum Surgery'
            }
        ],
        img: Surgery,
        singleServiceData: {
            serviceImg: SurgeryImg,
            para: "Our oral surgery services handle a wide range of complex procedures, focusing on the diagnosis and surgical treatment of diseases, injuries, and defects involving the hard and soft tissues of the mouth, jaws, and face. We prioritize patient comfort and use advanced techniques, including sedation, to ensure a smooth and successful outcome.",
            whyServicePoints: [
                { point: "Addresses impacted teeth and problematic wisdom teeth." },
                { point: "Prepares the jawbone for successful dental implant placement." },
                { point: "Corrects severe gum disease and bone loss." },
                { point: "Restores optimal dental function and aesthetic appearance." }
            ],
            subServicesContent: [
                {
                    subserviceHead: "Wisdom Teeth Removal under sedation",
                    subServicePara: "Wisdom teeth often cause pain, infection, or crowding. We safely remove these teeth, even when impacted, utilizing sedation to ensure a comfortable and anxiety-free experience during the procedure."
                },
                {
                    subserviceHead: "Surgical Removal of Teeth",
                    subServicePara: "This is necessary for severely damaged, decayed, or infected teeth that cannot be restored with other treatments. Surgical removal is often needed for teeth below the gum line or those with complex root structures."
                },
                {
                    subserviceHead: "Bone Grafting",
                    subServicePara: "Bone grafting is a procedure to regenerate bone tissue lost due to periodontal disease, trauma, or previous extractions. It provides a solid foundation for dental implants and maintains facial structure."
                },
                {
                    subserviceHead: "Sinus Lift Surgery",
                    subServicePara: "This surgery adds bone to your upper jaw in the area of your molars and premolars. It is performed when the sinus is too close to the upper jaw for implants to be placed safely, effectively increasing the bone height."
                },
                {
                    subserviceHead: "Crown Lengthening Surgery",
                    subServicePara: "This procedure adjusts the gum and bone level to expose more of the natural tooth structure. It is often done to prepare a tooth for a crown or to correct a 'gummy smile' for better aesthetics."
                },
                {
                    subserviceHead: "Bone / Osseous surgery",
                    subServicePara: "Osseous surgery is a treatment for advanced gum disease where bone and gum tissues are reshaped to reduce periodontal pockets and eliminate bacterial build-up, creating a smooth, clean surface."
                },
                {
                    subserviceHead: "Gum Surgery",
                    subServicePara: "Various gum surgical procedures are performed to treat gum disease, correct soft tissue defects, and perform gum grafts to cover exposed roots, improving both health and sensitivity."
                }
            ],
            benefitsofChoosing: [
                { points: "Safe, effective treatment for complex dental issues." },
                { points: "Minimally invasive techniques for faster recovery." },
                { points: "Pain and anxiety control through modern sedation options." },
                { points: "Restoration of necessary bone structure for implants." },
                { points: "Long-term solutions for functional and oral health problems." }
            ]
        }
    },
    {
        id: 12,
        title: 'Implants',
        description: 'Dental implants are a permanent solution for missing teeth, providing a stable, natural-looking replacement that restores chewing function and preserves jawbone health.',
        sub: true,
        subServices: [
            {
                singleSub: 'Single Tooth Implant'
            },
            {
                singleSub: 'Multiple Teeth Implants'
            },
            {
                singleSub: 'All-on-4 / Full Mouth Implants'
            },
            {
                singleSub: 'Implant-Supported Dentures'
            }
        ],
        img: Implants,
        singleServiceData: {
            serviceImg: ImplantsImg,
            para: "Dental implants are considered the gold standard for replacing missing teeth. They consist of a titanium post surgically placed into the jawbone, which acts as an artificial root for a custom-made crown. This solution offers superior stability, longevity, and feel compared to traditional bridges or dentures, helping to prevent bone loss and maintain your facial structure.",
            whyServicePoints: [
                { point: "Offers a permanent and stable replacement for missing teeth." },
                { point: "Restores full chewing power and natural speech." },
                { point: "Prevents jawbone deterioration and collapse of facial structure." },
                { point: "Does not require altering adjacent healthy teeth (unlike bridges)." }
            ],
            subServicesContent: [
                {
                    subserviceHead: "Single Tooth Implant",
                    subServicePara: "A single implant replaces one missing tooth with an independent post and crown. It functions and looks just like a natural tooth, providing a discrete and long-term solution without affecting surrounding teeth."
                },
                {
                    subserviceHead: "Multiple Teeth Implants",
                    subServicePara: "For several missing teeth, implants can support an implant-supported bridge. This avoids the need for a removable partial denture and provides a fixed, secure, and highly functional replacement."
                },
                {
                    subserviceHead: "All-on-4 / Full Mouth Implants",
                    subServicePara: "This technique uses just four to six strategically placed implants to support a complete arch of non-removable, fixed teeth. It's an excellent solution for those missing all or most of their teeth, providing a fast path to a full, beautiful smile."
                },
                {
                    subserviceHead: "Implant-Supported Dentures",
                    subServicePara: "Implants can be used to anchor and stabilize a traditional denture. This prevents slippage, eliminates the need for adhesives, and significantly increases the comfort and confidence of denture wearers."
                }
            ],
            benefitsofChoosing: [
                { points: "The most natural and stable feel of any tooth replacement." },
                { points: "Preserves the health and volume of your jawbone." },
                { points: "Exceptional longevity, often lasting a lifetime with proper care." },
                { points: "Improved digestion and nutrition due to better chewing ability." },
                { points: "Full confidence in your smile and speaking ability." }
            ]
        }
    },
    {
        id: 13,
        title: 'Dentures',
        description: 'Dentures are removable dental appliances that replace missing teeth, restoring your ability to eat, speak, and smile confidently.',
        sub: true,
        subServices: [
            {
                singleSub: 'complete dentures'
            },
            {
                singleSub: 'Partial dentures'
            },
            {
                singleSub: 'Implant Retained Removable dentures'
            },
            {
                singleSub: 'Implant Retained Fixed dentures'
            },
            {
                singleSub: 'Denture repairs'
            }
        ],
        img: Dentures,
        singleServiceData: {
            serviceImg: DenturesImg,
            para: "Dentures are customized replacements for missing teeth and surrounding tissues. Whether you need a full set or just a partial, modern dentures are designed to be comfortable, durable, and natural-looking, helping you restore facial contours, improve chewing, and regain confidence in your smile.",
            whyServicePoints: [
                { point: "Restores the ability to chew and speak properly." },
                { point: "Supports facial muscles to prevent sagging and an aged appearance." },
                { point: "A non-surgical solution for replacing multiple missing teeth." },
                { point: "Custom-made for comfort and a natural, aesthetic look." }
            ],
            subServicesContent: [
                {
                    subserviceHead: "Complete Dentures",
                    subServicePara: "Complete dentures are used when all teeth in an arch (upper or lower) are missing. They are precisely fabricated to fit snugly over your gums and provide a full replacement, restoring your entire smile and bite."
                },
                {
                    subserviceHead: "Partial Dentures",
                    subServicePara: "Partial dentures are a removable option for patients who still have some natural teeth remaining. They fill the gaps created by missing teeth, prevent remaining teeth from shifting, and are held in place by clasps or precision attachments."
                },
                {
                    subserviceHead: "Implant Retained Removable Dentures",
                    subServicePara: "These dentures snap onto dental implants for much greater stability than conventional dentures. They are still removable for cleaning but offer a vastly improved fit, reducing slippage and improving chewing efficiency."
                },
                {
                    subserviceHead: "Implant Retained Fixed Dentures",
                    subServicePara: "These are permanent, non-removable full arch replacements secured directly to dental implants. This option offers maximum stability, function, and comfort, feeling the most like natural teeth."
                },
                {
                    subserviceHead: "Denture Repairs",
                    subServicePara: "We provide professional repair services for chipped, cracked, or broken dentures. We can also perform relines and rebases to ensure your existing dentures continue to fit comfortably and securely as your mouth changes over time."
                }
            ],
            benefitsofChoosing: [
                { points: "Restoration of a complete and natural-looking smile." },
                { points: "Improved confidence in social settings." },
                { points: "Enhanced chewing function and dietary freedom." },
                { points: "Affordable and effective solution for tooth loss." },
                { points: "Modern materials ensure high comfort and durability." }
            ]
        }
    },
    {
        id: 14,
        title: 'Appliances',
        description: 'Dental appliances are custom-made devices, such as mouthguards, retainers, or night guards, designed to protect, align, or support your teeth and jaw.',
        sub: true,
        subServices: [
            {
                singleSub: 'TMD  appliances'
            },
            {
                singleSub: 'Sleep Apnea Oral Appliance'
            },
            {
                singleSub: 'Bruxism Appliance'
            },
            {
                singleSub: 'Sport Guards'
            },
            {
                singleSub: 'Retainer'
            },
            {
                singleSub: 'Homeo block'
            }
        ],
        img: Appliances,
        singleServiceData: {
            serviceImg: AppliancesImg,
            para: "Custom-fitted dental appliances are essential for protecting your teeth, correcting alignment, and managing jaw-related discomfort and sleep disorders. Our clinic designs and fabricates precise, comfortable appliances to meet your specific therapeutic or protective needs, ensuring optimal function and long-term oral health.",
            whyServicePoints: [
                { point: "Protects teeth from damage caused by grinding or clenching (bruxism)." },
                { point: "Alleviates pain and discomfort associated with temporomandibular joint disorders (TMD)." },
                { point: "Manages mild to moderate obstructive sleep apnea." },
                { point: "Preserves the alignment achieved after orthodontic treatment." }
            ],
            subServicesContent: [
                {
                    subserviceHead: "TMD appliances",
                    subServicePara: "These custom oral splints (night guards) are designed to properly position the jaw, relieve pressure on the temporomandibular joint (TMJ), and relax the jaw muscles, reducing pain, headaches, and clicking associated with TMD."
                },
                {
                    subserviceHead: "Sleep Apnea Oral Appliance",
                    subServicePara: "A custom-fitted device worn while sleeping to gently reposition the jaw and tongue, keeping the airway open. This is a comfortable, non-CPAP alternative for treating mild to moderate obstructive sleep apnea and severe snoring."
                },
                {
                    subserviceHead: "Bruxism Appliance",
                    subServicePara: "Also known as a night guard, this appliance is worn over the teeth to create a barrier that absorbs the force from unconscious teeth grinding (bruxism), preventing tooth wear, fractures, and jaw pain."
                },
                {
                    subserviceHead: "Sport Guards",
                    subServicePara: "Custom-made mouthguards provide superior protection for teeth, gums, and jaws during sports activities. They offer a comfortable, precise fit that allows for easy breathing and speaking, unlike generic boil-and-bite guards."
                },
                {
                    subserviceHead: "Retainer",
                    subServicePara: "After orthodontic treatment, retainers are crucial to hold the teeth in their new, corrected position. They can be fixed or removable and prevent teeth from gradually shifting back to their original spots."
                },
                {
                    subserviceHead: "Homeo block",
                    subServicePara: "A specialized oral appliance used in some holistic or functional orthodontics. It is designed to encourage nasal breathing, support the natural growth of the maxilla (upper jaw), and improve the relationship between the jaws."
                }
            ],
            benefitsofChoosing: [
                { points: "Prevents costly damage and wear to natural teeth." },
                { points: "Significant reduction in jaw pain, headaches, and facial tension." },
                { points: "Improved quality of sleep and reduced snoring." },
                { points: "High comfort and effective function due to custom-fit design." },
                { points: "Protection against trauma during physical activities." }
            ]
        }
    },
    {
        id: 15,
        title: 'SOLEA laser',
        description: 'The SOLEA laser provides precise, minimally invasive dental treatments with reduced pain, bleeding, and recovery time, enhancing patient comfort and care.',
        sub: true,
        subServices: [
            {
                singleSub: 'Anesthesia free fillings '
            },
            {
                singleSub: 'Frenectomy '
            },
            {
                singleSub: 'Depigmentation of the Gum Tissues'
            },
            {
                singleSub: 'Gummy smile'
            },
            {
                singleSub: 'Tightening of palate for snoring'
            }
        ],
        img: SoleaLaser,
        singleServiceData: {
            serviceImg: SoleaLaserImg,
            para: "The revolutionary SOLEA laser is an advanced technology that allows us to perform both soft tissue (gums) and hard tissue (teeth) procedures with unprecedented speed, comfort, and precision. It often eliminates the need for drills and anesthesia for many common procedures, leading to a drastically improved and virtually pain-free patient experience.",
            whyServicePoints: [
                { point: "Enables most cavity preparations to be done without injections or numbness." },
                { point: "Minimizes bleeding and swelling in soft tissue procedures." },
                { point: "Allows for faster treatment times and quicker recovery." },
                { point: "Provides high precision for aesthetically sensitive gum contouring." }
            ],
            subServicesContent: [
                {
                    subserviceHead: "Anesthesia free fillings",
                    subServicePara: "The SOLEA laser can remove decayed tooth material with such precision that, in most cases, patients do not require any local anesthesia. This makes the experience much quicker and eliminates the lingering numb feeling."
                },
                {
                    subserviceHead: "Frenectomy",
                    subServicePara: "A frenectomy is a procedure to remove or modify a restrictive frenulum (the small piece of tissue connecting the lip or tongue to the gum). The SOLEA laser performs this quickly, with minimal discomfort and blood loss, often eliminating the need for sutures."
                },
                {
                    subserviceHead: "Depigmentation of the Gum Tissues",
                    subServicePara: "For patients with dark or discolored gums, the SOLEA laser can safely and effectively remove the excess melanin pigment, revealing a healthier, pinker gum color and dramatically improving the aesthetics of the smile line."
                },
                {
                    subserviceHead: "Gummy smile",
                    subServicePara: "The laser allows for precise reshaping of excess gum tissue (gingivectomy) to expose more of the natural tooth structure, creating a balanced and harmonious smile line without the discomfort and healing time associated with traditional surgery."
                },
                {
                    subserviceHead: "Tightening of palate for snoring",
                    subServicePara: "The SOLEA laser can be used to gently tighten the soft palate tissue, which often vibrates during sleep to cause snoring. This minimally invasive procedure can significantly reduce or eliminate snoring by making the palate more rigid."
                }
            ],
            benefitsofChoosing: [
                { points: "Reduced reliance on needles and anesthesia for many procedures." },
                { points: "Faster healing and minimal post-operative discomfort." },
                { points: "Quieter, drill-free experience for less dental anxiety." },
                { points: "High precision preserves more healthy tooth structure." },
                { points: "Quick, effective cosmetic improvements for gum tissues." }
            ]
        }
    },
    {
        id: 16,
        title: 'Orthodontics',
        description: 'Orthodontics focuses on correcting misaligned teeth and jaws using braces, aligners, and other devices to improve bite, function, and smile aesthetics.',
        sub: true,
        subServices: [
            {
                singleSub: 'Traditional Braces'
            },
            {
                singleSub: '6 Moth Smiles'
            },
            {
                singleSub: 'Clear aligners/Invisalign'
            }
        ],
        img: Orthodontics,
        singleServiceData: {
            serviceImg: OrthodonticsImg,
            para: "Orthodontics is the specialized field of dentistry that treats improper alignment of the teeth and jaws (malocclusion). By gently moving teeth into their correct position over time, orthodontic treatment improves chewing function, enhances oral hygiene, and creates a beautiful, symmetrical smile for patients of all ages.",
            whyServicePoints: [
                { point: "Corrects alignment issues like overcrowding, gaps, and rotated teeth." },
                { point: "Addresses bite problems (overbite, underbite, crossbite) for better function." },
                { point: "Reduces the risk of abnormal wear and tear on tooth surfaces." },
                { point: "Improves overall smile aesthetics and self-confidence." }
            ],
            subServicesContent: [
                {
                    subserviceHead: "Traditional Braces",
                    subServicePara: "Traditional braces use metal brackets and wires to apply gentle, continuous pressure, guiding teeth into their ideal positions. They are highly effective for correcting moderate to severe alignment and bite issues and are a reliable option for all age groups."
                },
                {
                    subserviceHead: "6 Month Smiles",
                    subServicePara: "This specialized orthodontic system focuses on cosmetically straightening the teeth that show when you smile (the anterior teeth). It uses clear brackets and tooth-colored wires to achieve results faster than traditional braces, typically within six months."
                },
                {
                    subserviceHead: "Clear aligners/Invisalign",
                    subServicePara: "Clear aligners are a popular, discreet alternative to metal braces. These custom-made, removable, transparent trays incrementally shift your teeth. They offer comfort, flexibility, and the advantage of being virtually invisible during treatment."
                }
            ],
            benefitsofChoosing: [
                { points: "Achieve a straight, beautiful smile that lasts a lifetime." },
                { points: "Improved oral hygiene due to easier cleaning of straight teeth." },
                { points: "Reduced strain on the jaw joints and muscles." },
                { points: "Restoration of proper bite and chewing function." },
                { points: "Variety of treatment options to suit aesthetic preferences and lifestyle." }
            ]
        }
    },
    {
        id: 17,
        title: 'Botox treatments',
        description: 'Botox treatments help reduce facial wrinkles and fine lines, providing a smoother, more youthful appearance and complementing overall cosmetic dental care.',
        sub: true,
        subServices: [
            {
                singleSub: 'TMD problems'
            },
            {
                singleSub: 'Migraines/ headaches'
            },
            {
                singleSub: 'Gummy smile'
            }
        ],
        img: Botox,
        singleServiceData: {
            serviceImg: BotoxImg,
            para: "Botox is a highly effective, non-surgical treatment that temporarily relaxes facial muscles. Beyond its cosmetic applications for smoothing wrinkles, it is also a powerful therapeutic tool used in dentistry to treat muscle-related conditions like chronic jaw pain (TMD) and clenching/grinding (bruxism), offering both aesthetic and functional relief.",
            whyServicePoints: [
                { point: "Reduces the appearance of fine lines and wrinkles for a younger look." },
                { point: "Relaxes overworked jaw muscles to alleviate TMD-related pain." },
                { point: "Can decrease the severity and frequency of chronic tension headaches/migraines." },
                { point: "Provides a non-surgical solution for reducing the appearance of a 'gummy smile'." }
            ],
            subServicesContent: [
                {
                    subserviceHead: "TMD problems",
                    subServicePara: "Botox injections into the masseter and temporalis muscles can effectively reduce excessive muscle tension that contributes to jaw pain, clicking, and restricted movement associated with Temporomandibular Disorder (TMD). This treatment helps relax the muscles, reducing clenching and grinding forces."
                },
                {
                    subserviceHead: "Migraines/ headaches",
                    subServicePara: "For patients suffering from chronic migraines and tension headaches often related to muscle strain in the head, neck, and jaw, Botox can provide significant relief. It works by blocking nerve signals that cause the muscles to contract, thereby preventing pain."
                },
                {
                    subserviceHead: "Gummy smile",
                    subServicePara: "When a smile exposes too much gum tissue because the lip muscles are hyperactive, a small amount of Botox can be precisely injected to gently limit the movement of the upper lip. This non-invasive treatment allows for a more balanced and aesthetically pleasing smile line."
                }
            ],
            benefitsofChoosing: [
                { points: "Minimally invasive treatment with no downtime." },
                { points: "Offers relief from chronic pain and discomfort caused by muscle tension." },
                { points: "Fast and visible aesthetic results, often within days." },
                { points: "Highly effective complementary therapy for various dental and facial issues." },
                { points: "Treatment is performed by dentists who have an expert understanding of facial anatomy." }
            ]
        }
    },
    {
        id: 18,
        title: 'Fillers',
        description: 'Dermal fillers restore volume and enhance facial contours, smoothing wrinkles and improving the overall appearance of your smile and facial aesthetics.',
        sub: true,
        subServices: [
            {
                singleSub: 'Cosmetic smile'
            }
        ],
        img: Fillers,
        singleServiceData: {
            serviceImg: FillersImg,
            para: "Dermal fillers are injectable substances, typically made of hyaluronic acid, used to restore lost volume, smooth deep wrinkles and folds, and enhance the contours of the face, particularly around the mouth and smile line. When combined with cosmetic dental work, fillers can provide a harmonious, youthful, and complete smile makeover.",
            whyServicePoints: [
                { point: "Fills in lines and wrinkles around the mouth and nose (e.g., nasolabial folds)." },
                { point: "Enhances the shape and fullness of the lips." },
                { point: "Corrects marionette lines and downward-turning mouth corners." },
                { point: "Complements dental work by balancing the perioral (around the mouth) region." }
            ],
            subServicesContent: [
                {
                    subserviceHead: "Cosmetic smile",
                    subServicePara: "Dermal fillers are used strategically to frame and enhance a beautiful smile. This includes augmenting the lips to better display the teeth, smoothing lines that become visible when smiling (like smoker's lines), and restoring volume around the mouth to support the dental work and create a youthful, vibrant overall look."
                }
            ],
            benefitsofChoosing: [
                { points: "Immediate and noticeable improvement in facial volume and contours." },
                { points: "Minimally invasive with little to no downtime." },
                { points: "Results last several months, depending on the product and area treated." },
                { points: "Customized treatment plans for natural-looking enhancement." },
                { points: "Performed by clinicians with expert knowledge of oral and facial anatomy." }
            ]
        }
    },
    {
        id: 19,
        title: 'Teeth Whitening',
        description: 'Teeth whitening is a safe and effective treatment that brightens discolored or stained teeth, giving you a more radiant and confident smile.',
        sub: true,
        subServices: [
            {
                singleSub: 'In Office Zoom laser whitening'
            },
            {
                singleSub: 'At home Whitening Kits'
            }
        ],
        img: TeethWhitening,
        singleServiceData: {
            serviceImg: TeethWhiteImg,
            para: "Professional teeth whitening is one of the quickest and most popular ways to enhance your smile. Over time, teeth can become stained or discolored by food, drinks, or aging. Our professional treatments are safe, highly effective, and designed to penetrate the enamel to lift deep stains, achieving a significantly brighter smile than over-the-counter products.",
            whyServicePoints: [
                { point: "Removes deep, set-in stains caused by coffee, wine, and tobacco." },
                { point: "Achieves dramatically brighter results than generic store-bought kits." },
                { point: "Safe and controlled procedure minimizes sensitivity." },
                { point: "Quickly revitalizes a tired or dull-looking smile." }
            ],
            subServicesContent: [
                {
                    subserviceHead: "In Office Zoom laser whitening",
                    subServicePara: "Our in-office whitening procedure, often using the Zoom light, delivers the fastest and most dramatic results. The high-concentration whitening gel is applied to the teeth and activated by a specialized light, allowing you to achieve several shades of brightening in just a single appointment."
                },
                {
                    subserviceHead: "At home Whitening Kits",
                    subServicePara: "We provide professional-grade take-home kits that include custom-made trays and a professional strength gel. This allows you to gradually whiten your teeth in the comfort of your home, with guidance from your dentist to ensure optimal results and comfort."
                }
            ],
            benefitsofChoosing: [
                { points: "Immediate and noticeable results in a single office visit." },
                { points: "Significantly boosts confidence in social and professional life." },
                { points: "Customized treatment minimizes the risk of gum irritation." },
                { points: "Safe under professional supervision, protecting enamel health." },
                { points: "Effective long-term solution for a brilliant, white smile." }
            ]
        }
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
    // { 
    //     title: 'GreenSky®', 
    //     content: 'With GreenSky®, you can finance your dental care through simple, low-interest payment plans. It’s designed to fit your budget and make care more accessible.' 
    // },
    // { 
    //     title: 'Proceed Finance', 
    //     content: 'Proceed Finance offers longer-term financing with affordable payments for larger treatment plans. It helps make advanced dental care achievable without financial stress.'
    // }
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
                text: '4 Gum Care Visits'
            },
            // {
            //     img: PriceCheck,
            //     text: 'Laser gum therapy'
            // },
            {
                img: PriceCheck,
                text: '15% Off Dental Treatments'
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
        tageLine: 'Big savings. Brighter smiles. One simple plan',
        listOfContent: [
            {
                img: PriceCheck,
                text: '2 Cleaning + exams & X-rays'
            },
            {
                img: PriceCheck,
                text: '15% Off Fillings, Crowns, Root Canals'
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
const SocialMediaNewsLetter = [
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
        img: TwitterBlack,
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
    SocialMedia,
    SocialMediaNewsLetter
}

export default homePageData





