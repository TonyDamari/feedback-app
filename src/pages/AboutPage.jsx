import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

const AboutPage = () => {
    return (
        <Card>
            <div className="about">
                <h1>About This Project</h1>
                <p>
                    This is a react project to leave feedback for a product or
                    service
                </p>
                <small>Version 1.0.0</small>

                <p>
                    <Link to="/">Back To Home</Link>
                </p>
            </div>
        </Card>
    );
};

export default AboutPage;