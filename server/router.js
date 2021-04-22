const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs');
})

router.get('/mentions-legales', (req, res) => {
    res.render('mentions-legales');
})

router.get('/donnees-personnelles-et-gestion-des-cookies', (req, res) => {
    res.render('donnees-personnelles-et-gestion-des-cookies')
})

router
    .use((req, res) => {
        res.status(404);
        res.json({
            error: "Page not found"
        });
    });

module.exports = router;