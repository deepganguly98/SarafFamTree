
    var chart_config = {
        chart: {
            container: "#collapsable-example",

            //animateOnInit: true,
            
            node: {
                //collapsable: true
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }
        },
        nodeStructure: {
            collapsable:true,
			text: {
                title:" Brota Pratap Mal Harlalka"
			},
            children: [
                { 
                    collapsable:true,
					text: {	
						title:"Ram Kumar Saraf"
                    }
                },
                {
                    collapsable:true,
                    text:{
                        title:"Baccha Ram Parasrampuria"
                    },
                },
				{
                    collapsable:true,
					text: {
                        title:"Gajanand Jalan",
                        wife:"Wife - Banarasi Devi"
					},
                    children: [
                        {
                            collapsable:true,
                            text:{
                                title:"Nand Lal Jalan"
                            }  
                        },
                        {
                            collapsable:true,
                            text:{
                                title:"Budhar Mal Saraogi",
                                wife:"Giniya Devi"
                            },
                            children:[
                                {
                                    collapsable:true,
                                    text:{
                                        title:"Ganshyam Saraogi"
                                    }
                                }
                            ]
                        },
                        {
                            collapsable:true,
                            text:{
                                title:"Kishan Lal Kakrania",
                                wife:"Gayatri Devi"
                            },
                            childrenDropLevel:3,
                            children:[
                                {
                                    collapsable:true,
                                    text:{
                                        title:"Arun Kakrania"
                                    }
                                },
                                {
                                    collapsable:true,
                                    text:{
                                        title:"Ajay Kakrania"
                                    }
                                },
                                {
                                    collapsable:true,
                                    text:{
                                        title:"Rajesh Kakrania"
                                    }
                                },
                                {
                                    collapsable:true,
                                    text:{
                                        title:"Saroj",
                                        name:"Mahavir Saraf"
                                    }
                                },
                                {
                                    collapsable:true,
                                    text:{
                                        title:"Sushma",
                                        name:"Sanjay Pansari"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    pseudo: true,
                    children: [
                        {
                            collapsable:true,
                            text:{
                                title:"Durga Dutt Saraf",
                                name:"Maniya Devi (First Wife)"
                            }
                        }
                    ]
                },
                {
                    collapsable:true,
                        text: {
                            title:"Kamala Devi (Second Wife)",
                            name:"Durga Dutt Saraf"
                    
                        },
                        childrenDropLevel: 5,
                        children: [
                        {
                            collapsable:true,
                            text:{
                                title:"Manohari Devi",
                                name:"Satya Narayan Poddar"
                            }
                        },
                        {
                            collapsable:true,
                            text:{
                                title:"Rukmani Devi",
                                name:"Mali Ram Jhunjhunwala"
                            }
                        },
                        {
                            collapsable:true,
                            text:{
                                title:"Ginia Devi",
                                name:"Prem Sukh Bharech"
                            }
                        },
                        {
                            collapsable:true,
                            text:{
                                title:"Parmeswari Devi (First Wife)",
                                name:"Gouri Sankar Maskara"
                            }
                        },
                        {
                            collapsable:true,
                            text:{
                                title:" Shyam Sunder Saraf",
                                name:" Rama Devi"
                            }
                        },
                        {
                            collapsable:true,
                            text:{
                                title:"Radhe Shyam Saraf",
                                name:"Ratana Devi"
                            }
                        },
                        {
                            collapsable:true,
                            text:{
                                title:"Ram Gopal Saraf",
                                name:"Sankuntala Devi"
                            }
                        },
                        {
                            collapsable:true,
                            text:{
                                title:"Rama Devi",
                                name:"Kashi Prashad Chowdhary"
                            }
                        }

                     ]
                },
                
                {
                    collapsable:true,
                    text: {
                        title:"Beshesar lal Poddar"
                    },
                    children:[
                        {
                            collapsable:true,
                            text:{
                                title:"Hardei Devi",
                                name:"(First Wife)"
                            },
                            childrenDropLevel : 0,
                            children: [
                            {
                                collapsable:true,
                                text:{
                                    title:"(Adopted) Sohan lal Poddar"
                                },
                                children:[
                                {
                                    collapsable:true,
                                    text:{
                                        name:"(First Wife)",
                                        title:"Shanti Devi"
                                    },
                                    children:[
                                        {
                                            collapsable:true,
                                            text:{
                                                title:"Hari Poddar"
                                            }
                                        }
                                    ]
                                },
                                {
                                    collapsable:true,
                                    text:{
                                        name:"(Second Wife)",
                                        title:"Savitri Devi"
                                    },
                                    children:[
                                        {
                                            collapsable:true,
                                            text:{
                                                title:"Ram Poddar"
                                            }
                                        }
                                    ]
                                }

                            ]
                        }
                        
                    ],
                    },
                        {
                            collapsable:true,
                            text:{
                                title:"Mahadei Devi",
                                name:"(Second Wife)"

                            }
                        }
                    ]
                   

                },
                {
                    collapsable:true,
                    text:{
                        title:"Shiv Bux Harlalka",
                        wife:"Wife - Narayani Devi"
                    },
                    children: [
                        {
                            collapsable:true,
                            text:{
                                title:"Purshottam Harlalka",
                                wife:"Wife - Raj Kumari"
                            },
                            
                            children : [
                                {
                                    collapsable:true,
                                    text:{
                                        title:"Arvind Harlalka"
                                    }
                                    
                                },
                                {
                                    collapsable:true,
                                    text:{
                                        title:"Alok Harlalka"
                                    }
                                    
                                },
                                {
                                    collapsable:true,
                                    text:{
                                        title:"Sumit Harlalka"
                                    }
                                    
                                }

                            ]
                        }
                    ]

                }
                
            ]
        }
    };

