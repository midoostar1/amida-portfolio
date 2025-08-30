"use client";

import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Code2,
  Smartphone,
  Server,
  Palette,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// THEME
const gradient = "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500";
const glass =
  "backdrop-blur-xl bg-white/70 dark:bg-neutral-900/60 border border-white/30 dark:border-neutral-800/60";

// DATA
const profile = {
  name: "Amida Fombutu",
  title: "Full-Stack & React Native Developer",
  location: "Oklahoma City, OK",
  email: "amida.fombutu@gmail.com",
  phone: "(405) 322-3455",
  summary:
    "I build fast, elegant web and mobile apps. Over 2 years of experience across React, React Native, Svelte, WebFlow, and Spring Boot. I care about beautiful UX, clean architecture, and measurable outcomes.",
  links: {
    github: "https://github.com/midoostar1",
    linkedin: "https://www.linkedin.com/in/amida-l-fombutu/",
    resume: "/Amida_Fombutu_Resume.pdf",
  },
};

const skills = [
  { name: "React.js", icon: <Code2 className="w-5 h-5" /> },
  { name: "React Native", icon: <Smartphone className="w-5 h-5" /> },
  { name: "TypeScript", icon: <Code2 className="w-5 h-5" /> },
  { name: "Tailwind CSS", icon: <Palette className="w-5 h-5" /> },
  { name: "Java Spring Boot", icon: <Server className="w-5 h-5" /> },
  { name: "REST APIs", icon: <Server className="w-5 h-5" /> },
  { name: "MySQL", icon: <Server className="w-5 h-5" /> },
  { name: "Svelte / Webflow", icon: <Palette className="w-5 h-5" /> },
];

const projects = [
  {
    title: "WellnessGo — React Native Mobile App",
    blurb:
      "Cross-platform fitness coaching app with offline workouts, push notifications, and Stripe subscriptions.",
    stack: ["React Native", "Expo", "TypeScript", "Stripe", "Supabase"],
    impact: "Increased weekly active users by 24% after redesign.",
    url: "#",
  },
  {
    title: "ShopLite — Headless E-commerce",
    blurb:
      "SvelteKit storefront with Spring Boot API and MySQL. Accessible UI, blazing fast pages.",
    stack: ["SvelteKit", "Spring Boot", "MySQL", "Tailwind"],
    impact: "Reduced TTFB by 38% and improved conversion by 12%.",
    url: "#",
  },
  {
    title: "CareSync — Admin Dashboard",
    blurb:
      "Role-based dashboard for a homecare provider. Audit logs, charts, and bulk CSV import.",
    stack: ["React", "TypeScript", "REST", "Netlify"],
    impact: "Cut manual ops time by ~6 hrs/week.",
    url: "#",
  },
];

const experience = [
  {
    role: "Freelance Full-Stack Web & Mobile Developer",
    period: "Jul 2022 – Present",
    points: [
      "Build and ship responsive web apps and cross-platform mobile apps (React Native).",
      "Implement REST integrations, auth, and performance optimizations (Core Web Vitals).",
      "Collaborate with designers; translate Figma to pixel-perfect components.",
      "Improved engagement by ~20% across client projects via UX and performance tuning.",
    ],
  },
  {
    role: "Allied Trade Specialist — US Army, OK National Guard",
    period: "Jan 2018 – Present",
    points: [
      "Lead small teams and optimize workflows; strong ownership and communication.",
      "Transfer leadership discipline to delivery cadence and code quality.",
    ],
  },
];

const education = [
  {
    school: "Codeup, Dallas — Full-Stack Program",
    period: "Jul 2022 – Jan 2023",
    detail: "670+ hours across front-end, back-end, and deployment.",
  },
  {
    school: "Oklahoma City Community College — Computer Science (in progress)",
    period: "Aug 2022 – Present",
    detail: "35 credit hours completed.",
  },
];

// COMPONENTS
const Section = ({
  id,
  title,
  children,
}: React.PropsWithChildren<{ id: string; title: string }>) => (
  <section id={id} className="scroll-mt-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6"
      >
        {title}
      </motion.h2>
      {children}
    </div>
  </section>
);

const Pill = ({ children }: React.PropsWithChildren) => (
  <span className={`text-xs md:text-sm rounded-full px-3 py-1 border ${glass}`}>
    {children}
  </span>
);

const GradientBorder = ({ children }: React.PropsWithChildren) => (
  <div className="relative rounded-2xl p-[1px] overflow-hidden">
    <div className={`absolute inset-0 ${gradient} blur opacity-60`} />
    <div className={`relative rounded-2xl ${glass}`}>{children}</div>
  </div>
);

function EmailButton() {
  const email = "amida.fombutu@gmail.com";
  const [copied, setCopied] = useState(false);

  return (
    <Button
      asChild
      variant="outline"
      className="gap-2"
      onClick={async (e) => {
        // try to open mail client
        window.location.href = `mailto:${email}`;
        // fallback: copy to clipboard & show a small notice
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch {}
      }}
    >
      <a href={`mailto:${email}`} aria-label="Email Me">
        <Mail className="w-4 h-4" /> {copied ? "Copied!" : "Email Me"}
      </a>
    </Button>
  );
}

// PAGE — default export
export default function Page() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-white/30 dark:border-neutral-800/60 backdrop-blur bg-white/70 dark:bg-neutral-950/60">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">
            {profile.name}
          </a>
          <div className="hidden sm:flex items-center gap-4">
            <a href="#projects" className="text-sm hover:opacity-80">
              Projects
            </a>
            <a href="#skills" className="text-sm hover:opacity-80">
              Skills
            </a>
            <a href="#experience" className="text-sm hover:opacity-80">
              Experience
            </a>
            <a href="#contact" className="text-sm hover:opacity-80">
              Contact
            </a>
            <Button asChild className="gap-2">
              <a
                href={profile.links.resume || "#"}
                target="_blank"
                rel="noreferrer"
              >
                <Download className="w-4 h-4" /> Resume
              </a>
            </Button>

            <Button
              variant="outline"
              onClick={() => setDark((d) => !d)}
              className="gap-2"
            >
              {dark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
              {dark ? "Light" : "Dark"}
            </Button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-200/40 via-transparent to-transparent dark:from-indigo-600/10" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 text-xs md:text-sm mb-4">
                <Pill>
                  <MapPin className="w-3.5 h-3.5 inline mr-1" />{" "}
                  {profile.location}
                </Pill>
                <Pill>Open to work</Pill>
                <Pill>React Native • Web</Pill>
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
                {profile.title}
              </h1>
              <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-prose">
                {profile.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="gap-2">
                  <a href="#projects">
                    <ArrowRight className="w-4 h-4" /> View Projects
                  </a>
                </Button>
                <EmailButton />
                <Button asChild variant="outline" className="gap-2">
                  <a href={`tel:${profile.phone}`}>
                    <Phone className="w-4 h-4" /> Call
                  </a>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href={profile.links.github}
                  className="hover:opacity-80"
                  aria-label="GitHub"
                >
                  <Github />
                </a>
                <a
                  href={profile.links.linkedin}
                  className="hover:opacity-80"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <GradientBorder>
                <div className="p-6 md:p-10 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <Card className={glass}>
                      <CardContent className="p-6">
                        <Smartphone className="w-6 h-6 mb-3" />
                        <div className="font-medium">React Native</div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                          Ship iOS/Android from one codebase.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className={glass}>
                      <CardContent className="p-6">
                        <Code2 className="w-6 h-6 mb-3" />
                        <div className="font-medium">React + TypeScript</div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                          Robust UI components, state, and tests.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className={glass}>
                      <CardContent className="p-6">
                        <Server className="w-6 h-6 mb-3" />
                        <div className="font-medium">APIs & Auth</div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                          REST, JWT, and secure data flows.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className={glass}>
                      <CardContent className="p-6">
                        <Palette className="w-6 h-6 mb-3" />
                        <div className="font-medium">Design Systems</div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                          Tailwind + shadcn/ui for sleek UX.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </GradientBorder>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <Section id="projects" title="Selected Projects">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              <GradientBorder>
                <div className="p-6 rounded-2xl h-full flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold leading-tight">
                      {p.title}
                    </h3>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 text-sm hover:opacity-80"
                    >
                      <span>View</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                    {p.blurb}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Pill key={s}>{s}</Pill>
                    ))}
                  </div>
                  <div className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
                    {p.impact}
                  </div>
                </div>
              </GradientBorder>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills">
        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <Pill key={s.name}>
              <span className="inline-flex items-center gap-2">
                {s.icon}
                {s.name}
              </span>
            </Pill>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        <div className="grid md:grid-cols-2 gap-6">
          {experience.map((e) => (
            <GradientBorder key={e.role}>
              <div className="p-6 rounded-2xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold leading-tight">
                    {e.role}
                  </h3>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {e.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-2 text-sm list-disc pl-5">
                  {e.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </GradientBorder>
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" title="Education">
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((ed) => (
            <GradientBorder key={ed.school}>
              <div className="p-6 rounded-2xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold leading-tight">
                    {ed.school}
                  </h3>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {ed.period}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2">
                  {ed.detail}
                </p>
              </div>
            </GradientBorder>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <GradientBorder>
          <div className="p-6 md:p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold">
                  Let’s build something great
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mt-2">
                  I’m available for freelance work and full-time roles. Reach
                  out via email or book a quick call.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button asChild className="gap-2">
                    <a href={`mailto:${profile.email}`}>
                      <Mail className="w-4 h-4" /> {profile.email}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <a href={`tel:${profile.phone}`}>
                      <Phone className="w-4 h-4" /> {profile.phone}
                    </a>
                  </Button>
                </div>
              </div>
              <div className="space-y-3">
                <div className={`rounded-xl p-4 ${glass}`}>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">
                    Based in
                  </div>
                  <div className="font-medium">{profile.location}</div>
                </div>
                <div className={`rounded-xl p-4 ${glass}`}>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">
                    Online
                  </div>
                  <div className="flex items-center gap-4 mt-1">
                    <a
                      href={profile.links.github}
                      className="inline-flex items-center gap-2 hover:opacity-80"
                    >
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                    <a
                      href={profile.links.linkedin}
                      className="inline-flex items-center gap-2 hover:opacity-80"
                    >
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GradientBorder>
      </Section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind,
        and shadcn/ui.
      </footer>
    </div>
  );
}
