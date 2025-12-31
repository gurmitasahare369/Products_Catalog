# Products Catalog 🛒

A full-stack **MERN** application for managing and viewing products with a clean UI and responsive design.

## 🚀 Live Demo
👉 https://products-catalog-hgmu.onrender.com

---

## 🛠 Tech Stack

**Frontend**
- React
- Vite
- Chakra UI
- Zustand
- React Router

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

**Deployment**
- Render

**Version Control** 
- Git & GitHub

---

## 📂 Project Structure
```
Products-Catalog/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── productController.js
│   ├── models/
│   │   └── productModel.js
│   ├── routes/
│   │   └── productRoute.js
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── pages/
│   │   │   ├── CreatePage.jsx
│   │   │   └── HomePage.jsx
│   │   ├── store/
│   │   │   └── product.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## ✨ Features

- **View Products**: Display a list of all products with their details.
- **Create Product**: Add new products with name, price, and image URL.
- **Update Product**: Edit existing product information.
- **Delete Product**: Remove products from the catalog.
- **Responsive UI**: Built with Chakra UI for a modern, responsive design.
- **State Management**: Uses Zustand for efficient state handling.
- **Deployment**: Single-server deployment (frontend served by backend).


## 🛠 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/gurmitasahare369/Products_Catalog.git
   cd Products_Catalog
   ```

2. **Install dependencies**:
   - For the root project:
     ```bash
     npm install
     ```

3. **Set up environment variables**:
   - Create a `.env` file in the `backend` directory.
   - Add your MongoDB connection string:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=3000  
     ```
   > Make sure MongoDB is running locally or a cloud MongoDB URI (e.g., MongoDB Atlas) is provided.

4. **Build the project**:
   ```bash
   npm run build
   ```

## 🚀 Usage
1. **Start the application**:
   ```bash
   npm start
   ```
   This will start the backend server and serve the frontend.

2. **Access the application**:
   - Open your browser and go to `http://localhost:3000` (or the port specified in your `.env`).

3. **API Endpoints**:
   - `GET /api/products`: Fetch all products.
   - `POST /api/products`: Create a new product (requires `name`, `price`, `image` in request body).
   - `PUT /api/products/:id`: Update a product by ID.
   - `DELETE /api/products/:id`: Delete a product by ID.


