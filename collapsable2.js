
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
            collapsed:true,
			text: {
                title:" Brota Pratap Mal Harlalka"
			},
            children: [
                { 
                    collapsed:true,
					text: {	
                        title:"Smt.",
                        name:"Ram Kumar Saraf"
                    }
                },
                
				                
                {
                    collapsed:true,
                        text: {
                            title:"Kamala Devi",
                            name:"Durga Dutt Saraf (Maniya Devi - first wife)"
                    
                        },
                        childrenDropLevel: 5,
                        children: [
                        {
                            collapsed:true,
                            text:{
                                title:"Manohari Devi",
                                name:"Satya Narayan Poddar"
                            }
                        },
                        {
                            collapsed:true,
                            text:{
                                title:"Rukmani Devi",
                                name:"Mali Ram Jhunjhunwala"
                            }
                        },
                        {
                            collapsed:true,
                            text:{
                                title:"Ginia Devi",
                                name:"Prem Sukh Bharech"
                            }
                        },
                        {
                            collapsed:true,
                            text:{
                                title:"Parmeswari Devi",
                                name:"Gouri Sankar Maskara -(Bagawati Devi -second wife)"
                            }
                        },
                        {
                            collapsed:true,
                            text:{
                                title:" Shyam Sunder Saraf",
                                name:" Rama Devi"
                            }
                        },
                        {
                            collapsed:true,
                            text:{
                                title:"Radhe Shyam Saraf",
                                name:"Ratana Devi"
                            }
                        },
                        {
                            collapsed:true,
                            text:{
                                title:"Ram Gopal Saraf",
                                name:"Sankuntala Devi"
                            }
                        },
                        {
                            collapsed:true,
                            text:{
                                title:"Rama Devi",
                                name:"Kashi Prashad Chowdhary"
                            }
                        }

                     ]
                },
                {
                    collapsed:true,
					text: {
                        title:"Banarasi Devi",
                        name:"Gajanand Jalan"
					},
                    children: [
                        {
                            collapsed:true,
                            text:{
                                title:"Nand Lal Jalan"
                            }  
                        },
                        {
                            collapsed:true,
                            text:{
                                
                                title:"Giniya Devi",
                                name:"Budhar Mal Saraogi",
                            },
                            children:[
                                {
                                    collapsed:true,
                                    text:{
                                        title:"Ganshyam Saraogi"
                                    }
                                }
                            ]
                        },
                        {
                            collapsed:true,
                            text:{
                                
                                title:"Gayatri Devi",
                                name:"Kishan Lal Kakrania"
                            },
                            childrenDropLevel:3,
                            children:[
                                {
                                    collapsed:true,
                                    text:{
                                        title:"Arun Kakrania"
                                    }
                                },
                                {
                                    collapsed:true,
                                    text:{
                                        title:"Ajay Kakrania"
                                    }
                                },
                                {
                                    collapsed:true,
                                    text:{
                                        title:"Rajesh Kakrania"
                                    }
                                },
                                {
                                    collapsed:true,
                                    text:{
                                        title:"Saroj",
                                        name:"Mahavir Saraf"
                                    }
                                },
                                {
                                    collapsed:true,
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
                    collapsed:true,
                    text:{
                        title:"Smt.",
                        name:"Baccha Ram Parasrampuria"
                    },
                },
                {
                    collapsed:true,
                    text: {
                        title:"Hardei Devi",
                        name:"Beshesar lal Poddar  (Mahadei Devi -second wife)"
                    },
                    children: [
                        {
                            collapsed:true,
                            text:{
                                title:"Sohan lal Poddar (Adopted)"
                            },
                            children:[
                                {
                                    collapsed:true,
                                    text:{
                                        
                                        title:"Shanti Devi (First Wife)"
                                    },
                                    children:[
                                        {
                                            collapsed:true,
                                            text:{
                                                title:"Hari Poddar"
                                            }

                                        }
                                    ]

                                },
                                {
                                    collapsed:true,
                                    text:{
                                        
                                        title:"Savitri Devi (Second Wife)"
                                    },
                                    children:[
                                        {
                                            collapsed:true,
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
                    collapsed:true,
                    text:{
                        title:"Shiv Bux Harlalka",
                        name:"Narayani Devi"
                    },
                    children: [
                        {
                            collapsed:true,
                            text:{
                                title:"Purshottam Harlalka",
                                name:"Raj Kumari"
                            },
                            
                            children : [
                                {
                                    collapsed:true,
                                    text:{
                                        title:"Arvind Harlalka"
                                    }
                                    
                                },
                                {
                                    collapsed:true,
                                    text:{
                                        title:"Alok Harlalka"
                                    }
                                    
                                },
                                {
                                    collapsed:true,
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

