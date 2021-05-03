import React from 'react'
import './searcher.css';

function Searcher() {
  return (
    <div class="searcher">
            <div class="searcher-container">
                <h2 class="heading-searcher">There are many reasons to get down</h2>
                <p class="p-searcher">There are many reasons to get<br />down and start to get depressed
                    about
                    your
                    situation.</p>
                <form class="formInput">
                    <input type="text" placeholder="Your Email" class="searcher-input" />
                    <button class="searcher-btn">Send</button>
                </form>
                <p class="p2-searcher">No spam. Only releases, updates and discounts</p>
            </div>
        </div>
  );
}
export default Searcher;