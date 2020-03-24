
    var chart_config = {
        chart: {
            container: "#collapsable-example",
            //levelSeparation:    25,
            //siblingSeparation:  70,
            //subTeeSeparation:   70,
            //nodeAlign: "BOTTOM",
            //scrollbar: "fancy",
            //padding: 35,
            
            // connectors: {
            //     type: "curve",
            //     style: {
            //         "stroke-width": 2,
            //         "stroke-linecap": "round",
            //         "stroke": "#ccc"
            //     }
            // },
            //animateOnInit: true,
            
            node: {
                collapsable: true
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }
        },
        nodeStructure: {
            //collapsed:true,
			text: {
				title:"Sedu Mal Tibrewala"
            },
            //collapsed:true,
            children:[
                {
                    text:{
                        title:"Mohan Lal Tibrewala (either son or grand son of Sedu Mal Tibrewala)"
                        
                    },
                    children:[
                        {
                            text:{
                                title:"Kanhaiya Lal Tibrewala"
                            },
                            children:[
                                {
                                    text:{
                                        title:"Bisheshwar Lal Tibrewala ",
                                        name:"Suanti Devi"
                                    },
                                    collapsed:true,
                                    children:[
                                        {
                                            text:{
                                                title:"Madan Lal Tibrewala"
                                            }
                                        },
                                        {
                                            text:{
                                                title:"Kishan Lal Tibrewala"
                                            }
                                        },
                                        {
                                            text:{
                                                title:"Kesori Lal Tibrewala"
                                            },
                                            children:[
                                                {
                                                    text:{
                                                        title:" Naveen Tibrewala"
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            text:{
                                                title:"Purni Devi ",
                                                name:"Babu Lal  Bagaria"
                                            }
                                        },
                                        {
                                            text:{
                                                title:"Mohari Devi ",
                                                name:"Nagar Mal Bagaria"
                                            }
                                        },
                                        {
                                            text:{
                                                title:"Anchi Devi"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    };

