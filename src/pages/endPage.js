import React from 'react';
import yourAnalysis from "../imgs/yourAnalysis.png"
import "./endPage.css";

export const EndPage = () => {
    return (
        <section>
            <h1 className="firstTextEnd">Liked your report?</h1>
            <div className="secondTextEnd">so will your friends</div>
            <div className="thirdTextEnd">share your <a href={yourAnalysis} src="../imgs/yourAnalysis.pngç">Aritzia Analysis</a></div>
            <div className="end"></div>
            <div className="logo6"></div>
        </section>
    );
}