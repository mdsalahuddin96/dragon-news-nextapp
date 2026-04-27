# 📰 Dragon News

## 📌 Project Overview  
**Dragon News** is a modern news web application built with Next.js. Users can explore dynamic news categories, read full articles, and access protected routes through an authentication system. This project demonstrates real-world full-stack development with modern technologies.

---

## 🚀 Features  

### 🔹 Dynamic News Categories  
- Categories are fetched dynamically from an API  
- Clicking a category loads related news in the main section  

### 🔹 News Details Page  
- Each news item has a **"Read More"** button  
- Clicking it opens a separate page with full news details  

### 🔹 Authentication System  
- Sign In option available in the navbar  
- New users can register using the registration form  
- Fully functional authentication system implemented  

### 🔹 Route Protection  
- Protected routes handled using middleware (proxy)  
- If a user clicks **"Read More"** without Login, they are redirected to the login page  

---

## 🛠️ Technologies Used  
- Next.js (App Router)  
- React.js  
- MongoDB  
- Better Auth  
- HeroUI  
- Tailwind CSS  

---

## ⚙️ Key Concepts Implemented  
- Server Components & Client Components  
- SSR (Server-Side Rendering)  
- CSR (Client-Side Rendering)  
- ISR (Incremental Static Regeneration)  
- Caching  
- Middleware (Route Protection)  
- API Data Fetching  

---

## 🌐 Live Link  
👉 [https://your-live-link.vercel.app](https://dragon-news-nextapp.vercel.app/)  

---

## 📂 Installation & Setup  

```bash
# Clone the repository
git clone [https://github.com/your-username/dragon-news.git](https://github.com/mdsalahuddin96/dragon-news-nextapp)

# Go to project folder
cd dragon-news-nextapp

# Install dependencies
npm install

# Run development server
npm run dev
