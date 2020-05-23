let utilizatori = [
    {"nume" : "Tudose" , 
    "pre" : "Alexandra" ,
    "email" : "alexandrat12@yahoo.com" , 
    "parola" : "bluesky"
    },
    {
      "nume" : "Grecu" , 
      "pre" : "Marian" ,
      "email" : "marian321@gmail.com" , 
      "parola" : "fortnight2"
    }
  ]

app.post('adauga-utilizator', (req, res) => {
    const userData = req.body;
    utilizatori.push(req.body);
    res.statusCode = 201;
    res.send(utilizatori);
});