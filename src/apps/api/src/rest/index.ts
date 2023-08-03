import express from 'express';

export const app = express.Router();
 
app.get('/', (_, res) => {
    res.send({
        massage: "ok",
        uptime: process.uptime(),
    });
});