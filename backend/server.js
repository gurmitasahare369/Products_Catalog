import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import productRoutes from './routes/productRoute.js';
// import Product from './models/productModel.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// const __dirname = path.resolve();

app.use(express.json());

app.use('/api/products', productRoutes);

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '/frontend/dist')));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
//     });
// }


// if (process.env.NODE_ENV === 'production') {
    
// app.get(/^(?!\/api).*/, (req, res) => {
    //     res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
    // });
    // }
    
    
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});


app.listen(PORT, () => {
    console.log("Server started at http://localhost:"+PORT);
});


