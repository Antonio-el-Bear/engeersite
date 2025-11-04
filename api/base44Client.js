/**
 * Base44 API Client
 * Mock implementation for development purposes
 */

class Base44Entity {
  constructor(entityName) {
    this.entityName = entityName;
  }

  async list(sortBy = 'created_date') {
    // Mock data for different entities
    const mockData = {
      Project: [
        {
          id: 1,
          title: "Metropolitan Bridge Complex",
          description: "A state-of-the-art bridge spanning the metropolitan river, incorporating sustainable design principles.",
          category: "Infrastructure",
          location: "Downtown Metro",
          year: "2024",
          status: "Completed",
          image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
          details: "This project involved the design and construction of a modern bridge complex featuring sustainable materials and innovative engineering solutions.",
          stats: {
            area: "2,500 m²",
            budget: "$15M",
            duration: "18 months"
          }
        },
        {
          id: 2,
          title: "Green Office Tower",
          description: "A 40-story eco-friendly office building with LEED Platinum certification.",
          category: "Commercial",
          location: "Business District",
          year: "2023",
          status: "Completed",
          image_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
          details: "This sustainable office tower features cutting-edge green technologies and energy-efficient systems.",
          stats: {
            area: "45,000 m²",
            budget: "$85M",
            duration: "24 months"
          }
        },
        {
          id: 3,
          title: "Residential Complex Renovation",
          description: "Complete renovation of a historic residential complex with modern amenities.",
          category: "Residential",
          location: "Historic Quarter",
          year: "2023",
          status: "Completed",
          image_url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
          details: "This renovation project preserved the historic character while adding modern conveniences and sustainability features.",
          stats: {
            area: "12,000 m²",
            budget: "$25M",
            duration: "15 months"
          }
        }
      ],
      Service: [
        {
          id: 1,
          title: "Infrastructure Design",
          description: "Comprehensive infrastructure planning and design services for transportation, utilities, and public works projects.",
          icon: "Building2",
          features: [
            "Transportation network planning",
            "Utility infrastructure design", 
            "Public works engineering",
            "Traffic flow optimization"
          ]
        },
        {
          id: 2,
          title: "Structural Analysis",
          description: "Advanced structural engineering and analysis services using cutting-edge technology and proven methodologies.",
          icon: "Calculator",
          features: [
            "Finite element analysis",
            "Seismic design and assessment",
            "Load calculation and distribution",
            "Material optimization"
          ]
        },
        {
          id: 3,
          title: "Construction Management",
          description: "End-to-end construction management services ensuring projects are delivered on time and within budget.",
          icon: "HardHat",
          features: [
            "Project scheduling and coordination",
            "Quality control and assurance",
            "Budget management and cost control",
            "Safety compliance and monitoring"
          ]
        },
        {
          id: 4,
          title: "Sustainability Consulting",
          description: "Environmental impact assessment and sustainable design solutions for eco-friendly construction projects.",
          icon: "Leaf",
          features: [
            "LEED certification assistance",
            "Environmental impact assessment",
            "Green building design",
            "Energy efficiency optimization"
          ]
        }
      ],
      Milestone: [
        {
          id: 1,
          year: "2010",
          title: "Foundation",
          description: "ENGITECH was established with a vision to revolutionize civil engineering.",
          icon: "Target",
          order: 1
        },
        {
          id: 2,
          year: "2013", 
          title: "First Major Project",
          description: "Completed our first infrastructure megaproject, setting new industry standards.",
          icon: "Award",
          order: 2
        },
        {
          id: 3,
          year: "2017",
          title: "Team Expansion", 
          description: "Grew to a team of 30+ specialized engineers and consultants.",
          icon: "Users",
          order: 3
        },
        {
          id: 4,
          year: "2025",
          title: "Innovation Leader",
          description: "Recognized as a leader in sustainable engineering solutions.",
          icon: "Zap", 
          order: 4
        }
      ],
      TeamMember: [
        {
          id: 1,
          name: "Dr. Sarah Chen",
          role: "Lead Structural Engineer",
          specialization: "Bridge Design & Seismic Analysis",
          image_url: "https://images.unsplash.com/photo-1494790108755-2616b612b372?w=400",
          linkedin: "https://linkedin.com/in/sarahchen"
        },
        {
          id: 2,
          name: "Michael Rodriguez",
          role: "Project Manager",
          specialization: "Infrastructure Development",
          image_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
          linkedin: "https://linkedin.com/in/mrodriguez"
        },
        {
          id: 3,
          name: "Emily Johnson",
          role: "Sustainability Consultant",
          specialization: "Green Building & LEED Certification",
          image_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
          linkedin: "https://linkedin.com/in/emilyjohnson"
        }
      ]
    };

    return Promise.resolve(mockData[this.entityName] || []);
  }

  async create(data) {
    // Mock creation - in a real app this would POST to an API
    console.log(`Creating ${this.entityName}:`, data);
    return Promise.resolve({ id: Date.now(), ...data });
  }

  async update(id, data) {
    // Mock update - in a real app this would PUT to an API
    console.log(`Updating ${this.entityName} ${id}:`, data);
    return Promise.resolve({ id, ...data });
  }

  async delete(id) {
    // Mock deletion - in a real app this would DELETE from an API
    console.log(`Deleting ${this.entityName} ${id}`);
    return Promise.resolve({ success: true });
  }
}

class Base44Client {
  constructor() {
    this.entities = {
      Project: new Base44Entity('Project'),
      Service: new Base44Entity('Service'),
      Milestone: new Base44Entity('Milestone'),
      TeamMember: new Base44Entity('TeamMember'),
      ContactInquiry: new Base44Entity('ContactInquiry')
    };
  }
}

export const base44 = new Base44Client();