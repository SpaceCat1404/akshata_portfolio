import { Hono } from "hono";
import { Env } from './core-utils';
export function userRoutes(app: Hono<{ Bindings: Env }>) {
    // Add more routes like this. **DO NOT MODIFY CORS OR OVERRIDE ERROR HANDLERS**
    app.get('/api/test', (c) => c.json({ success: true, data: { name: 'this works' }}));
    // Mock contact form endpoint
    app.post('/api/contact', async (c) => {
        try {
            const body = await c.req.json();
            console.log('Contact form submission:', body);
            // Basic validation
            if (!body.name || !body.email || !body.message) {
                return c.json({ success: false, error: 'Missing required fields.' }, 400);
            }
            // In a real app, you'd send an email or save to a DB here.
            return c.json({ success: true, message: 'Message received!' });
        } catch (error) {
            console.error('Error processing contact form:', error);
            return c.json({ success: false, error: 'Invalid request body.' }, 400);
        }
    });
    // CTF verification endpoint
    app.post('/api/ctf/verify', async (c) => {
        try {
            const { flag } = await c.req.json<{ flag: string }>();
            const correctAnswer = "FLAG{THE_CREATOR_IS_SECRET}"; // Atbash cipher of GSV_XIVZGVI_LBH_HVXIVG
            if (!flag) {
                return c.json({ success: false, error: 'Flag is required.' }, 400);
            }
            if (flag.trim().toUpperCase() === correctAnswer) {
                return c.json({ success: true, message: 'Congratulations, agent! You have decrypted the message. The creator is indeed a secret.' });
            } else {
                return c.json({ success: false, error: 'Incorrect flag. Try again.' }, 400);
            }
        } catch (error) {
            return c.json({ success: false, error: 'Invalid request.' }, 400);
        }
    });
}