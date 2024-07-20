'use client'
import React, { useState, useEffect } from 'react';
import '../../app/globals.css';
import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Page = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Initialize AOS
        AOS.init();

        // Simulate fetching data
        const fetchData = () => {
            const jsonData = [
                {
                    "id": "0001",
                    "type": "donut",
                    "name": "Cake",
                    "ppu": 0.55,
                    "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" },
                                { "id": "1003", "type": "Blueberry" },
                                { "id": "1004", "type": "Devil's Food" }
                            ]
                    },
                    "topping":
                        [
                            { "id": "5001", "type": "None" },
                            { "id": "5002", "type": "Glazed" },
                            { "id": "5005", "type": "Sugar" },
                            { "id": "5007", "type": "Powdered Sugar" },
                            { "id": "5006", "type": "Chocolate with Sprinkles" },
                            { "id": "5003", "type": "Chocolate" },
                            { "id": "5004", "type": "Maple" }
                        ]
                },
                {
                    "id": "0002",
                    "type": "donut",
                    "name": "Raised",
                    "ppu": 0.55,
                    "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" }
                            ]
                    },
                    "topping":
                        [
                            { "id": "5001", "type": "None" },
                            { "id": "5002", "type": "Glazed" },
                            { "id": "5005", "type": "Sugar" },
                            { "id": "5003", "type": "Chocolate" },
                            { "id": "5004", "type": "Maple" }
                        ]
                },
                {
                    "id": "0003",
                    "type": "donut",
                    "name": "Old Fashioned",
                    "ppu": 0.55,
                    "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" }
                            ]
                    },
                    "topping":
                        [
                            { "id": "5001", "type": "None" },
                            { "id": "5002", "type": "Glazed" },
                            { "id": "5003", "type": "Chocolate" },
                            { "id": "5004", "type": "Maple" }
                        ]
                },
                {
                    "id": "0003",
                    "type": "donut",
                    "name": "Old Fashioned",
                    "ppu": 0.55,
                    "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" }
                            ]
                    },
                    "topping":
                        [
                            { "id": "5001", "type": "None" },
                            { "id": "5002", "type": "Glazed" },
                            { "id": "5003", "type": "Chocolate" },
                            { "id": "5004", "type": "Maple" }
                        ]
                }, {
                    "id": "0003",
                    "type": "donut",
                    "name": "Old Fashioned",
                    "ppu": 0.55,
                    "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" }
                            ]
                    },
                    "topping":
                        [
                            { "id": "5001", "type": "None" },
                            { "id": "5002", "type": "Glazed" },
                            { "id": "5003", "type": "Chocolate" },
                            { "id": "5004", "type": "Maple" }
                        ]
                }, {
                    "id": "0003",
                    "type": "donut",
                    "name": "Old Fashioned",
                    "ppu": 0.55,
                    "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" }
                            ]
                    },
                    "topping":
                        [
                            { "id": "5001", "type": "None" },
                            { "id": "5002", "type": "Glazed" },
                            { "id": "5003", "type": "Chocolate" },
                            { "id": "5004", "type": "Maple" }
                        ]
                }, {
                    "id": "0003",
                    "type": "donut",
                    "name": "Old Fashioned",
                    "ppu": 0.55,
                    "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" }
                            ]
                    },
                    "topping":
                        [
                            { "id": "5001", "type": "None" },
                            { "id": "5002", "type": "Glazed" },
                            { "id": "5003", "type": "Chocolate" },
                            { "id": "5004", "type": "Maple" }
                        ]
                }, {
                    "id": "0003",
                    "type": "donut",
                    "name": "Old Fashioned",
                    "ppu": 0.55,
                    "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" }
                            ]
                    },
                    "topping":
                        [
                            { "id": "5001", "type": "None" },
                            { "id": "5002", "type": "Glazed" },
                            { "id": "5003", "type": "Chocolate" },
                            { "id": "5004", "type": "Maple" }
                        ]
                }, {
                    "id": "0003",
                    "type": "donut",
                    "name": "Old Fashioned",
                    "ppu": 0.55,
                    "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" }
                            ]
                    },
                    "topping":
                        [
                            { "id": "5001", "type": "None" },
                            { "id": "5002", "type": "Glazed" },
                            { "id": "5003", "type": "Chocolate" },
                            { "id": "5004", "type": "Maple" }
                        ]
                }, {
                    "id": "0003",
                    "type": "donut",
                    "name": "Old Fashioned",
                    "ppu": 0.55,
                    "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" }
                            ]
                    },
                    "topping":
                        [
                            { "id": "5001", "type": "None" },
                            { "id": "5002", "type": "Glazed" },
                            { "id": "5003", "type": "Chocolate" },
                            { "id": "5004", "type": "Maple" }
                        ]
                }, {
                    "id": "0003",
                    "type": "donut",
                    "name": "Old Fashioned",
                    "ppu": 0.55,
                    "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" }
                            ]
                    },
                    "topping":
                        [
                            { "id": "5001", "type": "None" },
                            { "id": "5002", "type": "Glazed" },
                            { "id": "5003", "type": "Chocolate" },
                            { "id": "5004", "type": "Maple" }
                        ]
                }, {
                    "id": "0003",
                    "type": "donut",
                    "name": "Old Fashioned",
                    "ppu": 0.55,
                    "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" }
                            ]
                    },
                    "topping":
                        [
                            { "id": "5001", "type": "None" },
                            { "id": "5002", "type": "Glazed" },
                            { "id": "5003", "type": "Chocolate" },
                            { "id": "5004", "type": "Maple" }
                        ]
                }, {
                    "id": "0003",
                    "type": "donut",
                    "name": "Old Fashioned",
                    "ppu": 0.55,
                    "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" }
                            ]
                    },
                    "topping":
                        [
                            { "id": "5001", "type": "None" },
                            { "id": "5002", "type": "Glazed" },
                            { "id": "5003", "type": "Chocolate" },
                            { "id": "5004", "type": "Maple" }
                        ]
                }, {
                    "id": "0003",
                    "type": "donut",
                    "name": "Old Fashioned",
                    "ppu": 0.55,
                    "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" }
                            ]
                    },
                    "topping":
                        [
                            { "id": "5001", "type": "None" },
                            { "id": "5002", "type": "Glazed" },
                            { "id": "5003", "type": "Chocolate" },
                            { "id": "5004", "type": "Maple" }
                        ]
                }, {
                    "id": "0003",
                    "type": "donut",
                    "name": "Old Fashioned",
                    "ppu": 0.55,
                    "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" }
                            ]
                    },
                    "topping":
                        [
                            { "id": "5001", "type": "None" },
                            { "id": "5002", "type": "Glazed" },
                            { "id": "5003", "type": "Chocolate" },
                            { "id": "5004", "type": "Maple" }
                        ]
                }, {
                    "id": "0003",
                    "type": "donut",
                    "name": "Old Fashioned",
                    "ppu": 0.55,
                    "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" }
                            ]
                    },
                    "topping":
                        [
                            { "id": "5001", "type": "None" },
                            { "id": "5002", "type": "Glazed" },
                            { "id": "5003", "type": "Chocolate" },
                            { "id": "5004", "type": "Maple" }
                        ]
                }, {
                    "id": "0003",
                    "type": "donut",
                    "name": "Old Fashioned",
                    "ppu": 0.55,
                    "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" }
                            ]
                    },
                    "topping":
                        [
                            { "id": "5001", "type": "None" },
                            { "id": "5002", "type": "Glazed" },
                            { "id": "5003", "type": "Chocolate" },
                            { "id": "5004", "type": "Maple" }
                        ]
                }, {
                    "id": "0003",
                    "type": "donut",
                    "name": "Old Fashioned",
                    "ppu": 0.55,
                    "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" }
                            ]
                    },
                    "topping":
                        [
                            { "id": "5001", "type": "None" },
                            { "id": "5002", "type": "Glazed" },
                            { "id": "5003", "type": "Chocolate" },
                            { "id": "5004", "type": "Maple" }
                        ]
                }, {
                    "id": "0003",
                    "type": "donut",
                    "name": "Old Fashioned",
                    "ppu": 0.55,
                    "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" }
                            ]
                    },
                    "topping":
                        [
                            { "id": "5001", "type": "None" },
                            { "id": "5002", "type": "Glazed" },
                            { "id": "5003", "type": "Chocolate" },
                            { "id": "5004", "type": "Maple" }
                        ]
                }, {
                    "id": "0003",
                    "type": "donut",
                    "name": "Old Fashioned",
                    "ppu": 0.55,
                    "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" }
                            ]
                    },
                    "topping":
                        [
                            { "id": "5001", "type": "None" },
                            { "id": "5002", "type": "Glazed" },
                            { "id": "5003", "type": "Chocolate" },
                            { "id": "5004", "type": "Maple" }
                        ]
                }, {
                    "id": "0003",
                    "type": "donut",
                    "name": "Old Fashioned",
                    "ppu": 0.55,
                    "batters":
                    {
                        "batter":
                            [
                                { "id": "1001", "type": "Regular" },
                                { "id": "1002", "type": "Chocolate" }
                            ]
                    },
                    "topping":
                        [
                            { "id": "5001", "type": "None" },
                            { "id": "5002", "type": "Glazed" },
                            { "id": "5003", "type": "Chocolate" },
                            { "id": "5004", "type": "Maple" }
                        ]
                },
            ];
            setData(jsonData);
        };

        fetchData();
    }, []);

    return (
        <>
            <h1 className='HomePage'>Home_Page</h1>
            <div className='main_container'>
                {data.map(item => (
                    <Card
                        key={item.id}
                        style={{ width: '20rem', marginBottom: '1rem' }}
                        // data-aos="fade-zoom-in"
                        data-aos-offset="200"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        data-aos="fade-up"
                    >
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Type: {item.type}</Card.Subtitle>
                            <Card.Text>
                                Price per unit: ${item.ppu}
                            </Card.Text>
                            <Card.Text>
                                Batters:
                                <ul>
                                    {item.batters.batter.map(batter => (
                                        <li key={batter.id}>{batter.type}</li>
                                    ))}
                                </ul>
                            </Card.Text>
                            <Card.Text>
                                Toppings:
                                <ul>
                                    {item.topping.map(topping => (
                                        <li key={topping.id}>{topping.type}</li>
                                    ))}
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <button>Button</button>



        </>
    );
}

export default Page;
