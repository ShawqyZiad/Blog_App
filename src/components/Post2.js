import { Card } from "react-bootstrap";
import image from "./Coverimag.webp"
import "../App.css"

const Post2 = () => {
    return (
        <Card>
            <Card.Img className="card"
                variant="top"
                src={image}

            />
            <Card.Body>
                <Card.Title>Data Structure</Card.Title>
                <Card.Text>
                    The word Algorithm means “a process
                    or set of rules to be followed in calculations
                    or other problem-solving operations”. Therefore
                    Algorithm refers to a set of rules/instructions
                    that step-by-step define how a work is to be
                    executed upon in order to get the expected
                    results.
                </Card.Text>
                <a href="#" className="btn btn-primary">Read More</a>
            </Card.Body>
        </Card>
    )
}

export default Post2;