import type React from "react"
import { Clock, Stethoscope, Globe, FileCheck } from "lucide-react"

 
export default function AboutPage() {
  return (

    
    <main className="container mx-auto px-4 py-12">
      {
      <section className="relative py-20 bg-white">
      {/* Decorative Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 opacity-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 opacity-40 rounded-full blur-3xl"></div>
      </div>
    
      <div className="bg-white/90 backdrop-blur-md rounded-xl max-w-5xl mx-auto px-6 py-12 shadow-2xl ring-1 ring-gray-200">
        <h2 className="text-4xl font-bold text-center text-primary mb-10">
          WHO ARE WE
        </h2>
        {/* ...rest of content... */}
      </div>
    </section>
    
      }
      {
      /* <section className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Nippon Medical Center</h1>
        <div className="prose prose-lg max-w-none">
          <p>
            A specialized medical center dedicated to providing comprehensive medical
            examinations for Japanese Visa applications. Our facility is staffed by experienced medical
            professionals who understand the specific requirements of the Japanese Immigration Bureau.

          Nippon Medical is a medical center situated its own multi-storied building-Sherchan plaza balaju, Kathmandu
          which was established in 2066 B.S. and legalized medical centre with its Govt.Regd no: 69847/066/067 which is primarily runned and managed 
          by Bishow sherchan who is fully experienced in this arena as 
          he has been accumulating health related knowledge nationally and internationally for more than thirty years. 
          It conducts the humanitarian actives to address the agonies of the agonized people. We have launched the 
          different packages of health like : preventive, curative, and promotional health services, sanitation campaigns, nutrition programs ,safe motherhood etc. 
          and also have imparted the knowledge about STD and about its preventive methods for the longevity of the life of the people . 
          It provides guidance and counseling to the people who want to go for abroad study. 
          It also provides Japanese language training to those who are keen on going to japan for abroad study by 
          Mrs. Rashmi Gauchan who returned back to Nepal after studying in Japan.
          Besides this, it has been conducting workshops for creating awareness in remote areas for the
           disillusionment of superstition for the smooth running of the society irrespective of caste, culture, language, religion etc. 
           which can be milestone in the context of our country to maintain brotherhood here among people. 
          It can also function positively to practical zed the slogan “ unity in diversity” aptly in our country. 
          This act is also purposeful to create awareness to the illiterate villager dwellers to maintain their sound health. 
          It aims to motivate people to involve in physical activities and meditation realizing its importance for good health.
         
            
          </p>
          <p>
            Founded in 2010, we have helped thousands of foreign nationals complete their medical examinations for
            visa applications. Our success is built on our commitment to excellence, attention to
            detail, and understanding of the unique needs of people migrating abroad.
          </p>
        </div>
      </section> */
/* <section className="relative bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-20">
  <div className="bg-white/90 backdrop-blur-md rounded-xl max-w-5xl mx-auto px-6 py-12 shadow-2xl ring-1 ring-gray-200">
    <h2 className="text-4xl font-bold text-center text-primary mb-10">
      Welcome to Nippon Medical
    </h2>

    <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
      <p>
        <strong>Nippon Medical</strong> is a specialized medical center offering comprehensive medical examinations
        specifically for <strong>Japanese visa applications</strong>. Our facility is staffed with experienced professionals
        who understand the detailed requirements of the <strong>Japanese Immigration Bureau</strong>.
      </p>

      <p>
        Located in its own multi-storied building—<strong>Sherchan Plaza, Balaju, Kathmandu</strong>—the center was established in
        <strong> 2066 B.S.</strong> and is registered under Government Reg. No: <strong>69847/066/067</strong>.
        It is led by <strong>Mr. Bishow Sherchan</strong>, who brings over <strong>30 years</strong> of healthcare expertise gained both nationally and internationally.
      </p>

      <p>
        Nippon Medical goes beyond clinical services. We’re involved in a wide range of humanitarian and public health initiatives including:
      </p>

      <ul className="list-disc pl-6">
        <li>Preventive, curative, and promotional health services</li>
        <li>Sanitation campaigns & nutrition programs</li>
        <li>Safe motherhood education & STD awareness</li>
        <li>Guidance and counseling for students going abroad</li>
      </ul>

      <p>
        We also provide <strong>Japanese language training</strong> for students, led by <strong>Mrs. Rashmi Gauchan</strong>, who returned to Nepal after studying in Japan.
      </p>

      <p>
        In addition, we host <strong>community workshops</strong> in remote areas to fight superstitions and promote social unity—embracing the spirit of <strong>“Unity in Diversity.”</strong> These efforts help educate rural populations on health, hygiene, and overall well-being.
      </p>

      <p>
        We aim to inspire people to practice <strong>physical activity and meditation</strong>, emphasizing their importance for maintaining good health.
      </p>

      <p>
        <strong>Since 2010</strong>, we’ve supported thousands of foreign nationals with medical examinations for visa applications. Our ongoing success stems from a deep commitment to <strong>excellence, accuracy, and patient care</strong>.
      </p>
    </div>
  </div>
</section> */ 
<section className="relative bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-20">
  <div className="bg-white/90 backdrop-blur-md rounded-xl max-w-5xl mx-auto px-6 py-12 shadow-2xl ring-1 ring-gray-200">
   

    <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
      <p>
        <strong>Nippon Medical</strong> is a specialized medical center offering comprehensive medical examinations
        specifically for <strong>Japanese visa applications</strong>. Our facility is staffed with experienced professionals
        who understand the detailed requirements of the <strong>Japanese Immigration Bureau</strong>.
      </p>

      <p>
        Located in its own multi-storied building—<strong>Sherchan Plaza, Balaju, Kathmandu</strong>—the center was established in
        <strong> 2066 B.S.</strong> and is registered under Government Reg. No: <strong>69847/066/067</strong>.
        It is led by <strong>Mr. Bishow Sherchan</strong>, who brings over <strong>30 years</strong> of healthcare expertise gained both nationally and internationally.
      </p>

      <p>
        Nippon Medical goes beyond clinical services. We’re involved in a wide range of humanitarian and public health initiatives including:
      </p>

      <ul className="list-disc pl-6">
        <li>Preventive, curative, and promotional health services</li>
        <li>Sanitation campaigns & nutrition programs</li>
        <li>Safe motherhood education & STD awareness</li>
        <li>Guidance and counseling for students going abroad</li>
      </ul>

      <p>
        We also provide <strong>Japanese language training</strong> for students, led by <strong>Mrs. Rashmi Gauchan</strong>, who returned to Nepal after studying in Japan.
      </p>

      <p>
        In addition, we host <strong>community workshops</strong> in remote areas to fight superstitions and promote social unity—embracing the spirit of <strong>“Unity in Diversity.”</strong>
      </p>

      <p>
        We aim to inspire people to practice <strong>physical activity and meditation</strong>, emphasizing their importance for maintaining good health.
      </p>

      <p>
        <strong>Since 2010</strong>, we’ve supported thousands of foreign nationals with medical examinations for visa applications. Our ongoing success stems from a deep commitment to <strong>excellence, accuracy, and patient care</strong>.
      </p>
    </div>
  </div>
</section>

      }

      {/* <section className="mb-16 bg-muted py-12 rounded-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Our mission is to provide efficient, professional, and comprehensive medical examinations that meet all
              requirements for Japanese working visa applications. The mission of our institution is to extend health
               services to every nook and corner of the country so that both elites as well as poor village dwellers 
               can utilize its service in affordable cost for the maintenance of their optimum health. 
               So we would like to request to all our well wishers and other people to visit us and utilize the available health services and facilities. 
               Hence , if you have any queries you are welcome heartily to visit our location or email us at medicalnippon9@gmail.com 
               and the telephone enquiry is also entertained in +977-01-4958923. 
               <p>
               We are committed to:
               </p>
              
            </p>
            <ul>
              <li>Delivering accurate and thorough medical examinations</li>
              <li>Providing a comfortable and respectful environment for all patients</li>
              <li>Offering clear communication in multiple languages</li>
              <li>Ensuring timely processing of all medical certificates</li>
            </ul>
          </div>
        </div>
      </section> */
//       <section className="mb-16 bg-gradient-to-br from-blue-50 to-purple-100 py-16">
//   <div className="max-w-5xl mx-auto px-6">
//     <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-10 md:p-14">
//       <h2 className="text-4xl font-bold text-center text-primary mb-8">
//         Our Mission
//       </h2>

//       <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
//         <p>
//           Our mission is to provide <strong>efficient, professional, and comprehensive medical examinations</strong> that meet all
//           requirements for <strong>Japanese working visa applications</strong>.
//         </p>

//         <p>
//           We aim to extend accessible health services to <strong>every corner of the country</strong>—so that both
//           urban elites and rural villagers can maintain their optimum health at an affordable cost.
//         </p>

//         <p>
//           We warmly invite our well-wishers and the general public to visit us and take advantage of the healthcare
//           services we proudly offer.
//         </p>

//         <div className="bg-gray-100 border border-gray-300 p-4 rounded-md">
//           <p className="font-semibold mb-2">📬 Got questions?</p>
//           <ul className="list-disc pl-5 space-y-1">
//             <li>
//               Email us at:{" "}
//               <a href="mailto:medicalnippon9@gmail.com" className="text-blue-600 underline">
//                 medicalnippon9@gmail.com
//               </a>
//             </li>
//             <li>
//               Call us:{" "}
//               <a href="tel:+977014958923" className="text-blue-600 underline">
//                 +977-01-4958923
//               </a>
//             </li>
//             <li>Or visit our location—we’re here to help!</li>
//           </ul>
//         </div>

//         <div className="mt-6">
//           <p className="font-semibold">We are committed to:</p>
//           <ul className="list-disc pl-6 space-y-2">
//             <li>Delivering accurate and thorough medical examinations</li>
//             <li>Providing a comfortable and respectful environment for all patients</li>
//             <li>Offering clear communication in multiple languages</li>
//             <li>Ensuring timely processing of all medical certificates</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

<section className="relative bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-20">
<div className="bg-white/90 backdrop-blur-md rounded-xl max-w-5xl mx-auto px-6 py-12 shadow-2xl ring-1 ring-gray-200">
  <h2 className="text-4xl font-bold text-center text-primary mb-10">
    Our Mission
  </h2>

  <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
    <p>
      Our mission is to provide <strong>efficient, professional, and comprehensive medical examinations</strong> that meet all
      requirements for <strong>Japanese working visa applications</strong>.
    </p>

    <p>
      We aim to extend accessible health services to <strong>every corner of the country</strong>—so that both
      urban elites and rural villagers can maintain their optimum health at an affordable cost.
    </p>

    <p>
      We warmly invite our well-wishers and the general public to visit us and take advantage of the healthcare
      services we proudly offer.
    </p>

    <div className="bg-gray-100 border border-gray-300 p-4 rounded-md">
      <p className="font-semibold mb-2">📬 Got questions?</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Email us at:{" "}
          <a href="mailto:medicalnippon9@gmail.com" className="text-blue-600 underline">
            medicalnippon9@gmail.com
          </a>
        </li>
        <li>
          Call us:{" "}
          <a href="tel:+01-4958923" className="text-blue-600 underline">
            01-4958923
          </a>
        </li>
        <li>Or visit our location—we’re here to help!</li>
      </ul>
    </div>

    <div className="mt-6">
      <p className="font-semibold">We are committed to:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Delivering accurate and thorough medical examinations</li>
        <li>Providing a comfortable and respectful environment for all patients</li>
        <li>Offering clear communication in multiple languages</li>
        <li>Ensuring timely processing of all medical certificates</li>
      </ul>
    </div>
  </div>
</div>
</section>
      }




      {/* <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard
            icon={<Stethoscope className="h-10 w-10 text-primary" />}
            title="Medical Excellence"
            description="We maintain the highest standards of medical practice and stay updated with the latest requirements for visa examinations."
          />
          <ValueCard
            icon={<Globe className="h-10 w-10 text-primary" />}
            title="Cultural Sensitivity"
            description="We understand the diverse needs of our international patients and provide culturally sensitive care."
          />
          <ValueCard
            icon={<Clock className="h-10 w-10 text-primary" />}
            title="Efficiency"
            description="We value your time and ensure a streamlined process for all examinations and certificate issuance."
          />
          <ValueCard
            icon={<FileCheck className="h-10 w-10 text-primary" />}
            title="Accuracy"
            description="We are meticulous in our examinations and documentation to ensure your visa application proceeds smoothly."
          />
        </div>
      </section> */
      <section className="mb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-primary mb-12 drop-shadow-sm">
      Our Values
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <ValueCard
        icon={<Stethoscope className="h-12 w-12 text-indigo-600 transition-transform duration-300 hover:scale-110" />}
        title="Medical Excellence"
        description="We maintain the highest standards of medical practice and stay updated with the latest requirements for visa examinations."
      />
      <ValueCard
        icon={<Globe className="h-12 w-12 text-indigo-600 transition-transform duration-300 hover:scale-110" />}
        title="Cultural Sensitivity"
        description="We understand the diverse needs of our international patients and provide culturally sensitive care."
      />
      <ValueCard
        icon={<Clock className="h-12 w-12 text-indigo-600 transition-transform duration-300 hover:scale-110" />}
        title="Efficiency"
        description="We value your time and ensure a streamlined process for all examinations and certificate issuance."
      />
      <ValueCard
        icon={<FileCheck className="h-12 w-12 text-indigo-600 transition-transform duration-300 hover:scale-110" />}
        title="Accuracy"
        description="We are meticulous in our examinations and documentation to ensure your visa application proceeds smoothly."
      />
    </div>
  </div>
</section>

      }


      {/* <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Medical Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember
            name="Dr. Anuj Shrestha"
            position="Orthopaedics, MBBS, Nepal"
            image="/DrAnujshrestha.png?height=300&width=300"
            bio="Dr. Shrestha has over 20 years of experience in orthopaedics medicine and has specialized in visa medical examinations for the past decade."
          />
          <TeamMember
            name="Dr. Sudhar Prasad Adhikari"
            position="Senior Radiologist and Ultrasonologist"
            image="/placeholder.svg?height=300&width=300"
            bio="Dr. Adhikari is bilingual in English and Japanese and specializes in internal medicine with extensive experience in immigration medical requirements."
          />
          <TeamMember
            name="HA Rabina Baniya"
            position="Health Assistant"
            image="/placeholder.svg?height=300&width=300"
            bio="Ms Baniya coordinates our medical examination process and ensures all patients receive attentive and professional care."
          />
        </div>
      </section> */
//       <section className="mb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16">
//   <div className="max-w-6xl mx-auto px-6">
//     <h2 className="text-4xl font-bold text-center text-primary mb-12 drop-shadow-sm">
//       Our Medical Team
//     </h2>

//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       <TeamMember
//         name="Dr. Anuj Shrestha"
//         position="Orthopaedics, MBBS, Nepal"
//         image="/DrAnujshrestha.png?height=300&width=300"
//         bio="Dr. Shrestha has over 20 years of experience in orthopaedics medicine and has specialized in visa medical examinations for the past decade."
//       />
//       <TeamMember
//         name="Dr. Sudhar Prasad Adhikari"
//         position="Senior Radiologist and Ultrasonologist"
//         image="/DrSudharPrasadAdhikari.png?height=300&width=300"
//         bio="Dr. Adhikari is bilingual in English and Japanese and specializes in internal medicine with extensive experience in immigration medical requirements."
//       />
//       <TeamMember
//         name="HA Rabina Baniya"
//         position="Health Assistant"
//         image="/placeholder.svg?height=300&width=300"
//         bio="Ms Baniya coordinates our medical examination process and ensures all patients receive attentive and professional care."
//       />
//     </div>
//   </div>
  
// </section>

      
      }

      <section className="bg-muted py-12 rounded-lg text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Facilities</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Our modern medical center is equipped with state-of-the-art diagnostic equipment to provide comprehensive
          examinations for your visa application.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-video">
              <img
                src="/Carousel.png?height=200&width=300"
                alt="Examination Room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">Examination Rooms</h3>
              <p className="text-muted-foreground">
                Private and comfortable examination rooms for your medical check-up.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-video">
              <img
                src="/Carousel3.png?height=200&width=300"
                alt="X-Ray Equipment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">Diagnostic Equipment</h3>
              <p className="text-muted-foreground">Modern X-ray and laboratory equipment for accurate diagnostics.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-video">
              <img
                src="/reception.png?height=200&width=300"
                alt="Waiting Area"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">Comfortable Waiting Area</h3>
              <p className="text-muted-foreground">Relaxing environment with multilingual staff to assist you.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

interface ValueCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

interface TeamMemberProps {
  name: string
  position: string
  image: string
  bio: string
}

function TeamMember({ name, position, image, bio }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
      <div className="aspect-square">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-primary font-medium mb-3">{position}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  )
}
