package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/i-am-yuvi/tbnh/authentication/controller"
)

func Setup(app *fiber.App) {
	app.Post("/api/register", controller.Register)
}
