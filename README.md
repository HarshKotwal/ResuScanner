# 📄 ResuScanner – AI-Powered ATS Resume Analyzer

ResuScanner is a full-stack web application that analyzes resumes using AI and provides ATS scores, structured feedback, and improvement suggestions based on job roles and descriptions.

It is designed to stimulate how modern Applicant Tracking Systems eveluate resumes, helping users optimize their profiles before submitting to recruiters

## ✨ Features

- Upload resume in PDF format
- Enter job title, job description, and company name
- AI-powered ATS scoring and analysis
- Section-wise feedback (ATS, Content, Skills, Structure, Tone & Style)
- Visual score indicators and detailed breakdown
- Resume preview with generated image snapshot
- Persistent resume history with revisit support
- Clean, responsive UI with smooth animations

## 🛠️ Tech Stack

**Frontend**

- React + TypeScript (Vite)
- Tailwind CSS
- React Router
- PDF.js for resume preview
- Custom UI components

**Backend / Services**

- Puter SDK (Auth, Storage, KV, AI)
- AI-based resume analysis
- File system and key-value persistence

## ⚙️ How It Works

1. Upload Resume

- Upload a PDF resume along with job title and description.

2. File Processing

- Resume is uploaded to storage
- PDF is converted into an image for preview

3. AI Analysis

- Resume content is analyzed against ATS criteria
- Job description is used for contextual feedback

4. Feedback Generation

- ATS score out of 100
- Section-wise tips and explanations
- Structured JSON response parsed into UI

5. Review & History

- Resume review page shows detailed analysis
- Uploaded resumes appear on the home screen

## 🚀 Current Status

Fully functional end-to-end:

- Resume upload and preview working
- AI feedback generation integrated
- ATS scoring and detailed breakdown visible
- Resume history stored and retrievable

⚠️ Note: AI usage depends on available API balance when using Puter AI services.

## 🌐Live Demo

**Try it live:** https://puter.com/app/ai-ResuScanner-hk

## 📦 Deployment

- Frontend: Deployed using Puter App Hosting
- Build Output: Vite dist/ folder
- Environment: Client-side app with cloud-backed services

## 🧪 Known Limitations

- AI analysis depends on available service credits
- Resume parsing quality depends on PDF formatting
- Currently optimized for single-page resumes

## 📄 License

This project is licensed under the MIT License.
Feel free to use, modify, and build upon it.

## 🙌 Acknowledgments

- PDF rendering powered by PDF.js
- UI styling with Tailwind CSS
- Icons and assets from open-source libraries
- AI-driven insights inspired by modern ATS systems

## Author

**Harsh Kotwal**

- GitHub: https://github.com/HarshKotwal
- LinkedIn: https://www.linkedin.com/in/harshkotwal07/
