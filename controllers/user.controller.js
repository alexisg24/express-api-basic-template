const { request, response } = require('express')

const usersGet = (req = request, res = response ) =>{
    //readQueryParams
    const { q, nombre, apiKey, page = 1, limit = 10 } = req.query
    res.json({
        message: 'get API - controller',
        q,
        nombre,
        apiKey,
        page,
        limit
    })
  }

const usersPost = (req = request, res = response) =>{
    const { name, age } = req.body;
    res.status(201).json({
        message: 'post API - controller',
        name,
        age
    })
  }

const usersPut = (req = request, res = response) =>{
    const { id } = req.params
    res.status(500).json({
        message: 'put API - controller',
        id
    })
  }

const usersPatch = (req = request, res = response) =>{
    res.json({
        message: 'patch API - controller'
    })
  }

const usersDelete =  (req = request, res = response) =>{
    res.json({
        message: 'delete API - controller'
    })
  }

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}