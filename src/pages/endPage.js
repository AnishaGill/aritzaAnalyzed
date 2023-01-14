import React from 'react';
import yourAnalysis from "../imgs/yourAnalysis.png"
import "./endPage.css";

export const EndPage = () => {
    return (
        <section>
            <h1 className="firstTextEnd">Liked your report?</h1>
            <div className="secondTextEnd"> <a href={yourAnalysis} target="_blank"  src="../imgs/yourAnalysis.pngç">so will your friends</a> </div>
            <div className="end"></div>
            <div className="logo6"></div>
        </section>
    );
}