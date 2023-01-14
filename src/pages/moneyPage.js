import React from "react";
import "./moneyPage.css";

export const MoneyPage = () => {
    return (
        <section>
            <h1 className="firstText">And in total this year, you’ve spent</h1>
            <div className="amt">$683.85</div>
            <div className="charity">With your support, we’ve been able to donate millions to charities <br></br>through our Aritzia Community™ Giving Program,<br></br> which you can read more about <a href="https://www.aritzia.com/en/aritzia/corporate-responsibility/sustainability-communities.html" target="_blank">here</a></div>

            <div className="ts1"></div>
            <div className="ts2"></div>
            <div className="logo5"></div>
        </section>
    );
}