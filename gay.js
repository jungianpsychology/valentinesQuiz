body {
    font-family: 'Arial', sans-serif;
    text-align: center;
    background-color: #ffccd5;
    color: #800020;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

.quiz-container {
    max-width: 600px;
    margin: 50px auto;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border: 3px solid #ff69b4;
    position: relative;
}

h2, h3 {
    color: #d63384;
    font-family: 'Courier New', Courier, monospace;
}

button {
    background: #ff69b4;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    transition: background 0.3s;
}

button:hover {
    background: #e60073;
}

label {
    font-weight: bold;
}

input[type="radio"] {
    margin: 5px;
}

.result {
    display: none;
    padding: 20px;
    background: #fff0f6;
    border: 2px solid #ff69b4;
    border-radius: 10px;
    margin-top: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

ul li {
    background: #ffb3c1;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    font-weight: bold;
}

a {
    color: #e60073;
    font-weight: bold;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

@keyframes floatingHearts {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
}

.heart {
    position: absolute;
    bottom: 0;
    width: 20px;
    height: 20px;
    background-color: red;
    clip-path: polygon(50% 0%, 100% 30%, 75% 100%, 50% 80%, 25% 100%, 0% 30%);
    animation: floatingHearts 5s infinite linear;
}

@keyframes rotatingCogs {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.cog {
    position: absolute;
    width: 40px;
    height: 40px;
    background: gray;
    clip-path: polygon(50% 0%, 65% 15%, 100% 10%, 90% 50%, 100% 90%, 65% 85%, 50% 100%, 35% 85%, 0% 90%, 10% 50%, 0% 10%, 35% 15%);
    animation: rotatingCogs 4s infinite linear;
}

.result img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: auto;
}
