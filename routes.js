/* eslint-disable new-cap */
/* eslint-disable capitalized-comments */
let router = require('express').Router()

router.get('/', (req, res) => {
	res.render('index')
})

router.get('/about', (req, res) => {
	res.render('about')
})

router.get('/login', (req, res) => {
	res.render('login')
})


// Controllers -----

module.exports = router