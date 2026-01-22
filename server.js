import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 80;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.post('/api/leads', async (req, res) => {
    try {
        const webhookUrl = process.env.VITE_LEADS_WEBHOOK_URL;
        const user = process.env.VITE_LEADS_WEBHOOK_USER;
        const pass = process.env.VITE_LEADS_WEBHOOK_PASS;

        if (!webhookUrl || !user || !pass) {
            console.error('Missing configuration');
            return res.status(500).json({ error: 'Server configuration error' });
        }

        // Debug logging removed for privacy


        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + Buffer.from(`${user}:${pass}`).toString('base64')
            },
            body: JSON.stringify(req.body),
        });

        // Debug: Log response details
        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));

        if (response.ok) {
            res.status(200).json({ success: true });
        } else {
            console.error('Webhook error:', response.status);
            res.status(500).json({ error: 'Failed to submit lead' });
        }
    } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Serve Static Files (Production)
// In development, Vite handles this. This is for the Docker container.
app.use(express.static(join(__dirname, 'dist')));

// SPA Fallback
app.get(/.*/, (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
