

export default function ComponentRenderingButtonEvent(){
    function handleClick() {
        alert('You clicked me!');
    }
    return (
        <>
            <h1> button event handler, note how handleClick is called and NOT handleClick() </h1>
            <button onClick={handleClick}>
                Click me
            </button>
        </>

    );
}


