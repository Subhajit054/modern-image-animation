body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(to bottom, #1e293b, #0f172a);
    color: white;
    text-align: center;
}

.intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #1e293b;
    color: #38bdf8;
}

.intro h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

#reveal-button {
    padding: 10px 20px;
    font-size: 1.2rem;
    color: white;
    background-color: #38bdf8;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

#reveal-button:hover {
    background-color: #0ea5e9;
}

.hidden {
    display: none;
}

.animation-container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

#animation-wrapper {
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.animation-item {
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.animation-item.active {
    opacity: 1;
}
