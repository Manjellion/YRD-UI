const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2.5,
            width: '75%',
            marginLeft: 'auto',
            marginRight: 'auto'
        }}
    />
)

export default ColoredLine;