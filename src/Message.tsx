//PascalCasing
function Message() {
    //JSX: JavaScript XML
    //Equals to: React.createElement("h1", null, "Hello World");
    const name = 'Pedro';

    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello Stranger</h1>;
}

export default Message;