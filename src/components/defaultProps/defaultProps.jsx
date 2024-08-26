/** @format */

import PropTypes from "prop-types";

const MyComponent = ({
    title = "Default Title",
    content = "Default Content",
}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
};

MyComponent.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
};

export default MyComponent;
