
console.log("hello");
const parent= document.getElementById("root");
console.dir(parent);
const root=ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style: {color:"cyan"}},"ABES Engineering college");

// const l1=React.createElement("li",{},"orange");
// const l2=React.createElement("li",{},"mango");
// const ul=React.createElement("ul",{style:{backgroundColor:'cyan'}},l1,l2);

// root.render(ul);

//JSX

const h2=<h2>Hello World</h2>
const l1=<li>orange</li>;
const l2=<li>mango</li>;
const ul=<ul style={{color:'red'}}>{l1}{l2}</ul>
const container=(
    <div style={{backgroundColor:'brown'}}>
    <div>
        {h2}
        <div>{ul}</div>
    </div>
    </div>
)
root.render(container);
