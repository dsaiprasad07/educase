# PopX React Application

A modern React application built with TypeScript and Vite, featuring user registration, login, and account management functionality.

## Features

- Welcome page with navigation options
- User registration with form validation
- Login functionality
- Account settings page with profile management
- Responsive mobile-first design
- Modern UI with smooth transitions and hover effects

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router DOM
- React Icons
- CSS-in-JS styling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd educase
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
educase/
├── src/
│   ├── pages/
│   │   ├── Welcome.tsx
│   │   ├── Register.tsx
│   │   ├── Login.tsx
│   │   └── AccountSettings.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── package.json
└── README.md
```

## Development

- The application uses React Router for navigation
- Styling is done using inline styles for better component isolation
- Form validation is implemented on all input fields
- Responsive design ensures proper display on all device sizes

## Deployment

This application is deployed on [platform-name] and can be accessed at [deployment-url]

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
