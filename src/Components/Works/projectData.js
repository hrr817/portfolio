import weatherappUrl from "../../assets/thumbnails/weatherapp.jpg";
import notesUrl from "../../assets/thumbnails/notesapp.jpg";
import plutusUrl from "../../assets/thumbnails/plutus.jpg";
import calculatorUrl from "../../assets/thumbnails/calculator.jpg";
import akatsukiUrl from "../../assets/thumbnails/akatsuki.jpg";
import morvinandanUrl from "../../assets/thumbnails/morvinandan.jpg";

const projectData = [
  {
    name: "weatherapp-react",
    imageUrl: weatherappUrl,
    host_name: "netlify",
    hostUrl: "https://weather-app-hrr817.netlify.app/",
    repo_name: "/weatherapp.git",
    repoUrl: "https://github.com/hrr817/weatherapp.git",
    status: "completed",
    tags: ["react", "openweatherapi", "geolocation"],
  },
  {
    name: "notes-react",
    imageUrl: notesUrl,
    host_name: "netlify",
    hostUrl: "https://notes-react-app-hrr817.netlify.app/",
    repo_name: "/notes-react.git",
    repoUrl: "https://github.com/hrr817/notes-react",
    status: "completed",
    tags: ["react", "dictionaryapi"],
  },
  {
    name: "plutus-ecommerce",
    imageUrl: plutusUrl,
    host_name: "netlify",
    hostUrl: "https://plutus-ecommerce.netlify.app/",
    repo_name: "/plutus-ecommerce-public.git",
    repoUrl: "https://github.com/hrr817/plutus-ecommerce-public.git",
    status: "abandoned",
    tags: ["react", "ecommercejs", "stripe"],
  },
  {
    name: "calculator",
    imageUrl: calculatorUrl,
    host_name: "github/pages",
    hostUrl: "https://hrr817.github.io/BasicCalculator/",
    repo_name: "/BasicCalculator.git",
    repoUrl: "https://github.com/hrr817/BasicCalculator",
    status: "completed",
    tags: ["html", "css", "vanilla javascript"],
  },
  {
    name: "akatsuki-squad",
    imageUrl: akatsukiUrl,
    host_name: "github/pages",
    hostUrl: "https://hrr817.github.io/theakatsukisquad/",
    repo_name: "/theakatsukisquad",
    repoUrl: "https://github.com/hrr817/theakatsukisquad",
    status: "completed",
    tags: ["javascript", "css", "jquery"],
  },
  {
    name: "morvinandan",
    imageUrl: morvinandanUrl,
    host_name: "github/pages",
    hostUrl: "https://hrr817.github.io/morvinandan-website/",
    repo_name: "/morvinandan-website.git",
    repoUrl: "https://github.com/hrr817/morvinandan-website.git",
    status: "completed",
    tags: ["html", "css", "javascript"],
  },
];

export { projectData };
