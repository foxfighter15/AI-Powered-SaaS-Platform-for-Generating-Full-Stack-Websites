# 🚀 AI Website Builder SaaS

An AI-powered SaaS platform that generates complete, responsive websites from natural language prompts. Users can describe their idea, instantly generate a production-ready website using AI, and deploy it with a single click. The platform follows a modern SaaS architecture with authentication, a credit-based usage system, and secure payment integration.

---

## ✨ Features

- 🤖 Generate complete websites from text prompts using AI
- 🌐 One-click website deployment
- 🔐 Secure user authentication
- 💳 Credit-based usage system
- 💰 Stripe payment integration for purchasing credits
- 📱 Fully responsive and modern UI
- 🎨 Smooth animations with Framer Motion
- ⚡ Fast and scalable REST APIs
- ☁️ Production-ready deployment

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Framer Motion
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### AI
- Google Gemini API

### Authentication
- JWT Authentication

### Payments
- Stripe Checkout
- Stripe Webhooks

### Deployment
- Render

---

## 📂 Project Structure

```text
AI-Website-Builder/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── ...
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── config/
│   └── ...
│
├── README.md
└── package.json
```

---

## 🚀 Key Features

### 🤖 AI Website Generation
Generate responsive websites by simply describing your idea in plain English.

### 💳 Credit-Based SaaS Model
Every website generation consumes credits. Users can purchase additional credits securely.

### 🔐 Authentication
Secure JWT-based authentication with protected routes.

### 🚀 One-Click Deployment
Deploy generated websites directly with a single click.

### 📱 Responsive UI
Modern interface optimized for desktop, tablet, and mobile devices.

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/AI-Website-Builder.git
```

### Install Frontend

```bash
cd client
npm install
npm run dev
```

### Install Backend

```bash
cd ../server
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=8000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

OPENROUTER_API_KEY=your_openrouter_api_key

STRIPE_SECRET_KEY=your_stripe_secret_key

STRIPE_WEBHOOK_SECRET=your_webhook_secret

FRONTEND_URL=http://localhost:5173
```

---

---

## 📈 Future Improvements

- Multiple AI website templates
- Custom domain support
- Team collaboration
- Website editing after generation
- Version history
- Analytics dashboard
- SEO optimization tools
- Custom code editor

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

## 👨‍💻 Author

**Priya Singh**

- GitHub: https://github.com/foxfighter15
- LinkedIn: https://www.linkedin.com/in/priya-singh-1303b5298/

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

Happy Coding! 🚀
