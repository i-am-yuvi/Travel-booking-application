package models

type Hotel struct {
	ID    uint   `json:"id" gorm:"primary_key"`
	Name  string `json:"name"`
	Price int    `json:"price"`
	Place string `json:"place"`
	Rooms int    `json:"rooms"`
}
