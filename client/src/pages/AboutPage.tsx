import { Container } from "@/layout/Container";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 min-h-screen text-white pt-28">
      <Container>
        {/* Hero Section */}
        <div className="relative w-full h-[500px] flex items-center justify-center ">
          <img
            src="https://i.ibb.co.com/5Xrtpnkm/talks-colleagues-working-together-modern-office-using-devices-gadgets-creative-meeting.jpg"
            alt="Team Discussion"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center"
            >
              Passionate Minds, Extraordinary Ideas
            </motion.h2>
          </div>
        </div>

        {/* About Section */}
        <div className="py-16 px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-semibold">Who We Are</h3>
              <p className="text-gray-300 leading-relaxed">
                We are a team of innovative thinkers, problem-solvers, and creators.
                Our expertise spans multiple domains, ensuring high-quality services
                and exceptional results.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a collaborative spirit and a vision for the future, we strive to
                push boundaries and deliver top-tier solutions to our clients.
              </p>
            </motion.div>

            {/* Image with Glass Effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src="https://i.ibb.co.com/xtHqX7qN/colleagues-working-project-discussing-details.jpg"
                alt="Collaboration"
                className="w-full h-[350px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-lg font-semibold">Innovation Through Collaboration</p>
              </div>
            </motion.div>
          </div>
        </div>

    
      </Container>
    </div>
  );
};

export default AboutPage;
