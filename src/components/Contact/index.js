import React from "react";

// components
import { Input } from "../Input";

// styles
import './index.css';

export const Contact = () => {
    return (
        <div id="contact" className="contact-grid">
            <h1 id="contact-title">Want a quick consultation?</h1>
            <p>Email Here</p>
            <Input inputId="input-for-email" />
        </div>
    )
}