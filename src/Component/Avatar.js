

const Avatar = (props) => {
    const { link, alt } = props;

    return <div style={{
        border: "2px solid black",
        borderRadius: "50%", width: "100px",
        height: "100px", overflow: "hidden"
    }}>

        <img style={{ height: "100%" }}
            src={link}
            alt={alt}
        />
    </div>
}
export default Avatar;