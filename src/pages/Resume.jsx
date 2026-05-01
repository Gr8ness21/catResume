import { Link } from 'react-router-dom'

function Resume() {
    return (
        <>
            <div className="resumeContainer">
                <h1>Resume Component</h1>
                {/* <a href="/">Home</a> */}
                {/* Odd, but can work ^ */}
                <Link to="/">Back to Home Page</Link>
            </div>


        </>
    )
}

export default Resume;