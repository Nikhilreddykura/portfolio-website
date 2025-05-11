import { Code, Mail, Github, Linkedin, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import Link from "next/link"
import { Navigation3D } from "@/components/navigation-3d"

export default function Home() {
  return (
    <div className="min-h-screen bg-standard-dark">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-header backdrop-blur supports-[backdrop-filter]:bg-header/80">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-lg instagram-gradient">Sai Nikhil Reddy Kura</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-primary">
                About
              </Link>
              <Link href="#experience" className="transition-colors hover:text-primary">
                Experience
              </Link>
              <Link href="#education" className="transition-colors hover:text-primary">
                Education
              </Link>
              <Link href="#skills" className="transition-colors hover:text-primary">
                Skills
              </Link>
              <Link href="#projects" className="transition-colors hover:text-primary">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="flex items-center gap-2">
                <a
                  href="#contact"
                  className="ml-auto hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary/20 bg-card hover:bg-primary/10 hover:text-primary h-9 px-4 py-2"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
                <a
                  href="https://drive.google.com/file/d/1TG8spTDNvPkiLQETTA1NiZ15Ljhf6NFD/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary/20 bg-card hover:bg-primary/10 hover:text-primary h-9 px-4 py-2"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-6 md:py-12">
        {/* Hero Section */}
        <section id="about" className="mx-auto max-w-5xl py-8 md:py-12 lg:py-16">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sai Nikhil Reddy Kura</h1>
                <h2 className="text-xl font-medium text-muted-foreground">Web Developer & Data Analyst</h2>
              </div>
              <div className="flex gap-2">
                <Button asChild variant="outline" size="sm">
                  <a
                    href="https://www.linkedin.com/in/kura-sai-nikhil-reddy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href="https://github.com/Nikhilreddykura" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a
                    href="https://www.hackerrank.com/profile/sainikhilreddy22"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code className="mr-2 h-4 w-4" />
                    HackerRank
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/profile.jpg"
                alt="Sai Nikhil Reddy Kura"
                className="aspect-square overflow-hidden rounded-full object-cover object-center border-4 border-primary/20 shadow-lg shadow-primary/20"
                width={300}
                height={300}
              />
            </div>
          </div>
        </section>

        {/* 3D Navigation */}
        <Navigation3D />

        {/* Experience Section */}
        <section id="experience" className="mx-auto max-w-5xl py-8 md:py-12 space-y-6">
          <h2 className="text-2xl font-bold">Professional Experience</h2>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold">Information Technology Intern</h3>
                  <p className="text-sm text-muted-foreground">Blackmore Partners</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">Remote, USA</p>
                  <p className="text-sm text-muted-foreground">Mar 2025 - May 2025</p>
                </div>
              </div>
              <ul className="ml-6 list-disc space-y-2 text-sm">
                <li>
                  Collaborated with cross-functional teams to provide efficient IT support and deliver innovative,
                  technology-driven solutions.
                </li>
                <li>
                  Managed a database of 5,000+ client records, ensuring data integrity and accuracy to support deal
                  marketing materials for private equity initiatives.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold">AI Product Designer</h3>
                  <p className="text-sm text-muted-foreground">Reality AI Lab</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">Remote, USA</p>
                  <p className="text-sm text-muted-foreground">Dec 2024 - Present</p>
                </div>
              </div>
              <ul className="ml-6 list-disc space-y-2 text-sm">
                <li>
                  Designed and iterated on intuitive user interfaces for tools such as the Marvel Educator Spaces
                  Discovery and Marvel Educator Assistants Chat, focusing on accessibility, functionality, and impact.
                </li>
                <li>
                  Used Figma to create high-fidelity prototypes, ensuring seamless communication of design concepts to
                  cross-functional teams.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold">Web Developer & Data Analyst</h3>
                  <p className="text-sm text-muted-foreground">GRINIsta</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">Delhi, INDIA</p>
                  <p className="text-sm text-muted-foreground">Jan 2021 - Feb 2023</p>
                </div>
              </div>

              <div className="mb-3">
                <h4 className="text-sm font-semibold mb-2">Web Developer Responsibilities:</h4>
                <ul className="ml-6 list-disc space-y-2 text-sm">
                  <li>
                    Developed and maintained responsive websites using HTML, CSS, JavaScript, and React.js, improving
                    user engagement by 30%.
                  </li>
                  <li>Integrated RESTful APIs and optimized front-end performance, reducing page load time by 40%.</li>
                  <li>Implemented SEO best practices and analytics tracking, increasing organic traffic by 25%.</li>
                  <li>
                    Collaborated with UX/UI designers to deliver high-quality user interfaces aligned with client
                    requirements.
                  </li>
                  <li>Utilized Git for version control and coordinated deployments via CI/CD pipelines.</li>
                </ul>
              </div>

              <div className="mb-3">
                <h4 className="text-sm font-semibold mb-2">Data Analyst Responsibilities:</h4>
                <ul className="ml-6 list-disc space-y-2 text-sm">
                  <li>
                    Analyzed user behavior and website performance using Google Analytics and Python (Pandas, NumPy,
                    Matplotlib).
                  </li>
                  <li>
                    Built dashboards and reports using Tableau/Power BI to support decision-making and business
                    strategy.
                  </li>
                  <li>Automated data cleaning and preprocessing pipelines, reducing manual effort by 50%.</li>
                  <li>Conducted A/B testing and provided insights that boosted feature adoption by 15%.</li>
                  <li>Leveraged SQL to extract, manipulate, and report on large datasets from relational databases.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2">Tools & Technologies:</h4>
                <p className="text-sm">
                  HTML, CSS, JavaScript, React.js, Python, SQL, Tableau, Power BI, Git, Google Analytics, Pandas, NumPy,
                  Matplotlib, REST APIs
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section id="education" className="mx-auto max-w-5xl py-8 md:py-12 space-y-6">
          <h2 className="text-2xl font-bold">Education</h2>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold">Master of Science in Information Systems</h3>
                  <p className="text-sm text-muted-foreground">Saint Louis University</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">Saint Louis, USA</p>
                  <p className="text-sm text-muted-foreground">Jan 2024 - May 2025</p>
                </div>
              </div>
              <p className="text-sm">CGPA: 3.52</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold">Bachelor of Science in Physical Science with Electronics</h3>
                  <p className="text-sm text-muted-foreground">University of Delhi</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">New Delhi, INDIA</p>
                  <p className="text-sm text-muted-foreground">Sep 2020 - Jun 2023</p>
                </div>
              </div>
              <p className="text-sm">CGPA: 3.00</p>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mx-auto max-w-5xl py-8 md:py-12 space-y-6">
          <h2 className="text-2xl font-bold">Technical Skills</h2>

          <Card>
            <CardContent className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-lg font-medium">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">C</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Python</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">HTML</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-medium">Libraries/Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Numpy</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Pandas</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Scikit-learn</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Matplotlib</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Seaborn</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">PyTorch</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Hadoop</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-medium">Tools / Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Git</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">VS Code</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Power BI</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Agile</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Scrum</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Jira</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">SDLC</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">AWS</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Tableau</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">EC2</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">EMR</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">PySpark</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">JSON</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">API</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Sqoop</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Docker</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Kafka</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Scala</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">XML</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">Apache</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">ETL</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-medium">Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">SQL</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">MySQL</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">NoSQL</Badge>
                    <Badge className="bg-secondary/50 hover:bg-secondary/70 transition-colors">MongoDB</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mx-auto max-w-5xl py-8 md:py-12 space-y-6">
          <h2 className="text-2xl font-bold">Projects & Open-Source</h2>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold">GitHub User Finder</h3>
                  <div className="mt-1 flex flex-wrap gap-2">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">GitHub API</Badge>
                    <Badge variant="outline">CSS</Badge>
                  </div>
                </div>
                <Button asChild variant="outline" size="sm">
                  <a
                    href="https://github.com/Nikhilreddykura/Github-Profile-Finder-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm"
                  >
                    View Project
                  </a>
                </Button>
              </div>
              <ul className="ml-6 list-disc space-y-2 text-sm">
                <li>
                  Developed a simple React application to search for GitHub users and display their profiles, enhancing
                  user experience with a clean and intuitive interface.
                </li>
                <li>
                  Implemented search functionality that allows users to find GitHub profiles by username, leveraging the
                  GitHub API for real-time data retrieval.
                </li>
                <li>
                  Designed responsive UI components to display user details including profile picture, name, bio, and
                  direct links to GitHub profiles, improving accessibility and information discovery.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold">Marvel AI - AI Teaching Assistant</h3>
                  <div className="mt-1 flex flex-wrap gap-2">
                    <Badge variant="outline">Figma</Badge>
                    <Badge variant="outline">UX/UI Design</Badge>
                    <Badge variant="outline">Wireframing</Badge>
                  </div>
                </div>
                <Button asChild variant="outline" size="sm">
                  <a
                    href="https://github.com/Nikhilreddykura/marvel-platform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm"
                  >
                    View Project
                  </a>
                </Button>
              </div>
              <ul className="ml-6 list-disc space-y-2 text-sm">
                <li>
                  Designed and iterated on user-friendly interfaces for Marvel Educator Spaces Discovery and Marvel
                  Educator Assistants Chat, improving task efficiency by 35% and user engagement by 40% through enhanced
                  accessibility and functionality.
                </li>
                <li>
                  Created high-fidelity prototypes in Figma, reducing design-to-development handoff time by 50% and
                  ensuring seamless collaboration with cross-functional teams.
                </li>
                <li>
                  Conducted user research with 200+ educators, leading to data-driven UX enhancements that boosted
                  adoption rates by 30%.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold">FutureWorks Solutions - An Employability Analytics Application</h3>
                  <div className="mt-1 flex flex-wrap gap-2">
                    <Badge variant="outline">Web scraping</Badge>
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Machine Learning</Badge>
                    <Badge variant="outline">Power BI</Badge>
                  </div>
                </div>
                <Button asChild variant="outline" size="sm">
                  <a
                    href="https://v0-masters-research-project.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm"
                  >
                    View Project
                  </a>
                </Button>
              </div>
              <ul className="ml-6 list-disc space-y-2 text-sm">
                <li>
                  Developed an interactive Career Path Recommendation Dashboard, integrating real-time job market data
                  from LinkedIn, Indeed, and Glassdoor, increasing career decision accuracy by 60% for users.
                </li>
                <li>
                  Designed and launched an Industry Trend Dashboard, providing real-time insights on emerging and
                  declining job sectors, utilized by 5,000+ users for data-driven workforce planning.
                </li>
                <li>
                  Implemented Python, SQL, and Power BI/Tableau to analyze and visualize job trends, reducing manual
                  research time by 70% and enhancing data accessibility by 80%.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Certifications Section */}
        <section className="mx-auto max-w-5xl py-8 md:py-12">
          <h2 className="text-2xl font-bold mb-6">Certifications</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Academy Accreditation - Generative AI Fundamentals</h3>
                    <p className="text-sm text-muted-foreground">Databricks</p>
                    <p className="text-xs text-muted-foreground mt-1">Issued Jun 2024 · Expires Jun 2026</p>
                    <p className="text-xs text-muted-foreground">Credential ID: 106849264</p>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://credentials.databricks.com/a8c9de56-e068-4584-aca9-d507998cf860#acc.qoAXWFTf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs"
                    >
                      View Certificate
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Introduction to TensorFlow for AI, ML, and Deep Learning</h3>
                    <p className="text-sm text-muted-foreground">Coursera</p>
                    <p className="text-xs text-muted-foreground mt-1">Issued Jul 2020</p>
                    <p className="text-xs text-muted-foreground">Credential ID: GRCNN6EFM5UV</p>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://www.coursera.org/account/accomplishments/certificate/GRCNN6EFM5UV"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs"
                    >
                      View Certificate
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">AI For Everyone</h3>
                    <p className="text-sm text-muted-foreground">Coursera</p>
                    <p className="text-xs text-muted-foreground mt-1">Issued Jul 2020</p>
                    <p className="text-xs text-muted-foreground">Credential ID: YNJAF9CT6RV5</p>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://www.coursera.org/account/accomplishments/certificate/YNJAF9CT6RV5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs"
                    >
                      View Certificate
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Python (Basic)</h3>
                    <p className="text-sm text-muted-foreground">HackerRank</p>
                    <p className="text-xs text-muted-foreground mt-1">Issued Feb 2022</p>
                    <p className="text-xs text-muted-foreground">Credential ID: 5061A3A479DF</p>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://www.hackerrank.com/certificates/5061a3a479df"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs"
                    >
                      View Certificate
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Getting started with HTML and CSS</h3>
                    <p className="text-sm text-muted-foreground">Udemy</p>
                    <p className="text-xs text-muted-foreground mt-1">Issued Dec 2021</p>
                    <p className="text-xs text-muted-foreground">
                      Credential ID: UC-ad90f812-9afb-4cd5-961e-417720aad8e8
                    </p>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-ad90f812-9afb-4cd5-961e-417720aad8e8.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs"
                    >
                      View Certificate
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mx-auto max-w-5xl py-8 md:py-12">
          <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        <a href="mailto:sainikhilreddy.kura@slu.edu" className="hover:underline">
                          sainikhilreddy.kura@slu.edu
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <p className="text-sm text-muted-foreground">
                        <a
                          href="https://www.linkedin.com/in/kura-sai-nikhil-reddy/"
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Connect on LinkedIn
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <p className="text-sm text-muted-foreground">
                        <a
                          href="https://github.com/Nikhilreddykura"
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View my projects
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">HackerRank</h3>
                      <p className="text-sm text-muted-foreground">
                        <a
                          href="https://www.hackerrank.com/profile/sainikhilreddy22"
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View my profile
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t bg-footer">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 Sai Nikhil Reddy Kura. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="mailto:sainikhilreddy.kura@slu.edu"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kura-sai-nikhil-reddy/"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Nikhilreddykura"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
