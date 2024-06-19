import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3001;

// Set view engine
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

let posts = [
    {
        id: 1,
        title: 'Exploring the Latest in Machine Learning',
        summary: 'A dive into the newest developments and breakthroughs in machine learning.',
        content: `
        <p>Machine learning is evolving rapidly with new algorithms and techniques being developed. Here are some key advancements:</p>
        <ul>
            <li><strong>Deep Learning Models:</strong> These models are inspired by the structure and function of the brain, namely neural networks.</li>
            <li><strong>Reinforcement Learning:</strong> This type of machine learning involves training models to make sequences of decisions by rewarding them for desired behaviors.</li>
            <li><strong>Generative Adversarial Networks (GANs):</strong> GANs consist of two neural networks, one generating data and the other evaluating it, to produce high-quality outputs.</li>
        </ul>
        <p>These innovations are pushing the boundaries of what machines can learn and accomplish.</p>

        <p>As researchers continue to explore these areas, the potential applications of machine learning are limitless, from healthcare to finance, and beyond.</p>
    `,
        image: '/images/post1.jpeg',
        author: 'Emily Watson',
        date: '2023-05-15'
    },
    {
        id: 2,
        title: 'The Rise of Quantum Computing',
        summary: 'Understanding how quantum computing is set to change the world as we know it.',
        content: `
        <p>Quantum computing is a game-changer in the field of technology. Unlike classical computers, quantum computers use qubits that can exist in multiple states simultaneously.</p>
        <h2>Key Concepts</h2>
        <p>Here are some important concepts in quantum computing:</p>
        <ol>
            <li><strong>Superposition:</strong> Quantum bits (qubits) can represent both 0 and 1 at the same time.</li>
            <li><strong>Entanglement:</strong> Qubits can be entangled such that the state of one qubit is dependent on the state of another, no matter the distance between them.</li>
            <li><strong>Quantum Gates:</strong> These are the building blocks of quantum circuits, manipulating qubits in ways that are fundamentally different from classical logic gates.</li>
        </ol>
        <p>These principles enable quantum computers to solve complex problems much faster than classical computers. This could revolutionize fields such as cryptography, material science, and complex system simulations.</p>
        <a href="https://www.mckinsey.com/featured-insights/the-rise-of-quantum-computing" target="_blank">Read more about Quantum Computing</a>
    `,
        image: '/images/post2.jpg',
        author: 'David Lee',
        date: '2023-05-10'
    },
    {
        id: 3,
        title: '5G Technology: What You Need to Know',
        summary: 'A comprehensive guide to 5G technology and its potential impact on various industries.',
        content: `
        <p>5G technology is the fifth generation of wireless technology, promising faster speeds, lower latency, and more reliable connections. Here are the key benefits:</p>
        <ul>
            <li><strong>Enhanced Mobile Broadband:</strong> 5G provides significantly faster data speeds compared to 4G, supporting more connected devices.</li>
            <li><strong>Ultra-Reliable Low Latency Communication (URLLC):</strong> Critical for applications requiring real-time communication, such as autonomous vehicles and remote surgery.</li>
            <li><strong>Massive Machine-Type Communication (mMTC):</strong> Enabling the Internet of Things (IoT) by connecting a vast number of devices efficiently.</li>
        </ul>
        <p>The rollout of 5G is expected to transform industries, including healthcare, transportation, and entertainment, by enabling new applications and services.</p>
        
    `,
        image: '/images/post3.jpeg',
        author: 'Sophia Brown',
        date: '2023-04-25'
    },
    {
        id: 4,
        title: 'The Evolution of Cybersecurity',
        summary: 'How cybersecurity measures are evolving to combat new threats in the digital age.',
        content: `
        <p>As digital technologies advance, so do the threats that target them. Cybersecurity is continually evolving to protect against these threats. Here are some trends:</p>
        <ul>
            <li><strong>AI and Machine Learning:</strong> These technologies are being used to detect and respond to threats more quickly and accurately.</li>
            <li><strong>Zero Trust Architecture:</strong> This approach requires strict identity verification for every person and device trying to access resources on a network, regardless of whether they are inside or outside the network perimeter.</li>
            <li><strong>Quantum Cryptography:</strong> Leveraging principles of quantum mechanics to create secure communication channels that are theoretically immune to hacking.</li>
        </ul>
        <p>These measures are crucial in protecting sensitive data and maintaining the integrity of digital systems in an increasingly connected world.</p>
        
    `,
        image: '/images/post4.jpeg',
        author: 'Michael Johnson',
        date: '2023-04-15'
    },
    {
        id: 5,
        title: 'Cloud Computing: Trends and Predictions',
        summary: 'Examining the current trends in cloud computing and what the future holds.',
        content: `
            <p>Cloud computing continues to evolve, providing scalable and flexible solutions for businesses of all sizes. Here are some current trends:</p>
            <ul>
                <li><strong>Multi-Cloud Strategies:</strong> Businesses are increasingly using multiple cloud providers to avoid vendor lock-in and increase resilience.</li>
                <li><strong>Serverless Computing:</strong> This model allows developers to focus on code while the cloud provider manages the infrastructure.</li>
                <li><strong>Edge Computing:</strong> Bringing computation and data storage closer to the location where it is needed to improve response times and save bandwidth.</li>
            </ul>
            <p>These trends indicate a shift towards more distributed and efficient computing models, which will continue to shape the future of cloud computing.</p>
            
        `,
        image: '/images/post5.jpg',
        author: 'Laura Smith',
        date: '2023-04-01'
    }
];

let featuredPosts = [
    {
        id: 6,
        title: 'The Future of Artificial Intelligence',
        summary: 'An in-depth look at how AI is shaping the future of technology.',
        content: `
        <p>Artificial Intelligence (AI) is rapidly advancing and has the potential to transform many aspects of our lives. Key areas of impact include:</p>
        <ul>
            <li><strong>Healthcare:</strong> AI is being used to improve diagnostics, personalize treatments, and streamline administrative processes.</li>
            <li><strong>Transportation:</strong> Autonomous vehicles and smart traffic management systems are making transportation safer and more efficient.</li>
            <li><strong>Workforce Automation:</strong> AI is automating routine tasks, allowing workers to focus on more complex and creative aspects of their jobs.</li>
        </ul>
        <p>As AI continues to evolve, it will undoubtedly bring about significant changes in various sectors, driving innovation and efficiency.</p>
        
    `,
        image: '/images/featured1.jpeg',
        author: 'Jane Doe',
        date: '2023-05-01'
    },
    {
        id: 7,
        title: 'Top 10 Gadgets of 2023',
        summary: 'A comprehensive review of the top 10 gadgets released in 2023.',
        content: `
            <p>2023 has been an exciting year for gadget enthusiasts. Here are the top 10 gadgets that have stood out:</p>
            <ol>
                <li><strong>Smartphone X:</strong> The latest in smartphone technology, featuring a foldable display and advanced AI capabilities.</li>
                <li><strong>VR Headset Pro:</strong> Offering an immersive virtual reality experience with high-resolution displays and ergonomic design.</li>
                <li><strong>Smartwatch 5:</strong> Packed with health tracking features, this smartwatch is a must-have for fitness enthusiasts.</li>
                <li><strong>Wireless Earbuds Plus:</strong> Delivering exceptional sound quality and noise-cancellation in a compact design.</li>
                <li><strong>Smart Home Hub:</strong> Centralizes control of all your smart home devices, making home automation seamless.</li>
                <li><strong>Electric Scooter 2023:</strong> An eco-friendly and convenient mode of urban transportation.</li>
                <li><strong>4K Drone:</strong> Captures stunning aerial footage with its advanced camera and stabilization features.</li>
                <li><strong>Portable Projector:</strong> Turns any surface into a big screen, perfect for movie nights and presentations.</li>
                <li><strong>Gaming Console Z:</strong> The ultimate gaming experience with cutting-edge graphics and fast loading times.</li>
                <li><strong>Fitness Tracker Pro:</strong> Monitors a wide range of health metrics, helping you stay on top of your fitness goals.</li>
            </ol>
            <p>These gadgets not only showcase the latest technological advancements but also enhance our daily lives in various ways.</p>
            
        `,
        image: '/images/featured2.jpeg',
        author: 'John Smith',
        date: '2023-04-15'
    },
    {
        id: 8,
        title: 'Blockchain Beyond Cryptocurrencies',
        summary: 'Exploring the various applications of blockchain technology in different industries.',
        image: '/images/featured3.jpeg',
        author: 'Alice Johnson',
        date: '2023-03-20',
        content: `
            <p>Blockchain technology, initially popularized by cryptocurrencies like Bitcoin, has far-reaching applications beyond digital currencies. Here are some key areas where blockchain is making an impact:</p>
            <ul>
                <li><strong>Supply Chain Management:</strong> Blockchain enables transparent and traceable supply chains, helping to reduce fraud, counterfeiting, and inefficiencies.</li>
                <li><strong>Healthcare:</strong> Blockchain can securely store and share patient records, ensuring data integrity and enabling interoperability between healthcare providers.</li>
                <li><strong>Real Estate:</strong> Blockchain-based smart contracts streamline property transactions, reducing paperwork and minimizing the risk of fraud.</li>
                <li><strong>Voting Systems:</strong> Blockchain offers a secure and transparent way to conduct elections, ensuring the integrity of the voting process.</li>
            </ul>
            <p>As blockchain technology matures, its potential to revolutionize various industries continues to grow, promising greater efficiency, transparency, and trust.</p>
        `
    },
    
    {
        id: 9,
        title: 'Virtual Reality: The Next Big Thing?',
        summary: 'Analyzing the potential of virtual reality to revolutionize the way we interact with digital content.',
        image: '/images/featured4.jpeg',
        author: 'Robert Brown',
        date: '2023-02-10',
        content: `
            <p>Virtual reality (VR) has the potential to revolutionize the way we interact with digital content, creating immersive and engaging experiences. Here are some key areas where VR is making an impact:</p>
            <ul>
                <li><strong>Gaming:</strong> VR gaming transports players into virtual worlds, offering unparalleled immersion and interactivity.</li>
                <li><strong>Training and Simulation:</strong> VR enables realistic training simulations for industries such as aviation, healthcare, and military, allowing learners to practice in safe and controlled environments.</li>
                <li><strong>Virtual Tours:</strong> VR provides virtual tours of real-world locations, historical sites, and architectural marvels, offering a new way to explore the world from the comfort of home.</li>
                <li><strong>Remote Collaboration:</strong> VR facilitates virtual meetings and collaboration, allowing teams to work together in virtual environments regardless of their physical location.</li>
            </ul>
            <p>As VR technology becomes more accessible and affordable, its potential to transform various industries and everyday experiences becomes increasingly evident, making it one of the most promising technologies of the future.</p>
        `
    }    

];

// Home route
app.get('/', (req, res) => {
    res.render('index', { pageTitle: 'Home', posts: posts, featuredPosts: featuredPosts });
});

// Create post route
app.get('/create', (req, res) => {
    res.render('create');
});

// Post creation handler
app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    if (title && content) {
        const newPost = {
            id: posts.length + 1,
            title,
            summary: content.substring(0, 100), // Assuming the first 100 characters as summary
            content, // Store full content
            image: '/images/default.jpg', // Default image for new posts
            author: 'Anonymous', // Default author
            date: new Date().toISOString().split('T')[0] // Current date
        };
        posts.push(newPost);
    }
    res.redirect('/');
});

// Route to display individual post details
app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(post => post.id === postId) || featuredPosts.find(post => post.id === postId);
    if (post) {
        res.render('post', { pageTitle: post.title, post });
    } else {
        res.status(404).send('Post not found');
    }
});

// Edit post route
app.get('/posts/:id/edit', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(post => post.id === postId);
    if (post) {
        res.render('update', { pageTitle: 'Edit Post', post });
    } else {
        res.status(404).send('Post not found');
    }
});

// Update post handler
app.post('/posts/:id/edit', (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, content } = req.body;
    const postIndex = posts.findIndex(post => post.id === postId);
    if (postIndex !== -1) {
        posts[postIndex].title = title;
        posts[postIndex].summary = content.substring(0, 100); // Update summary
        posts[postIndex].content = content; // Update content as well
        res.redirect('/');
    } else {
        res.status(404).send('Post not found');
    }
});

// Delete post route
app.get('/posts/:id/delete', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(post => post.id === postId);
    if (post) {
        res.render('delete', { pageTitle: 'Delete Post', post });
    } else {
        res.status(404).send('Post not found');
    }
});

// Delete post handler
app.post('/posts/:id/delete', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(post => post.id === postId);
    if (postIndex !== -1) {
        posts.splice(postIndex, 1); // Remove post from array
        res.redirect('/');
    } else {
        res.status(404).send('Post not found');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
