const express = require('express');
const bookRouter = express.Router();
const bookService = require('../services/goodreadsService');
const bookController = require('../controllers/bookController');

function router(nav) {
    const {getIndex,getById}= bookController(bookService, nav);
    bookRouter.use((req, res, next)=>{
        if(req.user){
            next();
        }else{
            res.redirect('/');
        }
    });
    bookRouter.route('/')
        .get(getIndex);

    bookRouter.route('/:id')
        .get(getById);
    return bookRouter;
}
module.exports = router;