const { Flights } = require('../models/Flight')
const { v4: uuid } = require('uuid')

//get all user
exports.getFlights = async (req, res) => {
    try {
        const flights = Flights
        res.json({
            message: "flights ",
            flights: flights,
        })
    } catch (err) {
        res.json({ message: err.message})
    }
}
// get single user
exports.getFlight = async (req, res) => {
    try {
        let id = req.params.id
        const flight = Flights.find((flight) => flight.id === id)
        res.json({
            message: "flight found",
            flight,
        })
    } catch (err) {
        
    }
}


//create new flight
exports.createFlight = async (req, res) => {
    try {
        const { title, time, price, date } = await req.body;
        const newFlight = {
            id: uuid(),
            title,
            time,
            price,
            date,
        }
        Flights.push(newFlight);
        res.json({
            message: "flight created",
            newFlight,
        })
    } catch (err) {
        res.json({message: err.message})
    }
}
//update/edit flight
exports.updateFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id)
        const { title, time, price, date } = await req.body;
        flight.title = title;
        flight.time = time;
        flight.price = price;
        flight.date = date;   
        res.json({
            message: "flight updated",
            flight,
        })
    } catch (err) {
        res.json({message: err.message})
    }
    
        
}

// delete flight
exports.deleteFlight = async(req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id)
        Flights.splice(Flights.indexOf(flight), 1)
        res.json({
            message: "flight cancelled",
            flight,
        })
    } catch (err) {
        res.json({message: err.message})
    }
}



