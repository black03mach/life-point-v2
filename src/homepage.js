import React from 'react';
import "./homepage.css";



function Homepage() {
    return (
        <div>
            <h2>Please click on the links below to log your progress:</h2>
            <div class="container">
                <div class="row justify-content-center">
                    <div class=".col-12 .col-md-8">
                        <a href="/members"><button id="button-a" type="button" class="btn btn-outline-info btn-lg"> Daily
                    Entry</button></a>
                    </div>
                </div>
            </div>
            <section id="lotus-button">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class=".col-12 .col-md-8">
                            <a href="/calendar"><button id="button-b" type="button"
                                class="btn btn-outline-info btn-lg">Calendar</button></a>
                        </div>
                        <div class=".col-12 .col-md-8">
                            <a href="/resources"><button id="button-c" type="button"
                                class="btn btn-outline-info btn-lg">Resources</button></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Homepage;