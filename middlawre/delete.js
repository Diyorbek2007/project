const express = require('express')
const fs = require('fs')

let toDelete = (req , res , next) => {
    if(req.url == '/delete'){
        fs.unlink(path.join(__dirname , ".." , "images") , (err) => {
            if(err) throw err
            res.redirect('/')
        })
    }else{
        next()
    }
}