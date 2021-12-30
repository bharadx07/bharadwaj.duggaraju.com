interface Project {
    githubLink: string | null,
    webLink: string | null,
    title: string,
    desc: string,
    tech: string[]
}

export const AllProjects: Project[] = [

]

export const TopProjects: Project[] = [
    {
        webLink: "https://techtoday.azurewebsites.net",
        githubLink: "https://github.com/bharadwajduggaraju/techtoday",
        title: "TechToday",
        desc: "The source for tech news and jobs, easily configured for you.",
        tech: ["React", "Node.js", "SCSS"]
    },
    {
        webLink: null,
        githubLink: "https://github.com/bharadwajduggaraju/seven-servers",
        title: "Seven Servers",
        desc: "A suite of backends created for the sole purpose of testing different programming languages.",
        tech: ["React", "Node.js", "C#"]
    },
    {
        webLink: "https://expo.io/@bharadwajd/BMICalculator",
        githubLink: "https://github.com/bharadwajduggaraju/BMICalculator",
        title: "BMICalculator",
        desc: "A simple yet elegant BMI Calculator (Mobile App).",
        tech: ["React Native", "Node.js", "Expo"]
    },
    {
        webLink: null,
        githubLink: "https://github.com/bharadwajduggaraju/Text-Adventure-DS-Version",
        title: "Text-Adventure-DS-Version",
        desc: "A game for the Legend of the Cauliflower.",
        tech: ["Python", "MongoDB", "PyJWT"]
    },
    {
        webLink: "http://jagathifoundation.org",
        githubLink: "https://github.com/bharadwajduggaraju/jf",
        title: "Jagathi Foundation",
        desc: "Website for a Nonprofit serving the needy in India.",
        tech: ["Strapi", "Typescript", "React"]
    },
    {
        webLink: "https://bharadwaj.duggaraju.com",
        githubLink: "https://github.com/bharadwajduggaraju/bharadwaj.duggaraju.com",
        title: "My Personal Website",
        desc: "My personal website, made with React and Typescript.",
        tech: ["Styled Components", "Typescript", "React"]
    },
]