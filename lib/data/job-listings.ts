// Define types for our job listings
export type JobLocation = "Indianapolis, IN" | "Remote" | "Hybrid"
export type JobType = "Full-time" | "Part-time" | "Contract" | "Apprenticeship"
export type JobCategory = "Stylist" | "Loctician" | "Barber" | "Administrative" | "Management"
export type JobExperience = "Entry Level" | "Mid Level" | "Senior" | "Any Level"

export interface JobListing {
  id: string
  title: string
  location: JobLocation
  type: JobType
  category: JobCategory
  experience: JobExperience
  salary: string
  description: string
  responsibilities: string[]
  requirements: string[]
  postedDate: string
}

// Sample job listings
export const jobListings: JobListing[] = [
  {
    id: "job1",
    title: "Senior Loctician",
    location: "Indianapolis, IN",
    type: "Full-time",
    category: "Loctician",
    experience: "Senior",
    salary: "$55,000 - $70,000",
    description:
      "Join our team as a Senior Loctician and help our clients achieve beautiful, healthy locs. You'll work with a diverse clientele and have the opportunity to showcase your creativity and expertise.",
    responsibilities: [
      "Consult with clients to understand their loc goals and preferences",
      "Create and maintain various loc styles using industry-best techniques",
      "Educate clients on proper loc care and maintenance",
      "Maintain a clean and organized workspace",
      "Build and maintain a loyal client base",
    ],
    requirements: [
      "5+ years of experience as a loctician",
      "Strong portfolio of loc work",
      "Excellent communication and customer service skills",
      "Valid cosmetology or natural hair license",
      "Ability to work weekends and some evenings",
    ],
    postedDate: "2023-04-15",
  },
  {
    id: "job2",
    title: "Master Barber",
    location: "Indianapolis, IN",
    type: "Full-time",
    category: "Barber",
    experience: "Mid Level",
    salary: "$45,000 - $60,000",
    description:
      "We're looking for a skilled Master Barber to join our growing team. You'll provide exceptional haircuts, lineups, and beard trims to our diverse clientele in a friendly, professional environment.",
    responsibilities: [
      "Perform precision haircuts, fades, and beard trims",
      "Maintain a clean and sanitized workspace",
      "Build relationships with clients and provide excellent service",
      "Stay updated on current trends and techniques",
      "Contribute to a positive salon atmosphere",
    ],
    requirements: [
      "3+ years of professional barbering experience",
      "Valid barber license",
      "Strong technical skills in various cutting techniques",
      "Excellent time management and customer service",
      "Portfolio of work demonstrating skill and creativity",
    ],
    postedDate: "2023-04-20",
  },
  {
    id: "job3",
    title: "Natural Hair Stylist",
    location: "Indianapolis, IN",
    type: "Part-time",
    category: "Stylist",
    experience: "Mid Level",
    salary: "$20 - $30 per hour + tips",
    description:
      "We're seeking a talented Natural Hair Stylist to join our team part-time. You'll specialize in styling and maintaining natural hair textures, creating beautiful looks that enhance our clients' natural beauty.",
    responsibilities: [
      "Perform various natural hair styling services including twists, braids, and coils",
      "Consult with clients to determine the best styles for their hair type and lifestyle",
      "Educate clients on proper natural hair care",
      "Maintain a clean and organized station",
      "Stay current on natural hair trends and techniques",
    ],
    requirements: [
      "2+ years of experience styling natural hair",
      "Valid cosmetology or natural hair license",
      "Knowledge of natural hair care products and techniques",
      "Excellent communication and customer service skills",
      "Flexible availability including some weekends",
    ],
    postedDate: "2023-04-25",
  },
  {
    id: "job4",
    title: "Salon Receptionist",
    location: "Indianapolis, IN",
    type: "Full-time",
    category: "Administrative",
    experience: "Entry Level",
    salary: "$30,000 - $35,000",
    description:
      "We're looking for a friendly, organized Salon Receptionist to be the welcoming face of our salon. You'll manage appointments, greet clients, and ensure smooth daily operations.",
    responsibilities: [
      "Manage the salon's appointment schedule",
      "Greet clients and offer refreshments",
      "Process payments and handle retail sales",
      "Answer phone calls and respond to inquiries",
      "Maintain a clean and welcoming reception area",
    ],
    requirements: [
      "Previous customer service experience preferred",
      "Excellent communication and interpersonal skills",
      "Basic computer skills and familiarity with scheduling software",
      "Professional appearance and positive attitude",
      "Ability to multitask in a fast-paced environment",
    ],
    postedDate: "2023-05-01",
  },
  {
    id: "job5",
    title: "Salon Manager",
    location: "Indianapolis, IN",
    type: "Full-time",
    category: "Management",
    experience: "Senior",
    salary: "$60,000 - $75,000",
    description:
      "We're seeking an experienced Salon Manager to oversee daily operations, lead our team, and help grow our business. You'll be responsible for maintaining high standards of service and creating a positive work environment.",
    responsibilities: [
      "Oversee daily salon operations and staff management",
      "Recruit, train, and develop salon team members",
      "Manage inventory and supply ordering",
      "Handle scheduling, payroll, and administrative tasks",
      "Implement marketing strategies to attract and retain clients",
      "Ensure exceptional client experiences and resolve any issues",
    ],
    requirements: [
      "3+ years of salon management experience",
      "Strong leadership and team-building skills",
      "Experience with salon software and business operations",
      "Excellent communication and problem-solving abilities",
      "Background in natural hair care preferred",
      "Business or management degree a plus",
    ],
    postedDate: "2023-05-05",
  },
  {
    id: "job6",
    title: "Apprentice Loctician",
    location: "Indianapolis, IN",
    type: "Apprenticeship",
    category: "Loctician",
    experience: "Entry Level",
    salary: "$25,000 - $30,000 + education",
    description:
      "Start your career as a loctician with our comprehensive apprenticeship program. You'll learn from experienced professionals while gaining hands-on experience in loc creation and maintenance.",
    responsibilities: [
      "Assist senior locticians with client services",
      "Learn loc creation, maintenance, and styling techniques",
      "Help maintain a clean and organized salon environment",
      "Attend training sessions and workshops",
      "Gradually build your own client base under supervision",
    ],
    requirements: [
      "High school diploma or equivalent",
      "Passion for natural hair and loc services",
      "Willingness to learn and take direction",
      "Good manual dexterity and attention to detail",
      "Customer service skills and professional demeanor",
      "Cosmetology student or recent graduate preferred",
    ],
    postedDate: "2023-05-10",
  },
  {
    id: "job7",
    title: "Social Media Specialist",
    location: "Hybrid",
    type: "Part-time",
    category: "Administrative",
    experience: "Mid Level",
    salary: "$20 - $25 per hour",
    description:
      "We're looking for a creative Social Media Specialist to manage our online presence and showcase our work. You'll create engaging content that highlights our services and attracts new clients.",
    responsibilities: [
      "Develop and implement social media strategy across platforms",
      "Create engaging content including photos, videos, and written posts",
      "Photograph salon work and client transformations (with permission)",
      "Respond to comments and messages in a timely manner",
      "Track analytics and adjust strategy based on performance",
      "Collaborate with stylists to showcase their work",
    ],
    requirements: [
      "Experience managing business social media accounts",
      "Photography and basic video editing skills",
      "Knowledge of social media best practices and trends",
      "Excellent written communication skills",
      "Understanding of or interest in natural hair and loc services",
      "Portfolio of previous social media work",
    ],
    postedDate: "2023-05-15",
  },
]
