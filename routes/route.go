package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/i-am-yuvi/tbnh/authentication/controller"
	"github.com/i-am-yuvi/tbnh/database"
)

type Hotel struct {
	ID    uint   `json:"id" gorm:"primary_key"`
	Name  string `json:"name"`
	Price int    `json:"price"`
	Place string `json:"place"`
	Rooms int    `json:"rooms"`
}

func Setup(app *fiber.App) {
	app.Post("/api/register", controller.Register)
	app.Post("/api/hotel", hotelRoute)
}

func hotelRoute(c *fiber.Ctx) error {
	hotel := new(Hotel)
	if err := c.BodyParser(hotel); err != nil {
		return c.Status(400).SendString("Bad request")
	}
	database.DB.Create(&hotel)
	return c.JSON(hotel)
}
