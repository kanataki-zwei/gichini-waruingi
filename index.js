#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const showIntro = () => {
  console.log(chalk.bold.green("\nPatrick Gichini Waruingi — Data & Analytics Engineer"));
  console.log(chalk.white("🌍 Nairobi, Kenya | 🌐 https://www.gichiniwaruingi.com | 📧 dev@gichiniwaruingi.com\n"));
};

const showSkills = () => {
  console.log(chalk.blue("\n🔧 Skills:"));
  console.log("  - Data Engineering: Python, SQL, Airbyte, Airflow, Prefect, dbt");
  console.log("  - BI: Superset, Looker Studio, Metabase, Power BI");
  console.log("  - DevOps: Kubernetes, Docker, Terraform\n");
};

const showExperience = () => {
  console.log(chalk.yellow("\n💼 Experience:"));
  console.log("  - Wowzi Technologies — Senior Data Scientist / Data Lead / Data Protection Officer (2022 = 2025)");
  console.log("  - Faraja Cancer Center — Volunteer: Data Systems Consultant (2024 - Present)");
  console.log("  - Iconia Technologies - Tech Lead / Senior Data & Analytics Engineer (2017 - 2022)");
  console.log("  - Learning Lions — ICT Trainer (2016 - 2017)");
  console.log("  - Tunapanda Institute — Network Engineer & ICT Trainer (2015 - 2017)");
};

const showProjects = () => {
  console.log(chalk.magenta("\n📚 Projects:"));
  console.log(chalk.white("  - Cancer Support Therapy Booking system: Streamlit"));
  console.log(chalk.gray("https://github.com/kanataki-zwei/faraja-therapy-booking\n"));
  console.log(chalk.white("  - Social Scoring Model: Machine Learning Model"));
  console.log(chalk.gray("\n"));
  console.log(chalk.white("  - Transaction Classification: Machine learning demo on classifying financial transaction types"));
  console.log(chalk.gray("https://github.com/kanataki-zwei/transaction-classification-analysis\n"));
};

const showExit = () => {
  console.log(chalk.cyan("📦 To view this resume again:"));
  console.log(chalk.white("    npx gichini-resume\n"));
  process.exit(0);
};

const promptUser = async () => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "section",
      message: "What would you like to view?",
      choices: [
        "👋 Intro",
        "🔧 Skills",
        "💼 Experience",
        "📚 Projects",
        "🚪 Exit"
      ]
    }
  ]);

  switch (answer.section) {
    case "👋 Intro":
      showIntro();
      break;
    case "🔧 Skills":
      showSkills();
      break;
    case "💼 Experience":
      showExperience();
      break;
    case "📚 Projects":
      showProjects();
      break;
    case "🚪 Exit":
      showExit();
      return;
  }

  promptUser();
};

promptUser();
