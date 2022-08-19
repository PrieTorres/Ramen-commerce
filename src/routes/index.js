import express from 'express';
import pedidos from './pedidosRoutes.js';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dirName = __dirname.slice(0, -7)


const routes = (app) => {

    app.route('/').get((req, res) => {
        res.status(200).sendFile(path.join(dirName, '/pages/index.html'))
    })
    app.use(
        express.json(),
        express.static(dirName + '/pages/'),
        pedidos
    )

}

export default routes;