class Test {
    
    render() {
        console.log("blabla");
    }
}

let t;

window.onload = () => {
    t = new Test();
    t.render();
}