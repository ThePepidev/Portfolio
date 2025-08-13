import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Code, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skill, Experience } from "@/entities/all";

export default function About() {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [skillsData, experiencesData] = await Promise.all([
      Skill.list(),
      Experience.list("-start_date"),
    ]);
    setSkills(skillsData);
    setExperiences(experiencesData);
  };

  const skillCategories = {
    frontend: { name: "Frontend", color: "bg-blue-500" },
    backend: { name: "Backend", color: "bg-green-500" },
    database: { name: "Base de données", color: "bg-purple-500" },
    tools: { name: "Outils", color: "bg-orange-500" },
    soft_skills: { name: "Compétences transversales", color: "bg-pink-500" },
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            À propos de moi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Développeur passionné étudiant à Epitech, je fais autant de la
            création d'applications web que du développement logiciel.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full shadow-xl border-0 bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Mon parcours
                  </h3>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Actuellement en Master à Epitech pour devenir expert des
                    technologies de l’information, je réalise mon stage en tant
                    que développeur full stack.
                  </p>
                  <p>
                    Initialement formé au backend avec Express, FastAPI, Python
                    et JavaScript, j’ai élargi mes compétences au frontend par
                    curiosité personnelle, avant de les mettre en pratique dans
                    un contexte professionnel.
                  </p>
                  <p>
                    Ce qui me motive le plus, c’est de voir un projet abouti et
                    utile, qu’il serve directement un client ou contribue à la
                    réussite de l’entreprise. Autonome dans mon travail, j’ai
                    également consolidé au fil de mes études de solides
                    compétences en collaboration et en travail d’équipe.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full shadow-xl border-0 bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Compétences
                  </h3>
                </div>
                <div className="space-y-6">
                  {Object.entries(skillCategories).map(([key, category]) => {
                    const categorySkills = skills.filter(
                      (skill) => skill.category === key
                    );
                    if (categorySkills.length === 0) return null;

                    return (
                      <div key={key} className="space-y-3">
                        <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                          <div
                            className={`w-3 h-3 rounded-full ${category.color}`}
                          />
                          {category.name}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {categorySkills.map((skill) => (
                            <Badge
                              key={skill.id}
                              variant="secondary"
                              className="bg-white border border-gray-200 hover:border-amber-300 transition-colors duration-300"
                            >
                              {skill.name}
                              <div className="ml-2 flex gap-1">
                                {Array.from({ length: skill.proficiency }).map(
                                  (_, i) => (
                                    <div
                                      key={i}
                                      className="w-1.5 h-1.5 bg-amber-500 rounded-full"
                                    />
                                  )
                                )}
                              </div>
                            </Badge>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">
              Expérience professionnelle
            </h3>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <div className="flex items-center gap-4 flex-1">
                        {/* Company Logo */}
                        {exp.logo && (
                          <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden border-2 border-gray-100">
                            <img
                              src={exp.logo}
                              alt={`Logo ${exp.company}`}
                              className="w-8 h-8 object-contain"
                              onError={(e) => {
                                e.target.style.display = "none";
                                e.target.nextSibling.style.display = "flex";
                              }}
                            />
                            <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full items-center justify-center text-white text-sm font-bold hidden">
                              {exp.company.charAt(0)}
                            </div>
                          </div>
                        )}
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">
                            {exp.position}
                          </h4>
                          <p className="text-lg text-amber-600 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {formatDate(exp.start_date)} -{" "}
                        {exp.end_date ? formatDate(exp.end_date) : "Présent"}
                        {exp.is_current && (
                          <Badge className="ml-2 bg-green-100 text-green-800">
                            Actuel
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="space-y-2">
                        <h5 className="font-semibold text-gray-800">
                          Réalisations clés :
                        </h5>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
