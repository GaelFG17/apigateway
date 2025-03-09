const logger = (req, res, next) => {
    const fecha = new Date().toISOString();
    const method = req.method;
    const url = req.originalUrl;
    const cuerpo = req.body

    console.log(`[${fecha}] ${method} ${url} ${cuerpo}`);
    
    next();
}

module.exports = {logger};