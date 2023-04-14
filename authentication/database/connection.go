package database

import (
	"github.com/i-am-yuvi/tbnh/authentication/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	dsn := "host=localhost user=newuser password=newuser dbname=gorm port=5432 sslmode=disable"

	connection, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Couldn't connect to the Database!")
	}

	DB = connection

	connection.AutoMigrate(&models.User{})
}
