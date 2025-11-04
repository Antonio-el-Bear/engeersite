import React, { useState } from "react";
import { base44 } from "./api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, TrendingUp, X } from "lucide-react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./components/ui/dialog";

const categories = ["All", "Infrastructure", "Commercial", "Residential", "Industrial", "Renovation"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: () => base44.entities.Project.list("-created_date"),
  });

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-teal-400">Portfolio</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Engineering excellence delivered across diverse sectors
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={
                selectedCategory === category
                  ? "bg-teal-500 hover:bg-teal-600 text-white"
                  : "border-teal-500/30 text-gray-300 hover:bg-teal-500/10"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-800 rounded-lg aspect-[4/5] mb-4" />
                <div className="h-4 bg-gray-800 rounded w-3/4 mb-2" />
                <div className="h-3 bg-gray-800 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-4">
                    <img
                      src={project.image_url || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-teal-500/90 text-white border-0">
                        {project.status || "Completed"}
                      </Badge>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 text-teal-400 text-sm mb-2">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-300 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-teal-500/30 text-teal-400">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {filteredProjects.length === 0 && !isLoading && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No projects found in this category</p>
          </div>
        )}
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl bg-[#1A1A1A] border-teal-500/20 text-white max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-3xl text-white">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <img
                  src={selectedProject.image_url || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200"}
                  alt={selectedProject.title}
                  className="w-full h-80 object-cover rounded-lg"
                />

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-[#0A0A0A] rounded-lg border border-teal-500/10">
                    <MapPin className="w-5 h-5 text-teal-400" />
                    <div>
                      <div className="text-sm text-gray-400">Location</div>
                      <div className="font-medium">{selectedProject.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-[#0A0A0A] rounded-lg border border-teal-500/10">
                    <Calendar className="w-5 h-5 text-teal-400" />
                    <div>
                      <div className="text-sm text-gray-400">Year</div>
                      <div className="font-medium">{selectedProject.year}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-[#0A0A0A] rounded-lg border border-teal-500/10">
                    <TrendingUp className="w-5 h-5 text-teal-400" />
                    <div>
                      <div className="text-sm text-gray-400">Status</div>
                      <div className="font-medium">{selectedProject.status}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Project Details</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.details || selectedProject.description}
                  </p>
                </div>

                {selectedProject.stats && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Key Statistics</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {selectedProject.stats.area && (
                        <div className="p-4 bg-[#0A0A0A] rounded-lg border border-teal-500/10">
                          <div className="text-sm text-gray-400">Area</div>
                          <div className="text-lg font-semibold text-teal-400">{selectedProject.stats.area}</div>
                        </div>
                      )}
                      {selectedProject.stats.budget && (
                        <div className="p-4 bg-[#0A0A0A] rounded-lg border border-teal-500/10">
                          <div className="text-sm text-gray-400">Budget</div>
                          <div className="text-lg font-semibold text-teal-400">{selectedProject.stats.budget}</div>
                        </div>
                      )}
                      {selectedProject.stats.duration && (
                        <div className="p-4 bg-[#0A0A0A] rounded-lg border border-teal-500/10">
                          <div className="text-sm text-gray-400">Duration</div>
                          <div className="text-lg font-semibold text-teal-400">{selectedProject.stats.duration}</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}