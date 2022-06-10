const express = require("express");
const app = express();
const port = 3001;
app.use(express.json());
const metricData = [
    {
        'id':1,
        'Tags':['24h Trending','In Temple','Most Popular'],
        'Title':'Meta Trap House',
        'ImgUrl': 'https://i.imgur.com/hMR8nTl.jpg',
        'info': [

            {
                'address': '0x8e29342348' ,
                'userName': 'peterparker' ,
            }
        ],        
    },
    {
        'id':2,
        'Tags':['24h Trending','In Temple','Most Popular'],
        'Title':'Avengers',
        'ImgUrl': 'https://i.imgur.com/X99e6jS.jpg',
        'info': [
            {
                'address': '0x16e29342348' ,
                'userName': 'ironman' ,
            },
            {
                'address': '0x8e29342348' ,
                'userName': 'iamthor' ,
            }
        ],  
    },
    {
        'id':3,
        'Tags':['24h Trending','Most Popular','BAYC'],
        'Title':'The Vincent Van Dough Gallery',
        'ImgUrl': 'https://i.imgur.com/eodVcYw.jpg',
        'info': [
            {
                'address': '0x8e2934832434' ,
                'userName': 'van' ,
            },            
            {
                'address': '0x8e29342348' ,
                'userName': 'vincent' ,
            }
        ],  
    },
    {
        'id':4,
        'Tags':['BAYC','Latest Shows','24h Trending','In Genesis'],
        'Title':'Leaf Village',
        'ImgUrl': 'https://imgur.com/qpRRqyc.jpeg',
        'info': [
            {
                'address': '0x44r2934832434' ,
                'userName': 'naruto' ,
            },   
                     
        ],  
    },
    {
        'id':5,
        'Tags':['BAYC','Latest Shows','In Genesis'],
        'Title':'Teufzer',
        'ImgUrl': 'https://i.imgur.com/VwllAfS.jpg',
        'info': [
            {
                'address': '0x8442934832434' ,
                'userName': 'evan' ,
            },
            
        ],  
    },
    {
        'id':6,
        'Tags':['In Void','Latest Shows','In Genesis'],
        'Title':'Spy X Family',
        'ImgUrl': 'https://i.imgur.com/231DL7H.jpg',
        'info': [
            {
                'address': '0x22e2934832434' ,
                'userName': 'aanya' ,
            },
            {
                'address': '0x8ee29342348' ,
                'userName': 'liod' ,
            },
            {
                'address': '0x55e29342348' ,
                'userName': 'yor' ,
            }
        ],  
    },
    {
        'id':7,
        'Tags':['In Void','Latest Shows','In Genesis'],
        'Title':'One piece',
        'ImgUrl': 'https://i.imgur.com/azSmn1q.jpg',
        'info': [
            {
                'address': '0x8e2934832434' ,
                'userName': 'zoro' ,
            },
           
        ],  
    },
    {
        'id':8,
        'Tags':['In Void','Latest Shows','In Genesis'],
        'Title':'Vinsmoke',
        'ImgUrl': 'https://i.imgur.com/ED5O5Zi.jpg',
        'info': [
            {
                'address': '0x8e2934832434' ,
                'userName': 'sanji' ,
            },
            
        ],  
    },
    {
        'id':9,
        'Tags':['In Void','In Temple'],
        'Title':'Arlong park',
        'ImgUrl': 'https://i.imgur.com/OPjLWi8.jpg',
        'info': [
            {
                'address': '0x8e2934832434' ,
                'userName': 'naami' ,
            },
            
        ],  
    },
    {
        'id':10,
        'Tags':['In Void','In Temple'],
        'Title':'Void century',
        'ImgUrl': 'https://i.imgur.com/xj7RBOq.jpg',
        'info': [
            {
                'address': '0x8e2934832434' ,
                'userName': 'robin' ,
            },
            
        ],  
    },
    {
        'id':11,
        'Tags':['In Void','In Temple'],
        'Title':'Teufzer',
        'ImgUrl': 'https://i.imgur.com/3EohYpq.jpg',
        'info': [
            {
                'address': '0x8e2934832434' ,
                'userName': 'teufzerss' ,
            },
         
        ],  
    },
    {
        'id':12,
        'Tags':['BAYC'],
        'Title':'One punch man',
        'ImgUrl': 'https://i.imgur.com/gjHjrbK.jpg',
        'info': [
            {
                'address': '0x8e2934832434' ,
                'userName': 'saitama' ,
            },
           
        ],  
    },
    {
        'id':13,
        'Tags':['BAYC'],
        'Title':'Solo leveling',
        'ImgUrl': 'https://i.imgur.com/yH7eV36.jpg',
        'info': [
            {
                'address': '0x8e2934832434' ,
                'userName': 'teufzerss' ,
            },
          
        ],  
    },  
    {
        'id':14,
        'Tags':['BAYC'],
        'Title':'Teufzer',
        'ImgUrl': 'https://i.imgur.com/qFMULH2.jpg',
        'info': [
            {
                'address': '0x8e2934832434' ,
                'userName': 'teufzerss' ,
            },
          
        ],  
    },
    {
        'id':15,
        'Tags':['BAYC','24h Trending'],
        'Title':'Teufzer',
        'ImgUrl': 'https://i.imgur.com/Z5ULEBX.jpg',
        'info': [
            {
                'address': '0x8e2934832434' ,
                'userName': 'teufzerss' ,
            },
            
        ],  
    },
    {
        'id':16,
        'Tags':['BAYC','24h Trending'],
        'Title':'Akash Mishra',
        'ImgUrl': 'https://i.imgur.com/gjOxWZq.jpg',
        'info': [
            {
                'address': '0x8e2934832434' ,
                'userName': 'akash1234' ,
            },
          
        ],  
    },
    {
        'id':17,
        'Tags':['BAYC','24h Trending','In Genesis'],
        'Title':'Wano island',
        'ImgUrl': 'https://i.imgur.com/IeiZMYa.jpg',
        'info': [
            {
                'address': '0x8e2934832434' ,
                'userName': 'odinsama' ,
            },
            
        ],  
    },
    {
        'id':18,
        'Tags':['BAYC','24h Trending','In Genesis'],
        'Title':'Teufzer',
        'ImgUrl': 'https://i.imgur.com/Ox06R7e.jpg',
        'info': [
            {
                'address': '0x8e2934832434' ,
                'userName': 'peterparker' ,
            },
            
        ],  
    },
];


app.get("/GetMetricData", async (req, res) => {	
	try {
		res.set('Access-Control-Allow-Origin', '*');
		res.json({metricData});
	} catch (error) {
		console.error(error);
	}
});
app.listen(port,() =>{
    console.log(`Server running at http://:${port}/`);
 });