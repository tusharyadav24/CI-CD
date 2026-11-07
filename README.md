# 🚀 CI/CD Pipeline with GitHub Actions & AWS EC2

This repository demonstrates a fully automated **CI/CD (Continuous Integration & Continuous Deployment)** pipeline. Any code pushed to the main branch is automatically tested, built, and deployed to an **AWS EC2** instance using **GitHub Actions**.

---

## 🏗️ Architecture & Workflow

1. **Continuous Integration (CI):** 
   * Triggered automatically on `git push` or Pull Request to the `main` branch.
   * Runs automated tests, builds the application, and ensures code health.
2. **Continuous Deployment (CD):** 
   * Once CI checks pass, GitHub Actions connects securely to the **AWS EC2** server via SSH.
   * Pulls the latest code, installs dependencies, and restarts the application (using PM2 / Docker).

---

## 🛠️ Tech Stack

* **Cloud Provider:** AWS (Amazon Web Services) - EC2
* **OS:** Ubuntu (on EC2)
* **Automation & CI/CD:** GitHub Actions
* **Version Control:** Git & GitHub
* **Process Manager / Runtime:** Node.js / PM2 *(Aap apne tech stack ke hisab se change kar sakte hain)*

---

## ⚙️ GitHub Actions Workflow Setup (`.github/workflows/deploy.yml`)

To make this pipeline work, the following secrets must be configured in your GitHub Repository Settings (`Settings > Secrets and variables > Actions`):

* `EC2_HOST` - Public IP address of your AWS EC2 instance
* `EC2_USER` - SSH username (e.g., `ubuntu` for Ubuntu instances)
* `EC2_SSH_KEY` - Private SSH key (`.pem` file content) used to access EC2

---
