import React, { useState, useEffect, useRef } from "react";
import { base44 } from "./api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { 
  Building2, 
  Calculator,
  HardHat, 
  Leaf, 
  CheckCircle 
} from "lucide-react";

const iconMap = {
  Building2,
  Calculator,
  HardHat,
  Leaf,
};

const defaultServices = [
  {
    title: "Infrastructure Design",
    icon: "Building2",
    description: "Comprehensive design solutions for bridges, roads, and urban infrastructure projects.",
    features: ["Bridge Engineering", "Highway Design", "Urban Planning", "Traffic Management"],
  },
  {
    title: "Structural Analysis",
    icon: "Ruler",
    description: "Advanced structural engineering and analysis for buildings of all scales.",
    features: ["Load Analysis", "Seismic Design", "3D Modeling", "Safety Assessment"],
  },
  {
    title: "Construction Management",
    icon: "HardHat",
    description: "End-to-end project management ensuring timely and quality delivery.",
    features: ["Project Planning", "Quality Control", "Cost Management", "Site Supervision"],
  },
  {
    title: "Sustainability Consulting",
    icon: "Leaf",
    description: "Green building strategies and sustainable engineering solutions.",
    features: ["LEED Certification", "Energy Efficiency", "Environmental Impact", "Green Materials"],
  },
];

export default function Services() {
  const { data: services = defaultServices, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const data = await base44.entities.Service.list("order");
      return data.length > 0 ? data : defaultServices;
    },
  });

  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-teal-400">Services</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Precision engineering services tailored to transform your vision into reality
          </p>
        </motion.div>

        {/* Services Grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Building2;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative p-8 bg-[#1A1A1A] rounded-xl border border-teal-500/10 hover:border-teal-500/30 transition-all duration-300"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-16 h-16 mb-6 bg-teal-500/10 rounded-lg flex items-center justify-center group-hover:bg-teal-500/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-teal-400" />
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-teal-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-teal-500/10 via-teal-500/5 to-transparent p-12 rounded-2xl border border-teal-500/20">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how our engineering expertise can bring your vision to life
            </p>
            <a href={"/contact"}>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-medium transition-colors">
                Get in Touch
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}