const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const feed = [
    {id: 1, userId: 'runabh', title:'accusamus beatae ad facilis cum similique qui sunt', url:'https://via.placeholder.com/600/92c952'},
    {id: 2, userId: 'runabh1', title:'reprehenderit est deserunt velit ipsam', url:'https://via.placeholder.com/600/771796'},
    {id: 3, userId: 'runabh2', title:'officia porro iure quia iusto qui ipsa ut modi', url:'https://via.placeholder.com/600/24f355'},
    {id: 4, userId: 'runabh1', title:'"culpa odio esse rerum omnis laboriosam voluptate repudiandae', url:'https://via.placeholder.com/600/d32776'},
    {id: 5, userId: 'runabh2', title:'natus nisi omnis corporis facere molestiae rerum in', url:'https://via.placeholder.com/600/f66b97'},
    {id: 6, userId: 'runabh1', title:'accusamus ea aliquid et amet sequi nemo', url:'https://via.placeholder.com/600/56a8c2'},
    {id: 7, userId: 'runabh2', title:'officia delectus consequatur vero aut veniam explicabo molestias', url:'https://via.placeholder.com/600/b0f7cc'},
    {id: 8, userId: 'runabh1', title:'aut porro officiis laborum odit ea laudantium corporis', url:'https://via.placeholder.com/600/54176f'},
    {id: 9, userId: 'runabh2', title:'qui eius qui autem sed', url:'https://via.placeholder.com/600/51aa97'},
    {id: 10, userId: 'runabh3', title:'beatae et provident et ut vel', url:'https://via.placeholder.com/600/810b14'},
    {id: 11, userId: 'runabh2', title:'nihil at amet non hic quia qui', url:'https://via.placeholder.com/600/1ee8a4'},
    {id: 12, userId: 'runabh1', title:'mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores1', url:'https://via.placeholder.com/600/66b7d2'},
    {id: 13, userId: 'runabh3', title:'repudiandae iusto deleniti rerum', url:'https://via.placeholder.com/600/197d29'},
    {id: 14, userId: 'runabh4', title:'est necessitatibus architecto ut laborum1', url:'https://via.placeholder.com/600/61a65'},
    {id: 15, userId: 'runabh3', title:'harum dicta similique quis dolore earum ex qui', url:'https://via.placeholder.com/600/f9cee5'},
    {id: 16, userId: 'runabh2', title:'iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt', url:'https://via.placeholder.com/600/fdf73e'},
    {id: 17, userId: 'runabh1', title:'natus doloribus necessitatibus ipsa', url:'https://via.placeholder.com/600/9c184f'},
    {id: 18, userId: 'runabh2', title:'laboriosam odit nam necessitatibus et illum dolores reiciendis', url:'https://via.placeholder.com/600/1fe46f'},
    {id: 19, userId: 'runabh4', title:'perferendis nesciunt eveniet et optio a', url:'https://via.placeholder.com/600/56acb2'},
    {id: 20, userId: 'runabh3', title:'assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error1', url:'https://via.placeholder.com/600/8985dc'}
];

app.get('/api/feed', (req, res) => {
    res.send(feed);
});

app.get('/api/feed/:id', (req, res) => {
    const pics = feed.filter(p => p.userId === req.params.id);
    res.send(pics);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));