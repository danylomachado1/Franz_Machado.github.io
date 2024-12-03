/* General Styles */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    background-color: #f9f9f9;
    color: #333;
}

header {
    background: #4CAF50;
    color: white;
    padding: 1rem 0;
    text-align: center;
}

header h1 {
    margin: 0;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
}

nav ul li {
    margin: 0;
}

nav ul li a {
    text-decoration: none;
    color: white;
    font-weight: bold;
}

nav ul li a:hover {
    text-decoration: underline;
}

main {
    padding: 2rem;
    max-width: 800px;
    margin: auto;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
    color: #4CAF50;
    border-bottom: 2px solid #4CAF50;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
}

.tab-content {
    margin-bottom: 2rem;
}

.profile-photo, .research-photo {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1rem 0;
}

footer {
    text-align: center;
    padding: 1rem;
    background: #4CAF50;
    color: white;
    position: relative;
    bottom: 0;
    width: 100%;
}

footer p {
    margin: 0;
}
