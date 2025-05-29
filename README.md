
# Analytics Dashboard

A comprehensive, feature-rich analytics dashboard built with React, TypeScript, and modern web technologies. This dashboard provides real-time data visualization for weather, news, and financial information with advanced animations and responsive design.

## 🚀 Features

### Core Functionality
- **Real-time Data Integration**: Weather, News, and Finance APIs
- **Interactive Charts**: Dynamic data visualization with Recharts
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Seamless theme switching with persistence
- **State Management**: Redux Toolkit for complex state handling
- **Advanced Animations**: Smooth transitions with Framer Motion
- **Component Library**: Built with shadcn/ui components

### Dashboard Sections
- **Weather Widget**: Current conditions and 7-day forecast
- **News Feed**: Latest headlines with category filtering
- **Stock Market**: Real-time stock data with interactive charts
- **Statistics Overview**: Key performance metrics and trends

### User Experience
- **Responsive Layout**: Adapts to all screen sizes
- **Collapsible Sidebar**: Space-efficient navigation
- **Search Functionality**: Global dashboard search
- **Notifications System**: Real-time alerts and updates
- **Loading States**: Skeleton screens and shimmer effects

## 🛠 Technologies Used

### Frontend Framework
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Strict type checking for enhanced development
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Framer Motion** - Advanced animations and transitions
- **Lucide React** - Beautiful icon library

### State Management
- **Redux Toolkit** - Efficient state management
- **React Redux** - React bindings for Redux

### Data Visualization
- **Recharts** - Composable charting library
- **React Beautiful DnD** - Drag and drop functionality

### Development Tools
- **ESLint** - Code linting and quality
- **TypeScript** - Static type checking

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/analytics-dashboard.git
cd analytics-dashboard
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Environment Variables**
Create a `.env` file in the root directory:
```env
# Weather API (OpenWeatherMap)
VITE_WEATHER_API_KEY=your_openweather_api_key

# News API
VITE_NEWS_API_KEY=your_news_api_key

# Finance API (Alpha Vantage)
VITE_FINANCE_API_KEY=your_alpha_vantage_api_key
```

4. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to `http://localhost:5173`

## 🔧 Configuration

### API Setup

#### Weather API (OpenWeatherMap)
1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate an API key
4. Add to your `.env` file as `VITE_WEATHER_API_KEY`

#### News API
1. Visit [NewsAPI](https://newsapi.org/)
2. Register for a free account
3. Get your API key
4. Add to your `.env` file as `VITE_NEWS_API_KEY`

#### Finance API (Alpha Vantage)
1. Visit [Alpha Vantage](https://www.alphavantage.co/)
2. Get your free API key
3. Add to your `.env` file as `VITE_FINANCE_API_KEY`

### Customization

#### Theme Configuration
The dashboard supports both light and dark themes. Customize colors in `src/index.css`:

```css
:root {
  --primary: your-primary-color;
  --secondary: your-secondary-color;
  /* Add more custom properties */
}
```

#### Widget Configuration
Add or modify widgets in `src/components/Dashboard/DashboardGrid.tsx`

## 🏗 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Dashboard/       # Dashboard-specific components
│   ├── Layout/          # Layout components (Header, Sidebar)
│   └── ui/              # shadcn/ui components
├── hooks/               # Custom React hooks
├── pages/               # Application pages
├── store/               # Redux store configuration
│   └── slices/          # Redux slices
├── styles/              # Global styles
└── utils/               # Utility functions
```

## 🎯 Usage

### Dashboard Navigation
- Use the sidebar to navigate between different sections
- Toggle sidebar visibility with the menu button
- Search functionality available in the header

### Data Interaction
- **Weather**: View current conditions and forecasts
- **News**: Filter articles by category, read full articles
- **Finance**: Monitor stock prices and charts
- **Statistics**: Overview of key metrics

### Theme Switching
- Click the sun/moon icon in the header to toggle themes
- Theme preference is automatically saved

## 🚀 Build and Deployment

### Production Build
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

### Deployment Options

#### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

#### Netlify
1. Connect repository to Netlify
2. Set build command to `npm run build`
3. Set publish directory to `dist`
4. Add environment variables

#### Traditional Hosting
1. Run `npm run build`
2. Upload `dist/` folder to your hosting provider
3. Configure server to serve `index.html` for all routes

## 🔒 Security

### Environment Variables
- Never commit `.env` files to version control
- Use different API keys for development and production
- Regularly rotate API keys

### Data Protection
- All API calls are made from the client side
- Sensitive data is not stored in localStorage
- HTTPS is recommended for production deployments

## 🧪 Testing

### Running Tests
```bash
npm run test
# or
yarn test
```

### Test Coverage
```bash
npm run test:coverage
# or
yarn test:coverage
```

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Recharts](https://recharts.org/) for the charting library
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling utilities

## 📞 Support

For support, email support@yourdomain.com or join our Discord server.

## 🗺 Roadmap

- [ ] Real-time notifications
- [ ] User authentication
- [ ] Data export functionality
- [ ] Mobile app version
- [ ] Advanced analytics
- [ ] Custom widget creation

---

Built with ❤️ by [Your Name]
