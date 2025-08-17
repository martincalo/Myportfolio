# Martin's Portfolio 🚀

A modern, responsive portfolio website showcasing my professional work and projects. Built with React and featuring a clean, mobile-first design with smooth animations and professional presentation.

## 🌐 Live Demo

**Production Site**: [https://martincalo.com](https://martincalo.com)  
**GitHub Pages**: [https://martincalo.github.io/Myportfolio/](https://martincalo.github.io/Myportfolio/)

## ✨ Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth transitions
- **Project Showcase**: Interactive project cards with detailed descriptions
- **Custom Domain**: Professional domain with SSL certificate
- **Mobile-First**: Perfect mobile experience with proper spacing and layout
- **Fast Loading**: Optimized performance and lightweight assets
- **SEO Optimized**: Proper meta tags and structured data

## 🛠️ Tech Stack

### Frontend
- **React** - Component-based UI library
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Modern JavaScript features
- **HTML5 & CSS3** - Semantic markup and styling

### Backend (Development)
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **OpenAI API** - AI-powered features (development only)

### Tools & Deployment
- **GitHub Pages** - Static site hosting
- **Git** - Version control
- **npm** - Package management

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/martincalo/Myportfolio.git
   cd Myportfolio
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Start the frontend development server**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

4. **Optional: Run backend server (for development features)**
   ```bash
   cd ../backend
   npm install
   
   # Create .env file with your OpenAI API key
   echo "OPENAI_API_KEY=your_api_key_here" > .env
   echo "PORT=5001" >> .env
   
   npm start
   ```
   Backend will run at `http://localhost:5001`

## 📁 Project Structure

```
Myportfolio/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   │   ├── images/          # Project images and logos
│   │   ├── CNAME            # Custom domain configuration
│   │   └── index.html       # Main HTML template
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   │   ├── home/        # Homepage components
│   │   │   └── layout/      # Layout components (Header, Footer, etc.)
│   │   ├── pages/           # Page components
│   │   ├── context/         # React context providers
│   │   ├── hooks/           # Custom React hooks
│   │   └── services/        # API service functions
│   ├── package.json         # Frontend dependencies
│   └── tailwind.config.js   # Tailwind CSS configuration
├── backend/                 # Express backend (development only)
│   ├── server.js           # Express server with API endpoints
│   └── package.json        # Backend dependencies
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🌟 Key Projects Featured

- **MES (Manufacturing Execution System)** - Comprehensive production management solution
- **Enpal Solar Platform** - Renewable energy management system
- **Tesla Integration** - Electric vehicle data visualization
- **Big Data Analytics** - Large-scale data processing solutions

## 📱 Mobile Responsiveness

The portfolio is fully optimized for mobile devices with:
- Responsive image scaling
- Touch-friendly navigation
- Optimized spacing and typography
- Fast loading on mobile networks
- Progressive web app features

## 🚀 Deployment

The site is automatically deployed using GitHub Actions:

1. **Push to main branch** triggers automatic deployment
2. **GitHub Pages** serves the static site
3. **Custom domain** configured via CNAME
4. **SSL certificate** automatically managed

### Manual Deployment
```bash
cd frontend
npm run build
npm run deploy
```

## 🔧 Development Scripts

### Frontend
```bash
npm start          # Start development server
npm run build      # Create production build
npm test           # Run test suite
npm run deploy     # Deploy to GitHub Pages
```

### Backend (Development)
```bash
npm start          # Start Express server
npm run dev        # Start with nodemon (auto-restart)
```

## 🎨 Design Philosophy

- **Minimalist**: Clean, uncluttered design focusing on content
- **Professional**: Business-appropriate color scheme and typography
- **Accessible**: Proper contrast ratios and semantic HTML
- **Performance**: Optimized images and efficient code

## 📈 Performance Optimizations

- Optimized images (WebP format where supported)
- Lazy loading for images
- Minified CSS and JavaScript
- Efficient Tailwind CSS purging
- Compressed assets for faster loading

## 🔒 Security

- Environment variables for sensitive data
- Comprehensive .gitignore for security
- HTTPS enforced on production
- No sensitive data in client-side code

## 📞 Contact

**Martin Calo**  
- **Website**: [https://martincalo.com](https://martincalo.com)
- **LinkedIn**: [Connect with me](https://linkedin.com/in/martincalo)
- **GitHub**: [View my repositories](https://github.com/martincalo)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, I welcome feedback and suggestions! Feel free to:
1. Open an issue for bugs or suggestions
2. Fork the repository for your own use
3. Star the repository if you find it useful

---

**Built with ❤️ by Martin Calo**