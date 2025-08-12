import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter, Eye } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Project } from "@/entities/all";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const data = await Project.list("-created_date");
    setProjects(data);
  };

  const categories = {
    all: "Tous",
    web: "Web",
    backend: "Backend",
  };

  const statusColors = {
    completed: "bg-green-100 text-green-800",
    in_progress: "bg-blue-100 text-blue-800",
    concept: "bg-gray-100 text-gray-800",
  };

  const statusLabels = {
    completed: "Terminé",
    in_progress: "En cours",
    concept: "Concept",
  };

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Debug logs
  console.log("Current category:", selectedCategory);
  console.log("All projects:", projects);
  console.log("Filtered projects:", filteredProjects);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mes projets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de mes réalisations, allant d'applications
            web modernes aux solutions mobiles innovantes.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="bg-white shadow-lg rounded-full p-1">
              {Object.entries(categories).map(([key, label]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="rounded-full px-6 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-600 data-[state=active]:text-white"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white">
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                    {project.image_url ? (
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <Eye className="w-12 h-12" />
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={`${statusColors[project.status]} border-0`}
                      >
                        {statusLabels[project.status]}
                      </Badge>
                    </div>

                    {/* Quick Actions */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        y: hoveredProject === project.id ? 0 : 20,
                      }}
                      className="absolute inset-0 flex items-center justify-center gap-3"
                    >
                      {project.live_url && (
                        <Button
                          size="sm"
                          className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg"
                          onClick={() =>
                            window.open(project.live_url, "_blank")
                          }
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                      {project.github_url && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white border-white text-gray-900 hover:bg-gray-100 shadow-lg"
                          onClick={() =>
                            window.open(project.github_url, "_blank")
                          }
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                    </motion.div>
                  </div>

                  <CardHeader className="p-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 pt-0">
                    {/* Technologies */}
                    {project.technologies &&
                      project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 4).map((tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-800 transition-colors duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge
                              variant="secondary"
                              className="bg-gray-100 text-gray-500"
                            >
                              +{project.technologies.length - 4}
                            </Badge>
                          )}
                        </div>
                      )}

                    {/* Action Links */}
                    <div className="flex gap-3">
                      {project.live_url && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 transition-colors duration-300"
                          onClick={() =>
                            window.open(project.live_url, "_blank")
                          }
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )}
                      {project.github_url && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 hover:bg-gray-100 transition-colors duration-300"
                          onClick={() =>
                            window.open(project.github_url, "_blank")
                          }
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg">
              Aucun projet trouvé dans cette catégorie.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
