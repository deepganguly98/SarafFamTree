
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
                        title:"Smt.",
                        name:"Ram Kumar Saraf"
                    }
                },
                {
                    collapsable:true,
                    text:{
                        title:"Smt.",
                        name:"Baccha Ram Parasrampuria"
                    },
                },
				{
                    collapsable:true,
					text: {
                        title:"Banarasi Devi",
                        name:"Gajanand Jalan"
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
                                
                                title:"Giniya Devi",
                                name:"Budhar Mal Saraogi",
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
                                
                                title:"Gayatri Devi",
                                name:"Kishan Lal Kakrania"
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
                    collapsable:true,
                        text: {
                            title:"Kamala Devi",
                            name:"Durga Dutt Saraf (Maniya Devi - first wife)"
                    
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
                                title:"Parmeswari Devi",
                                name:"Gouri Sankar Maskara -(Bagawati Devi -second wife)"
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
                        title:"Hardei Devi",
                        name:"Beshesar lal Poddar  (Mahadei Devi -second wife)"
                    },
                    children: [
                        {
                            collapsable:true,
                            text:{
                                title:"Sohan lal Poddar (Adopted)"
                            },
                            children:[
                                {
                                    collapsable:true,
                                    text:{
                                        
                                        title:"Shanti Devi (First Wife)"
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
                                        
                                        title:"Savitri Devi (Second Wife)"
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
                        
                    ]
                   

                },
                {
                    collapsable:true,
                    text:{
                        title:"Shiv Bux Harlalka",
                        name:"Narayani Devi"
                    },
                    children: [
                        {
                            collapsable:true,
                            text:{
                                title:"Purshottam Harlalka",
                                name:"Raj Kumari"
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

