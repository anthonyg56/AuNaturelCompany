export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  socialMedia: {
    twitter: string;
    instagram: string;
    facebook: string;
  }
};

export const teamMembers: TeamMember[] = [
  {
    name: "Tara Richardson",
    role: "Lead Stylist",
    bio: "With 10 years of experience, Tara brings creativity and precision to every client's natural hair journey.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=150&h=150&auto=format&fit=crop",
    socialMedia: {
      twitter: "#",
      instagram: "#",
      facebook: "#"
    }
  },
  {
    name: "Jordan Smith",
    role: "Stylist",
    bio: "Jordan brings creativity and passion to creating stunning natural hairstyles.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
    socialMedia: {
      twitter: "#",
      instagram: "#",
      facebook: "#"
    }
  },
  {
    name: "Mia Johnson",
    role: "Senior Loctician",
    bio: "Mia is known for her precision and care in creating beautiful, healthy locs.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=150&h=150&auto=format&fit=crop",
    socialMedia: {
      twitter: "#",
      instagram: "#",
      facebook: "#"
    }
  },
  {
    name: "Taylor Lee",
    role: "Hair Technician",
    bio: "Taylor focuses on hair health and brings scientific knowledge to natural hair care.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop",
    socialMedia: {
      twitter: "#",
      instagram: "#",
      facebook: "#"
    }
  },
  {
    name: "Olivia Rivera",
    role: "Colorist",
    bio: "A color specialist who creates beautiful, natural-looking color that enhances your style.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop",
    socialMedia: {
      twitter: "#",
      instagram: "#",
      facebook: "#"
    }
  }
];