/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: #f4f4f9;
    color: #2e2e3e;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
}

/* Header Styling */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a73e8;
}

.logo span {
    color: #ffcb05;
}

nav .nav-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
}

nav .nav-links a {
    text-decoration: none;
    font-weight: 600;
    color: #2e2e3e;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: background 0.3s, color 0.3s;
}

nav .nav-links a:hover {
    background: #1a73e8;
    color: white;
}

/* Section Styling */
main {
    padding-top: 100px; /* To prevent content from being hidden behind the fixed header */
}

.section {
    padding: 4rem 2rem;
    margin: 2rem auto;
    max-width: 800px;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1s ease-out;
}

.section h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #1a73e8;
    font-weight: 700;
}

.section p {
    font-size: 1rem;
    color: #555;
}

/* Footer Styling */
footer {
    background: #1a73e8;
    color: white;
    text-align: center;
    padding: 1rem 0;
    margin-top: 2rem;
    font-size: 0.9rem;
    position: relative;
}

footer p {
    margin: 0;
}

/* Animation */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

