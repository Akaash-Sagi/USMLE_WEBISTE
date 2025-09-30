# USMLE NextGen - AI-Powered Learning Platform 🧠

A comprehensive, AI-driven learning platform designed specifically for USMLE (United States Medical Licensing Examination) preparation across Steps 1, 2 CK, and 3.

## 🚀 Features

### Core Functionality
- **AI Tutor (MedInsight)**: Gemini-powered conversational AI with Socratic questioning
- **Smart Question Bank**: Advanced filtering by USMLE Step, Organ System, and AI-assessed difficulty
- **Spaced Repetition System**: Research-backed flashcard system using SuperMemo algorithm
- **Predictive Analytics**: Performance tracking with exam readiness scoring
- **Google OAuth Authentication**: Secure, fast sign-up and login

### AI-Powered Learning
- **Socratic Hinting**: Guided problem-solving without revealing answers
- **Concept Bridging**: Connect complex medical concepts with analogies
- **Misconception Diagnosis**: Identify and correct underlying misunderstandings
- **Adaptive Remediation**: Personalized lessons based on performance gaps

### Advanced Analytics
- **Readiness Score**: Dynamic exam preparation assessment
- **Performance Tracking**: Detailed analytics by system, subject, and difficulty
- **Weakness Identification**: AI-driven recommendations for focused study
- **Progress Visualization**: Interactive dashboards and progress roadmaps

## 🛠️ Technology Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Radix UI**: Accessible component library
- **Zustand**: Lightweight state management
- **Lucide React**: Beautiful icons

### Backend & Integration
- **FastAPI**: Python backend (planned)
- **PostgreSQL**: Primary database
- **Prisma**: Database ORM
- **NextAuth.js**: Authentication system
- **Google Gemini API**: AI tutoring capabilities

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # User dashboard
│   ├── questions/         # Question bank interface
│   ├── tutor/             # AI tutor interface
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   └── ...                # Feature-specific components
├── lib/                   # Utility functions
├── store/                 # Zustand stores
└── types/                 # TypeScript definitions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database
- Google OAuth credentials
- Gemini API key

### Installation

1. **Clone and install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Copy `.env.local` and configure:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/usmle_platform"
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   GEMINI_API_KEY="your-gemini-api-key"
   ```

3. **Set up database**:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Visit**: http://localhost:3000

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Key Development Guidelines
- Use TypeScript for all new code
- Follow Next.js App Router patterns
- Implement proper error handling
- Ensure mobile-responsive design
- Write comprehensive tests
- Use semantic commit messages

## 🧪 Testing Strategy

### Testing Framework (Planned)
- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: Playwright
- **API Tests**: Supertest
- **E2E Tests**: Cypress

## 📊 Performance Metrics

### Target Metrics
- **Core Web Vitals**: All green scores
- **Load Time**: < 2 seconds
- **Time to Interactive**: < 3 seconds
- **SEO Score**: 95+

## 🔐 Security & Privacy

### Security Measures
- **Authentication**: NextAuth.js with Google OAuth
- **Data Encryption**: All sensitive data encrypted
- **API Security**: Rate limiting and input validation
- **HIPAA Compliance**: Following medical data best practices

## 🚢 Deployment

### Production Deployment (Planned)
- **Frontend**: Vercel
- **Backend**: Railway/Heroku
- **Database**: Supabase/PlanetScale
- **CDN**: Cloudflare

## 📈 Roadmap

### Phase 1 (Current)
- [x] Project setup and core architecture
- [x] Landing page and UI components
- [ ] Authentication system
- [ ] Basic question bank interface

### Phase 2 (Planned)
- [ ] AI tutor integration
- [ ] Spaced repetition system
- [ ] Analytics dashboard
- [ ] Mobile app (React Native)

### Phase 3 (Future)
- [ ] Video explanations
- [ ] Collaborative study features
- [ ] Advanced AI features
- [ ] Multi-language support

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.usmlenextgen.com](https://docs.usmlenextgen.com)
- **Issues**: [GitHub Issues](https://github.com/yourusername/usmle-nextgen/issues)
- **Email**: support@usmlenextgen.com

## 🙏 Acknowledgments

- **Evalio AI**: Design inspiration
- **UWorld**: Question bank format reference
- **Medical education community**: Continuous feedback and support

---

Built with ❤️ for medical students worldwide
