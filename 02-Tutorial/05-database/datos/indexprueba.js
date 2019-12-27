const users=[]
app.post('/users', function (req, res){
    const user= req.body
    users.push({
        name: user.name,
        age: user.age
    })
    res.send('Registrado correctamente')
})