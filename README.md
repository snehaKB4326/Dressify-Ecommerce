# Dressify-Ecommerce 👗

Welcome to Dressify! This is a cool online store built using modern web technologies like React, Vite, and Tailwind CSS. It's made to show off awesome clothes and make shopping super easy and fun for everyone.

[![React](https://img.shields.io/badge/React-v18.2.0-blue)] [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.4.0-cyan)] [![Vite](https://img.shields.io/badge/Vite-v5.0.8-purple)] [![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)] [![License: MIT](https://img.shields.io/badge/License-MIT-orange)]



## 🚀 Description
Dressify-Ecommerce is a React-based e-commerce platform that offers a clean and intuitive interface for users to browse and discover a wide range of fashion products. The application is built with a focus on modern web development practices, leveraging popular libraries and frameworks to deliver a responsive and engaging user experience.



## ✨ Features
*   **Product Catalog:** Browse a diverse collection of products with detailed information.
*   **User Authentication:** Secure login and registration system.
*   **Shopping Cart:** Add items to a cart, manage quantities, and proceed to checkout.
*   **Product Details:** View individual product pages with images and descriptions.
*   **Responsive Design:** Adapts seamlessly to various screen sizes (desktops, tablets, and mobile phones).
*   **Admin Dashboard:** An administrative interface for managing products, orders, customers, and viewing analytics.
*   **Search & Filtering:** Easily find products using search and filter options.
*   **Notifications:** Real-time alerts and preference management.



## 🛠️ Tech Stack
*   **Frontend:** React, React Router DOM, React Icons, Tailwind CSS
*   **Build Tools:** Vite
*   **State Management:** React Context API
*   **Charting:** Chart.js, react-chartjs-2
*   **Animation:** AOS (Animate On Scroll)
*   **Utilities:** Axios (for potential API calls), `react-toastify`



## 🚀 Installation
Follow these steps to set up the project locally:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/snehaKB4326/Dressify-Ecommerce.git
    cd Dressify-Ecommerce
    ```

2.  **Install Dependencies:**
    The project uses npm for package management. Install all dependencies using:
    ```bash
    npm install
    ```

3.  **Run the Development Server:**
    Start the development server to view the application in your browser:
    ```bash
    npm run dev
    ```

    The application will typically be available at `http://localhost:5173` (or another port specified by Vite).



## 📚 Usage
This project serves as a full-fledged e-commerce platform, allowing users to:

*   **Explore Products:** Navigate to the `/collection` page to view all available products. Use filters for categories, availability, and types.
*   **View Product Details:** Click on any product to see its detailed page, including multiple images and descriptions.
*   **Add to Cart:** Add desired items to the shopping cart.
*   **Manage Cart:** Review items in the cart, adjust quantities, and remove items.
*   **User Accounts:** Create an account or log in to manage your profile, orders, and preferences.
*   **Admin Features:** Access the `/dashboard` for an overview of store performance, `/analytics` for detailed metrics, `/customers` to manage users, and `/settings` to configure store and account details.



### Running the Application
After installation, you can run the development server using:

```bash
npm run dev
```

This command starts the Vite development server, providing hot module replacement and other development-friendly features.



### Building for Production
To create a production-ready build:

```bash
npm run build
```

This command compiles and bundles your application for deployment.



## 📂 Project Structure
The project follows a standard React project structure:

```
Dressify-Ecommerce/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/        # Image and static asset imports
│   │   └── assets.js
│   ├── components/    # Reusable UI components
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LatestCollection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductItem.jsx
│   │   ├── SidePanel.jsx
│   │   └── Title.jsx
│   ├── context/       # React Context providers
│   │   └── ShopContext.jsx
│   ├── pages/         # Page-level components
│   │   ├── About.jsx
│   │   ├── Analytics.jsx
│   │   ├── Cart.jsx
│   │   ├── Collection.jsx
│   │   ├── Contact.jsx
│   │   ├── Customers.jsx
│   │   ├── DashBoard.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Notifications.jsx
│   │   ├── Orders.jsx
│   │   ├── PlaceOrder.jsx
│   │   ├── Product.jsx
│   │   └── Settings.jsx
│   ├── App.jsx        # Main application component and routing
│   ├── index.css      # Global CSS styles
│   └── main.jsx       # Application entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```



## 🔗 Important Links
*   **Repository:** [Dressify-Ecommerce](https://snehakb4326.github.io/Dressify-Ecommerce/)