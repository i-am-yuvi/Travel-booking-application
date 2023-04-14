package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/i-am-yuvi/tbnh/authentication/database"
	"github.com/i-am-yuvi/tbnh/authentication/routes"
)

func main() {

	app := fiber.New()

	database.Connect()

	routes.Setup(app)

	app.Listen(":8000")
}
