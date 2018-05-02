---
title: "About Me"
description: "Sartios software developer from Thessaloniki, Greece"
category: "about"
date: "11/02/2018"
tags:
    - about
---

<style>
.intro-container {
    display: flex;
    justify-content: space-between;
}

.intro-image {
    width: 300px;
    height: 200px;
}
  
.intro-text {
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 45%;
}

.about-cards-container {
    margin-top: 100px;
}

.about-cards { 
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 15px;
}

.about-card {
    width: 45%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.card-title {
    margin-bottom: 12px;
    padding: 10px 30px;
    border-bottom: 1px solid #7F8C8D;
    font-size: 18px;
    color: #ECF0F1;
}

.card-title i {
    margin-right: 5px;
}

.card-content {
    padding: 30px;
}

.card-content div {
    padding-bottom: 5px;
}

.card-content a {
    text-decoration: none;
    color: #3498DB;
}

.card-content a:hover {
    color: #9B59B6;
    transition: color 0.1s ease-in-out;
}

.card-content i {
    margin-right: 5px;
}

.about-tech {
    display: flex;
    justify-content: space-between;
}

.jacksonsPurple {
    background-color: #1F3A93;
}

@media only screen and (max-width: 480px) {
    .intro-image {
        width: 100%;
    }

    .intro-container {
        flex-direction: column;
    }

    .intro-text {
        width: 100%;
    }

    .about-cards {
        flex-direction: column;
        margin-bottom: 0;
    }

    .about-card {
        width: 100%;
        margin-bottom: 15px;
    }
}
</style>

<div class="about-container">
<div class="intro-container">
<img class="intro-image" src="https://semantic-ui.com/images/wireframe/image.png" />
<div class="intro-text">
  <span>Hello I'm Sartios,</span>
  <span>a fullstack software developer from Thessaloniki, Greece.</span>
</div>
</div>

<div class="about-cards-container">
<div class="about-cards">
    <div class="about-card">
        <div class="card-title jacksonsPurple">
            <i class="fas fa-briefcase"></i>
            Profession
        </div>
        <div class="card-content">
            <div>Building Software</div>
            <div>Front End</div>
            <div>Back End</div>
        </div>
    </div>
    <div class="about-card">
        <div class="card-title jacksonsPurple">
            <i class="fas fa-terminal"></i>
            Technologies
        </div>
        <div class="card-content">
            <div class="about-tech"><span>C++</span><span>Learn Code</span></div>
            <div class="about-tech"><span>C#</span><span>Production</span></div>
            <div class="about-tech"><span>Java</span><span>Production</span></div>
            <div class="about-tech"><span>JavaScript</span><span>Production</span></div>
        </div>
    </div>
</div>
<div class="about-cards">
    <div class="about-card">
        <div class="card-title jacksonsPurple">
            <i class="fas fa-code-branch"></i>
            Open Source
        </div>
        <div class="card-content">
            <div>Study Code</div>
            <div>Contribute</div>
            <div>Thinking Way</div>
        </div>
    </div>
    <div class="about-card">
        <div class="card-title jacksonsPurple">
            <i class="fas fa-address-card"></i>
            Links
        </div>
        <div class="card-content">
            <div><a href="https://github.com/sartios" target="_blank"><i class="fab fa-github"></i>GitHub</a></div>
            <div><a href="https://www.linkedin.com/in/sartios/" target="_blank"><i class="fab fa-linkedin-in"></i>LinkedIn</a></div>
            <div><a href="mailto:savramis.sartios@gmail.com"><i class="fas fa-envelope"></i>Email</a></div>
            <div><a href="https://twitter.com/sartios7" target="_blank"><i class="fab fa-twitter"></i>Twitter</a></div>
        </div>
    </div>
</div>
</div>
</div>