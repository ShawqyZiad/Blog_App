import { Card } from "react-bootstrap";
import image from "./2263137-0-24139200-1747637392-shutterstock_1361674454-100939444-orig.webp"
import "../App.css"
const Post1 = () => {
    return (
        <Card>
            <Card.Img className="card"
                variant="top"
                src={image}

            />
            <Card.Body>
                <Card.Title>JAVASCRIPT</Card.Title>
                <Card.Text>
                    JavaScript is the world most popular
                    lightweight, interpreted compiled programming
                    language. It is also known as scripting
                    language for web pages. It is well-known for
                    the development of web pages, many non-browser
                    environments also use it. JavaScript can be
                    used for Client-side developments as well as
                    Server-side developments
                </Card.Text>
                <a href="#" className="btn btn-primary">Read More</a>
            </Card.Body>
        </Card>
    );
};

export default Post1;