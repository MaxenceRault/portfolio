"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Définition du type des données du formulaire
interface ContactFormData {
  name: string;
  email: string;
  subject: "Demande générale" | "Collaboration projet" | "Signalement de bug" | "Autre";
  message: string;
}

// Définition du schéma de validation avec Zod
const contactSchema = z.object({
  name: z.string().min(2, "Le nom est trop court"),
  email: z.string().email("Adresse email invalide"),
  subject: z.enum(["Demande générale", "Collaboration projet", "Signalement de bug", "Autre"]),
  message: z.string().min(10, "Le message est trop court"),
});

export default function HeroContact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erreur lors de l&apos;envoi du message:", error);
      setStatus("error");
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-16">
      {/* Fond Visuel */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 opacity-90"></div>

      {/* Conteneur du formulaire */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl w-full p-8 bg-gray-800/80 backdrop-blur-md shadow-lg rounded-xl border border-white/10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-primary text-center mb-6"
        >
          ✉️ Me Contacter
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* Nom */}
          <div>
            <label className="block text-lg text-white mb-2">Nom</label>
            <motion.input
              type="text"
              {...register("name")}
              whileFocus={{ scale: 1.02, borderColor: "#0ea5e9" }}
              transition={{ duration: 0.3 }}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-primary focus:outline-none"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg text-white mb-2">Email</label>
            <motion.input
              type="email"
              {...register("email")}
              whileFocus={{ scale: 1.02, borderColor: "#0ea5e9" }}
              transition={{ duration: 0.3 }}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-primary focus:outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Objet */}
          <div>
            <label className="block text-lg text-white mb-2">Objet</label>
            <motion.select
              {...register("subject")}
              whileFocus={{ scale: 1.02, borderColor: "#0ea5e9" }}
              transition={{ duration: 0.3 }}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <option value="Demande générale">Demande générale</option>
              <option value="Collaboration projet">Collaboration projet</option>
              <option value="Signalement de bug">Signalement de bug</option>
              <option value="Autre">Autre</option>
            </motion.select>
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-lg text-white mb-2">Message</label>
            <motion.textarea
              {...register("message")}
              rows={4}
              whileFocus={{ scale: 1.02, borderColor: "#0ea5e9" }}
              transition={{ duration: 0.3 }}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-primary focus:outline-none"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          {/* Bouton d'envoi */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="w-full py-3 rounded-md bg-primary text-white font-bold hover:bg-secondary transition-all shadow-md"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
          </motion.button>

          {/* Messages de confirmation ou d'erreur */}
          {status === "success" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-green-500 text-center mt-2">
              ✅ Message envoyé avec succès !
            </motion.p>
          )}
          {status === "error" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-red-500 text-center mt-2">
              ❌ Échec de l&apos;envoi du message. Réessayez.
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
}
