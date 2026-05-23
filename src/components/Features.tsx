import { motion } from "motion/react";
import { CheckCircle2, UserCheck, Briefcase, Laptop, TrendingUp, Users } from "lucide-react";

const features = [
  {
    name: "Beginner Friendly System",
    description: "Step-by-step guidance designed specifically for people with zero prior experience.",
    icon: UserCheck,
  },
  {
    name: "Professional Guidance",
    description: "Get mentored by experts who will lead you through your entire journey.",
    icon: Users,
  },
  {
    name: "Flexible Online Work",
    description: "Create your own schedule and work from anywhere at any time.",
    icon: Laptop,
  },
  {
    name: "Modern Skill Training",
    description: "Learn in-demand skills that are relevant in today's digital economy.",
    icon: Briefcase,
  },
  {
    name: "Leadership Development",
    description: "Grow your confidence and abilities with our advanced leadership modules.",
    icon: TrendingUp,
  },
  {
    name: "Long-Term Growth Support",
    description: "Ongoing career advancement opportunities to secure your financial future.",
    icon: CheckCircle2,
  },
];

export function Features() {
  return (
    <div id="why-us" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 uppercase tracking-wide">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-display font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Thousands Trust Our Platform
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            We provide a complete ecosystem designed to help you succeed from day one. You focus on learning and working; we provide the support.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div 
                key={feature.name} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-indigo-100 transition-colors shadow-sm"
              >
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-slate-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600/10 mb-4">
                    <feature.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                  </div>
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <span className="font-semibold text-slate-900 mb-2 block">{feature.name}</span>
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
